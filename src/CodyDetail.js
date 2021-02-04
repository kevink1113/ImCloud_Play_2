import React, { Component, useState } from 'react';
import styled from 'styled-components';
import CodyPhoto from './components/CodyPhoto';
import Statistics from './components/Statistics';
import Button from './components/Button';
import Play2_MainPage from './components/Play2_MainPage';
import SideBar from './components/SideBar';
import SideBarOther from './components/SideBarOther';

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

const data3 = {
	labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
	datasets: [
		{
			label: '# of Votes',
			data: [10, 23, 6, 4, 5, 7],
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

const CodyDetailContainer = styled.div`
	display: flex;
`;

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
	flex-grow: 1;
`;

const Details = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ButtonContainer = styled.div`
	display: flex;
	width: 400px;
	align-items: center;
	justify-content: space-evenly;
`;

class OtherCodyDetail extends Component {
	render() {
		return (
			<CodyDetailContainer>
				<>{this.props.isOther ? <SideBarOther /> : <SideBar />}</>
				<StyledCodyDetail>
					{this.props.isOther ? (
						<>
							<CodyPhoto src showLikeShare likes={30} />
							<Details>
								<Statistics data={data} data2={data2} />
								<ButtonContainer>
									<Button link="/others" size="large" label="목록으로" />
								</ButtonContainer>
							</Details>
						</>
					) : (
						<>
							<CodyPhoto src />
							<Details>
								<Statistics data={data} data2={data3} />
								<ButtonContainer>
									<Button size="large" label="공유하기" />
									<Button link="/my" size="large" label="목록으로" />
								</ButtonContainer>
							</Details>
						</>
					)}
				</StyledCodyDetail>
			</CodyDetailContainer>
		);
	}
}

export default OtherCodyDetail;
