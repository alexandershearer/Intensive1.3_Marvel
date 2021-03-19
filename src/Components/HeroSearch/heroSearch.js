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
            }
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
                let data = json.data.results[0]
                console.log(data)
                this.setState({
                    heroInfo: {
                        name: data.name,
                        desc: data.description,
                        image: data.thumbnail.path + '.' + data.thumbnail.extension,
                        totalSeries: data.series.available,
                        urls: {
                            0: data.urls[0].url
                        }
                    }
                })
            })
    }

    handleChange = (value) => {
        this.setState({ heroName: value })
    }

    render() {
        const { heroName } = this.state
        const { classes } = this.props
        return (
            <div>
                <div className={classes.form}>
                    <TextField
                        id="standard-basic"
                        label="Hero Name"
                        variant="filled"
                        onChange={(name) => this.handleChange(name.target.value)}
                    />
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={() => this.getHeroByName(heroName)}
                    >
                        Search
                    </Button>
                </div>
                <HeroCard
                    heroInfo={this.state.heroInfo}
                />
            </div>
        )
    }
}

export default (withStyles(styles)(HeroSearch))