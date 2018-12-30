/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AUTH_SECTION = exports.LOG_OUT = exports.LOG_IN = exports.SIGN_UP = undefined;
exports.signUp = signUp;
exports.logIn = logIn;
exports.logOut = logOut;
exports.authSection = authSection;
exports.logOutRequest = logOutRequest;
exports.sessionUserRequest = sessionUserRequest;
exports.logInRequest = logInRequest;
exports.signUpRequest = signUpRequest;

var _apiCallerAxios = __webpack_require__(54);

var _apiCallerAxios2 = _interopRequireDefault(_apiCallerAxios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export Constants
var SIGN_UP = exports.SIGN_UP = 'SIGN_UP';
var LOG_IN = exports.LOG_IN = 'LOG_IN';
var LOG_OUT = exports.LOG_OUT = 'LOG_OUT';
var AUTH_SECTION = exports.AUTH_SECTION = 'AUTH_SECTION';

// Export Actions
function signUp(user) {
  return { type: SIGN_UP, user: user };
}
function logIn(username, bool) {
  return { type: LOG_IN, username: username, bool: bool };
}
function logOut(username, bool) {
  return { type: LOG_OUT, username: username, bool: bool };
}
function authSection(auth_section) {
  return { type: LOGGED_IN, auth_section: auth_section };
}

function logOutRequest() {
  return function (dispatch) {
    console.log('on lo out request');
    return (0, _apiCallerAxios2.default)('logout', 'get').then(function (res) {
      if (res.status) {
        console.log('logout error');
        console.log(res);
      } else {
        dispatch(logOut(res.username, false));
      }
    });
  };
}

function sessionUserRequest() {
  return function (dispatch) {
    console.log('on session Request');
    return (0, _apiCallerAxios2.default)('user', 'get').then(function (res) {
      if (res.status) {
        if (res.status == 401) {
          console.log('wrong password or wrong username');
        } else if (res.status == 400) {
          console.log('wrong access');
        } else {
          console.log('no recognized issue');
        }
        dispatch(logIn(null, false));
      } else {
        dispatch(logIn(res.username, true));
      }
    });
  };
}

function logInRequest(user) {
  return function (dispatch) {
    console.log('on login action');
    return (0, _apiCallerAxios2.default)('login', 'post', user).then(function (res) {
      if (res.status) {
        if (res.status == 401) {
          console.log('wrong password or wrong username');
        } else if (res.status == 400) {
          console.log('wrong access');
        } else {
          console.log('no recognized issue');
        }
      } else {
        dispatch(logIn(res.username, true));
      }
    });
  };
}

function signUpRequest(user) {
  return function (dispatch) {
    return (0, _apiCallerAxios2.default)('register', 'post', { user: user }).then(function (res) {
      if (res.status) {
        if (res.status == 401) {
          console.log('wrong password or wrong username');
        } else if (res.status == 400) {
          console.log('wrong access');
        } else {
          console.log('no recognized issue');
        }
      } else {
        dispatch(signUp(res.user));
      }
      /* if (res.err || !res) {
        console.log('Error on fetch dispatch. Name: ' + res.name + ' - ' + res.mssg)
      } else {
        console.log('not error dispatch')
        console.log(res)
        dispatch(signUp(res.user))
        //dispatch(logIn(res.user))
      } */
    });
  };
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleAddPost = toggleAddPost;
// Export Constants
var TOGGLE_ADD_POST = exports.TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';

// Export Actions
function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST
  };
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPost = exports.getPosts = undefined;

var _PostActions = __webpack_require__(12);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Initial State
var initialState = { data: [] };

var PostReducer = function PostReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _PostActions.ADD_POST:
      return {
        data: [action.post].concat(_toConsumableArray(state.data))
      };

    case _PostActions.ADD_POSTS:
      return {
        data: action.posts
      };

    case _PostActions.DELETE_POST:
      return {
        data: state.data.filter(function (post) {
          return post.cuid !== action.cuid;
        })
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
var getPosts = exports.getPosts = function getPosts(state) {
  return state.posts.data;
};

// Get post by cuid
var getPost = exports.getPost = function getPost(state, cuid) {
  return state.posts.data.filter(function (post) {
    return post.cuid === cuid;
  })[0];
};

// Export Reducer
exports.default = PostReducer;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DELETE_POST = exports.ADD_POSTS = exports.ADD_POST = undefined;
exports.addPost = addPost;
exports.addPostRequest = addPostRequest;
exports.addPosts = addPosts;
exports.fetchPosts = fetchPosts;
exports.fetchPost = fetchPost;
exports.deletePost = deletePost;
exports.deletePostRequest = deletePostRequest;

var _apiCallerFetch = __webpack_require__(42);

var _apiCallerFetch2 = _interopRequireDefault(_apiCallerFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export Constants
var ADD_POST = exports.ADD_POST = 'ADD_POST';
var ADD_POSTS = exports.ADD_POSTS = 'ADD_POSTS';
var DELETE_POST = exports.DELETE_POST = 'DELETE_POST';

// Export Actions
function addPost(post) {
  return {
    type: ADD_POST,
    post: post
  };
}

function addPostRequest(post) {
  return function (dispatch) {
    return (0, _apiCallerFetch2.default)('posts', 'post', {
      post: {
        name: post.name,
        title: post.title,
        content: post.content
      }
    }).then(function (res) {
      return dispatch(addPost(res.post));
    });
  };
}

function addPosts(posts) {
  return {
    type: ADD_POSTS,
    posts: posts
  };
}

function fetchPosts() {
  return function (dispatch) {
    return (0, _apiCallerFetch2.default)('posts').then(function (res) {
      dispatch(addPosts(res.posts));
    });
  };
}

function fetchPost(cuid) {
  return function (dispatch) {
    return (0, _apiCallerFetch2.default)('posts/' + cuid).then(function (res) {
      return dispatch(addPost(res.post));
    });
  };
}

function deletePost(cuid) {
  return {
    type: DELETE_POST,
    cuid: cuid
  };
}

function deletePostRequest(cuid) {
  return function (dispatch) {
    return (0, _apiCallerFetch2.default)('posts/' + cuid, 'delete').then(function () {
      return dispatch(deletePost(cuid));
    });
  };
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
__webpack_require__(18).config();

var config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017',
  port: process.env.PORT || 8000,
  'entity': 'auths',
  'service': 'auths',
  'usernameField': 'username',
  'passwordField': 'password'
};

exports.default = config;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mongoose = __webpack_require__(5);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var User = new Schema({
  first_name: { type: 'String', required: true },
  last_name: { type: 'String', required: true },
  email: { type: 'String', required: true, unique: true },
  username: { type: 'String', required: true, unique: true },
  password: { type: 'String', required: true },
  created_at: { type: 'Date', default: Date.now },
  updated_at: { type: 'Date', default: Date.now }
});

//User.plugin(passportLocalMongoose);

module.exports = _mongoose2.default.model('User', User);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShowAddPost = undefined;

var _AppActions = __webpack_require__(10);

// Initial State
var initialState = {
  showAddPost: false
}; // Import Actions


var AppReducer = function AppReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _AppActions.TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost
      };
    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
var getShowAddPost = exports.getShowAddPost = function getShowAddPost(state) {
  return state.app.showAddPost;
};

// Export Reducer
exports.default = AppReducer;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localizationData = exports.enabledLanguages = undefined;

var _reactIntl = __webpack_require__(2);

var _intl = __webpack_require__(45);

var _intl2 = _interopRequireDefault(_intl);

var _intlLocalesSupported = __webpack_require__(46);

var _intlLocalesSupported2 = _interopRequireDefault(_intlLocalesSupported);

__webpack_require__(47);

var _en = __webpack_require__(48);

var _en2 = _interopRequireDefault(_en);

var _en3 = __webpack_require__(49);

var _en4 = _interopRequireDefault(_en3);

__webpack_require__(50);

var _fr = __webpack_require__(51);

var _fr2 = _interopRequireDefault(_fr);

var _fr3 = __webpack_require__(52);

var _fr4 = _interopRequireDefault(_fr3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// list of available languages
var enabledLanguages = exports.enabledLanguages = ['en', 'fr'];

// this object will have language-specific data added to it which will be placed in the state when that language is active
// if localization data get to big, stop importing in all languages and switch to using API requests to load upon switching languages
var localizationData = exports.localizationData = {};

// here you bring in 'intl' browser polyfill and language-specific polyfills
// (needed as safari doesn't have native intl: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
// as well as react-intl's language-specific data
// be sure to use static imports for language or else every language will be included in your build (adds ~800 kb)


// need Intl polyfill, Intl not supported in Safari


if (global.Intl) {
  // Determine if the built-in `Intl` has the locale data we need.
  if (!(0, _intlLocalesSupported2.default)(enabledLanguages)) {
    // `Intl` exists, but it doesn't have the data we need, so load the
    // polyfill and patch the constructors we need with the polyfill's.
    global.Intl.NumberFormat = _intl2.default.NumberFormat;
    global.Intl.DateTimeFormat = _intl2.default.DateTimeFormat;
  }
} else {
  // No `Intl`, so use and load the polyfill.
  global.Intl = _intl2.default;
}

// use this to allow nested messages, taken from docs:
// https://github.com/yahoo/react-intl/wiki/Upgrade-Guide#flatten-messages-object
function flattenMessages() {
  var nestedMessages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return Object.keys(nestedMessages).reduce(function (messages, key) {
    var value = nestedMessages[key];
    var prefixedKey = prefix ? prefix + '.' + key : key;

    if (typeof value === 'string') {
      messages[prefixedKey] = value; // eslint-disable-line no-param-reassign
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
}

// bring in intl polyfill, react-intl, and app-specific language data

(0, _reactIntl.addLocaleData)(_en2.default);
localizationData.en = _en4.default;
localizationData.en.messages = flattenMessages(localizationData.en.messages);

(0, _reactIntl.addLocaleData)(_fr2.default);
localizationData.fr = _fr4.default;
localizationData.fr.messages = flattenMessages(localizationData.fr.messages);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SWITCH_LANGUAGE = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.switchLanguage = switchLanguage;

var _setup = __webpack_require__(19);

// Export Constants
var SWITCH_LANGUAGE = exports.SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';

function switchLanguage(newLang) {
  return _extends({
    type: SWITCH_LANGUAGE
  }, _setup.localizationData[newLang]);
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleActiveMenu = toggleActiveMenu;
// Export Constants
var TOGGLE_ACTIVE_MENU = exports.TOGGLE_ACTIVE_MENU = 'TOGGLE_ACTIVE_MENU';

// Export Actions
function toggleActiveMenu() {
  return {
    type: TOGGLE_ACTIVE_MENU
  };
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxDevtools = __webpack_require__(57);

var _reduxDevtoolsLogMonitor = __webpack_require__(58);

var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

var _reduxDevtoolsDockMonitor = __webpack_require__(59);

var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduxDevtools.createDevTools)(_jsx(_reduxDevtoolsDockMonitor2.default, {
  toggleVisibilityKey: 'ctrl-h',
  changePositionKey: 'ctrl-w'
}, void 0, _jsx(_reduxDevtoolsLogMonitor2.default, {})));

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

// Import Style


exports.Header = Header;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = __webpack_require__(8);

var _reactIntl = __webpack_require__(2);

var _Header = {
  "header": "_3EGjKVGKCGTGQn_m_YASdF",
  "content": "_391cv5n_RFU0K9SBOjXDEt",
  "site-title": "_11V45Tl3_Hdy_ARI53CW9g",
  "add-post-button": "XrNjmGRHH_vMEgGeC3S75",
  "language-switcher": "X6vAu1vEuRDWiN2kDvA_z",
  "selected": "_3ecuVjN6tTUWkR7u3Co3s"
};

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx('li', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
  id: 'switchLanguage'
}));

function Header(props, context) {
  var languageNodes = props.intl.enabledLanguages.map(function (lang) {
    return _jsx('li', {
      onClick: function onClick() {
        return props.switchLanguage(lang);
      },
      className: lang === props.intl.locale ? _Header2.default.selected : ''
    }, lang, lang);
  });

  return _jsx('div', {
    className: _Header2.default.header
  }, void 0, _jsx('div', {
    className: _Header2.default['language-switcher']
  }, void 0, _jsx('ul', {}, void 0, _ref, languageNodes)));
}

Header.contextTypes = {
  router: _propTypes2.default.object
};

exports.default = Header;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

// Import Style


// Import Images


exports.Footer = Footer;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__(2);

var _Footer = {
  "footer": "_1oiRVDtQ6fOWkhBVWcRyE_",
  "link": "_1M8Aa_r3WWMyEGTUUUQ2ov"
};

var _Footer2 = _interopRequireDefault(_Footer);

var _headerBk = '/' + "bbaeb5f32b7042f0def39648a1d111b9.png";

var _headerBk2 = _interopRequireDefault(_headerBk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx('p', {}, void 0, '\xA9 2018 \xB7 V \xB7 Valentin Portillo');

var _ref2 = _jsx('i', {
  className: 'fab fa-linkedin-in'
});

var _ref3 = _jsx('i', {
  className: 'fab fa-codepen'
});

var _ref4 = _jsx('i', {
  className: 'fab fa-github'
});

var _ref5 = _jsx('i', {
  className: 'fab fa-free-code-camp'
});

function Footer() {
  return (
    //<div style={{ background: `#FFF url(${bg}) center` }} className={styles.footer}>
    _jsx('div', {
      className: _Footer2.default.footer
    }, void 0, _ref, _jsx('p', {
      className: _Footer2.default.links
    }, void 0, _jsx('a', {
      className: _Footer2.default.link,
      href: 'https://www.linkedin.com/in/valeporti/',
      target: '_Blank'
    }, void 0, _ref2), _jsx('a', {
      className: _Footer2.default.link,
      href: 'https://codepen.io/valeporti/',
      target: '_Blank'
    }, void 0, _ref3), _jsx('a', {
      className: _Footer2.default.link,
      href: 'https://github.com/valeporti/',
      target: '_Blank'
    }, void 0, _ref4), _jsx('a', {
      className: _Footer2.default.link,
      href: 'https://www.freecodecamp.org/valeporti/',
      target: '_Blank'
    }, void 0, _ref5)))
  );
}

exports.default = Footer;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(6);

var _classnames = __webpack_require__(63);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactBootstrap = __webpack_require__(9);

var _SignUp = __webpack_require__(64);

var _SignUp2 = _interopRequireDefault(_SignUp);

var _LogIn = __webpack_require__(65);

var _LogIn2 = _interopRequireDefault(_LogIn);

var _Header = __webpack_require__(23);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(24);

var _Footer2 = _interopRequireDefault(_Footer);

var _AuthActions = __webpack_require__(7);

var _Auth = {
  "container": "_3cDq5yDKpgO7RjklIJliIN"
};

var _Auth2 = _interopRequireDefault(_Auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Components


// External modules


// Import Actions


// Import Selectors

// Import Style


var REGISTER_SECTION = 0;
var LOGIN_SECTION = 1;

var Auth = function (_Component) {
  _inherits(Auth, _Component);

  function Auth(props) {
    _classCallCheck(this, Auth);

    var _this = _possibleConstructorReturn(this, (Auth.__proto__ || Object.getPrototypeOf(Auth)).call(this, props));

    _this.handleSignUp = function (user) {
      _this.props.signUpRequest(user);
    };

    _this.handleLogIn = function (user) {
      _this.props.logInRequest(user);
    };

    console.log('aut props');
    console.log(_this.props.auth);
    return _this;
  }

  _createClass(Auth, [{
    key: 'render',
    value: function render() {

      /* let auth_section; 
      if (this.props.auth.auth_section == REGISTER_SECTION) {
        auth_section = <SignUp handleSignUp={this.handleSignUp} />
      } 
      else if (this.props.auth.auth_section == LOGIN_SECTION) {
        auth_section = <LogIn handleLogIn={this.handleLogIn} />
      } */
      var auth_section = _jsx(_LogIn2.default, {
        handleLogIn: this.handleLogIn
      });
      //let auth_section = <SignUp handleSignUp={this.handleSignUp} />;
      var btnClass = (0, _classnames2.default)('btn', 'btn-primary');
      return _jsx('div', {
        className: _Auth2.default.container
      }, void 0, _jsx(_reactBootstrap.Tabs, {
        defaultActiveKey: 0,
        id: 'auth_choice'
      }, void 0, _jsx(_reactBootstrap.Tab, {
        eventKey: 1,
        title: 'LogIn'
      }, void 0, _jsx(_LogIn2.default, {
        handleLogIn: this.handleLogIn
      })), _jsx(_reactBootstrap.Tab, {
        eventKey: 2,
        title: 'SignUp'
      }, void 0, _jsx(_SignUp2.default, {
        handleSignUp: this.handleSignUp
      }))));
    }
  }]);

  return Auth;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    intl: state.intl,
    auth: state.auth
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    signUpRequest: function signUpRequest(user) {
      dispatch((0, _AuthActions.signUpRequest)(user));
    },
    logInRequest: function logInRequest(user) {
      dispatch((0, _AuthActions.logInRequest)(user));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Auth);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _PostList = __webpack_require__(69);

var _PostList2 = _interopRequireDefault(_PostList);

var _PostCreateWidget = __webpack_require__(71);

var _PostCreateWidget2 = _interopRequireDefault(_PostCreateWidget);

var _PostActions = __webpack_require__(12);

var _AppActions = __webpack_require__(10);

var _AppReducer = __webpack_require__(17);

var _PostReducer = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Import Components


// Import Actions


// Import Selectors


var PostListPage = function (_Component) {
  _inherits(PostListPage, _Component);

  function PostListPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PostListPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PostListPage.__proto__ || Object.getPrototypeOf(PostListPage)).call.apply(_ref, [this].concat(args))), _this), _this.handleDeletePost = function (post) {
      if (confirm('Do you want to delete this post')) {
        // eslint-disable-line
        _this.props.dispatch((0, _PostActions.deletePostRequest)(post));
      }
    }, _this.handleAddPost = function (name, title, content) {
      _this.props.dispatch((0, _AppActions.toggleAddPost)());
      _this.props.dispatch((0, _PostActions.addPostRequest)({ name: name, title: title, content: content }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PostListPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.dispatch((0, _PostActions.fetchPosts)());
    }
  }, {
    key: 'render',
    value: function render() {
      return _jsx('div', {}, void 0, _jsx(_PostCreateWidget2.default, {
        addPost: this.handleAddPost,
        showAddPost: this.props.showAddPost
      }), _jsx(_PostList2.default, {
        handleDeletePost: this.handleDeletePost,
        posts: this.props.posts
      }));
    }
  }]);

  return PostListPage;
}(_react.Component);

// Actions required to provide data for this component to render in sever side.


PostListPage.need = [function () {
  return (0, _PostActions.fetchPosts)();
}];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddPost: (0, _AppReducer.getShowAddPost)(state),
    posts: (0, _PostReducer.getPosts)(state)
  };
}

PostListPage.contextTypes = {
  router: _propTypes2.default.object
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(PostListPage);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

// Import Style


// Import Actions


// Import Selectors


exports.PostDetailPage = PostDetailPage;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _reactHelmet = __webpack_require__(14);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactIntl = __webpack_require__(2);

var _PostListItem = {
  "single-post": "_2wFZUrnLLPIM2UvuNgnV1r",
  "post-title": "_1BU3HyU1b5fh1tsPA9MtRq",
  "author-name": "_2pYEGhQRMs0Mh9CsoJsCrq",
  "post-desc": "_2hG8tPFCGI0k7BZ5cz9nnH",
  "post-action": "_37qYFcYfJHxrTH_bV6-TQo",
  "divider": "_3H_6OlXO_Hx_93avyoPoZ2",
  "post-detail": "_16xorg78DM6DwmPTBglw02"
};

var _PostListItem2 = _interopRequireDefault(_PostListItem);

var _PostActions = __webpack_require__(12);

var _PostReducer = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx(_reactIntl.FormattedMessage, {
  id: 'by'
});

function PostDetailPage(props) {
  return _jsx('div', {}, void 0, _jsx(_reactHelmet2.default, {
    title: props.post.title
  }), _jsx('div', {
    className: _PostListItem2.default['single-post'] + ' ' + _PostListItem2.default['post-detail']
  }, void 0, _jsx('h3', {
    className: _PostListItem2.default['post-title']
  }, void 0, props.post.title), _jsx('p', {
    className: _PostListItem2.default['author-name']
  }, void 0, _ref, ' ', props.post.name), _jsx('p', {
    className: _PostListItem2.default['post-desc']
  }, void 0, props.post.content)));
}

// Actions required to provide data for this component to render in server side.
PostDetailPage.need = [function (params) {
  return (0, _PostActions.fetchPost)(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    post: (0, _PostReducer.getPost)(state, props.params.cuid)
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(PostDetailPage);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(5);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var postSchema = new Schema({
  name: { type: 'String', required: true },
  title: { type: 'String', required: true },
  content: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true }
});

exports.default = _mongoose2.default.model('Post', postSchema);

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _compression = __webpack_require__(32);

var _compression2 = _interopRequireDefault(_compression);

var _mongoose = __webpack_require__(5);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = __webpack_require__(33);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = __webpack_require__(34);

var _path2 = _interopRequireDefault(_path);

var _expressSession = __webpack_require__(35);

var _expressSession2 = _interopRequireDefault(_expressSession);

var _IntlWrapper = __webpack_require__(36);

var _IntlWrapper2 = _interopRequireDefault(_IntlWrapper);

var _morgan = __webpack_require__(37);

var _morgan2 = _interopRequireDefault(_morgan);

var _helmet = __webpack_require__(38);

var _helmet2 = _interopRequireDefault(_helmet);

var _store = __webpack_require__(39);

var _reactRedux = __webpack_require__(3);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(60);

var _reactRouter = __webpack_require__(8);

var _reactHelmet = __webpack_require__(14);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _routes = __webpack_require__(61);

var _routes2 = _interopRequireDefault(_routes);

var _fetchData = __webpack_require__(72);

var _dummyData = __webpack_require__(74);

var _dummyData2 = _interopRequireDefault(_dummyData);

var _config = __webpack_require__(13);

var _config2 = _interopRequireDefault(_config);

var _passport = __webpack_require__(75);

var _passport2 = _interopRequireDefault(_passport);

var _post = __webpack_require__(79);

var _post2 = _interopRequireDefault(_post);

var _auth = __webpack_require__(84);

var _auth2 = _interopRequireDefault(_auth);

var _home = __webpack_require__(87);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(18).config();


// Initialize the Express App
var app = new _express2.default(); // = module.exports = 

// Set Development modes checks
var isDevMode = process.env.NODE_ENV === 'development' || false;
var isProdMode = process.env.NODE_ENV === 'production' || false;

// Run Webpack dev server in development mode
if (isDevMode) {
  // Webpack Requirements
  // eslint-disable-next-line global-require
  var webpack = __webpack_require__(30);
  // eslint-disable-next-line global-require
  var config = __webpack_require__(90);
  // eslint-disable-next-line global-require
  var webpackDevMiddleware = __webpack_require__(94);
  // eslint-disable-next-line global-require
  var webpackHotMiddleware = __webpack_require__(95);
  var compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    watchOptions: {
      poll: 1000
    }
  }));
  app.use(webpackHotMiddleware(compiler));
}

// Middleware 
app.use((0, _morgan2.default)('dev'));

// Security 
app.use((0, _helmet2.default)({
  frameguard: { action: 'deny' },
  hidePoweredBy: { setTo: 'PHP 7.2.2' },
  xssFilter: true,
  noSniff: true,
  ieNoOpen: true
}));

// React And Redux Setup


// Import required modules


// Set native promises as mongoose promise
_mongoose2.default.Promise = global.Promise;

// MongoDB Connection
if (process.env.NODE_ENV !== 'test') {
  _mongoose2.default.connect(_config2.default.mongoURL, function (error) {
    if (error) {
      console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
      throw error;
    }
    // feed some dummy data in DB.
    (0, _dummyData2.default)();
  });
}

// Apply body Parser and server public assets and routes
app.use((0, _compression2.default)());
app.use(_bodyParser2.default.json({ limit: '20mb' }));
app.use(_bodyParser2.default.urlencoded({ limit: '20mb', extended: false }));
app.use(_express2.default.static(_path2.default.resolve(__dirname, '../dist/client')));

// Set Up Passport and session
app.use((0, _expressSession2.default)({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}));
app.use(_passport2.default.initialize());
app.use(_passport2.default.session()); // calls the deserializeUser

// Routes -> Controllers


//app.use('/api', [posts, auth]);
app.use('/api', [_post2.default, _auth2.default, _home2.default]); // try axios

// Render Initial HTML
var renderFullPage = function renderFullPage(html, initialState) {
  var head = _reactHelmet2.default.rewind();

  // Import Manifests
  var assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
  var chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);

  return '\n    <!doctype html>\n    <html>\n      <head>\n        ' + head.base.toString() + '\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n        ' + head.script.toString() + '\n\n        ' + (isProdMode ? '<link rel=\'stylesheet\' href=\'' + assetsManifest['/app.css'] + '\' />' : '') + '\n        <link href=\'https://fonts.googleapis.com/css?family=Lato:400,300,700\' rel=\'stylesheet\' type=\'text/css\'/>\n        <link rel="shortcut icon" href="http://res.cloudinary.com/hashnode/image/upload/v1455629445/static_imgs/mern/mern-favicon-circle-fill.png" type="image/png" />\n        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">\n      </head>\n      <body>\n        <div id="root">' + (process.env.NODE_ENV === 'production' ? html : '<div>' + html + '</div>') + '</div>\n        <script>\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + ';\n          ' + (isProdMode ? '//<![CDATA[\n          window.webpackManifest = ' + JSON.stringify(chunkManifest) + ';\n          //]]>' : '') + '\n        </script>\n        <script src=\'' + (isProdMode ? assetsManifest['/vendor.js'] : '/vendor.js') + '\'></script>\n        <script src=\'' + (isProdMode ? assetsManifest['/app.js'] : '/app.js') + '\'></script>\n      </body>\n    </html>\n  ';
};

var renderError = function renderError(err) {
  var softTab = '&#32;&#32;&#32;&#32;';
  var errTrace = isProdMode ? ':<br><br><pre style="color:red">' + softTab + err.stack.replace(/\n/g, '<br>' + softTab) + '</pre>' : '';
  return renderFullPage('Server Error' + errTrace, {});
};

// Server Side Rendering based on routes matched by React-router.
app.use(function (req, res, next) {

  console.log('on server side rendering');
  console.log('req, session: ', req.session);

  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
    if (err) {
      return res.status(500).end(renderError(err));
    }

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }

    if (!renderProps) {
      return next();
    }

    var store = (0, _store.configureStore)();

    return (0, _fetchData.fetchComponentData)(store, renderProps.components, renderProps.params).then(function () {
      var initialView = (0, _server.renderToString)(_jsx(_reactRedux.Provider, {
        store: store
      }, void 0, _jsx(_IntlWrapper2.default, {}, void 0, _react2.default.createElement(_reactRouter.RouterContext, renderProps))));
      var finalState = store.getState();

      res.set('Content-Type', 'text/html').status(200).end(renderFullPage(initialView, finalState));
    }).catch(function (error) {
      return next(error);
    });
  });
});

// start app
app.listen(_config2.default.port, function (error) {
  if (!error) {
    console.log('MERN is running on port: ' + _config2.default.port + '! Build something amazing!'); // eslint-disable-line
  }
});

exports.default = app;
/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntlWrapper = IntlWrapper;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactIntl = __webpack_require__(2);

var _reactRedux = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IntlWrapper(props) {
  return _react2.default.createElement(
    _reactIntl.IntlProvider,
    props.intl,
    props.children
  );
}

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(IntlWrapper);

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureStore = configureStore;

var _redux = __webpack_require__(6);

var _reduxThunk = __webpack_require__(40);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(41);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DevTools = void 0; /**
                        * Main store function
                        */

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  DevTools = __webpack_require__(22).default;
}

function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // Middleware and store enhancers
  var enhancers = [(0, _redux.applyMiddleware)(_reduxThunk2.default)];

  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
    // Enable DevTools only when rendering on client and during development.
    enhancers.push(window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument());
  }

  var store = (0, _redux.createStore)(_reducers2.default, initialState, _redux.compose.apply(undefined, enhancers));

  // For hot reloading reducers
  if (false) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', function () {
      var nextReducer = require('./reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(6);

var _AppReducer = __webpack_require__(17);

var _AppReducer2 = _interopRequireDefault(_AppReducer);

var _PostReducer = __webpack_require__(11);

var _PostReducer2 = _interopRequireDefault(_PostReducer);

var _IntlReducer = __webpack_require__(44);

var _IntlReducer2 = _interopRequireDefault(_IntlReducer);

var _AuthReducer = __webpack_require__(53);

var _AuthReducer2 = _interopRequireDefault(_AuthReducer);

var _HomeReducer = __webpack_require__(56);

var _HomeReducer2 = _interopRequireDefault(_HomeReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Combine all reducers into one root reducer
/**
 * Root Reducer
 */
exports.default = (0, _redux.combineReducers)({
  app: _AppReducer2.default,
  auth: _AuthReducer2.default,
  posts: _PostReducer2.default,
  intl: _IntlReducer2.default,
  home: _HomeReducer2.default
});

// Import Reducers

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API_URL = undefined;
exports.default = callApi;

var _isomorphicFetch = __webpack_require__(43);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _config = __webpack_require__(13);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_URL = exports.API_URL = typeof window === 'undefined' || process.env.NODE_ENV === 'test' ? process.env.BASE_URL || 'http://localhost:' + (process.env.PORT || _config2.default.port) + '/api' : '/api';

function callApi(endpoint) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
  var body = arguments[2];

  console.log('api caller url');
  console.log(API_URL);
  console.log(endpoint);
  console.log(method);
  console.log('end fetch');
  console.log('-------');
  return (0, _isomorphicFetch2.default)(API_URL + '/' + endpoint, {
    headers: { 'content-type': 'application/json' },
    method: method,
    credentials: 'include',
    body: JSON.stringify(body)
  }).then(function (response) {
    return response.json().then(function (json) {
      return { json: json, response: response };
    });
  }).then(function (_ref) {
    var json = _ref.json,
        response = _ref.response;

    console.log('here?');
    console.log(json);
    console.log(response);
    console.log(response.ok);
    if (!response.ok) {
      console.log('response not ok');
      json.err = true;
      json.name = json.name || json.code || 'error_new';
      json.mssg = json.message || json.errmsg || 'no_msg_found';
      return Promise.reject(json);
    } else {
      return json;
    }
  }).then(function (response) {
    return response;
  }, function (error) {
    return error;
  });
  /* .then(response => {
    if (!response.ok) {
      console.log('not ok')
      return Promise.reject(response);
    }
    console.log('res1')
    console.log(response)
    return response;
  })
  .then(response => console.log('evefything ok'))
  .catch(err => { console.log('not ok'); console.log(err)}) */
}

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _setup = __webpack_require__(19);

var _IntlActions = __webpack_require__(20);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var initLocale = global.navigator && global.navigator.language || 'en';

var initialState = _extends({
  locale: initLocale,
  enabledLanguages: _setup.enabledLanguages
}, _setup.localizationData[initLocale] || {});

var IntlReducer = function IntlReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _IntlActions.SWITCH_LANGUAGE:
      {
        var type = action.type,
            actionWithoutType = _objectWithoutProperties(action, ['type']); // eslint-disable-line


        return _extends({}, state, actionWithoutType);
      }

    default:
      return state;
  }
};

exports.default = IntlReducer;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("intl");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("intl-locales-supported");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("intl/locale-data/jsonp/en");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/en");

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  locale: 'en',
  messages: {
    siteTitle: 'MERN Starter Blog',
    addPost: 'Add Post',
    switchLanguage: 'Switch Language',
    twitterMessage: 'We are on Twitter',
    by: 'By',
    deletePost: 'Delete Post',
    createNewPost: 'Create new post',
    authorName: 'Author\'s Name',
    postTitle: 'Post Title',
    postContent: 'Post Content',
    submit: 'Submit',
    comment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t}',
    HTMLComment: 'user <b style=\'font-weight: bold\'>{name} </b> {value, plural,\n    \t  =0 {does not have <i style=\'font-style: italic\'>any</i> comments}\n    \t  =1 {has <i style=\'font-style: italic\'>#</i> comment}\n    \t  other {has <i style=\'font-style: italic\'>#</i> comments}\n    \t}',
    nestedDateComment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t} as of {date}'
  }
};

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("intl/locale-data/jsonp/fr");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/fr");

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  locale: 'fr',
  messages: {
    siteTitle: 'MERN blog de démarrage',
    addPost: 'Ajouter Poster',
    switchLanguage: 'Changer de langue',
    twitterMessage: 'Nous sommes sur Twitter',
    by: 'Par',
    deletePost: 'Supprimer le message',
    createNewPost: 'Créer un nouveau message',
    authorName: 'Nom de l\'auteur',
    postTitle: 'Titre de l\'article',
    postContent: 'Contenu après',
    submit: 'Soumettre',
    comment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t} (in real app this would be translated to French)',
    HTMLComment: 'user <b style=\'font-weight: bold\'>{name} </b> {value, plural,\n    \t  =0 {does not have <i style=\'font-style: italic\'>any</i> comments}\n    \t  =1 {has <i style=\'font-style: italic\'>#</i> comment}\n    \t  other {has <i style=\'font-style: italic\'>#</i> comments}\n    \t} (in real app this would be translated to French)',
    nestedDateComment: 'user {name} {value, plural,\n  \t\t  =0 {does not have any comments}\n  \t\t  =1 {has # comment}\n  \t\t  other {has # comments}\n  \t\t} as of {date} (in real app this would be translated to French)'
  }
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AuthActions = __webpack_require__(7);

var REGISTER_SECTION = 1;

// Initial State
// Import Actions
var initialState = {
  username: null,
  log_in: false,
  auth_section: REGISTER_SECTION
};

var AuthReducer = function AuthReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {

    case _AuthActions.SIGN_UP:
      return Object.assign({}, state, { username: action.username });
    case _AuthActions.LOG_IN:
      return Object.assign({}, state, { log_in: action.bool, username: action.username });
    case _AuthActions.AUTH_SECTION:
      return Object.assign({}, state, { auth_section: action.auth_section });
    case _AuthActions.LOG_OUT:
      return Object.assign({}, state, { log_in: action.bool, username: action.username });
    default:
      return state;
  }
};

exports.default = AuthReducer;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API_URL = undefined;
exports.default = callApiX;

var _axios = __webpack_require__(55);

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(13);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_URL = exports.API_URL = typeof window === 'undefined' || process.env.NODE_ENV === 'test' ? process.env.BASE_URL || 'http://localhost:' + (process.env.PORT || _config2.default.port) + '/api' : '/api';

function callApiX(endpoint) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  console.log('api callerX url');
  console.log(API_URL);
  console.log(endpoint);
  console.log(method);

  return (0, _axios2.default)({
    method: method,
    url: '/' + endpoint,
    data: data, // 'PUT', 'POST', and 'PATCH'
    baseURL: API_URL
    //withCredentials: true,
  }).then(function (response) {
    console.log('on response');
    console.log(response);
    if (!response.data.errmsg) {
      console.log('errmsg');
      return response.data;
    } else {
      console.log('else');
    }
    console.log('out');
  }).catch(function (error) {
    console.log('on catch');
    console.log(error);
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      return error.response;
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error);
  });
}

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HomeActions = __webpack_require__(21);

// Initial State
var initialState = {
  activeMenu: false
}; // Import Actions


var HomeReducer = function HomeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _HomeActions.TOGGLE_ACTIVE_MENU:
      return { activeMenu: !state.activeMenu };
    default:
      return state;
  }
};

exports.default = HomeReducer;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-log-monitor");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-dock-monitor");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /* eslint-disable global-require */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(8);

var _App = __webpack_require__(62);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// require.ensure polyfill for node
if (false) {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  __webpack_require__(26);
  __webpack_require__(27);
}

// react-router setup with code-splitting
// More info: https://mxstbr.blog/2016/01/react-apps-with-pages/
exports.default = _jsx(_reactRouter.Route, {
  path: '/',
  component: _App2.default
}, void 0, _jsx(_reactRouter.IndexRoute, {
  getComponent: function getComponent(nextState, cb) {
    new Promise(function(resolve) { resolve(); }).then((function (require) {
      cb(null, __webpack_require__(26).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}), _jsx(_reactRouter.Route, {
  path: '/auth',
  getComponent: function getComponent(nextState, cb) {
    new Promise(function(resolve) { resolve(); }).then((function (require) {
      cb(null, __webpack_require__(25).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}), _jsx(_reactRouter.Route, {
  path: '/posts/:slug-:cuid',
  getComponent: function getComponent(nextState, cb) {
    new Promise(function(resolve) { resolve(); }).then((function (require) {
      cb(null, __webpack_require__(27).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}));

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _App = {
  "container": "_15uqt7TaQcflNYjiD0-re1",
  "feedbackInput": "_1esWescZrVqU3ok_YtLMkK",
  "inputIcon": "_3y5tCk-A8F3CoSNRWAohl0",
  "button_form": "_27r11M5HDyYwye0NVMyGY_"
};

var _App2 = _interopRequireDefault(_App);

var _reactHelmet = __webpack_require__(14);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _Header = __webpack_require__(23);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(24);

var _Footer2 = _interopRequireDefault(_Footer);

var _Auth = __webpack_require__(25);

var _Auth2 = _interopRequireDefault(_Auth);

var _Home = __webpack_require__(67);

var _Home2 = _interopRequireDefault(_Home);

var _AppActions = __webpack_require__(10);

var _IntlActions = __webpack_require__(20);

var _AuthActions = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Import Style


// Import Components


// Import Actions


var DevTools = void 0;
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  DevTools = __webpack_require__(22).default;
}

var _ref = _jsx(DevTools, {});

var _ref2 = _jsx(_Home2.default, {});

var _ref3 = _jsx(_Auth2.default, {});

var _ref4 = _jsx(_Footer2.default, {});

var App = exports.App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.searchForUser = function () {
      _this.props.dispatch((0, _AuthActions.sessionUserRequest)());
    };

    _this.toggleAddPostSection = function () {
      _this.props.dispatch((0, _AppActions.toggleAddPost)());
    };

    _this.state = { isMounted: false };
    console.log('props');
    console.log(props);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ isMounted: true }); // eslint-disable-line
      this.searchForUser();
    }
  }, {
    key: 'render',


    /* !!! Just to understand, delete "{this.props.children}" after further developement !!! */
    value: function render() {
      var _this2 = this;

      return _jsx('div', {}, void 0, this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && _ref, _jsx('div', {}, void 0, _jsx(_reactHelmet2.default, {
        title: 'Wander - Blog App',
        titleTemplate: '%s - Blog App',
        meta: [{ charset: 'utf-8' }, {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge'
        }, {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }]
      }), _jsx(_Header2.default, {
        switchLanguage: function switchLanguage(lang) {
          return _this2.props.dispatch((0, _IntlActions.switchLanguage)(lang));
        },
        intl: this.props.intl,
        toggleAddPost: this.toggleAddPostSection
      }), _jsx('div', {
        className: _App2.default.container
      }, void 0, this.props.auth.log_in ? _ref2 : _ref3), _ref4));
    }
  }]);

  return App;
}(_react.Component);

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    app: store.app,
    intl: store.intl,
    auth: store.auth
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = __webpack_require__(9);

var _reactIntl = __webpack_require__(2);

var _App = {
  "container": "_15uqt7TaQcflNYjiD0-re1",
  "feedbackInput": "_1esWescZrVqU3ok_YtLMkK",
  "inputIcon": "_3y5tCk-A8F3CoSNRWAohl0",
  "button_form": "_27r11M5HDyYwye0NVMyGY_"
};

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref2 = _jsx('i', {
  className: 'fas fa-user'
});

var _ref3 = _jsx('i', {
  className: 'far fa-user'
});

var _ref4 = _jsx('i', {
  className: 'fas fa-at'
});

var _ref5 = _jsx('i', {
  className: 'fas fa-key'
});

var _ref6 = _jsx('i', {
  className: 'fas fa-unlock-alt'
});

var SignUp = function (_Component) {
  _inherits(SignUp, _Component);

  function SignUp() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SignUp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call.apply(_ref, [this].concat(args))), _this), _this.signUp = function () {
      var user = {
        first_name: _this.first_name.value,
        last_name: _this.last_name.value,
        email: _this.email.value,
        password: _this.password.value
      };
      _this.props.handleSignUp(user);
    }, _this.comparePass = function (value) {
      console.log('on compare Pass');
      console.log(value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SignUp, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _jsx('div', {}, void 0, _jsx('div', {}, void 0, _jsx('span', {
        className: _App2.default.inputIcon
      }, void 0, _ref2), _jsx(_reactBootstrap.FormControl, {
        className: _App2.default.feedbackInput,
        inputRef: function inputRef(ref) {
          _this2.first_name = ref;
        },
        placeholder: 'Write your First Name please',
        type: 'text'
      })), _jsx('div', {}, void 0, _jsx('span', {
        className: _App2.default.inputIcon
      }, void 0, _ref3), _jsx(_reactBootstrap.FormControl, {
        className: _App2.default.feedbackInput,
        inputRef: function inputRef(ref) {
          _this2.last_name = ref;
        },
        placeholder: 'Write your Last Name please',
        type: 'text',
        value: this.last_name_input
      })), _jsx('div', {}, void 0, _jsx('span', {
        className: _App2.default.inputIcon
      }, void 0, _ref4), _jsx(_reactBootstrap.FormControl, {
        className: _App2.default.feedbackInput,
        inputRef: function inputRef(ref) {
          _this2.email = ref;
        },
        placeholder: 'Enter your e-mail / username',
        type: 'text',
        value: this.email_input
      })), _jsx('div', {}, void 0, _jsx('span', {
        className: _App2.default.inputIcon
      }, void 0, _ref5), _jsx(_reactBootstrap.FormControl, {
        className: _App2.default.feedbackInput,
        inputRef: function inputRef(ref) {
          _this2.password = ref;
        },
        placeholder: 'Password please :)',
        type: 'password',
        value: this.password_input
      })), _jsx('div', {}, void 0, _jsx('span', {
        className: _App2.default.inputIcon
      }, void 0, _ref6), _jsx(_reactBootstrap.FormControl, {
        className: _App2.default.feedbackInput,
        inputRef: function inputRef(ref) {
          _this2.password_verification = ref;
        },
        placeholder: 'Verify your Password :)',
        type: 'password',
        value: this.password_verif_input,
        onChange: function onChange(e) {
          return _this2.comparePass(e.target.value);
        }
      })), _jsx(_reactBootstrap.Button, {
        className: _App2.default.button_form,
        type: 'submit',
        onClick: this.signUp
      }, void 0, 'Let\'s get in'));
    }
  }]);

  return SignUp;
}(_react.Component);

exports.default = SignUp;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = __webpack_require__(9);

var _FieldGroup = __webpack_require__(66);

var _FieldGroup2 = _interopRequireDefault(_FieldGroup);

var _App = {
  "container": "_15uqt7TaQcflNYjiD0-re1",
  "feedbackInput": "_1esWescZrVqU3ok_YtLMkK",
  "inputIcon": "_3y5tCk-A8F3CoSNRWAohl0",
  "button_form": "_27r11M5HDyYwye0NVMyGY_"
};

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref2 = _jsx('i', {
  className: 'far fa-user'
});

var _ref3 = _jsx('i', {
  className: 'fas fa-key'
});

var LogIn = function (_Component) {
  _inherits(LogIn, _Component);

  function LogIn() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LogIn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LogIn.__proto__ || Object.getPrototypeOf(LogIn)).call.apply(_ref, [this].concat(args))), _this), _this.logIn = function () {
      var user = {
        username: _this.email.value,
        password: _this.password.value
      };
      _this.props.handleLogIn(user);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LogIn, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _jsx('div', {}, void 0, _jsx('div', {}, void 0, _jsx('span', {
        className: _App2.default.inputIcon
      }, void 0, _ref2), _jsx(_reactBootstrap.FormControl, {
        className: _App2.default.feedbackInput,
        inputRef: function inputRef(ref) {
          _this2.email = ref;
        },
        placeholder: 'Enter your e-mail / username',
        type: 'text'
      })), _jsx('div', {}, void 0, _jsx('span', {
        className: _App2.default.inputIcon
      }, void 0, _ref3), _jsx(_reactBootstrap.FormControl, {
        className: _App2.default.feedbackInput,
        inputRef: function inputRef(ref) {
          _this2.password = ref;
        },
        placeholder: 'Password please :)',
        type: 'password'
      })), _jsx(_reactBootstrap.Button, {
        className: _App2.default.button_form,
        type: 'submit',
        onClick: this.logIn
      }, void 0, 'Let\'s get in'));
    }
  }]);

  return LogIn;
}(_react.Component);

exports.default = LogIn;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FieldGroup(props, context) {
  return _jsx(_reactBootstrap.FormGroup, {
    controlId: props.id,
    validationState: props.validationState
  }, void 0, _jsx(_reactBootstrap.ControlLabel, {}, void 0, props.label), _react2.default.createElement(_reactBootstrap.FormControl, props), props.help && _jsx(_reactBootstrap.HelpBlock, {}, void 0, props.help));
}

exports.default = FieldGroup;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _redux = __webpack_require__(6);

var _Home;

var _Home2 = _interopRequireDefault(_Home);

var _Menu = __webpack_require__(68);

var _Menu2 = _interopRequireDefault(_Menu);

var _HomeActions = __webpack_require__(21);

var _AuthActions = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Import Style


// import Components


// Import Actions


var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.toggleActiveMenu = function () {
      _this.props.dispatch((0, _HomeActions.toggleActiveMenu)());
    };

    _this.handleLogOutRequest = function () {
      _this.props.dispatch((0, _AuthActions.logOutRequest)());
    };

    console.log('home props');
    console.log(_this.props.home);
    return _this;
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _jsx('div', {}, void 0, _jsx(_Menu2.default, {
        toggleActiveMenu: this.toggleActiveMenu,
        activeMenu: this.props.home.activeMenu,
        handleLogOutRequest: this.handleLogOutRequest
      }));
    }
  }]);

  return Home;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    intl: state.intl,
    auth: state.auth,
    home: state.home
  };
};

/* const mapDispatchToProps = (dispatch) => {
  return {};
}; */

exports.default = (0, _reactRedux.connect)(mapStateToProps
//mapDispatchToProps
)(Home);

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Menu = {
  "menu": "_2WH1V2s4UeRyVZfPHfGOnw",
  "menuactive": "_1euenSa5esrVpLw2LclFoP",
  "menuContent": "_3Y5cXYs2KtLZO0NPy2pVLg"
};

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx('i', {});

var _ref2 = _jsx('i', {});

var _ref3 = _jsx('i', {});

function Menu(props, context) {

  var activeMenu = props.activeMenu;
  var activeMenuClass = _Menu2.default.menu;
  //console.log(styles);
  activeMenu ? activeMenuClass = _Menu2.default.menu : activeMenuClass = '';

  return _jsx('div', {
    className: !activeMenu && _Menu2.default.menu || _Menu2.default.menuactive
  }, void 0, _jsx('span', {
    onClick: props.toggleActiveMenu
  }, void 0, _ref, _ref2, _ref3), _jsx('div', {
    className: _Menu2.default.menuContent
  }, void 0, _jsx('ul', {}, void 0, _jsx('li', {}, void 0, _jsx('a', {
    onClick: props.handleLogOutRequest
  }, void 0, 'Log Out')))));
}

exports.default = Menu;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

// Import Components


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PostListItem = __webpack_require__(70);

var _PostListItem2 = _interopRequireDefault(_PostListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PostList(props) {
  return _jsx('div', {
    className: 'listView'
  }, void 0, props.posts.map(function (post) {
    return _jsx(_PostListItem2.default, {
      post: post,
      onDelete: function onDelete() {
        return props.handleDeletePost(post.cuid);
      }
    }, post.cuid);
  }));
}

exports.default = PostList;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

// Import Style


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = __webpack_require__(8);

var _reactIntl = __webpack_require__(2);

var _PostListItem = {
  "single-post": "_2wFZUrnLLPIM2UvuNgnV1r",
  "post-title": "_1BU3HyU1b5fh1tsPA9MtRq",
  "author-name": "_2pYEGhQRMs0Mh9CsoJsCrq",
  "post-desc": "_2hG8tPFCGI0k7BZ5cz9nnH",
  "post-action": "_37qYFcYfJHxrTH_bV6-TQo",
  "divider": "_3H_6OlXO_Hx_93avyoPoZ2",
  "post-detail": "_16xorg78DM6DwmPTBglw02"
};

var _PostListItem2 = _interopRequireDefault(_PostListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx(_reactIntl.FormattedMessage, {
  id: 'by'
});

var _ref2 = _jsx(_reactIntl.FormattedMessage, {
  id: 'deletePost'
});

function PostListItem(props) {
  return _jsx('div', {
    className: _PostListItem2.default['single-post']
  }, void 0, _jsx('h3', {
    className: _PostListItem2.default['post-title']
  }, void 0, _jsx(_reactRouter.Link, {
    to: '/posts/' + props.post.slug + '-' + props.post.cuid
  }, void 0, props.post.title)), _jsx('p', {
    className: _PostListItem2.default['author-name']
  }, void 0, _ref, ' ', props.post.name), _jsx('p', {
    className: _PostListItem2.default['post-desc']
  }, void 0, props.post.content), _jsx('p', {
    className: _PostListItem2.default['post-action']
  }, void 0, _jsx('a', {
    href: '#',
    onClick: props.onDelete
  }, void 0, _ref2)), _jsx('hr', {
    className: _PostListItem2.default.divider
  }));
}

exports.default = PostListItem;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostCreateWidget = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactIntl = __webpack_require__(2);

var _PostCreateWidget = {
  "form": "_1_WEV3z8MyISJ_IVeQGbfN",
  "form-content": "_3CPctdi6XIS37va2ubmlCG",
  "form-title": "_1CSMUfhA4ysKjSED0EfzhX",
  "form-field": "_2UV8G3K76UKXYl2G9ov3yn",
  "post-submit-button": "_1atG94QrpmrK4ei1Y4lDc3",
  "appear": "_38mS7lSZiNDV5iEXieRUC7"
};

var _PostCreateWidget2 = _interopRequireDefault(_PostCreateWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Import Style


var _ref2 = _jsx(_reactIntl.FormattedMessage, {
  id: 'createNewPost'
});

var _ref3 = _jsx(_reactIntl.FormattedMessage, {
  id: 'submit'
});

var PostCreateWidget = exports.PostCreateWidget = function (_Component) {
  _inherits(PostCreateWidget, _Component);

  function PostCreateWidget() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PostCreateWidget);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PostCreateWidget.__proto__ || Object.getPrototypeOf(PostCreateWidget)).call.apply(_ref, [this].concat(args))), _this), _this.addPost = function () {
      var nameRef = _this.refs.name;
      var titleRef = _this.refs.title;
      var contentRef = _this.refs.content;
      if (nameRef.value && titleRef.value && contentRef.value) {
        _this.props.addPost(nameRef.value, titleRef.value, contentRef.value);
        nameRef.value = titleRef.value = contentRef.value = '';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PostCreateWidget, [{
    key: 'render',
    value: function render() {
      var cls = _PostCreateWidget2.default.form + ' ' + (this.props.showAddPost ? _PostCreateWidget2.default.appear : '');
      return _jsx('div', {
        className: cls
      }, void 0, _jsx('div', {
        className: _PostCreateWidget2.default['form-content']
      }, void 0, _jsx('h2', {
        className: _PostCreateWidget2.default['form-title']
      }, void 0, _ref2), _react2.default.createElement('input', { placeholder: this.props.intl.messages.authorName, className: _PostCreateWidget2.default['form-field'], ref: 'name' }), _react2.default.createElement('input', { placeholder: this.props.intl.messages.postTitle, className: _PostCreateWidget2.default['form-field'], ref: 'title' }), _react2.default.createElement('textarea', { placeholder: this.props.intl.messages.postContent, className: _PostCreateWidget2.default['form-field'], ref: 'content' }), _jsx('a', {
        className: _PostCreateWidget2.default['post-submit-button'],
        href: '#',
        onClick: this.addPost
      }, void 0, _ref3)));
    }
  }]);

  return PostCreateWidget;
}(_react.Component);

exports.default = (0, _reactIntl.injectIntl)(PostCreateWidget);

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchComponentData = fetchComponentData;

var _promiseUtils = __webpack_require__(73);

function fetchComponentData(store, components, params) {
  var needs = components.reduce(function (prev, current) {
    return (current.need || []).concat((current.WrappedComponent && current.WrappedComponent.need !== current.need ? current.WrappedComponent.need : []) || []).concat(prev);
  }, []);

  return (0, _promiseUtils.sequence)(needs, function (need) {
    return store.dispatch(need(params, store.getState()));
  });
} /*
  Utility function to fetch required data for component to render in server side.
  This was inspired from https://github.com/caljrimmer/isomorphic-redux-app/blob/73e6e7d43ccd41e2eb557a70be79cebc494ee54b/src/common/api/fetchComponentDataBeforeRender.js
  */

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequence = sequence;
/**
 * Throw an array to it and a function which can generate promises
 * and it will call them sequentially, one after another
 */
function sequence(items, consumer) {
  var results = [];
  var runner = function runner() {
    var item = items.shift();
    if (item) {
      return consumer(item).then(function (result) {
        results.push(result);
      }).then(runner);
    }

    return Promise.resolve(results);
  };

  return runner();
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  _post2.default.count().exec(function (err, count) {
    if (count > 0) {
      return;
    }

    var content1 = 'Sed ut perspiciatis unde omnis iste natus error\n      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n      ipsum quia dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum';

    var content2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum. Sed ut perspiciatis unde omnis iste natus error\n      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n      ipsum quia dolor sit amet.';

    var post1 = new _post2.default({ name: 'Admin', title: 'Hello MERN', slug: 'hello-mern', cuid: 'cikqgkv4q01ck7453ualdn3hd', content: content1 });
    var post2 = new _post2.default({ name: 'Admin', title: 'Lorem Ipsum', slug: 'lorem-ipsum', cuid: 'cikqgkv4q01ck7453ualdn3hf', content: content2 });

    _post2.default.create([post1, post2], function (error) {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
};

var _post = __webpack_require__(28);

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _passport = __webpack_require__(15);

var _passport2 = _interopRequireDefault(_passport);

var _auth = __webpack_require__(16);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LocalStrategy = __webpack_require__(76);

var ObjectID = __webpack_require__(78).ObjectID;

// called on login, saves the id to session req.session.passport.user = {id:'..'}
_passport2.default.serializeUser(function (user, done) {
	console.log('*** serializeUser called, user: ');
	console.log(user); // the whole raw user object!
	console.log('---------');
	//done(null, { _id: user._id })
	done(null, user._id);
});

// user object attaches to the request as req.user
_passport2.default.deserializeUser(function (id, done) {
	console.log('DeserializeUser called');
	_auth2.default.findOne({ _id: id }, //new ObjectID(id)},
	function (err, user) {
		console.log('*** Deserialize user, user:');
		console.log(user);
		console.log('--------------');
		done(null, user);
	});
});

//  Use Strategies 
_passport2.default.use(LocalStrategy);

module.exports = _passport2.default;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _auth = __webpack_require__(16);

var _auth2 = _interopRequireDefault(_auth);

var _bcrypt = __webpack_require__(29);

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LocalStrategy = __webpack_require__(77);

var strategy = new LocalStrategy({
	usernameField: 'username' // not necessary, DEFAULT
}, function (username, password, done) {
	console.log('getting into local strategy');
	_auth2.default.findOne({ username: username }, function (err, user) {
		console.log('User ' + username + ' attempted to log in.');
		if (err) {
			console.log('err1 in local Str');return done(err);
		}
		if (!user) {
			console.log('err2 in local Str');return done(null, false);
		}
		_bcrypt2.default.compare(password, user.password, function (err, res) {
			if (res == true) {
				return done(null, user);
			}
			return done(null, false);
		});
	});
	/* User.findOne({ username: username }, (err, user) => {
 	if (err) {
 		return done(err)
 	}
 	if (!user) {
 		return done(null, false, { message: 'Incorrect username' })
 	}
 	if (!user.checkPassword(password)) {
 		return done(null, false, { message: 'Incorrect password' })
 	}
 	return done(null, user)
 }) */
});

module.exports = strategy;

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(4);

var _post = __webpack_require__(80);

var PostController = _interopRequireWildcard(_post);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = new _express.Router();

// Get all Posts
router.route('/posts').get(PostController.getPosts);

// Get one post by cuid
router.route('/posts/:cuid').get(PostController.getPost);

// Add a new Post
router.route('/posts').post(PostController.addPost);

// Delete a post by cuid
router.route('/posts/:cuid').delete(PostController.deletePost);

exports.default = router;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPosts = getPosts;
exports.addPost = addPost;
exports.getPost = getPost;
exports.deletePost = deletePost;

var _post = __webpack_require__(28);

var _post2 = _interopRequireDefault(_post);

var _cuid = __webpack_require__(81);

var _cuid2 = _interopRequireDefault(_cuid);

var _limax = __webpack_require__(82);

var _limax2 = _interopRequireDefault(_limax);

var _sanitizeHtml = __webpack_require__(83);

var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
function getPosts(req, res) {
  _post2.default.find().sort('-dateAdded').exec(function (err, posts) {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ posts: posts });
  });
}

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
function addPost(req, res) {
  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
    res.status(403).end();
  }

  var newPost = new _post2.default(req.body.post);

  // Let's sanitize inputs
  newPost.title = (0, _sanitizeHtml2.default)(newPost.title);
  newPost.name = (0, _sanitizeHtml2.default)(newPost.name);
  newPost.content = (0, _sanitizeHtml2.default)(newPost.content);

  newPost.slug = (0, _limax2.default)(newPost.title.toLowerCase(), { lowercase: true });
  newPost.cuid = (0, _cuid2.default)();
  newPost.save(function (err, saved) {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
function getPost(req, res) {
  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: post });
    //res.status(500).send(err);
  });
}

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
function deletePost(req, res) {
  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
    if (err) {
      res.status(500).send(err);
    }

    post.remove(function () {
      res.status(200).end();
    });
  });
}

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("cuid");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("limax");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("sanitize-html");

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(4);

var _auth = __webpack_require__(85);

var auth = _interopRequireWildcard(_auth);

var _auth2 = __webpack_require__(86);

var AuthController = _interopRequireWildcard(_auth2);

var _passport = __webpack_require__(15);

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//require('../passport')(passport);
//const passport = require('../passport');

var router = new _express.Router();

router.route('/logout').get(AuthController.logOut);

router.route('/user').get(_auth.ensureAuthenticated, AuthController.sessionUser);

router.route('/register').post(AuthController.signUp);

router.post('/login', AuthController.logIn, _passport2.default.authenticate('local'), //, { failureRedirect: '/' }),
AuthController.logInPassResponse);

exports.default = router;

/*

module.exports = function (app, db) {
    
  
  app.route('/profile')
  .get(ensureAuthenticated, (req,res) => {
       res.render(process.cwd() + '/views/pug/profile', {
         username: req.user.username
       });
  });
  
  app.route('/login')
    .post(passport.authenticate('local', { failureRedirect: '/' }),(req,res) => {
         res.redirect('/profile');
    });
  
  app.route('/logout')
  .get((req, res) => {
      req.logout();
      res.redirect('/');
  });
  
  app.route('/register')
        .post((req, res, next) => {
            db.collection('users').findOne({ username: req.body.username }, function (err, user) {
                if(err) {
                    next(err);
                } else if (user) {
                    res.redirect('/');
                } else {
                  var hash = bcrypt.hash(req.body.password, 12);
                    db.collection('users').insertOne(
                      {username: req.body.username,
                       password: hash},
                      (err, doc) => {
                          if(err) {
                              res.redirect('/');
                          } else {
                              next(null, user);
                          }
                      }
                    )
                }
            })},
          passport.authenticate('local', { failureRedirect: '/' }),
          (req, res, next) => {
              res.redirect('/profile');
          }
      );
  
    //handle missing pages
  app.use((req, res, next) => {
      res.status(404)
        .type('text')
        .send('Not Found');
    });

}

*/

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureAuthenticated = ensureAuthenticated;
/**
 * Ensure that the user is authenticated in private urls
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function ensureAuthenticated(req, res, next) {
  console.log('-------- ensure auth --------');
  if (req.isAuthenticated()) {
    console.log(req.isAuthenticated());
    return next();
  }
  res.status(403).send({ username: null });
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logOut = logOut;
exports.sessionUser = sessionUser;
exports.logIn = logIn;
exports.logInPassResponse = logInPassResponse;
exports.signUp = signUp;

var _auth = __webpack_require__(16);

var _auth2 = _interopRequireDefault(_auth);

var _bcrypt = __webpack_require__(29);

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _passport = __webpack_require__(15);

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HASH_ROUNDS = 12;

function logOut(req, res) {
  req.logout();
  res.status(200).send();
}

function sessionUser(req, res, next) {
  console.log('===== user!!======');
  //console.log(req.session)
  console.log(req.user);
  if (req.user) {
    res.send({ username: req.user.username });
  } else {
    console.log('-- why here?? session user response not user found');
    res.send({ username: null });
  }
}

function logIn(req, res, next) {
  console.log('on log in controller');
  console.log('routes/user.js, login, req.body: ');
  console.log(req.body);
  next();
}
function logInPassResponse(req, res) {
  res.send({ username: req.user.username });
}

function signUp(req, res, next) {
  console.log('on sign Up controller');
  console.log(req.body.user);
  _bcrypt2.default.hash(req.body.user.password, HASH_ROUNDS, function (err, hash) {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log(req.body.user);
      req.body.user.password = hash;
      req.body.user.username = req.body.user.email;
      _auth2.default.create(req.body.user, function (err, new_user) {
        if (err) {
          res.status(500).send(err);
        } else {
          // don't send password
          console.log('user saved');
          res.json({ user: {
              first_name: new_user.first_name,
              email: new_user.email
            } });
        }
      });
    }
  });
}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(4);

var _home = __webpack_require__(88);

var HomeController = _interopRequireWildcard(_home);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = new _express.Router();

exports.default = router;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSomething = getSomething;

var _home = __webpack_require__(89);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSomething(req, res) {
  return res.status(200).end();
}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(5);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var homeSchema = new Schema({});

exports.default = _mongoose2.default.model('Home', homeSchema);

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var webpack = __webpack_require__(30);
var cssnext = __webpack_require__(91);
var postcssFocus = __webpack_require__(92);
var postcssReporter = __webpack_require__(93);

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    app: ['eventsource-polyfill', 'webpack-hot-middleware/client', 'webpack/hot/only-dev-server', 'react-hot-loader/patch', './client/index.js'],
    vendor: ['react', 'react-dom']
  },

  node: {
    fs: 'empty'
  },

  output: {
    path: __dirname,
    filename: 'app.js',
    //publicPath: 'http://0.0.0.0:8000/',
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['client', 'node_modules']
  },

  module: {
    rules: [{
      test: /\.s?css$/,
      exclude: /node_modules/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          localIdentName: '[name]__[local]__[hash:base64:5]',
          modules: true,
          importLoaders: 1,
          sourceMap: true
        }
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: function plugins() {
            return [postcssFocus(), cssnext({
              browsers: ['last 2 versions', 'IE > 10']
            }), postcssReporter({
              clearMessages: true
            })];
          }
        }
      }]
    }, {
      test: /\.css$/,
      include: /node_modules/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.jsx*$/,
      exclude: [/node_modules/, /.+\.config.js/],
      use: 'babel-loader'
    }, {
      test: /\.(jpe?g|gif|png|svg)$/i,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }]
    }]
  },

  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
    filename: 'vendor.js'
  }), new webpack.DefinePlugin({
    'process.env': {
      CLIENT: JSON.stringify(true),
      'NODE_ENV': JSON.stringify('development')
    }
  })]
};
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("postcss-cssnext");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("postcss-focus");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("postcss-reporter");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ })
/******/ ]);