import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';



//Layout
import LayoutUser from './Layout/LayoutUser';

//Páginas
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<LayoutUser/>}>
        <Route index element={ <Inicio/>}/>
          <Route path='Servicios' element={<Servicios/>}/>
          <Route path='Contacto' element={<Contacto/>}/>
        </Route>  
      </Routes>
    </BrowserRouter>
  )
}

export default App
