import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LogIn extends Component {

  logIn = () => {
    const user = {
      email: this.refs.email.value,
      password: this.refs.password.value,
    }
    this.props.handleLogIn(user);
  }

  render() {
    return (
      <div>
        email
        <input name="email" type="text" ref="email" placeholder="email"  />
        Password
        <input name="password" type="password" ref="password" placeholder="password"  />
        <input type="submit" placeholder="click" onClick={this.logIn} />
      </div>
    );
  }
}

LogIn.propTypes = {
};

export default LogIn;
