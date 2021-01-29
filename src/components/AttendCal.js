import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Calendar from 'react-calendar-multiday';

const reactToChange = (ob) => {
	console.warn(ob);
};

class AttendCal extends Component {
	onChange = (date) => {
		this.setState({ date });
		console.log('selected Date>> ' + this.state.date);
	};

	render() {
		return (
			<CalendarContain>
				<Calendar
					reset={false}
					isMultiple={true}
					selected={this.props.selectedDays}
					onChange={reactToChange}
				/>
			</CalendarContain>
		);
	}
}

const CalendarContain = styled.div`
	margin: 50px;
	width: 600px;
	height: 500px;

	.month-day {
		border-radius: 10px;
		margin: 5px;
		height: 30px;
		background: rgb(235, 237, 248) !important;
		font-weight: 500;
	}
	[disabled] {
		background: rgb(220, 220, 220) !important;
	}

	.i_day-picker-body {
		pointer-events: none;
	}

	.o_selected-current-channel-day {
		// background: center / contain no-repeat url('./1.jpg') !important;
		// object-fit: scale-down;
		background: lightgreen !important;
		background: #ff4500 !important;
		color: white !important;
		//
	}

	.i_day-picker-arrow-left {
		border-top: 10px solid transparent;
		border-bottom: 10px solid transparent;
		border-right: 14px solid gray;
		margin-right: 60px;
	}
	.i_day-picker-arrow-right {
		border-top: 10px solid transparent;
		border-bottom: 10px solid transparent;
		border-left: 14px solid gray;
		margin-left: 60px;
	}
	.i_day-picker-title {
		width: 150px;
	}
	.o_day-picker .e_day-picker-buttons {
		padding-bottom: 20px;
	}
	.i_day-picker-row > div {
		border: none;
		color: gray !important;
	}

	.prev-month-day {
		display: none;
	}

	.i_day-picker-header {
		color: black;
		background: white;
		padding-bottom: 20px;
	}
	.i_day-picker-row {
		border: none;
	}
	.next-month-day {
		display: none;
	}
`;

export default AttendCal;
