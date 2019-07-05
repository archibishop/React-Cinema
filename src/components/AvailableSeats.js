import React, { Component } from 'react';

class AvailableSeats extends Component {

    renderAvailableSeats = () => this.props.seats.map((seat , index) => (
        <p key={index}>{seat}</p>
    ))

    render () {
        if (this.props.seats.length === 0){
            return (
                <div className="form-div">
                    <h3>Available Seats</h3>
                    None
                </div>
            );
        }else {
            return (
            <div className="form-div">
                <h3>Available Seats</h3>
                { this.renderAvailableSeats()}
            </div>
            );
        }
    }

}

export default AvailableSeats;
