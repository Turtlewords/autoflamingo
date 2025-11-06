import React from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Shows from './shows'
import Music from './music'
import './App.css'


function HomeNav() {
  return (
    <BrowserRouter>
      <nav className="home-nav">
        <ul className="nav-list">
            <Link className="nav-link" to="/shows">Shows</Link>
            <Link className="nav-link" to="/music">Music</Link>
        </ul>
      </nav>

      <Routes>
        <Route path="/shows" element={<Shows />} />
        <Route path="/music" element={<Music />} />
      </Routes>

    </BrowserRouter>
  )
}

export default HomeNav;