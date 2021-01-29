import React, { Component, useState } from 'react';
import styled from 'styled-components';
import OtherCodyPhoto from './components/OtherCodyPhoto';
import Statistics from './components/Statistics';
import Button from './components/Button';

const InfoContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 500px;
	h3 {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	li {
		padding-bottom: 20px;
	}
`;

const StyledCodyDetail = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
`;

const Details = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

class OtherCodyDetail extends Component {
	render() {
		return (
			<StyledCodyDetail>
				<OtherCodyPhoto src />
				<Details>
					<Statistics />
					<Button size="large" label="목록으로" />
				</Details>
			</StyledCodyDetail>
		);
	}
}

export default OtherCodyDetail;
