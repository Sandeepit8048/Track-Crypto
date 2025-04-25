import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Home/Coin/Coin'
import Footer from './components/Footer/Footer'
import Singup from './components/Sign-up'
import Features from './pages/Features'

const App = () => {
  return (
    <div className='app'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Singup/>}/>
          <Route path='/Features' element={<Features/>}/>
          <Route path='/coin/:coinId' element={<Coin/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App
