import React from 'react'
import Header from './pages/Header.jsx'
import About from './pages/About.jsx'
import Linktree from './pages/Linktree.jsx'
import Arts from './pages/Arts.jsx'
import Footer from './components/Footer_minimal.jsx'

export default function App() {
  return (
    <div className='min-h-screen bg-slate-950 text-white'>
      <Header />
      
      {/* Фон с гифкой и фиксированным скроллом */}
      <div className="bg-[url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXhwZmJ5aDZydDhodHdzOTRmanJhajhmaDM3anV2N21xd3l5d3FuciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/k81NasbqkKA5HSyJxN/200.webp')] bg-cover bg-center bg-no-repeat bg-fixed min-h-screen">
        <About />
        <Linktree/>
        <Arts/>
      </div>
      <Footer />
    </div>
  )
}