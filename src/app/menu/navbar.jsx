import Link from 'next/link'
import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <div className='bg-neutral-800 py-3 fixed top-0 left-0 right-0 shadow-md'>
      <button className='ml-4 text-4xl text-white hover:bg-cyan-400 cursor-pointer' onClick={() => setOpen(true)}>
        <i className='bx bx-menu toggle'></i>
      </button>

      <div className={`${!open && "hidden"} bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`} onClick={() => setOpen(false)}></div>

      <div className={`${open ? "w-80" : "w-0"} bg-neutral-800 min-h-screen fixed top-0 left-0 transition-all duration-300`}>
        <div className={`${!open && "hidden"} pt-3`}>
          <button className='ml-4 text-4xl text-white mb-14 hover:bg-cyan-400 cursor-pointer' onClick={() => setOpen(false)}>
            <i className='bx bx-x'></i>
          </button>

          <Link href="/auth/almacen">
            <div className='text-white py-3 mb-2 hover:bg-cyan-400 cursor-pointer'>
              <i className='bx bx-store icon text-3xl'></i>
              <span className='text-2xl px-3'>Registrar Almacen</span>
            </div>
          </Link>

          <Link href="/auth/registrar">
            <div className='text-white py-3 mb-2 hover:bg-cyan-400 cursor-pointer'>
              <i className='bx bx-user icon text-3xl'></i>
              <span className='text-2xl px-3'>Registrar Usuario</span>
            </div>
          </Link>

          <Link href="/auth/paquete">
            <div className='text-white py-3 mb-2 hover:bg-cyan-400 cursor-pointer'>
              <i className='bx bx-package icon text-3xl'></i>
              <span className='text-2xl px-3'>Registrar Paquete</span>
            </div>
          </Link>

          <Link href="/auth/envio">
            <div className='text-white py-3 mb-2 hover:bg-cyan-400 cursor-pointer'>
              <i className='bx bx-anchor text-3xl'></i>
              <span className='text-2xl px-3'>Agendar Envios</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}