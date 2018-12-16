import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import SignUp from './components/SignUp/SignUp';

// External modules
import Header from '../App/components/Header/Header';
import Footer from '../App/components/Footer/Footer';

// Import Actions
import { signUpRequest } from './AuthActions';

// Import Selectors

// Import Style
import styles from './Auth.css';

class Auth extends Component {
  constructor (props) {
    super(props);
    console.log('aut props')
    console.log(this.props)
  }

  handleSignUp = (user) => {
    this.props.signUpRequest(user);
  }
  
  render() {
    return (
      <div className={styles.container}>
        <SignUp handleSignUp={this.handleSignUp} />
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
    signUpRequest: (user) => {
      dispatch(signUpRequest(user))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);

/*
signUp = (event) => {
  event.preventDefault();
  console.log(event)
  console.log(this)
  data = {
    name: 'hello',
    email: 'sa@s'
  }
  axios({
    method: 'post',
    url: '/auth/signUp',
    params: data
  })
  .then(function (response) {
    if (response.status == 200 && response.data.hasOwnProperty('success')) {
      console.log('message sent')
    } else {
      console.log('message not sent')
    }
    console.log(response);
  })
  .catch(function (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
    console.log(error);
  });

}

render() {
  return (
    <div>
      <form action='/auth/signUp' onSubmit={this.signUp}>
        Name
        <input name="name" type="text" id="name" placeholder="name"  />
        email
        <input name="email" type="text" id="email" placeholder="email"  />
        <input type="submit" placeholder="click" />
      </form> 
    </div>
  );
}
*/