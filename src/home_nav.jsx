import React from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Shows from './shows'
import './App.css'

function ShowLink() {
    return <li className="nav-item"><a href="" className="nav-link">Shows</a></li>
}

function MusicLink() {
    return <li className="nav-item"><a href="" className="nav-link">Music</a></li>
}

function HomeNav() {
  return (
    <BrowserRouter>
      <nav className="home-nav">
        <ul className="nav-list">
            <Link to="/shows">Shows</Link>
            <Link to="/music">Music</Link>
        </ul>
      </nav>

      <Routes>
        <Route path="/shows" element={<Shows />} />
        <Route path="/music" element={<MusicLink />} />
      </Routes>

    </BrowserRouter>
  )
}

export default HomeNav;