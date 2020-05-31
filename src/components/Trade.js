import React from 'react';
import TradeItem from './TradeItem'

class Trade extends React.Component {
    render() {
        return this.props.trades.map((trade) => (
            <TradeItem key = {trade.id} tradeItem = {trade} />
        ))
    }
}

export default Trade;