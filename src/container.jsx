import React from 'react'
import { Header, Hero } from './header_hero'
import HomeNav from './home_nav'

function Container() {
    return (
        <div className="container">
          <Hero />
          <HomeNav />
        </div>
    )
}

export default Container;