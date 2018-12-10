import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components

// External modules
import Header from '../App/components/Header/Header';
import Footer from '../App/components/Footer/Footer';

// Import Style
import styles from './Auth.css';

class Auth extends Component {

  render() {
    return (
      <div className={styles.container}>
        hello
        ca va
    
      </div>
    );
  }
}


Auth.propTypes = {

};


const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
