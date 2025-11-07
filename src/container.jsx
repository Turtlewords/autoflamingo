import React from 'react'
import { Header, Hero } from './header_hero'
import HomeNav from './home_nav'

function Container() {
    return (
        <div className="container">
          <Header />
          <HomeNav />
        </div>
    )
}

export default Container;