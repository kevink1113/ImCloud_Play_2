import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Attend from './Attend';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import OtherCodyDetail from './OtherCodyDetail';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Noto Sans KR", sans-serif;
    margin: 0;
    padding: 0;
    font-weight: 300;
    overflow-x: hidden;
  }
`;

function App() {
	return (
		<React.Fragment>
			<Attend />
			<OtherCodyDetail />
		</React.Fragment>
	);
}

ReactDOM.render(
	<React.Fragment>
		<GlobalStyle />
		<App />
	</React.Fragment>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
