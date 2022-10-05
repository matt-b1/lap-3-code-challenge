import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

const Header = () => {

    const activeClass = (({ isActive }) => isActive ? 'current' : 'notActive')

    return (
        <div>
            <ul>
                <NavLink className={activeClass} to="/" end>Home</NavLink>
                <NavLink className={activeClass} to='about'>About</NavLink>
                <NavLink className={activeClass} to="search">Search</NavLink>
            </ul>
        </div>
    )
}

export default Header
