import React from 'react'
import Register from './pages/Auth/register'
import Home from './pages/Home/home'
import {
  BrowserRouter, Routes, Route,} from "react-router-dom";

function App() {
  return (
    <>
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<Home />}>
       </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App