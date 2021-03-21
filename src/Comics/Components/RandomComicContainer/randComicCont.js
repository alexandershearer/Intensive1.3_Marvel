import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'

const styles = ({
    randComicImage: {
        width: '400px',
        height: '550px',
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
                    <p>{this.props.randComicInfo.pageCount}</p>
                    <p>{this.props.randComicInfo.desc}</p>
                </div>
            </div>
        )
    }
}

export default (withStyles(styles)(RandomComicContainer))