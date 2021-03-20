import React, { Component } from 'react'
import { AppBar, Toolbar, withStyles } from '@material-ui/core'
import './footer.css'

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <AppBar className='footer' position='static'>
                    <Toolbar>
                        <p>Made using Marvel's API</p>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Footer