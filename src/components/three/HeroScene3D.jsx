import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

const HeroScene3D = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    // Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const width = container.clientWidth || 500
    const height = container.clientHeight || 500

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.z = 7

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    container.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0x38bdf8, 2.5, 50)
    pointLight1.position.set(4, 4, 4)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0x34d399, 2.0, 50)
    pointLight2.position.set(-4, -4, 2)
    scene.add(pointLight2)

    // 3D Object Group
    const group = new THREE.Group()
    scene.add(group)

    // 1. Outer Wireframe Geodesic Sphere
    const outerGeo = new THREE.IcosahedronGeometry(2.0, 2)
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      roughness: 0.2,
      metalness: 0.8
    })
    const outerMesh = new THREE.Mesh(outerGeo, outerMat)
    group.add(outerMesh)

    // 2. Inner Crystal Octahedron
    const innerGeo = new THREE.OctahedronGeometry(1.2, 0)
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      roughness: 0.1,
      metalness: 0.9,
      wireframe: false,
      emissive: 0x0284c7,
      emissiveIntensity: 0.2
    })
    const innerMesh = new THREE.Mesh(innerGeo, innerMat)
    group.add(innerMesh)

    // 3. Orbital Ring
    const ringGeo = new THREE.TorusGeometry(2.6, 0.02, 16, 100)
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x34d399,
      transparent: true,
      opacity: 0.4
    })
    const ringMesh = new THREE.Mesh(ringGeo, ringMat)
    ringMesh.rotation.x = Math.PI / 3
    ringMesh.rotation.y = Math.PI / 6
    group.add(ringMesh)

    // 4. Floating Neural Cloud Particles
    const particlesCount = 240
    const positions = new Float32Array(particlesCount * 3)
    const scales = new Float32Array(particlesCount)

    for (let i = 0; i < particlesCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      const radius = 2.4 + Math.random() * 1.5

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)

      scales[i] = Math.random()
    }

    const particlesGeo = new THREE.BufferGeometry()
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    // Canvas particle texture
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas')
      canvas.width = 64
      canvas.height = 64
      const ctx = canvas.getContext('2d')
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
      gradient.addColorStop(0, 'rgba(56, 189, 248, 1)')
      gradient.addColorStop(0.5, 'rgba(52, 211, 153, 0.4)')
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, 64, 64)
      const texture = new THREE.CanvasTexture(canvas)
      return texture
    }

    const particlesMat = new THREE.PointsMaterial({
      size: 0.12,
      map: createParticleTexture(),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.8
    })

    const particles = new THREE.Points(particlesGeo, particlesMat)
    group.add(particles)

    // Mouse Tracking for Smooth Parallax
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect()
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouseY = -(((event.clientY - rect.top) / rect.height) * 2 - 1)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    // Window Resize Observer
    const handleResize = () => {
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }

    const resizeObserver = new ResizeObserver(() => handleResize())
    resizeObserver.observe(container)

    // Animation Loop
    let animationFrameId
    let clock = new THREE.Clock()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      const delta = clock.getDelta()
      const time = clock.getElapsedTime()

      // Continuous subtle rotation
      outerMesh.rotation.y += 0.25 * delta
      outerMesh.rotation.x += 0.15 * delta

      innerMesh.rotation.y -= 0.4 * delta
      innerMesh.rotation.z += 0.2 * delta

      ringMesh.rotation.z += 0.3 * delta
      particles.rotation.y -= 0.1 * delta

      // Floating gentle bobbing
      group.position.y = Math.sin(time * 1.2) * 0.12

      // Smooth mouse lerp
      targetX = mouseX * 0.6
      targetY = mouseY * 0.4
      group.rotation.y += (targetX - group.rotation.y) * 0.05
      group.rotation.x += (-targetY - group.rotation.x) * 0.05

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      resizeObserver.disconnect()

      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement)
      }

      outerGeo.dispose()
      outerMat.dispose()
      innerGeo.dispose()
      innerMat.dispose()
      ringGeo.dispose()
      ringMat.dispose()
      particlesGeo.dispose()
      particlesMat.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div className="relative w-full h-[400px] sm:h-[460px] lg:h-[520px] flex items-center justify-center">
      {/* Three.js Canvas Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      
      {/* Subtle bottom gradient mask for seamless blending */}
      <div className="absolute inset-0 pointer-events-none bg-radial from-transparent via-transparent to-[#07090E]/80" />
    </div>
  )
}

export default HeroScene3D
