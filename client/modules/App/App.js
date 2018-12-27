import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Style
import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';

// Import Actions
import { toggleAddPost, toggleActiveMenu } from './AppActions';
import { switchLanguage } from '../../modules/Intl/IntlActions';
import { sessionUserRequest } from '../Auth/AuthActions';

let DevTools;
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  DevTools = require('./components/DevTools').default;
}

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
    console.log('props')
    console.log(props);
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
    this.searchForUser();
  }

  searchForUser = () => {
    this.props.dispatch(sessionUserRequest());
  }

  toggleAddPostSection = () => {
    this.props.dispatch(toggleAddPost());
  };

  toggleActiveMenu = () => {
    this.props.dispatch(toggleActiveMenu());
  };

  

  /* !!! Just to understand, delete "{this.props.children}" after further developement !!! */ 
  render() {
    return (
      <div>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
        <div>
          <Helmet
            title="Wander - Blog App"
            titleTemplate="%s - Blog App"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
          <Header
            switchLanguage={lang => this.props.dispatch(switchLanguage(lang))}
            intl={this.props.intl}
            toggleAddPost={this.toggleAddPostSection}
          />
          <Menu 
            toggleActiveMenu={this.toggleActiveMenu}
            activeMenu={this.props.app.activeMenu}
          />

          <div className={styles.container}>
            {/* this.props.children */}
            {
              (this.props.auth.log_in) ? <Auth /> : (Hello)
            }
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    app: store.app,
    intl: store.intl,
    auth: store.auth,
  };
}

export default connect(mapStateToProps)(App);
