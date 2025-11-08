import { Link } from 'react-router-dom';
import { useState } from 'react'

const menu = document.querySelector(".mobile-menu")

export function MobileHeader() {

    const handleClick = () => {
        
        // menu.style.opacity = "1"
        console.log("clicked")
    }

    return (
        <>
            <header className="mobile-header">
                <img className="hamburger" src="src/assets/hamburger.svg" alt="menu" onClick={handleClick}/>
                <h1 className="mobile-title">autoflamingo</h1>
            </header>

            {/* <style jsx="true">{`
        
            
            .mobile-menu {
               opacity: ${hamburgerOpen ? '1': '0'}
            
            }
            `
                }

            </style> */}
        </>
    )
}

export function MobileMenu() {


    const handleClick = () => {
        
        menu.style.opacity = "0";
        alert("clicked")
    }

    return (
        <>
            <div className="mobile-menu">
                <img className="close" src="src/assets/close_dark.svg" onClick={handleClick}/>
                <nav className="mobile-nav">
                    <ul className="mobile-nav-list">
                        <li className="mobile-nav-item"><Link className="mobile-nav-link" to="/shows">Shows</Link></li>
                        <li className="mobile-nav-item"><Link className="mobile-nav-link" to="/contact">Contact</Link></li>
                        <li className="mobile-nav-item"><Link className="mobile-nav-link" to="/music">Music</Link></li>
                    </ul>
                </nav>
            </div>

            {/* <style jsx="true">{`
        
            
            .mobile-menu {
               opacity: ${closeOpen ? '0': '1'}
                
            }
            `
                }

            </style> */}
        </>
    )
}