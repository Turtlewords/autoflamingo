import { Header, Footer } from './header_footer'
import { MobileHeader, MobileMenu  } from './mobile_components';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';


function Container() {
    return (
      <BrowserRouter basename='/autoflamingo'>
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