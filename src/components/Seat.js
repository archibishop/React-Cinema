import React,  { Component }  from 'react';


class Seat extends Component {
    // A seat in the cinema.
    render () {
        return (
            <td>
                {this.props.seat}
            </td>
        );
    };
}

export default Seat;
