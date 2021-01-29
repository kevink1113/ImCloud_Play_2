import React, { Component } from 'react';
import styled from 'styled-components';
import { HorizontalBar, Doughnut } from '@reactchartjs/react-chart.js';

const data = {
	labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
	datasets: [
		{
			label: '# of Votes',
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)',
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
			],
			borderWidth: 1,
		},
	],
};

const data2 = {
	labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
	datasets: [
		{
			label: '# of Votes',
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)',
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
			],
			borderWidth: 1,
		},
	],
};

class Statistics extends Component {
	render() {
		return (
			<StyledStatistics>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat fringilla
					augue, dictum pharetra sem congue eu. Maecenas vel iaculis magna, ac hendrerit nibh. Duis
					vel dolor efficitur, lobortis elit at, faucibus augue. Pellentesque ac congue elit.
					Vivamus
				</p>

				<ChartsContainer>
					<HorizontalBar
						data={data}
						width={'400px'}
						height={'300px'}
						options={{ maintainAspectRatio: false, responsive: false }}
					/>
					<Doughnut
						data={data2}
						width={'300px'}
						height={'300px'}
						options={{ maintainAspectRatio: false, responsive: false }}
					/>
				</ChartsContainer>
			</StyledStatistics>
		);
	}
}

export default Statistics;

const StyledStatistics = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
	width: 700px;
	p {
		width: 500px;
	}
`;

const ChartsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	align-content: center;

	margin: 2rem;
	justify-content: space-between;s
`;
