import React, { Component } from 'react'

export class InfoHead extends Component {
    render() {
        let count = this.props.trades.length;
        return (
            <div>
                Loaded {count} deals
                <input placeholder='Potential Search Filter'></input>
            </div>
        )
    }
}

export default InfoHead
