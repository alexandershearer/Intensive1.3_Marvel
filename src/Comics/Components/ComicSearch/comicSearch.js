import React, { Component } from 'react'
import { withStyles, TextField, Button } from '@material-ui/core'
import md5 from 'md5'
import ComicsContainer from '../ComicsContainer/comicsContainer'


const styles = ({
    searchComic: {
        paddingTop: '20px'
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
                            pages: data[0].pageCount,
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
                <div className={classes.form}>
                    <input
                        className={classes.userInput}
                        id="outlined-basic"
                        label="Comic Name"
                        variant="outlined"
                        onChange={(title) => this.handleChange(title.target.value)}
                    />
                </div>
                <div>
                    <button
                        className={classes.searchButton}
                        variant='contained'
                        color='default'
                        onClick={() => this.getComicByHero(title)}
                    >
                        Search
                    </button>
                </div>
                {error ? error : <ComicsContainer comicInfo={comicInfo} />}
            </div >
        )
    }
}

export default (withStyles(styles)(ComicSearch))