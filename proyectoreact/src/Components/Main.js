import React from 'react'
import { Routes, Route } from 'react-router-dom'

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<p>Home</p>}/>
        <Route path="/productos" element={<p>Productos</p>}/>
        <Route path="/carrito" element={<p>Carrito</p>}/>
      </Routes>
    </main>
  )
}

export default Main