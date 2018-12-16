import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SignUp extends Component {

  signUp = () => {
    const user = {
      name: this.refs.name.value,
      email: this.refs.email.value,
    }
    this.props.handleSignUp(user);
    //user.name = user.email = '';
  }

  render() {
    return (
      <div>
        Name
        <input name="name" type="text" ref="name" placeholder="name" />
        email
        <input name="email" type="text" ref="email" placeholder="email"  />
        <input type="submit" placeholder="click" onClick={this.signUp} />
      </div>
    );
  }
}

SignUp.propTypes = {
};

export default SignUp;
