import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import LoginValidation from './LoginValidation';
import { ReduxRenderInput } from 'utils/renderform';
import { Link } from 'react-router';

class LoginForm extends Component{
  constructor(props) {
    super(props);
  }

  handleSubmit = (values) =>{
    //values.preventDefault()
    this.props.resetForm();
    //this.props.login(values);
    console.log("LOGINFORM VALUES:", values);
  }

  render(){
    console.log("LoginForm PROPS: ", this.props);
    const { fields: { email, password }, handleSubmit, error} = this.props; 
    const mdsm_12 = "col-sm-12 col-md-12";

    return(
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <ReduxRenderInput field={email} labelClassName={mdsm_12} label={"Email"} inputClassName={mdsm_12} />
        <ReduxRenderInput field={password} labelClassName={mdsm_12} label={"Password"} inputClassName={mdsm_12} type={"password"} />
        {error && <p className="text-danger"><strong>{error}</strong></p>}
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'LoginForm',
  fields: ['email', 'password'],
  validate: LoginValidation,
  forceUnregisterOnUnmount: true
})(LoginForm)





