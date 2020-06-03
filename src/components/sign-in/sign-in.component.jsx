/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: '', password: '' });
  }

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" type="email" label="Email" value={email} required handleChange={this.handleChange} />
          <FormInput name="password" type="password" label="Password" value={password} required onChange={this.handleChange} />

          <CustomButton type="submit">Sign In </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
