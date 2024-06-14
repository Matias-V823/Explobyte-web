import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const LayoutUser = () => {
  return (
    <div className='App'>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>

    </div>
  )
}

export default LayoutUser