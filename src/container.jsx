<<<<<<< HEAD
import React from 'react'
=======
>>>>>>> eb1a1cca534d8ffeef5d3f431e32aeefeb44ceff
import { Header, Footer } from './header_footer'
import { MobileHeader, MobileMenu  } from './mobile_components';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';


function Container() {
    return (
<<<<<<< HEAD
      <BrowserRouter>
=======
      <BrowserRouter basename='/autoflamingo'>
>>>>>>> eb1a1cca534d8ffeef5d3f431e32aeefeb44ceff
        <div className="container">
          <MobileHeader />
          <Header />
          <MobileMenu />
          
          
          <Footer />
        </div>
      </BrowserRouter>
    )
}

export default Container;