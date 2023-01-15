import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginForm from './Components/Login/LoginForm'
import RegForm from './Components/Register/RegForm'
import Navbar from './Navbar/Navbar'

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/register' element={<RegForm />} />
        <Route path='/login' element={<LoginForm />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
