import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

const NODES_DATA = [
  { id: 'user', name: 'USER', role: 'Human Input & Context', position: [-2.2, 0.4, 0.5] },
  { id: 'agent', name: 'AI AGENT', role: 'LangGraph Orchestrator & Planner', position: [0.0, 0.0, 0.0], isCenter: true },
  { id: 'llm', name: 'LLM', role: 'vLLM / Foundation Models', position: [0.3, 1.8, -0.3] },
  { id: 'tools', name: 'TOOLS', role: 'Code Execution & Sandboxing', position: [-1.4, -1.5, 0.4] },
  { id: 'database', name: 'DATABASE', role: 'Oracle & SQL Server Storage', position: [1.6, -1.3, -0.2] },
  { id: 'knowledge', name: 'KNOWLEDGE', role: 'Milvus Vector Search & RAG', position: [2.0, 1.2, 0.3] },
  { id: 'api', name: 'API', role: 'Enterprise Gateways & RBAC', position: [2.5, -0.2, -0.5] }
]

const CONNECTIONS = [
  ['user', 'agent'],
  ['agent', 'llm'],
  ['agent', 'tools'],
  ['agent', 'database'],
  ['agent', 'knowledge'],
  ['agent', 'api'],
  ['knowledge', 'llm'],
  ['tools', 'database']
]

const NetworkScene = ({ onHoverNode }) => {
  const mountRef = useRef(null)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const width = container.clientWidth || 800
    const height = container.clientHeight || 500

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000)
    camera.position.z = 5.5

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const group = new THREE.Group()
    scene.add(group)

    const nodeMeshes = []
    const raycastTargets = []

    NODES_DATA.forEach((node) => {
      const isCenter = node.isCenter
      const radius = isCenter ? 0.22 : 0.14
      const geo = new THREE.SphereGeometry(radius, 24, 24)
      const mat = new THREE.MeshBasicMaterial({
        color: isCenter ? 0x2563EB : 0x0F172A,
        transparent: true,
        opacity: 0.95
      })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.position.set(...node.position)
      mesh.userData = { ...node, baseScale: 1.0, isCenter }

      const haloGeo = new THREE.SphereGeometry(radius * 1.6, 16, 16)
      const haloMat = new THREE.MeshBasicMaterial({
        color: isCenter ? 0x2563EB : 0x3B82F6,
        wireframe: true,
        transparent: true,
        opacity: 0.2
      })
      const haloMesh = new THREE.Mesh(haloGeo, haloMat)
      mesh.add(haloMesh)

      group.add(mesh)
      nodeMeshes.push(mesh)
      raycastTargets.push(mesh)
    })

    const lineMeshes = []

    CONNECTIONS.forEach(([fromId, toId]) => {
      const fromNode = NODES_DATA.find((n) => n.id === fromId)
      const toNode = NODES_DATA.find((n) => n.id === toId)
      if (!fromNode || !toNode) return

      const points = [
        new THREE.Vector3(...fromNode.position),
        new THREE.Vector3(...toNode.position)
      ]
      const geo = new THREE.BufferGeometry().setFromPoints(points)
      const mat = new THREE.LineBasicMaterial({
        color: fromNode.isCenter || toNode.isCenter ? 0x2563EB : 0x94A3B8,
        transparent: true,
        opacity: 0.45
      })
      const line = new THREE.Line(geo, mat)
      group.add(line)
      lineMeshes.push(line)
    })

    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2(-999, -999)
    let hoveredMesh = null

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect()
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
    }

    const handlePointerLeave = () => {
      mouse.x = -999
      mouse.y = -999
      if (hoveredMesh) {
        hoveredMesh = null
        if (onHoverNode) onHoverNode(null)
      }
    }

    container.addEventListener('pointermove', handlePointerMove)
    container.addEventListener('pointerleave', handlePointerLeave)

    const onResize = () => {
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }

    const resizeObserver = new ResizeObserver(() => onResize())
    resizeObserver.observe(container)

    let animId
    const clock = new THREE.Clock()

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const delta = clock.getDelta()
      const time = clock.getElapsedTime()

      group.rotation.y = Math.sin(time * 0.15) * 0.2
      group.rotation.x = Math.cos(time * 0.12) * 0.15

      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObjects(raycastTargets, false)

      if (intersects.length > 0) {
        const hit = intersects[0].object
        if (hoveredMesh !== hit) {
          hoveredMesh = hit
          if (onHoverNode) onHoverNode(hit.userData)
        }
      } else {
        if (hoveredMesh !== null) {
          hoveredMesh = null
          if (onHoverNode) onHoverNode(null)
        }
      }

      nodeMeshes.forEach((mesh) => {
        const targetScale = hoveredMesh === mesh ? 1.45 : 1.0
        mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1)

        if (mesh.children[0]) {
          mesh.children[0].rotation.y += delta * 0.5
          mesh.children[0].rotation.x += delta * 0.3
        }
      })

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(animId)
      container.removeEventListener('pointermove', handlePointerMove)
      container.removeEventListener('pointerleave', handlePointerLeave)
      resizeObserver.disconnect()

      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement)
      }

      nodeMeshes.forEach((m) => {
        m.geometry.dispose()
        m.material.dispose()
        if (m.children[0]) {
          m.children[0].geometry.dispose()
          m.children[0].material.dispose()
        }
      })
      lineMeshes.forEach((l) => {
        l.geometry.dispose()
        l.material.dispose()
      })
      renderer.dispose()
    }
  }, [onHoverNode])

  return (
    <div className="relative w-full h-[360px] sm:h-[440px] flex items-center justify-center">
      <div ref={mountRef} className="w-full h-full cursor-crosshair" />
    </div>
  )
}

export default NetworkScene
