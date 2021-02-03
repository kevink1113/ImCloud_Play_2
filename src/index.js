import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Attend from './Attend';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';

import OtherCodyDetail from './OtherCodyDetail';

import { BrowserRouter, Route } from 'react-router-dom';
import Play2_MainPage from './components/Play2_MainPage';
import UploadPhoto from './upload/UploadPhoto';
import MyCodyRoom from './MyCodyRoom';
import MyCodyRoomList from './MyCodyRoomList';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Noto Sans KR", sans-serif;
    margin: 0;
    padding: 0;
    font-weight: 300;
    overflow-x: hidden;
  }
`;

function Play2() {
	return (
		<div className="total">
			{/*  메뉴창  */}
			<Route exact path="/" component={UploadPhoto}></Route>
			<Route path="/my" component={MyCodyRoom}></Route>
			<Route path="/others">
				<OtherCodyDetail isOther />
			</Route>
			<Route path="/attend" component={Attend}></Route>
		</div>
	);
}

ReactDOM.render(
	<React.Fragment>
		<GlobalStyle />
		<BrowserRouter>
			<Play2 />
		</BrowserRouter>
	</React.Fragment>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
