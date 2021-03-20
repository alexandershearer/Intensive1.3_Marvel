import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'

const styles = ({

})

class ComicsContainer extends Component {

    render() {
        const { classes } = this.props
        return (
            <div>
                {this.props.comicInfo.title !== '' ?
                    <div>
                        <img className={classes.heroImage} src={this.props.comicInfo.image} alt='char' />
                        <h2>{this.props.comicInfo.title}</h2>
                        <p>{this.props.comicInfo.pages}</p>
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