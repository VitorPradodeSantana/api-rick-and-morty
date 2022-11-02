import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Personagens from './pages/Personagens'
import Contato from './pages/Contato'
import Links from './components/Links'
import Episodios from './pages/Episodios'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Links />
      <Routes>
        <Route path="/" exact="true" element={<Home />} />
        <Route path="/Personagens" element={<Personagens />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/Episodios" element={<Episodios />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
