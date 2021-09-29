import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/'
import GreetingCarousel from '../../Components/Carousel/carousel'
import HeroSearch from '../../Components/HeroSearch/heroSearch'


const styles = ({
    greeting: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
                        <h4 className='greetingText'>Welcome to a site that is dedicated to introducing you to the world of Marvel! Here you will be able to browse through the heroes of the universe and find which comics they are a part of. Find your favorite heroes and keep up with their comics and any other series they are a part of!
                        </h4>

                        <img id='greetingImg' src='https://s26162.pcdn.co/wp-content/uploads/2021/08/marvel1.jpeg' />
                    </div>
                    {/* <div className={classes.photoDiv}>
                        <GreetingCarousel />
                    </div> */}
                </div>
                <div className='heroGreeting'>
                    <h2 className='heroesTitle'>Heroes</h2>
                </div>
                <div>
                    <h4>Search through the Marvel universe for your favorite heroes!</h4>
                </div>
                <HeroSearch />
                <div>
                    <img className='comicHeaderImg' src='https://i.pinimg.com/736x/96/98/a5/9698a5d48b9fdb3a9bb49f1e5fa8958d.jpg' />
                    <img className='comicHeaderImg' src='https://i.pinimg.com/736x/13/8a/b1/138ab1588ee061065f626c726705a39b.jpg' />
                    <img className='comicHeaderImg' src='https://qph.fs.quoracdn.net/main-qimg-afbc5ab63f9ebbe1cb1cc1c7ddac0fd3' />
                    <img className='comicHeaderImg' src='https://i.pinimg.com/originals/c8/7b/b4/c87bb4f13f03cb64815435215495204a.jpg' />
                </div>

                <div className="checkSwitch" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <div>
                        <p>Do you like Iron Man?</p>
                        <input type='checkbox' id='ironman' />
                        <label className="switch" for="ironman"></label>
                    </div>
                    <div>
                        <p>Do you like Captain America?</p>
                        <input type='checkbox' id='cap' />
                        <label className="switch" for="cap"></label>
                    </div>
                    <div>
                        <p>Do you like Hulk?</p>
                        <input type='checkbox' id='hulk' />
                        <label className="switch" for="hulk"></label>
                    </div>
                    <div>
                        <p>Do you like Spider-Man?</p>
                        <input type='checkbox' id='spidey' />
                        <label className="switch" for="spidey"></label>
                    </div>
                </div>

                <div class="choice-container">

                    <input type="radio" id="iron" name="choice" />
                    <label class="radio" for="iron">Iron Man</label>

                    <input type="radio" id="capr" name="choice" />
                    <label class="radio" for="capr">Captain America</label>

                    <input type="radio" id="spideyr" name="choice" />
                    <label class="radio" for="spideyr">Spidey</label>

                </div>

            </div >
        )
    }
}


export default (withStyles(styles)(Home))