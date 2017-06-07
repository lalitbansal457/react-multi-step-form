import React from 'react';
import ReactDOM from 'react-dom'; 

import Registration from './registration.js';


export default class App extends React.Component {
	constructor() {
		super()

	}


	render() {
		return (
			<div>
				<Registration />
			</div>
		)
	}
}