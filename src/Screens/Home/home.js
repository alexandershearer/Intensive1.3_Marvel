import React, { Component } from 'react'
import './home.css'
import { withStyles } from '@material-ui/core/'
import GreetingCarousel from '../../Components/Carousel/carousel'
import HeroSearch from '../../Components/HeroSearch/heroSearch'

const styles = ({
    greeting: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '90%',
        maxWidth: '1000px',
        margin: '0 auto',
    },
    photoDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const { classes } = this.props
        return (
            <div>
                <div className={classes.greeting}>
                    <div >
                        <p className='greetingText'>Welcome to a site that is dedicated to introducing you to the world of Marvel!
                        Here you will be able to browse through the heroes of the universe and find which comics
                        they are a part of. That way you can find your favorite heroes and keep up with their comics
                        and any other series they are a part of. Enjoy!
                        </p>
                    </div>
                    <div className={classes.photoDiv}>
                        <GreetingCarousel />
                    </div>
                </div>
                <div className='heroGreeting'>
                    <h1 className='heroesTitle'>Heroes</h1>
                </div>
                <HeroSearch />
            </div>
        )
    }
}


export default (withStyles(styles)(Home))