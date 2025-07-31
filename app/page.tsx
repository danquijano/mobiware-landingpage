'use client'

import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative w-full h-screen flex flex-col items-center justify-center text-white text-center overflow-hidden">
      {/* Fondo animado */}
      <div className="area">
        <ul className="circles">
          <li></li><li></li><li></li><li></li><li></li>
          <li></li><li></li><li></li><li></li><li></li>
          <li></li><li></li><li></li><li></li><li></li>
          <li></li><li></li><li></li><li></li><li></li>
        </ul>
      </div>

      {/* Contenido */}
      <div className="relative z-10 animate-zoom-in">
        <div className="w-[300px] h-[600px] relative mx-auto">
          <Image
            src="/app-preview.png"
            alt="App Preview"
            fill
            style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.2))' }}
            priority
          />
        </div>
      </div>
    </main>
  )
}