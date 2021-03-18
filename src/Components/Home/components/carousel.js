import React, { Component } from 'react'
import './carousel.css'

class GreetingCarousel extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <div class="carousel-wrapper">
                <div class="carousel">
                    <img class="carousel__photo initial" src="https://churchm.ag/wp-content/uploads/2013/11/marvel_characters.jpg" />
                    <img class="carousel__photo" src="assets/img_2.jpg" />
                    <img class="carousel__photo" src="assets/img_3.jpg" />
                </div>
            </div>
        )
    }
}

export default GreetingCarousel