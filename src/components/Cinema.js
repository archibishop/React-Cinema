import React, { Component } from 'react';
import CinemaRow from '../components/CinemaRow';

class Cinema extends Component {

    state = {
        seats: []
    }

    componentWillMount () {
        let newList = this.createArray(17,21)
        this.setState({ seats: newList})
    }

    createArray = (rows, columns) => {

        let arr = [];

        let defaultValue = '*'

        // Creates all lines:
        for (var i = 0; i < rows; i++) {

            // Creates an empty line
            arr.push([]);

            // Adds cols to the empty line:
            arr[i].push(new Array(columns));

            for (var j = 0; j < columns; j++) {
                // Initializes:
                if ( i === 0 && j === 0){
                    arr[i][j] = {
                        display: '',
                        seatStatus: '',
                        price: 0,
                        available: false
                    }
                } else if (i === 0 && j === 1) {
                    arr[i][j] = {
                        display: 1,
                        seatStatus: '',
                        price: 0,
                        available: false
                    }
                } else if (i === 0 && j !== 0) {
                    let x = j - 1;
                    let displayValue = arr[i][x].display + 1;
                    arr[i][j] = {
                        display: displayValue,
                        seatStatus: '',
                        price: 0,
                        available: false
                    }
                } else if (j === 0 && i === 1) {
                    arr[i][j] = {
                        display: 'A',
                        seatStatus: '',
                        price: 0,
                        available: true
                    }
                } else if (j === 0 && i !== 0) {
                    let x = i - 1
                    let displayChar = this.nextChar(arr[x][j].display)
                    arr[i][j] = {
                        display: displayChar,
                        seatStatus: '',
                        price: 0,
                        available: true
                    }
                }else {

                    let seatState = '';
                    if ( i > 0 &&  i < 3 && j > 4 && j < 16){
                        seatState = 'pair';
                    } else if (i > 0 && i < 3 && (j < 5 || j > 15)) {
                        seatState = 'vvip';
                    } else if ((i > 2 && i < 8)) {
                        seatState = 'vvip';
                    } else if (i > 7 && i < 13) {
                        seatState = 'vip';
                    }  else if (i > 12) {
                        seatState = 'economy';
                    }
                    arr[i][j] = {
                        display: defaultValue,
                        seatStatus: seatState,
                        price: 0,
                        available: true
                    }
                }
            }
        }

        return arr;
    }

    nextChar = (c) => {
        return String.fromCharCode(c.charCodeAt(0) + 1);
    }

    renderCinemaRow = () => this.state.seats.map((seats, index) => (
        <CinemaRow seats={seats} index={index} key={index} />
    ))

    render() {
        console.log(this.state.seats)
        return(
            <div className="cinema-table">
                <table className="table">
                    <tbody>
                        { this.renderCinemaRow() }
                    </tbody>
                </table>
            </div>
        );
    };

}

export default Cinema;
