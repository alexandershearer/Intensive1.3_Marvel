import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, withStyles } from '@material-ui/core'
import './navbar.css'

const styles = ({
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
            <div id='navHeader'>
                <img className={classes.banner} alt='marvelbanner' src='https://www.firstcomicsnews.com/wp-content/uploads/2020/02/Marvel-Studios-logo.png'></img>

                <AppBar className='navbar' position='static'>
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

        )
    }
}

export default (withStyles(styles)(Navbar))