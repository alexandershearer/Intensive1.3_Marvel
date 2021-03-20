import React, { Component } from 'react'
import './comics.css'
import { withStyles } from '@material-ui/core/'
import ComicSearch from './Components/ComicSearch/comicSearch'

const styles = ({

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
                <ComicSearch />
            </div>
        )
    }
}


export default (withStyles(styles)(Comics))