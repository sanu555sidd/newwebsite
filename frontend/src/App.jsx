import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './common/Navbar'
import Footer from './common/Footer'
import Home from './pages/Home'
import Client from './pages/client'
import Blog from './pages/Blog'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/client" element={<Client />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
