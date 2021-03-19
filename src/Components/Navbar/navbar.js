import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, withStyles } from '@material-ui/core'
import './navbar.css'

const styles = ({
    navbar: {
        backgroundColor: 'rgb(255, 64, 64)',
        boxShadow: '0px 2px 4px -1px rgb(255 64 64 / 20%), 0px 4px 5px 0px rgb(255 64 64 / 14%), 0px 1px 10px 0px rgb(255 64 64 / 12%)'

    },
    navbarContent: {
        display: 'flex',
        justifyContent: 'center',

        '& a': {
            margin: '0 20px',
            color: 'white',
            textDecoration: 'none',
            fontSize: 'x-large'
        }
    },
    banner: {
        width: '90%',
        maxWidth: '400px'
    }
})

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const { classes } = this.props
        return (
            <div>
                <img className={classes.banner} alt='marvelbanner' src='https://www.firstcomicsnews.com/wp-content/uploads/2020/02/Marvel-Studios-logo.png'></img>

                <AppBar className={classes.navbar} position='static'>
                    <Toolbar className={classes.navbarContent}>
                        <NavLink
                            exact to="/">
                            Home
                        </NavLink>
                        <NavLink
                            exact to="/comics">
                            Comics
                        </NavLink>
                    </Toolbar>
                </AppBar>
            </div>


            // <div className='header'>
            //     <img className='banner' src='https://www.firstcomicsnews.com/wp-content/uploads/2020/02/Marvel-Studios-logo.png'></img>
            //     <div className='navbar'>
            //         <ul className='nav'>
            //             <li className='navLinks'>
            //                 <NavLink
            //                     exact to="/">
            //                     Home
            //             </NavLink>
            //             </li>
            //             <li className='navLinks'>
            //                 <NavLink
            //                     exact to="/comics">
            //                     Comics
            //             </NavLink>
            //             </li>

            //         </ul>
            //     </div>
            // </div>
        )
    }
}

export default (withStyles(styles)(Navbar))