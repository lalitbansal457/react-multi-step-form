import React from 'react';
import ReactDOM from 'react-dom';

export default class Success extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props, props)
	}



	render() {
		return(
			<div>
		        <h2>Successfully Registered!</h2>
		        <p>Please check your email "<b>{this.props.fieldValuesStore.email}"</b> for a confirmation link to activate your account.</p>
		      </div>
		)
	}
}