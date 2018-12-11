import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class SignUp extends Component {

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
}

export default SignUp;
