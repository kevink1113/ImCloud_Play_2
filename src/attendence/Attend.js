import React, { Component, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import moment from 'moment';
import { BiCalendarCheck } from 'react-icons/bi';
import AttendCal from '../components/AttendCal';
import Play2_MainPage from '../components/Play2_MainPage';

const selectedDays = [
	moment().add(-1, 'days'),
	moment().add(-3, 'days'),
	moment().add(-7, 'days'),
	moment().add(-8, 'days'),
	moment().add(-12, 'days'),
	moment().add(-60, 'days'),
];

class Attend extends Component {
	onChange = (date) => {
		this.setState({ date });
		console.log('selected Date>> ' + this.state.date);
	};

	render() {
		return (
			<>
				<Play2_MainPage startNumber="4" tab1={false} tab2={false} tab3={false} tab4={true} />
				<AttendContainer>
					<AttendCal selectedDays={selectedDays} />
					<InfoContainer>
						<h3>
							<CheckIcon size={30} />
							<span>출석 체크에 대한 안내</span>
						</h3>
						<ul>
							<li>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat fringilla
							</li>
							<li>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat fringilla
								eget tincidunt ut, consequat sed purus. Pellentesque in
							</li>
							<li>
								eget tincidunt ut, consequat sed purus. Pellentesque interdum aliquam condimentum.
								Aenean aliquam a purus sit amet sodales. Maece
							</li>
						</ul>
					</InfoContainer>
				</AttendContainer>
			</>
		);
	}
}

export default Attend;

const AttendContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
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

const CheckIcon = styled(BiCalendarCheck)`
	padding-right: 10px;
`;
