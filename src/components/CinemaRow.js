import React, { Component } from 'react';
import Seat from '../components/Seat';

// A row in the cinema
class CinemaRow extends Component {

    renderTableRow = () => this.props.seats.map((seat, index) => (
        <Seat seat={seat} index={index} key={index} />
    ))

    render () {
        return (
            <tr>
                {this.renderTableRow()}
            </tr>
        );
    }
}

export default CinemaRow;
