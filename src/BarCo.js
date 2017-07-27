import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs-2';



class BarCo extends Component {
	render() {
		let chartData = {
			labels: ['1', '2', '3', '4', '5', '6', '7'],
			datasets: [
				{
					label: 'Rain Amount',
					backgroundColor: '#3e95cd',
					borderColor: '#8e5ea2',
					borderWidth: 1,
					hoverBackgroundColor: '#6eb3e0',
					hoverBorderColor: '#8e5ea2',
					data: this.props.store.data_bar
				}
			]
		};
		return <Bar data={chartData} />
	}
}

const mapStateToProps = (state) => {
	return {
		store: state
	}
}

const BarComponent = connect(mapStateToProps)(BarCo)


export default BarComponent;