import React, { Component } from 'react'
import { withStyles, TextField, Button } from '@material-ui/core'
import md5 from 'md5'
import RandomComicContainer from '../RandomComicContainer/randComicCont'


const styles = ({
    searchComic: {
        paddingTop: '40px'
    },
    searchButton: {
        marginBottom: '20px'
    }
})

class RandomComicSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            randComicInfo: {
                title: '',
                pages: '',
                desc: '',
                image: '',
                url: ''
            },
            error: null
        }
    }

    getRandomComic = () => {
        const privateKey = process.env.REACT_APP_API_KEY
        const publicKey = process.env.REACT_APP_PUBLIC_KEY
        const ts = new Date().getTime().toString()
        const hash = md5(ts + privateKey + publicKey)
        const randomId = Math.floor(Math.random() * 7000)
        const url = `https://gateway.marvel.com:443/v1/public/comics?id=${randomId}&ts=${ts}&apikey=${publicKey}&hash=${hash}`

        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                if (json.code !== 404) {
                    let data = json.data.results
                    console.log(json)
                    this.setState({
                        randComicInfo: {
                            title: data[0].title,
                            desc: data[0].description,
                            pages: data[0].pageCount,
                            image: data[0].thumbnail.path + '.' + data[0].thumbnail.extension,
                        },
                        error: null
                    })
                } else {
                    this.setState({
                        error: 'We had trouble finding a comic. Try again.',
                        randComicInfo: {
                            title: '',
                            desc: '',
                            pages: '',
                            image: '',
                        }
                    })
                }
            })
    }



    handleChange = (value) => {
        this.setState({ title: value })
    }

    render() {
        const { id, randComicInfo, error } = this.state
        const { title } = randComicInfo
        const { classes } = this.props
        return (
            <div>
                <div>
                    <button
                        className={classes.searchButton}
                        variant='contained'
                        color='default'
                        onClick={() => this.getRandomComic(id)}
                    >
                        Search
                    </button>
                </div>
                {title !== '' ? <RandomComicContainer randComicInfo={randComicInfo} /> : null}
                {error ? error : null}
            </div>
        )
    }
}

export default (withStyles(styles)(RandomComicSearch))