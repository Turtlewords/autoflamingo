import React from 'react'

export function Header() {
    return (
        <header className="header">
            <nav className="header-nav">
                <ul className="header-nav-list">
                    <li className="header-nav-item"><a className="header-nav-link">Shows</a></li>
                    <li className="header-nav-item"><a className="header-nav-link">Contact</a></li>
                    <li className="header-nav-item"><a className="header-nav-link">Music</a></li>
                </ul>
            </nav>
            <h1 className="title">autoflamingo</h1>
            <div className="header-socials">
                <a href="https://www.instagram.com/autoflamingogogo/?hl=en" target="_blank"><img className="header-socials-icon" src="/src/assets/ig_white.svg"/></a>
                <a href="https://open.spotify.com/artist/5tibIorGHUrWe3Jxjo2N4i?si=ig8uBWO4TKynGoRHQWxhjw" target="_blank"><img className="header-socials-icon" src="/src/assets/spotify_white.svg"/></a>
                <a href="mailto:thisisautoflamingo@gmail.com"><img className="header-socials-icon" src="/src/assets/email_white.svg"/></a>
            </div>
        </header>
    )
}

export function Hero() {

    return (
        <div className="hero">
            
            <img className="hero-img" src="src/assets/autoflamingo_fav.png" alt="autoflamingo logo"></img>
        </div>
    )
}

