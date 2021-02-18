import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Attend from './attendence/Attend';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import UploadPhoto from './upload/UploadPhoto';
import MyCodyRoom from './myCodyRoom/MyCodyRoom';
import OtherCody from './shareRoom/OtherCody';
import Following from './follow/Following';

// import MyApp from './Calendar';

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
			{/*<MyApp />*/}
			{/*  메뉴창  */}
			<Route exact path="/" component={UploadPhoto}></Route>
			<Route path="/my" component={MyCodyRoom}></Route>
			<Route path="/others" component={OtherCody}></Route>
			<Route path="/attend" component={Attend}></Route>
			<Route path="/follow" component={Following}></Route>
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
