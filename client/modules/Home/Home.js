import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './Home.css';

// import Components
import Menu from './components/Menu/Menu';

// Import Actions
import { toggleActiveMenu } from "./HomeActions";
import { logOutRequest } from "../Auth/AuthActions";

class Home extends Component {

  constructor (props) {
    super(props);
    console.log('home props')
    console.log(this.props.home)
  }

  toggleActiveMenu = () => {
    this.props.dispatch(toggleActiveMenu());
  };

  handleLogOutRequest = () => {
    this.props.dispatch(logOutRequest());
  }
 
  render() {
    return (
      <div>
        <Menu 
          toggleActiveMenu={this.toggleActiveMenu}
          activeMenu={this.props.home.activeMenu}
          handleLogOutRequest={this.handleLogOutRequest}
        />
        Hello, {this.props.auth.username}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    intl: state.intl,
    auth: state.auth,
    home: state.home,
  };
};

/* const mapDispatchToProps = (dispatch) => {
  return {};
}; */

Home.propTypes = {
};

export default connect(
  mapStateToProps,
  //mapDispatchToProps
)(Home);
