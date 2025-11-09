import React from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Music from './music'
import Shows from './shows'
import Home from './home'
import Contact from './contact'
import ig from '/assets/ig_white.svg'
import spotify from '/assets/spotify_white.svg'
import mail from '/assets/email_white.svg'


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
                <a href="https://www.instagram.com/autoflamingogogo/?hl=en" target="_blank"><img className="header-socials-icon" src={ig}/></a>
                <a href="https://open.spotify.com/artist/5tibIorGHUrWe3Jxjo2N4i?si=ig8uBWO4TKynGoRHQWxhjw" target="_blank"><img className="header-socials-icon" src={spotify}/></a>
                <a href="mailto:thisisautoflamingo@gmail.com"><img className="header-socials-icon" src={mail}/></a>
            </div>
        </header>
        
        <Routes>
            <Route path="/autoflamingo/" element={<Home />}/>
            <Route path="/shows" element={<Shows />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/music" element={<Music />}/>
        </Routes>
    </>
    
    )
}

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-socials">
                <a href="https://www.instagram.com/autoflamingogogo/?hl=en" target="_blank"><img className="footer-socials-icon" src={ig}/></a>
                <a href="https://open.spotify.com/artist/5tibIorGHUrWe3Jxjo2N4i?si=ig8uBWO4TKynGoRHQWxhjw" target="_blank"><img className="footer-socials-icon" src={spotify}/></a>
                <a href="mailto:thisisautoflamingo@gmail.com"><img className="footer-socials-icon" src={mail}/></a>
            </div>
        </footer>
    )
}
