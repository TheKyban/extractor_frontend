import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <h1>Shorter</h1>
            </div>

            <ul className='links'>
                <li><Link to="#">About</Link></li>
                <li><Link to="#">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar