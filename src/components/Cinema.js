import React, { Component } from 'react';
import CinemaRow from '../components/CinemaRow';
import TicketForm from '../components/TicketForm';
import CinemaDetails from '../components/CinemaDetails';


class Cinema extends Component {

    state = {
        seats: [],
        text: '',
        total_tickets_sold: 0,
        total_revenue: 0
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
                    let price = 0
                    if ( i > 0 &&  i < 3 && j > 4 && j < 16){
                        seatState = 'twin';
                        price = 25000; 
                    } else if (i > 0 && i < 3 && (j < 5 || j > 15)) {
                        seatState = 'vvip';
                        price = 100000; 
                    } else if ((i > 2 && i < 8)) {
                        seatState = 'vvip';
                        price = 100000; 
                    } else if (i > 7 && i < 13) {
                        seatState = 'vip';
                        price = 50000; 
                    }  else if (i > 12) {
                        seatState = 'economy';
                        price = 20000; 
                    }
                    arr[i][j] = {
                        display: defaultValue,
                        seatStatus: seatState,
                        price: price,
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

    sellTicket = (row, column) => {
        let rowIndex = this.seatRow(row);
        let seatList = this.state.seats;
        let revenue = this.state.total_revenue;
        let ticketsSold = this.state.total_tickets_sold;
        let pairRow;
        if (!seatList[rowIndex][column].available) {
            alert('The seat is not available.');
            return;
        }

        if (seatList[rowIndex][column].seatStatus === 'twin') {
            if (!window.confirm(`This a twin seat you will be buying. Please Confirm.`)) {
                return;
            }
            if (column % 2 === 0) {
                pairRow = parseInt(column) - 1;
                if (!window.confirm(`This a twin seat is ${row}-${pairRow}.`)) {
                    return;
                }
            } else {
                pairRow = parseInt(column) + 1;
                if (!window.confirm(`This a twin seat is ${row}-${pairRow}.`)) {
                    return;
                }
            }
            seatList[rowIndex][pairRow].available = false;
            seatList[rowIndex][pairRow].display = '#';
            seatList[rowIndex][(column)].available = false;
            seatList[rowIndex][(column)].display = '#'
            revenue += (seatList[rowIndex][column].price) * 2
            ticketsSold += 2
            if (!window.confirm(`This a twin seat is ${row}-${pairRow}.`)) {
                return;
            }
        } else {
            seatList[rowIndex][column].available = false;
            seatList[rowIndex][column].display = '#';
            revenue += seatList[rowIndex][column].price
            ticketsSold += 1
        }
        //Display these values Below the chart.
        this.setState({ 
            seats: seatList,
            total_revenue: revenue,
            total_tickets_sold: ticketsSold
        })
        alert('Success! You have successfully purchased a ticket.');
    }

    seatRow = (char) => {
        let seatRowIndex = (parseInt(char.charCodeAt(0)) - 65) + 1;
        return seatRowIndex;
    }

    render() {
        return(
            <div className="cinema-table">
                <table className="table">
                    <tbody>
                        { this.renderCinemaRow() }
                    </tbody>
                </table>
                <CinemaDetails revenue={this.state.total_revenue} ticketsSold={this.state.total_tickets_sold}/>
                <TicketForm sellTicket={this.sellTicket}/> 
            </div>
        );
    };

}

export default Cinema;
