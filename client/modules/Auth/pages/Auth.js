import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from '../Auth.css';

class Auth extends Component {
  render() {
    return (
      <div>
        <p>hello</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

Auth.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
