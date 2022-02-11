import React from "react";
import "./sign-in.styles.scss";
import  FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-buttton.component'
class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = ev => {
    const { value ,name} = ev.target;
    this.setState({ [name] : value})
  }

  handleSubmit = ev =>{
    ev.preventDefault();
    this.state({email:'' ,password:''})
  }
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handlesubmit}>

        <FormInput
        name='email' 
        type='email'
        value={this.state.email}
        label='email'
        onChange={this.handleChange}
        required
         />       
     
        <FormInput
        name='password' 
        type='password'
        value={this.state.password}
        label='password'
        onChange={this.handleChange}
        required
         /> 

         <CustomButton type="submit">
           Sign In
         </CustomButton>
        </form>
       
      </div>
    );
  }
}


export default SignIn;
