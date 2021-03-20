import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'

const styles = ({
    heroImage: {
        width: '300px',
        border: '1px solid black',
        borderRadius: '50%'
    }
})

class HeroCard extends Component {

    render() {
        const { classes } = this.props
        return (
            <div>
                {this.props.heroInfo.name !== '' ?
                    <div>
                        <img className={classes.heroImage} src={this.props.heroInfo.image} alt='char' />
                        <h2>{this.props.heroInfo.name}</h2>
                        <p>{this.props.heroInfo.desc}</p>
                        <p>Appears in {this.props.heroInfo.totalSeries} different series</p>
                        <p>{this.props.heroInfo.url}</p>
                    </div>
                    :
                    null
                }
            </div>
        )
    }
}

export default (withStyles(styles)(HeroCard))