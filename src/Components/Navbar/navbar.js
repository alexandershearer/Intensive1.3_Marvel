import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className='header'>
                <img className='banner' src='https://www.firstcomicsnews.com/wp-content/uploads/2020/02/Marvel-Studios-logo.png'></img>
                <div className='navbar'>
                    <ul className='nav'>
                        <li className='navLinks'>
                            <NavLink
                                exact to="/">
                                Home
                        </NavLink>
                        </li>
                        <li className='navLinks'>
                            <NavLink
                                exact to="/comics">
                                Comics
                        </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar