import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import FieldGroup from '../../../../components/FieldGroup';

import styles_app from '../../../App/App.css';

class LogIn extends Component {

  logIn = () => {
    const user = {
      username: this.email.value,
      password: this.password.value,
    }
    this.props.handleLogIn(user);
  }

  render() {
    return (
      <div>
        <div>
          <span className={styles_app.inputIcon}><i className="far fa-user"></i></span>
          <FormControl className={styles_app.feedbackInput} inputRef={ref => { this.email = ref; }} placeholder="Enter your e-mail / username" type="text" />
        </div>
        <div>
          <span className={styles_app.inputIcon}><i className="fas fa-key"></i></span>
          <FormControl className={styles_app.feedbackInput} inputRef={ref => { this.password = ref; }} placeholder="Password please :)" type="password" />
        </div>
        <Button className={styles_app.button_form} type="submit" onClick={this.logIn}>Let's get in</Button>
      </div>
    );
  }
}

LogIn.propTypes = {
};

export default LogIn;
