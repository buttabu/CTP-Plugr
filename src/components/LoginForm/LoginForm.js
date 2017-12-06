 import React, { Component } from 'react';
import { RenderInput, RenderPasswordInput, RenderSubmitButton } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';
import { Link } from 'react-router';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorObject: '',
      pageFields: '',
      NullErrorContainer: ''
    };
  }

  componentWillMount() {
    const tempPageFields = {
      email: ['email', 'required'],
      password: ['required']
    };
    const errorContainer = {};
    Object.keys(tempPageFields).forEach(key => {
      errorContainer[key] = { error: null };
    });
    this.setState({ errorObject: errorContainer, pageFields: tempPageFields, NullErrorContainer: errorContainer });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    const fields = this.checkValidation(this.state.pageFields, this.state);
    const isThereError = this.checkErrorInValidation(fields);
    if (!isThereError) {
      const result = {
        email: this.state.email,
        password: this.state.password
      };
      console.log('RESULT', result);
      this.props.login(result);
      // console.log('\n\nSuccess!!!');
    }
  };

  checkValidation = (pageFields, stateFields) => {
    // match against current fields (current formpage fields) and all current states and only check for the current Fields.
    const formFields = {};
    Object.keys(pageFields).forEach(fieldName => (formFields[fieldName] = { rule: pageFields[fieldName], value: stateFields[fieldName], error: '' }));
    return createValidatorNew(formFields); // return the array with error, value, and field validation rule
  };

  checkErrorInValidation = fields => {
    if (fields.errorCount === 0) {
      return false;
    }
    this.setState({ errorObject: fields.state }); // altering the errorObj is what triggers the error mssgs on fields.
    return true;
  };

  render() {
    console.log('LoginForm PROPS: ', this.props);

    const outerGroupClassName = 'col-sm-12 col-md-12 form-field-area ';
    const labelClassName = 'col-sm-12 col-md-12 label-title';
    const inputGroupClassName = 'col-sm-12 col-md-12';
    const outerGroupClassNameButton ="col-sm-3 col-md-3 form-field-area";

    const renderRegisterLink = (
      <Link to="/register">
        <span>Register</span>
      </Link>
    );

    return (
      <div className="loginform">
        <h1 className="text-center">Login</h1>
        
        <RenderInput label="" value={this.state.email} name="email" placeholder="Email" error={this.state.errorObject.email.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={""} inputGroupClassName={inputGroupClassName} />
        <RenderPasswordInput label="" value={this.state.password} name="password" placeholder="Password" error={this.state.errorObject.password.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={""} inputGroupClassName={inputGroupClassName} />
        <RenderSubmitButton outerGroupClassName={outerGroupClassNameButton} buttonClassName={"login-btn"} onClick={this.handleSubmit} label="Login" />
        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
          <span>Don't have an account ? {renderRegisterLink} </span>
        </div>

      </div>
    );
  }
}
