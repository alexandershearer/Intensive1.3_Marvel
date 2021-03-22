import React, { Component } from 'react'
import { withStyles, TextField, Button } from '@material-ui/core'
import md5 from 'md5'
import HeroCard from '../HeroCard'

const styles = ({
    form: {
        display: 'flex',
        margin: '10px',
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchHero: {
        paddingTop: '20px'
    },
    searchButton: {
        marginBottom: '20px'
    }
})

class HeroSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            heroName: '',
            heroInfo: {
                name: '',
                desc: '',
                image: '',
                totalSeries: '',
                url: ''
            },
            error: null
        }
    }

    getHeroByName = (name) => {
        const privateKey = process.env.REACT_APP_API_KEY
        const publicKey = process.env.REACT_APP_PUBLIC_KEY
        const ts = new Date().getTime().toString()
        const hash = md5(ts + privateKey + publicKey)
        const url = `https://gateway.marvel.com:443/v1/public/characters?name=${name}&ts=${ts}&apikey=${publicKey}&hash=${hash}`

        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                let data = json.data.results
                console.log(json)
                if (data.length !== 0) {
                    this.setState({
                        heroInfo: {
                            name: data[0].name,
                            desc: data[0].description,
                            image: data[0].thumbnail.path + '.' + data[0].thumbnail.extension,
                            totalSeries: data[0].series.available,
                            urls: {
                                0: data[0].urls[0].url
                            }
                        },
                        error: null
                    })
                } else {
                    this.setState({ error: 'Could not find hero.' })
                }
            })
    }

    handleChange = (value) => {
        this.setState({ heroName: value })
    }

    render() {
        const { heroName, heroInfo, error } = this.state
        const { classes } = this.props
        return (
            <div className={classes.searchHero}>
                <div className={classes.form}>
                    <TextField
                        className={classes.userInput}
                        id="outlined-basic"
                        label="Hero Name"
                        variant="outlined"
                        onChange={(name) => this.handleChange(name.target.value)}
                    />
                </div>
                <div>
                    <Button
                        className={classes.searchButton}
                        variant='contained'
                        color='default'
                        onClick={() => this.getHeroByName(heroName)}
                    >
                        Search
                    </Button>
                </div>
                {error ? error : <HeroCard heroInfo={heroInfo} />}
            </div >
        )
    }
}

export default (withStyles(styles)(HeroSearch))