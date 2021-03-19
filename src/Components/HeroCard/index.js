import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'

const styles = ({

})

class HeroCard extends Component {

    render() {
        return (
            <div>
                {this.props.heroInfo.name !== '' ?
                    <div>
                        <p>{this.props.heroInfo.name}</p>
                        <p>{this.props.heroInfo.desc}</p>
                        <p>{this.props.heroInfo.totalSeries}</p>
                        <img src={this.props.heroInfo.image} alt='char' />
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