import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';



class LineCo extends Component {
    render() {
        let chartData = {
            labels: ['1', '2', '3', '4', '5', '6', '7'],
            datasets: [
                {
                    label: 'lower_bound',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: '#3e95cd',
                    borderColor: '#8e5ea2',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'red',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'red',
                    pointHoverBorderColor: 'red',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.props.store.data_line[0]
                },
                {
                    label: 'mean',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: '#3cba9f',
                    borderColor: '#c45850',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'red',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'red',
                    pointHoverBorderColor: 'red',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.props.store.data_line[1]
                },
                {
                    label: 'upper_bound',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: '#e8c3b9',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 1.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'red',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'red',
                    pointHoverBorderColor: 'red',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.props.store.data_line[2]
                }
            ]
        };
        return <Line data={chartData} />
    }
}

const mapStateToProps = (state) => {
    return {
        store: state
    }
}

const LineComponent = connect(mapStateToProps)(LineCo)


export default LineComponent;