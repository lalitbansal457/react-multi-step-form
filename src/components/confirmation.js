import React from 'react';
import ReactDOM from 'react-dom';

export default class Confirmation extends React.Component {
	constructor(props) {
		super(props);
		console.log(props)
	}

	render() {
		return(
				<div>
			        <h2>Confirm Registration</h2>
			        <ul>
			          <li><b>Name:</b> {this.props.fieldValuesStore.name}</li>
			          <li><b>Email:</b> {this.props.fieldValuesStore.email}</li>
			          <li><b>Age:</b> {this.props.saveDataStep2Obj.age}</li>
			          <li><b>Colors:</b> {this.props.saveDataStep2Obj.colors.join(', ')}</li>
			        </ul>
			        <ul className="form-fields">
			          <li className="form-footer">
			            <button className="btn -default pull-left" onClick={this.props.previousStep}>Back</button>
			            <button className="btn -primary pull-right" onClick={this.props.nextStep}>Submit Registration</button>
			          </li>
			        </ul>
			    </div>
		)
		
	}
}