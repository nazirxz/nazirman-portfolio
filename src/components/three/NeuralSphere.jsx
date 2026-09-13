import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

const NeuralSphere = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const scene = new THREE.Scene()
    const width = container.clientWidth || 500
    const height = container.clientHeight || 500

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.z = 6.2

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

    const isMobile = window.innerWidth < 768
    const particleCount = isMobile ? 80 : 180
    const maxDistance = isMobile ? 1.05 : 1.15

    const particlesData = []
    const particlePositions = new Float32Array(particleCount * 3)
    const particleColors = new Float32Array(particleCount * 3)

    const radius = 2.2

    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particleCount)
      const theta = Math.sqrt(particleCount * Math.PI) * phi
      const r = radius + (Math.random() - 0.5) * 0.35

      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta)
      const z = r * Math.cos(phi)

      particlePositions[i * 3] = x
      particlePositions[i * 3 + 1] = y
      particlePositions[i * 3 + 2] = z

      particlesData.push({
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.003,
          (Math.random() - 0.5) * 0.003,
          (Math.random() - 0.5) * 0.003
        ),
        basePos: new THREE.Vector3(x, y, z)
      })

      // Light Mode Colors: Crisp Dark Slate + Royal Blue (#2563EB)
      const isBlue = Math.random() < 0.16
      if (isBlue) {
        particleColors[i * 3] = 0.145      // R (#2563EB)
        particleColors[i * 3 + 1] = 0.388  // G
        particleColors[i * 3 + 2] = 0.921  // B
      } else {
        // Deep charcoal slate (0.12 - 0.25)
        const val = 0.12 + Math.random() * 0.15
        particleColors[i * 3] = val
        particleColors[i * 3 + 1] = val + 0.02
        particleColors[i * 3 + 2] = val + 0.05
      }
    }

    const particlesGeo = new THREE.BufferGeometry()
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
    particlesGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3))

    // Crisp circular point texture for Light Mode
    const createCircleTexture = () => {
      const canvas = document.createElement('canvas')
      canvas.width = 32
      canvas.height = 32
      const ctx = canvas.getContext('2d')
      const rad = 16
      const gradient = ctx.createRadialGradient(rad, rad, 0, rad, rad, rad)
      gradient.addColorStop(0, 'rgba(15, 23, 42, 1)')
      gradient.addColorStop(0.7, 'rgba(15, 23, 42, 0.85)')
      gradient.addColorStop(1, 'rgba(15, 23, 42, 0)')
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(rad, rad, rad, 0, Math.PI * 2)
      ctx.fill()
      return new THREE.CanvasTexture(canvas)
    }

    const particlesMat = new THREE.PointsMaterial({
      size: isMobile ? 0.08 : 0.095,
      vertexColors: true,
      map: createCircleTexture(),
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
      opacity: 0.95
    })

    const pointCloud = new THREE.Points(particlesGeo, particlesMat)
    group.add(pointCloud)

    // Dynamic Connecting Lines
    const maxConnections = particleCount * 6
    const linePositions = new Float32Array(maxConnections * 3)
    const lineColors = new Float32Array(maxConnections * 3)

    const linesGeo = new THREE.BufferGeometry()
    linesGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage))
    linesGeo.setAttribute('color', new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage))

    const linesMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      blending: THREE.NormalBlending,
      depthWrite: false,
      opacity: 0.35
    })

    const lineMesh = new THREE.LineSegments(linesGeo, linesMat)
    group.add(lineMesh)

    // Central subtle wireframe core (Royal Blue)
    const coreGeo = new THREE.IcosahedronGeometry(1.2, 1)
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x2563EB,
      wireframe: true,
      transparent: true,
      opacity: 0.12
    })
    const coreMesh = new THREE.Mesh(coreGeo, coreMat)
    group.add(coreMesh)

    // Mouse Tracking with Smooth Lerp
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })

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

      if (!prefersReducedMotion) {
        group.rotation.y += delta * 0.18
        group.rotation.x += delta * 0.08
        coreMesh.rotation.y -= delta * 0.25

        group.position.y = Math.sin(time * 0.8) * 0.1

        targetX = mouseX * 0.4
        targetY = mouseY * 0.3
        group.rotation.y += (targetX - group.rotation.y) * 0.04
        group.rotation.x += (-targetY - group.rotation.x) * 0.04
      }

      let lineIndex = 0
      const pos = particlesGeo.attributes.position.array

      for (let i = 0; i < particleCount; i++) {
        const pData = particlesData[i]
        pos[i * 3] += pData.velocity.x
        pos[i * 3 + 1] += pData.velocity.y
        pos[i * 3 + 2] += pData.velocity.z

        const currDist = Math.sqrt(
          pos[i * 3] ** 2 + pos[i * 3 + 1] ** 2 + pos[i * 3 + 2] ** 2
        )
        if (currDist > radius + 0.5 || currDist < radius - 0.5) {
          pData.velocity.negate()
        }

        for (let j = i + 1; j < particleCount; j++) {
          const dx = pos[i * 3] - pos[j * 3]
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1]
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2]
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (dist < maxDistance && lineIndex < maxConnections - 2) {
            const alpha = 1.0 - dist / maxDistance

            linePositions[lineIndex * 3] = pos[i * 3]
            linePositions[lineIndex * 3 + 1] = pos[i * 3 + 1]
            linePositions[lineIndex * 3 + 2] = pos[i * 3 + 2]

            linePositions[(lineIndex + 1) * 3] = pos[j * 3]
            linePositions[(lineIndex + 1) * 3 + 1] = pos[j * 3 + 1]
            linePositions[(lineIndex + 1) * 3 + 2] = pos[j * 3 + 2]

            // Line Color in Light Mode: Dark Charcoal Slate with subtle blue
            const cAlpha = alpha * 0.45
            lineColors[lineIndex * 3] = 0.15 * cAlpha
            lineColors[lineIndex * 3 + 1] = 0.25 * cAlpha
            lineColors[lineIndex * 3 + 2] = 0.45 * cAlpha

            lineColors[(lineIndex + 1) * 3] = 0.15 * cAlpha
            lineColors[(lineIndex + 1) * 3 + 1] = 0.25 * cAlpha
            lineColors[(lineIndex + 1) * 3 + 2] = 0.45 * cAlpha

            lineIndex += 2
          }
        }
      }

      particlesGeo.attributes.position.needsUpdate = true
      linesGeo.setDrawRange(0, lineIndex)
      linesGeo.attributes.position.needsUpdate = true
      linesGeo.attributes.color.needsUpdate = true

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      resizeObserver.disconnect()

      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement)
      }

      particlesGeo.dispose()
      particlesMat.dispose()
      linesGeo.dispose()
      linesMat.dispose()
      coreGeo.dispose()
      coreMat.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[540px] flex items-center justify-center">
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      <div className="absolute inset-0 pointer-events-none bg-radial from-transparent via-transparent to-[#FAFAFA]/70" />
    </div>
  )
}

export default NeuralSphere
