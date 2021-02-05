import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { HorizontalBar, Doughnut } from '@reactchartjs/react-chart.js';

export const statisticsProps = {
	data: PropTypes.object.isRequired,
	data2: PropTypes.object.isRequired,
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
						data={this.props.data}
						width={'400px'}
						height={'300px'}
						options={{ maintainAspectRatio: false, responsive: false }}
					/>
					<Doughnut
						data={this.props.data2}
						width={'300px'}
						height={'300px'}
						options={{ maintainAspectRatio: false, responsive: false }}
					/>
				</ChartsContainer>
			</StyledStatistics>
		);
	}
}
Statistics.propTypes = statisticsProps;

export default Statistics;

const StyledStatistics = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
	// width: 700px;
	p {
		width: 500px;
	}
`;

const ChartsContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	align-content: center;

	margin: 2rem;
	justify-content: space-between;
	justify-content: center !important;
`;
