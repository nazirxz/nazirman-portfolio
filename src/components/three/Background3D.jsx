import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

const Background3D = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const scene = new THREE.Scene()
    let width = window.innerWidth
    let height = window.innerHeight

    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000)
    camera.position.z = 400

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      powerPreference: 'low-power'
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))

    // Ambient floating starfield / particles
    const particleCount = 200
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const speeds = new Float32Array(particleCount)

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 1200
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1200
      positions[i * 3 + 2] = (Math.random() - 0.5) * 800
      speeds[i] = 0.2 + Math.random() * 0.4
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const material = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 2.2,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    // Window scroll tracking
    let scrollY = window.scrollY
    const handleScroll = () => {
      scrollY = window.scrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Resize handler
    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener('resize', handleResize)

    // Animation Loop
    let animId
    const animate = () => {
      animId = requestAnimationFrame(animate)

      const pos = geometry.attributes.position.array
      for (let i = 0; i < particleCount; i++) {
        // Slow vertical drift
        pos[i * 3 + 1] += speeds[i] * 0.3
        if (pos[i * 3 + 1] > 600) {
          pos[i * 3 + 1] = -600
        }
      }
      geometry.attributes.position.needsUpdate = true

      // Slow gentle rotation + scroll influence
      points.rotation.y += 0.0003
      camera.position.y = -scrollY * 0.15

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10 w-full h-full"
      style={{ opacity: 0.7 }}
    />
  )
}

export default Background3D
