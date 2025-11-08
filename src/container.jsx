import React from 'react'
import { Header, Footer } from './header_footer'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';


function Container() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          
          
          
          <Footer />
        </div>
      </BrowserRouter>
    )
}

export default Container;