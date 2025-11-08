import React from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Music from './music'
import Shows from './shows'
import Home from './home'
import Contact from './contact'


export function Header() {
    return (
    <>
        <header className="header">
            <nav className="header-nav">
                <ul className="header-nav-list">
                    <li className="header-nav-item"><Link className="header-nav-link" to="/shows">Shows</Link></li>
                    <li className="header-nav-item"><Link className="header-nav-link" to="/contact">Contact</Link></li>
                    <li className="header-nav-item"><Link className="header-nav-link" to="/music">Music</Link></li>
                </ul>
            </nav>
            <Link className="title-link" to="/">
              <h1 className="title">autoflamingo</h1>
            </Link>
            
            <div className="header-socials">
                <a href="https://www.instagram.com/autoflamingogogo/?hl=en" target="_blank"><img className="header-socials-icon" src="/src/assets/ig_white.svg"/></a>
                <a href="https://open.spotify.com/artist/5tibIorGHUrWe3Jxjo2N4i?si=ig8uBWO4TKynGoRHQWxhjw" target="_blank"><img className="header-socials-icon" src="/src/assets/spotify_white.svg"/></a>
                <a href="mailto:thisisautoflamingo@gmail.com"><img className="header-socials-icon" src="/src/assets/email_white.svg"/></a>
            </div>
        </header>
        
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/shows" element={<Shows />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/music" element={<Music />}/>
        </Routes>
    </>
    
    )
}

export function Hero() {

    return (
        <div className="hero">
            
            <img className="hero-img" src="src/assets/autoflamingo_fav.png" alt="autoflamingo logo"></img>
        </div>
    )
}

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-socials">
                <a href="https://www.instagram.com/autoflamingogogo/?hl=en" target="_blank"><img className="footer-socials-icon" src="/src/assets/ig_white.svg"/></a>
                <a href="https://open.spotify.com/artist/5tibIorGHUrWe3Jxjo2N4i?si=ig8uBWO4TKynGoRHQWxhjw" target="_blank"><img className="footer-socials-icon" src="/src/assets/spotify_white.svg"/></a>
                <a href="mailto:thisisautoflamingo@gmail.com"><img className="footer-socials-icon" src="/src/assets/email_white.svg"/></a>
            </div>
        </footer>
    )
}
