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
        color: 'black',
        // width: '90%',
        // maxWidth: '1000px',
        // margin: '0 auto',
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
                    <div id='greetingBody'>
                        <p className='greetingText'>Welcome to a site that is dedicated to introducing you to the world of Marvel!
                        Here you will be able to browse through the heroes of the universe and find which comics
                        they are a part of. That way you can find your favorite heroes and keep up with their comics
                        and any other series they are a part of. Enjoy!
                        </p>

                        <img id='greetingImg' src='https://thealexanderpost.com/wp-content/uploads/2020/06/Whalen_ModernAge_Sm_8ebee4ea-58fe-4c66-9eb2-b520617ebac9_1024x1024.jpg' />
                    </div>
                    {/* <div className={classes.photoDiv}>
                        <GreetingCarousel />
                    </div> */}
                </div>
                <div className='heroGreeting'>
                    <h1 className='heroesTitle'>Heroes</h1>
                </div>
                <div>
                    <h2>Search through the Marvel universe for your favorite heroes!</h2>
                </div>
                <HeroSearch />
                <div>
                    <img className='comicHeaderImg' src='https://i.pinimg.com/736x/96/98/a5/9698a5d48b9fdb3a9bb49f1e5fa8958d.jpg' />
                    <img className='comicHeaderImg' src='https://i.pinimg.com/736x/13/8a/b1/138ab1588ee061065f626c726705a39b.jpg' />
                    <img className='comicHeaderImg' src='https://qph.fs.quoracdn.net/main-qimg-afbc5ab63f9ebbe1cb1cc1c7ddac0fd3' />
                    <img className='comicHeaderImg' src='https://i.pinimg.com/originals/c8/7b/b4/c87bb4f13f03cb64815435215495204a.jpg' />
                </div>
            </div>
        )
    }
}


export default (withStyles(styles)(Home))