import { useState } from 'react'
import Signup from './pages/Signup'
import Login from './pages/Login'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
