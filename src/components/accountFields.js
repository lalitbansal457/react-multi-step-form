import React from 'react';
import ReactDOM from 'react-dom';

export default class AccountFields extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	saveAndContinue(e) {
		e.preventDefault();
		console.log(this.refs.name.value)
		var data = {
			name: this.refs.name.value,
			email: this.refs.email.value,
			password: this.refs.password.value,
		}

		this.props.saveValue(data);
		this.props.nextStep();
	}

	render() {
		return (
			<div>
			      <label>Name</label> 
			      <input type="text" ref="name" defaultValue={ this.props.fieldValues.name } />

			      <label>Password</label>
			      <input type="password" ref="password" defaultValue={ this.props.fieldValues.password } />

			      <label>Email</label>
			      <input type="email" ref="email" defaultValue={ this.props.fieldValues.email } />

			      <button onClick={ this.saveAndContinue.bind(this) }>Save and Continue</button>
			</div>
		)
	}
}