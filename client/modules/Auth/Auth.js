import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';
import { Tabs, Tab } from 'react-bootstrap';

// Components
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';

// External modules
import Header from '../App/components/Header/Header';
import Footer from '../App/components/Footer/Footer';

// Import Actions
import { signUpRequest, logInRequest } from './AuthActions';

// Import Selectors

// Import Style
import styles from './Auth.css';

const REGISTER_SECTION = 0;
const LOGIN_SECTION = 1;

class Auth extends Component {

  constructor (props) {
    super(props);
    console.log('aut props')
    console.log(this.props.auth)
  }

  handleSignUp = (user) => {
    this.props.signUpRequest(user);
  }

  handleLogIn = (user) => {
    this.props.logInRequest(user);
  }
  
  render() {

    /* let auth_section; 
    if (this.props.auth.auth_section == REGISTER_SECTION) {
      auth_section = <SignUp handleSignUp={this.handleSignUp} />
    } 
    else if (this.props.auth.auth_section == LOGIN_SECTION) {
      auth_section = <LogIn handleLogIn={this.handleLogIn} />
    } */
    let auth_section = <LogIn handleLogIn={this.handleLogIn} />;
    //let auth_section = <SignUp handleSignUp={this.handleSignUp} />;
    let btnClass = classNames('btn', 'btn-primary')
    return (
      <div className={styles.container}>
        <Tabs defaultActiveKey={0} id="auth_choice">
          <Tab eventKey={1} title="LogIn">
            <LogIn handleLogIn={this.handleLogIn} />
          </Tab>
          <Tab eventKey={2} title="SignUp">
            <SignUp handleSignUp={this.handleSignUp} />
          </Tab>
        </Tabs>
      </div>
    );
  }
}


Auth.propTypes = {

};


const mapStateToProps = (state) => {
  return {
    intl: state.intl,
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpRequest: (user) => { dispatch(signUpRequest(user)); },
    logInRequest: (user) => { dispatch(logInRequest(user)); }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
