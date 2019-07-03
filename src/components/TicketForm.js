import React, { Component } from 'react';

class TicketForm extends Component {

    state = {
        seat: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.validateSeat(this.state.seat)
    }

    validateSeat = (seat) => {
        let arr = seat.split('-');
        if(arr.length !== 2) {
            alert("Invalid Input Format");
            this.setState({ seat: '' })
            return;
        } else if (arr[1] > 20) {
            alert("Seat Number Provided Doesnt Exist");
            this.setState({ seat: '' })
            return;
        } else if (!(/[A-P]/.test(arr[0]))) {
            alert("Seat Row Doesnt Exist or Provided in lower case.");
            this.setState({ seat: '' })
            return;
        }
        this.setState({ seat: '' })
        this.props.sellTicket(arr[0], arr[1])
    }

    render() {
        return (
            <div className="form-div">
                <h3> Buy Seat :</h3>
                <form className="form-ticket" onSubmit={this.onSubmit}>
                    <label htmlFor="seat_no">Seat Reference :</label>
                    <br />
                    <br />
                    <input 
                        name="seat"
                        type="text" 
                        placeholder="  A-100 ...."
                        value={this.state.seat}
                        onChange={this.onChange}>
                    </input>
                    <br />
                    <br />
                    <button>Submit</button>
                </form>
            </div>

        );
    }

}

export default TicketForm;
