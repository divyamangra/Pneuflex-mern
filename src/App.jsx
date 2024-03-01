import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Signup from './pages/Signup.jsx'
import About from './pages/About.jsx'
import Signout from './pages/Signout.jsx'
import Header from './components/Header.jsx'
import Signin from './pages/Signin.jsx'

export default function App() {
  return (
    <BrowserRouter>
        <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/SignUp" element={<Signup/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/SignOut" element={<Signout/>}/>
      <Route path='/SignIn' element={<Signin/>}/>
   </Routes>
    </BrowserRouter>
   
  )
}
