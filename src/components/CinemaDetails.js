import React, { Component } from 'react';


class CinemaDetails extends Component {
    render() {
        return (
            <div>
                <h3>Cinema Details :</h3>
                <p>There are 312 seats in the cinema.</p>
                Total Ticket Sales : {this.props.revenue} 
                <br /> 
                <br /> 
                Total Tickets Sold : {this.props.ticketsSold}
            </div>
        );
    };
}

export default CinemaDetails;
