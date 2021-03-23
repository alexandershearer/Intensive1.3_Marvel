import React, { Component } from 'react'
import './comics.css'
import { withStyles } from '@material-ui/core/'
import ComicSearch from './Components/ComicSearch/comicSearch'
import RandomComicSearch from './Components/RandomComic/randomComic'

const styles = ({
    comicGreeting: {
        width: '90%',
        margin: '0 auto'
    }
})

class Comics extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const { classes } = this.props
        return (
            <div>
                <div className={classes.comicGreeting}>
                    <h2>There are thousands of comics in the Marvel world! Some of them starring a character and others having a handful
                    of your favorite characters. Search through Marvel's comic library to find info for your future reads!
                    </h2>
                </div>
                <ComicSearch />
                <div>
                    <h3>If you dont know of any comics, you can click here to find random Marvel comics.</h3>
                </div>
                <RandomComicSearch />
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


export default (withStyles(styles)(Comics))