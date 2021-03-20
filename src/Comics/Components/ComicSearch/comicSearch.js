import React, { Component } from 'react'
import { withStyles, TextField, Button } from '@material-ui/core'
import md5 from 'md5'
import ComicsContainer from '../ComicsContainer/comicsContainer'
import './comicSearch.css'


const styles = ({
    searchComic: {
        paddingTop: '40px'
    },
    searchButton: {
        marginBottom: '20px'
    }
})

class ComicSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            comicInfo: {
                title: '',
                pages: '',
                desc: '',
                image: '',
                url: ''
            },
            error: null
        }
    }

    getComicByHero = (title) => {
        const privateKey = process.env.REACT_APP_API_KEY
        const publicKey = process.env.REACT_APP_PUBLIC_KEY
        const ts = new Date().getTime().toString()
        const hash = md5(ts + privateKey + publicKey)
        const url = `https://gateway.marvel.com:443/v1/public/comics?title=${title}&ts=${ts}&apikey=${publicKey}&hash=${hash}`

        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                let data = json.data.results
                console.log(json)
                if (data.length !== 0) {
                    this.setState({
                        comicInfo: {
                            title: data[0].title,
                            desc: data[0].description,
                            pages: data[0].pages,
                            image: data[0].thumbnail.path + '.' + data[0].thumbnail.extension,
                        },
                        error: null
                    })
                } else {
                    this.setState({ error: 'Could not find comic.' })
                }
            })
    }

    handleChange = (value) => {
        this.setState({ title: value })
    }

    render() {
        const { title, comicInfo, error } = this.state
        const { classes } = this.props
        return (
            <div className={classes.searchComic}>
                <div>
                    <h2>There are thousands of comics in the Marvel world! Some of them starring a character and others having a handful
                    of your favorite characters. Search through Marvel's comic library to find info your future reads!
                    </h2>
                </div>
                <div className={classes.form}>
                    <TextField
                        className={classes.userInput}
                        id="outlined-basic"
                        label="Hero Name"
                        variant="outlined"
                        onChange={(title) => this.handleChange(title.target.value)}
                    />
                </div>
                <div>
                    <Button
                        className={classes.searchButton}
                        variant='contained'
                        color='default'
                        onClick={() => this.getComicByHero(title)}
                    >
                        Search
                    </Button>
                </div>
                {error ? error : <ComicsContainer comicInfo={comicInfo} />}
                <div>
                    <img className='comicHeaderImg' src='https://i.pinimg.com/736x/96/98/a5/9698a5d48b9fdb3a9bb49f1e5fa8958d.jpg' />
                    <img className='comicHeaderImg' src='https://i.pinimg.com/736x/13/8a/b1/138ab1588ee061065f626c726705a39b.jpg' />
                    <img className='comicHeaderImg' src='https://qph.fs.quoracdn.net/main-qimg-afbc5ab63f9ebbe1cb1cc1c7ddac0fd3' />
                    <img className='comicHeaderImg' src='https://i.pinimg.com/originals/c8/7b/b4/c87bb4f13f03cb64815435215495204a.jpg' />
                </div>
            </div >
        )
    }
}

export default (withStyles(styles)(ComicSearch))