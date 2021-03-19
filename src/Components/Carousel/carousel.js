import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import './carousel.css'

const styles = ({

})

class GreetingCarousel extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <div className="carousel-wrapper">
                <div className="carousel">
                    <img className="carousel__photo initial" alt='marvelimage' src="https://churchm.ag/wp-content/uploads/2013/11/marvel_characters.jpg" />

                </div>
            </div>
        )
    }
}

export default (withStyles(styles)(GreetingCarousel))