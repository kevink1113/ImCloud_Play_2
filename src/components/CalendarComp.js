/* eslint-disable */
import React, { Component, useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import { format } from 'date-fns';
import { differenceInCalendarDays } from 'date-fns';
import { BiCalendarCheck } from 'react-icons/bi';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper/core';
import { render } from '@testing-library/react';

SwiperCore.use([Navigation, Pagination, Scrollbar]);

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

const data = [
	{
		StartDate: '20.06.01',
		EndDate: '20.06.03',
		Title: '제주도 여행',
		CodyCount: 4,
		img:
			'https://images.unsplash.com/photo-1553570739-330b8db8a925?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
	},
	{
		StartDate: '20.02.01',
		EndDate: '20.03.03',
		Title: '스키장',
		CodyCount: 3,
		img:
			'https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1083&q=80',
	},
	{
		StartDate: '20.06.01',
		EndDate: '20.06.04',
		Title: '하와이 여행',
		CodyCount: 1,
		img:
			'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
	},
	{
		StartDate: '20.06.01',
		EndDate: '20.06.03',
		Title: '뉴욕 여행',
		CodyCount: 4,
		img:
			'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
	},
	{
		StartDate: '20.06.01',
		EndDate: '20.06.03',
		Title: '제주도 여행',
		CodyCount: 4,
		img:
			'https://images.unsplash.com/photo-1553570739-330b8db8a925?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
	},
	{
		StartDate: '20.06.01',
		EndDate: '20.06.03',
		Title: '제주도 여행',
		CodyCount: 4,
		img:
			'https://images.unsplash.com/photo-1553570739-330b8db8a925?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
	},
	{
		StartDate: '20.06.01',
		EndDate: '20.06.03',
		Title: '제주도 여행',
		CodyCount: 4,
		img:
			'https://images.unsplash.com/photo-1553570739-330b8db8a925?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
	},
	{
		StartDate: '20.06.01',
		EndDate: '20.06.03',
		Title: '제주도 여행',
		CodyCount: 4,
		img:
			'https://images.unsplash.com/photo-1553570739-330b8db8a925?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
	},
	{
		StartDate: '20.06.01',
		EndDate: '20.06.03',
		Title: '제주도 여행',
		CodyCount: 4,
		img:
			'https://images.unsplash.com/photo-1553570739-330b8db8a925?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
	},
	{
		StartDate: '20.06.01',
		EndDate: '20.06.03',
		Title: '제주도 여행',
		CodyCount: 4,
		img:
			'https://images.unsplash.com/photo-1553570739-330b8db8a925?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
	},
	{
		StartDate: '20.06.01',
		EndDate: '20.06.03',
		Title: '제주도 여행',
		CodyCount: 4,
		img:
			'https://images.unsplash.com/photo-1553570739-330b8db8a925?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
	},
];

/*
function onClickDay(value, event) {
	alert('Clicked Day: ', value, event);
	console.log('Clicked Day: ', value);
	onChange(value);
}
*/
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
				<svg height="10" width="10" style={{ position: 'absolute' }} className="event">
					<circle cx="5" cy="5" r="5" />
				</svg>
			);
		}
	}
}
/*
function tileClassName({ date, view }) {
	// Add class to tiles in month view only
	if (view === 'month') {
		// Check if a date React-Calendar wants to check is on the list of dates to add class to
		// if (selected.find((dDate) => isSameDay(dDate, date))) {
		//	return 'selected';
		// }
		if (isSameDay(selected, date)) {
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
*/
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
		margin-bottom: 1.7rem;
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
		transition: all 0.3s ease;
		border: none;
		border-radius: 10px;
		height: 60px;
		border: 5px solid white;
		font-weight: bold;
		cursor: pointer;
	}
	.react-calendar__tile--active {
		border: 4px solid #ff4500;
	}

	.today {
		background: rgb(68, 201, 185);
		color: white;
	}
	.cody {
		background: #ffbe4f;
	}
	.event {
		fill: #ff4500;
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

	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;

class MyApp extends Component {
	// const [value, onChange] = useState(new Date());
	state = {
		date: new Date(),
	};
	tileClassName({ date, view }) {
		// Add class to tiles in month view only
		// dayy = this.state.value;
		if (view === 'month') {
			// Check if a date React-Calendar wants to check is on the list of dates to add class to
			console.log('비교', this.state.date, date);

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
	tileClassName = this.tileClassName.bind(this);
	/*
	onClickDay(value, event) {
		// alert('Clicked Day: ', format(value, 'yyyy-MM-dd'));

		console.log('Clicked Day: ', value);
		this.setState({ date: value });
		selected = this.state.date;
		// onChange(value);
	}
	onClickDay = this.onClickDay.bind(this);
	*/
	onChange = (date) => this.setState({ date });
	/*
	componentDidUpdate() {
		this.tileClassName();
	}
	*/
	render() {
		return (
			<Sample>
				<Calendar
					onChange={this.onChange}
					value={this.state.date}
					// onClickDay={this.tileClassName}
					tileContent={tileContent}
					tileClassName={this.tileClassName}
					prev2Label={null}
					next2Label={null}
					showNeighboringMonth={false}
					minDetail="month"
					prevLabel={<div className="i_day-picker-arrow-left" />}
					nextLabel={<div className="i_day-picker-arrow-right" />}
				/>
				<InfoContainer>
					<h3>
						<CheckIcon size={20} />
						<span>{format(this.state.date, 'MM / dd')}</span>
					</h3>
					<div>
						<p>저장된 코디 4개</p>
						<span>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat fringilla
						</span>
						<Swiper
							slidesPerView={3}
							centeredSlides={true}
							spaceBetween={170}
							onSlideChange={() => console.log('slide change')}
							onSwiper={(swiper) => console.log(swiper)}
							pagination={{ type: 'bullets', dynamicBullets: true }}
							navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
						>
							<div>
								{data.map((value, index) => {
									return (
										<SwiperSlide key={index}>
											<img src={value.img} />
										</SwiperSlide>
									);
								})}
							</div>
							<div class="swiper-button-next"></div>
							<div class="swiper-button-prev"></div>
						</Swiper>
					</div>
				</InfoContainer>
			</Sample>
		);
	}
}

export default MyApp;

const InfoContainer = styled.div`
	margin: 0 2rem;
	width: 500px;
	h3 {
		display: flex;
		align-items: center;
		border-bottom: solid lightgray;
		border-width: 1px;
		font-size: 1.7rem;
		font-weight: 400;
		margin: 0;
	}
	li {
		padding-bottom: 20px;
	}
	img {
		width: 200px;
		height: 270px;
	}
`;

const CheckIcon = styled(BiCalendarCheck)`
	padding-right: 10px;
`;
