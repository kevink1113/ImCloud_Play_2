/* eslint-disable */
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';

import { differenceInCalendarDays } from 'date-fns';

const selected = [new Date('2021-02-17')];
const today = [Date.now()];
const datesEvent = [new Date('2021-02-5'), new Date('2021-02-11'), new Date('2021-02-16')];
const datesCody = [
	new Date('2021-02-03'),
	new Date('2021-02-05'),
	new Date('2021-02-03'),
	new Date('2021-02-06'),
	new Date('2021-02-13'),
	new Date('2021-02-15'),
];

function isSameDay(a, b) {
	return differenceInCalendarDays(a, b) === 0;
}

function tileContent({ date, view }) {
	// Add class to tiles in month view only
	if (view === 'month') {
		// Check if a date React-Calendar wants to check is on the list of dates to add class to
		if (datesEvent.find((dDate) => isSameDay(dDate, date))) {
			console.log(date);
			return (
				<svg height="10" width="10" style={{ position: 'absolute' }}>
					<circle cx="5" cy="5" r="5" />
				</svg>
			);
		}
	}
}

function tileClassName({ date, view }) {
	// Add class to tiles in month view only
	if (view === 'month') {
		// Check if a date React-Calendar wants to check is on the list of dates to add class to
		if (selected.find((dDate) => isSameDay(dDate, date))) {
			return 'selected';
		}
		if (datesCody.find((dDate) => isSameDay(dDate, date))) {
			return 'cody';
		}
		if (today.find((dDate) => isSameDay(dDate, date))) {
			return 'today';
		}

		if (date <= Date.now()) {
			return 'past';
		}
	}
}

const Sample = styled.div`
	button:focus {
		outline: none;
	}

	.react-calendar {
		max-width: 600px;
		margin: 20px;
	}
	.react-calendar__navigation {
		display: flex;
		justify-content: center;
		margin-bottom: 10px;
	}
	.react-calendar__navigation__label {
		flex-grow: 0.3 !important;
		width: 20px;
		border: none;
		background: white;
		span {
			color: black;
			font-size: 1.2rem;
		}
	}

	.i_day-picker-arrow-left {
		border-top: 10px solid transparent;
		border-bottom: 10px solid transparent;
		border-right: 14px solid gray;
		cursor: pointer;
	}
	.i_day-picker-arrow-right {
		border-top: 10px solid transparent;
		border-bottom: 10px solid transparent;
		border-left: 14px solid gray;
		cursor: pointer;
	}

	.react-calendar__navigation__arrow {
		border: none;
		background: white;
		width: 30px;
	}

	.react-calendar__month-view__weekdays__weekday {
		text-align: center;
		abbr[title] {
			text-decoration: none;
		}
	}
	.react-calendar__month-view__days__day {
		border: none;
		border-radius: 10px;
		height: 60px;
		border: 5px solid white;
		font-weight: bold;
		cursor: pointer;
	}

	.today {
		background: rgb(68, 201, 185);
		color: white;
	}
	.red {
		background: yellow;
	}
	.cody {
		background: orange;
	}
	.selected {
		border: 4px solid red;
	}
	svg {
		fill: red;
	}
	.past {
		background: lightgray;
	}

	input,
	button {
		font: inherit;
	}

	header {
		display: none;
	}
`;

function MyApp() {
	const [value, onChange] = useState(new Date());

	return (
		<Sample>
			<header>
				<h1>react-calendar sample page</h1>
			</header>
			<div className="container">
				<main className="container content">
					<Calendar
						onChange={onChange}
						tileContent={tileContent}
						tileClassName={tileClassName}
						prev2Label={null}
						next2Label={null}
						showNeighboringMonth={false}
						minDetail="month"
						prevLabel={<div className="i_day-picker-arrow-left" />}
						nextLabel={<div className="i_day-picker-arrow-right" />}
					/>
				</main>
			</div>
		</Sample>
	);
}

export default MyApp;
