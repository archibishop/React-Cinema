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
                    arr[i][j] = ''
                } else if (i === 0 && j === 1) {
                    arr[i][j] = 1
                } else if (i === 0 && j !== 0) {
                    let x = j - 1
                    arr[i][j] = arr[i][x] + 1
                } else if (j === 0 && i === 1) {
                    arr[i][j] = 'A'
                } else if (j === 0 && i !== 0) {
                    let x = i - 1
                    arr[i][j] = this.nextChar(arr[x][j])
                }else {
                    arr[i][j] = defaultValue;
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
