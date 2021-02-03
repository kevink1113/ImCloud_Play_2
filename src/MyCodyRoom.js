import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { matchPath, Route } from 'react-router-dom';

import MyCodyRoomList from './MyCodyRoomList';
import OtherCodyPhoto from './components/OtherCodyPhoto';
import OtherCodyDetail from './OtherCodyDetail';
import Play2_MainPage from './components/Play2_MainPage';

function MyCodyRoom({ match }) {
	return (
		<>
			<Play2_MainPage startNumber="2" tab1={false} tab2={true} tab3={false} tab4={false} />
			<Route exact path={match.path} component={MyCodyRoomList} />
			<Route
				path={`${match.path}/:id`}
				render={(props) => <OtherCodyDetail {...props} isOther />}
			/>
		</>
	);
}

export default MyCodyRoom;
