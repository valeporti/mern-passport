import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

import styles_app from '../../../App/App.css';

class SignUp extends Component {

  signUp = () => {
    const user = {
      first_name: this.first_name.value,
      last_name: this.last_name.value,
      email: this.email.value,
      password: this.password.value,
    }
    this.props.handleSignUp(user);
  }

  comparePass = (value) => {
    console.log('on compare Pass')
    console.log(value)
  }

  render() {
    return (
      <div>
        <div>
          <span className={styles_app.inputIcon}><i className="fas fa-user"></i></span>
          <FormControl className={styles_app.feedbackInput} inputRef={ref => { this.first_name = ref; }} placeholder="Write your First Name please" type="text" />
        </div>
        <div>
          <span className={styles_app.inputIcon}><i className="far fa-user"></i></span>
          <FormControl className={styles_app.feedbackInput} inputRef={ref => { this.last_name = ref; }} placeholder="Write your Last Name please" type="text" value={this.last_name_input} />
        </div>
        <div>
          <span className={styles_app.inputIcon}><i className="fas fa-at"></i></span>
          <FormControl className={styles_app.feedbackInput} inputRef={ref => { this.email = ref; }} placeholder="Enter your e-mail / username" type="text" value={this.email_input} />
        </div>
        <div>
          <span className={styles_app.inputIcon}><i className="fas fa-key"></i></span>
          <FormControl className={styles_app.feedbackInput} inputRef={ref => { this.password = ref; }} placeholder="Password please :)" type="password" value={this.password_input} />
        </div>
        <div>
          <span className={styles_app.inputIcon}><i className="fas fa-unlock-alt"></i></span>
          <FormControl className={styles_app.feedbackInput} inputRef={ref => { this.password_verification = ref; }} placeholder="Verify your Password :)" type="password" value={this.password_verif_input} onChange={(e) => this.comparePass(e.target.value)} />
        </div>
        <Button className={styles_app.button_form} type="submit" onClick={this.signUp}>Let's get in</Button>
      </div>
    );
  }
}

SignUp.propTypes = {
};

export default SignUp;
