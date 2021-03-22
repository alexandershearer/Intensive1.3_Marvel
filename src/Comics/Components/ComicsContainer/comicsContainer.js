import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'

const styles = ({
    comicImage: {
        width: '300px',
        height: '450px',
        border: '1px solid black',
    }
})

class ComicsContainer extends Component {

    render() {
        const { classes } = this.props
        return (
            <div className={classes.comicContainer}>
                {this.props.comicInfo.title !== '' ?
                    <div>
                        <img className={classes.comicImage} src={this.props.comicInfo.image} alt='char' />
                        <h2>{this.props.comicInfo.title}</h2>
                        <p>{this.props.comicInfo.pageCount}</p>
                        <p>{this.props.comicInfo.desc}</p>
                    </div>
                    :
                    null
                }
            </div>
        )
    }
}

export default (withStyles(styles)(ComicsContainer))