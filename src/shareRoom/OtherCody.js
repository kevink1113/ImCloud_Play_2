import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import OtherCodyList from './OtherCodyList';
import OtherCodyDetail from '../CodyDetail';
import Play2_MainPage from '../components/Play2_MainPage';

const roomProps = {
	match: PropTypes.object,
};
OtherCody.propTypes = roomProps;

function OtherCody({ match }) {
	return (
		<>
			<Play2_MainPage startNumber="3" tab1={false} tab2={false} tab3={true} tab4={false} />
			<Route exact path={match.path} component={OtherCodyList} />
			<Route
				path={`${match.path}/:id`}
				render={(props) => <OtherCodyDetail {...props} isOther />}
			/>
		</>
	);
}

export default OtherCody;
