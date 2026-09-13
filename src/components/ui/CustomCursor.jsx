import React, { useEffect, useState, useRef } from 'react'

const CustomCursor = () => {
  const [cursorType, setCursorType] = useState('default') // 'default' | 'hover' | 'view'
  const [visible, setVisible] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  const cursorDotRef = useRef(null)
  const cursorRingRef = useRef(null)

  const mousePos = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true)
      return
    }

    const onMouseMove = (e) => {
      mousePos.current.x = e.clientX
      mousePos.current.y = e.clientY
      if (!visible) setVisible(true)

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      }
    }

    const onMouseLeave = () => setVisible(false)
    const onMouseEnter = () => setVisible(true)

    const onPointerOver = (e) => {
      const target = e.target.closest('[data-cursor], a, button, input, textarea')
      if (!target) {
        setCursorType('default')
        return
      }

      const customCursor = target.getAttribute('data-cursor')
      if (customCursor === 'view') {
        setCursorType('view')
      } else {
        setCursorType('hover')
      }
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)
    document.addEventListener('mouseover', onPointerOver)

    let animId
    const loop = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.18
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.18

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`
      }
      animId = requestAnimationFrame(loop)
    }
    animId = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
      document.removeEventListener('mouseover', onPointerOver)
      cancelAnimationFrame(animId)
    }
  }, [visible])

  if (isTouch || !visible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Central Tiny Dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-[#09090B] transition-opacity duration-150 ${
          cursorType === 'view' ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Trailing Ring / VIEW Pill */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 flex items-center justify-center transition-all duration-200 ease-out ${
          cursorType === 'view'
            ? 'w-20 h-20 -ml-10 -mt-10 rounded-full bg-[#2563EB] text-white text-[11px] font-mono font-bold tracking-wider shadow-lg shadow-[#2563EB]/30'
            : cursorType === 'hover'
            ? 'w-10 h-10 -ml-5 -mt-5 rounded-full border border-[#2563EB] bg-[#2563EB]/10'
            : 'w-7 h-7 -ml-3.5 -mt-3.5 rounded-full border border-black/25'
        }`}
      >
        {cursorType === 'view' && <span>VIEW ↗</span>}
      </div>
    </div>
  )
}

export default CustomCursor
