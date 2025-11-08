import { Link } from 'react-router-dom';

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
                <img onClick={handleClick} className="hamburger" src="./autoflamingo/public/assets/hamburger.svg" alt="menu" />
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
                <img className="close" src="./autoflamingo/public/assets/close_dark.svg" onClick={handleClick}/>
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