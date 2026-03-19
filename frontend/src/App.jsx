import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './common/Navbar'
import Footer from './common/Footer'
import Home from './pages/Home'
import Client from './pages/client'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Career from './pages/Career'
import Loader from './common/Loader'

import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import CustomCursor from './common/customCursor'

function App() {
  return (
    <>
    <Router>
      <Loader>
      <Navbar />
      <CustomCursor />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/client" element={<Client />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      
      <Footer />
      </Loader>
    </Router>
    </>
  )
}

export default App
