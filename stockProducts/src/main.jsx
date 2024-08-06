import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeaderPage from './Components/HeaderPage/HeaderPage'
import { Home } from "./pages/Home/Home"
import ScreenItensGeneral from './pages/ScreenItensGeneral/ScreenItensGeneral'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderPage />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/produtos' element={<ScreenItensGeneral />}></Route>


      </Routes>




    </BrowserRouter>

  </React.StrictMode>
)
