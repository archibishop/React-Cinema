import React,  { Component }  from 'react';


class Seat extends Component {
    // A seat in the cinema.
    getStyle = () => {
        if (this.props.seat.seatStatus === 'pair') {
            return {
                color: 'green'
            };
        } else if (this.props.seat.seatStatus === 'vvip') {
            return {
                color: 'blue'
            };
        } else if (this.props.seat.seatStatus === 'vip') {
            return {
                color: 'red'
            };
        } else if (this.props.seat.seatStatus === 'economy') {
            return {
                color: 'purple'
            };
        } else {
            return;
        }
        
    }

    render () {
        return (
            <td style={this.getStyle()}>
                {this.props.seat.display}
            </td>
        );
    };
}

export default Seat;
