import React, { Component } from 'react';
import Play2_MainPage from '../components/Play2_MainPage';

import CalendarComp from '../components/CalendarComp';

class Calendar extends Component {
	/*
	onChange = (date) => {
		this.setState({ date });
		console.log('selected Date>> ' + this.state.date);
	};
	*/
	render() {
		return (
			<>
				<Play2_MainPage startNumber="4" tab1={false} tab2={false} tab3={false} tab4={true} />

				<CalendarComp />
			</>
		);
	}
}

export default Calendar;
