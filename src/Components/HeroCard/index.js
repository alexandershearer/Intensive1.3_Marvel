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
                        <h4>{this.props.heroInfo.name}</h4>
                        <h5 className='center-content-80-percent'>{this.props.heroInfo.desc}</h5>
                        <h6 className='center-content-80-percent'>Appears in {this.props.heroInfo.totalSeries} different series</h6>
                        <p className='center-content-80-percent'>{this.props.heroInfo.url}</p>
                    </div>
                    :
                    null
                }
            </div>
        )
    }
}

export default (withStyles(styles)(HeroCard))