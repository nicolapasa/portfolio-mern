import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'

import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import IsPrivate from './components/IsPrivate'
import CreateProject from './pages/CreateProject'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <main className='container mx-auto px-4'>
        <Navbar />
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='/signup' element={ <Signup /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/dashboard' element={  <IsPrivate> <Dashboard /></IsPrivate>  } />
          <Route path='/createProject' element={ <IsPrivate> <CreateProject/>  </IsPrivate>  } />
        </Routes>
        <Footer />
      </main>
 
    </>
  )
}

export default App
