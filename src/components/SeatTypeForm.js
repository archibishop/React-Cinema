import React, { Component } from 'react';

class SeatTypeForm extends Component {

    state = {
        seat_num: '',
        seat_category: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    }

    validateInput = (value) => {
        let seatTypeList = ['vip', 'economy', 'twin', 'vvip']
        if (!seatTypeList.includes(value)) {
            alert('Wrong Seat Type Option Entered');
            this.setState({
                seat_num: '',
                seat_category: ''
            })
            return;
        } 
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.validateInput(this.state.seat_category);
        this.props.availableSeats(this.state.seat_num, this.state.seat_category);
        this.setState({
            seat_num: '',
            seat_category: ''
        });
    }

    render() {
        return(
            <div className="form-div">
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="seat_no">Enter Number of seats required : </label>
                    <br />
                    <br />
                    <input 
                        name="seat_num" 
                        type="number" 
                        placeholder="0"
                        value={this.state.seat_num}
                        onChange={this.onChange} />
                    <br />
                    <br />
                    <label htmlFor="seat_cat">Desired seat category : </label>
                    <br />
                    <br />
                    <input 
                        name="seat_category" 
                        type="text" 
                        placeholder="e.g. twin" 
                        value={this.state.seat_category}
                        onChange={this.onChange} />
                    <br />
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        );
    }

}

export default SeatTypeForm;
