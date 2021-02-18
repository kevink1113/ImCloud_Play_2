import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import FollowingList from './FollowingList';
import OtherCodyDetail from '../CodyDetail';
import Play2_MainPage from '../components/Play2_MainPage';

export const followProps = {
	match: PropTypes.object,
};

export function Following({ match }) {
	return (
		<>
			<Play2_MainPage startNumber="2" tab1={false} tab2={true} tab3={false} tab4={false} />
			<Route exact path={match.path} component={FollowingList} />
			<Route
				path={`${match.path}/:id`}
				render={(props) => <OtherCodyDetail {...props} isOther />}
			/>
		</>
	);
}

Following.propTypes = followProps;

export default Following;
