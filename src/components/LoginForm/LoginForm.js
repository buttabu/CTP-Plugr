import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import LoginValidation from './LoginValidation';
import { ReduxRenderInput } from '../RenderForm/RenderForm';
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

    return(
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <ReduxRenderInput field={email} label={'Email'} />
        <ReduxRenderInput field={password} label={'Password'} type={'password'} />
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



// LoginForm = reduxForm({
//   form: 'LoginForm',
//   validate: LoginValidation,

// })(LoginForm)

// export default LoginForm





