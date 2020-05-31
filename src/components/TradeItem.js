import React, { Component } from 'react'


export class TradeItem extends Component {

    getStyle = () => {
        return {
            color: this.props.tradeItem.rate > this.props.tradeItem.acceptedRate ? '#aa1111' : '#11aa11'
        }
    }

    checkDefined (element) {
        return element ? element : 'undefined'
    }

    checkActive = () => {
        return {
            color: this.props.tradeItem.isActive === '1' ? '#11aa11' : '#aa1111'
        }
    }

    checkActive2 (element) {
        return this.props.tradeItem.isActive === '1' ? 'ACTIVE' : 'INACTIVE'
    }

    checkCompleted () {
        return {
            color: this.props.tradeItem.status === 'COMPLETED' ? '#11aa11' : '#aa1111'
        }
    }

    render() {
        let tradeItem = this.props.tradeItem;

        return (
            <div className="cardList">
                <div id="cardLabel"> 
                    SELLER 
                    <br/> 
                    <p id="cardElement">
                        { tradeItem.seller }
                    </p>
                </div>
                <div id="cardLabel"> 
                    BUYER 
                    <br/> 
                    <p id="cardElement">
                        { tradeItem.buyer }
                    </p>
                </div>
                <div id="cardLabel"> 
                    OFFER TYPE 
                    <br/> 
                    <p id="cardElement">
                        { tradeItem.offerType }
                    </p>
                </div>
                <div id="cardLabel"> 
                    PRD TYPE
                    <br/> 
                    <p id="cardElement">
                        { tradeItem.type }
                    </p>
                </div>
                <div id="cardLabel" style={{minWidth: '200px'}}> 
                    CREATED AT
                    <br/> 
                    <p id="cardElement">
                        { tradeItem.created }
                    </p>
                </div>
                
                <div id="cardLabel" style={{float: 'right'}}> 
                    STATION
                    <br/> 
                    <p id="cardElement">
                        { this.checkDefined(tradeItem.station) }
                    </p>
                </div>
                <br/>
                <div id="cardLabel"> 
                    RATE
                    <br/> 
                    <p id="cardElement">
                    ₹ { tradeItem.rate } per Bale
                    </p>
                </div>
                <div id="cardLabel"> 
                    ACCEPTED RATE
                    <br/> 
                    <p id="cardElement" style={this.getStyle()}>
                    ₹ { tradeItem.acceptedRate } per Bale
                    </p>
                </div>
                <div id="cardLabel"> 
                    BID ID
                    <br/> 
                    <p id="cardElement">
                    { this.checkDefined(tradeItem.acceptedBidId) }
                    </p>
                </div>
                <div id="cardLabel"> 
                    SHIPMENT
                    <br/> 
                    <p id="cardElement">
                        { this.checkDefined(tradeItem.shipment) }
                    </p>
                </div>
                <div id="cardLabel"> 
                    QUALITY
                    <br/> 
                    <p id="cardElement" style={{minWidth: '200px'}}>
                        { this.checkDefined(tradeItem.quality) }
                    </p>
                </div>
                
                <div id="cardLabel" style={{float: 'right'}}> 
                    STATUS
                    <br/> 
                    <p id="cardElement" style={this.checkCompleted()}>
                    { tradeItem.status }
                    </p>
                </div>
                <br/>
                <div id="cardLabel" style={{float: 'right'}}> 
                    ACTIVE STATUS
                    <br/> 
                    <p id="cardElement" style={this.checkActive()}>
                    { this.checkActive2(tradeItem.isActive) }
                    </p>
                </div>
                <div id="cardLabel"> 
                    QUANTITY 
                    <br/> 
                    <p id="cardElement">
                        { tradeItem.quantity }
                    </p>
                </div>
                <div id="cardLabel"> 
                    CONFIRMED BY 
                    <br/> 
                    <p id="cardElement">
                        { tradeItem.confirmedBy }
                    </p>
                </div>
            </div>
        )
    }
}

export default TradeItem
