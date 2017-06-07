import React from "react";
import ReactDOM from 'react-dom';

import AccountFields from './accountFields.js';
import SurveyFields from './surveyFields.js';
import Confirmation from './confirmation.js';
import Success from './success.js';


export default class Registration extends React.Component {
	constructor() {
		super();
		this.state = ({step: 1});
		this.nextStep = this.nextStep.bind(this);
		this.saveValue = this.saveValue.bind(this);
		this.previousStep = this.previousStep.bind(this);
		this.saveDataStep2 = this.saveDataStep2.bind(this);

		 this.fieldValues =  {
		 		name     : null,
		 		email    : null,
		 		password : null,
		 		age      : null,
		 		colors   : []
		 	}

		console.log(this.state.step);
	}

	saveValue(fields) {
		this.state.fieldValuesStore = fields
		console.log(this.fieldValuesStore);
	}

	saveDataStep2(obj) {
		this.state.saveDataStep2Obj = obj;
		console.log(this.state.saveDataStep2Obj)

	}

	nextStep() {
		console.log(this)
		this.setState({
			step : this.state.step + 1
		})
	}
	previousStep() {
		this.setState({
			step : this.state.step - 1
		})
	}

	render() {
		switch (this.state.step) {
			case 1:
				return <AccountFields fieldValues={this.fieldValues} saveValue={this.saveValue} nextStep={this.nextStep} />
			case 2:
				return <SurveyFields saveDataStep2={this.saveDataStep2} saveValue={this.saveValue} nextStep={this.nextStep} previousStep={this.previousStep} />
			case 3:
				return <Confirmation saveDataStep2Obj={this.state.saveDataStep2Obj} fieldValuesStore={this.state.fieldValuesStore} saveValue={this.saveValue} nextStep={this.nextStep} previousStep={this.previousStep}/>
			case 4:
				return <Success  fieldValuesStore={this.state.fieldValuesStore} saveValue={this.saveValue} nextStep={this.nextStep}  />
		}
	}
	/*render() {
		return (
			<div>
			'cdscsdcs';
			</div>
			
		)
	}*/
}
