import React, { Component } from 'react'
import './home.css'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import GreetingCarousel from './components/carousel'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Grid className="greeting" container spacing={3}>
                    <Grid item xs={5}>
                        <p>Hello</p>
                    </Grid>
                    <Grid item xs={7}>
                        <GreetingCarousel />
                    </Grid>
                </Grid>
            </div>
        )
    }
}


export default Home