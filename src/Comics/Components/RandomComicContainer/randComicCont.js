import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'

const styles = ({
    randComicImage: {
        width: '300px',
        height: '450px',
        border: '1px solid black',
    }
})

class RandomComicContainer extends Component {

    render() {
        const { classes } = this.props
        return (
            <div className={classes.randComicContainer}>
                <div>
                    <h2>{this.props.randComicInfo.title}</h2>
                    <img className={classes.randComicImage} src={this.props.randComicInfo.image} alt='char' />
                    <p className='center-content-80-percent'>{this.props.randComicInfo.desc}</p>
                </div>
            </div>
        )
    }
}

export default (withStyles(styles)(RandomComicContainer))