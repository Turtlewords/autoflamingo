import { Link } from 'react-router-dom';
import hamburger from '/assets/hamburger.svg'
import close from '/assets/close_dark.svg'


export function MobileHeader() {
    

    function handleClick() {
        const menu = document.querySelector(".mobile-menu")
        menu.style.transform = "translateX(0)";
    }

    function closeMenu() {
        const menu = document.querySelector(".mobile-menu")
        menu.style.transform = "translateX(-45vw)";
    }

    return (
            <header className="mobile-header">
                <img onClick={handleClick} className="hamburger" src={hamburger} alt="menu" />
                <Link className="title-link" to="/" onClick={closeMenu}>
                  <h1 className="mobile-title">autoflamingo</h1>
                </Link>
                
            </header>
    )
}

export function MobileMenu() {


    const handleClick = () => {
        
        const menu = document.querySelector(".mobile-menu")
        menu.style.transform = "translateX(-45vw)";
    }

    

    return (
            <div className="mobile-menu">
                <img className="close" src={close} onClick={handleClick}/>
                <nav className="mobile-nav">
                    <ul className="mobile-nav-list">
                        <li className="mobile-nav-item" onClick={handleClick}><Link className="mobile-nav-link" to="/shows">Shows</Link></li>
                        <li className="mobile-nav-item" onClick={handleClick}><Link className="mobile-nav-link" to="/contact">Contact</Link></li>
                        <li className="mobile-nav-item" onClick={handleClick}><Link className="mobile-nav-link" to="/music">Music</Link></li>
                    </ul>
                </nav>
            </div>
    )
}