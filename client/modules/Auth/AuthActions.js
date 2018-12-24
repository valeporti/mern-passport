import callApi from '../../util/apiCallerAxios';

// Export Constants
export const SIGN_UP = 'SIGN_UP';
export const LOG_IN = 'LOG_IN';
export const AUTH_SECTION = 'AUTH_SECTION';

// Export Actions
export function signUp(user) { return { type: SIGN_UP, user } }
export function logIn(username, bool) { return { type: LOG_IN, username, bool } }
export function authSection(auth_section) { return { type: LOGGED_IN, auth_section } }

export function logInRequest(user) {
  return (dispatch) => {
    console.log('on login action')
    return callApi('login', 'post', {
      name: user.name,
      email: user.email,
      username: user.email,
      password: user.password,
    }).then(res => {
      console.log('in action auth')
      console.log(res)
      if (res.status) {
        if (res.status == 401) {
          console.log('wrong password or wrong username')
        } else if (res.status == 400) {
          console.log('wrong access')
        } else {
          console.log('no recognized issue')
        }
      } else {
        dispatch(logIn(res.username, true))
      }
    })
  }
}

export function signUpRequest(user) {
  return (dispatch) => {
    console.log('on signup action')
    return callApi('register', 'post', {
      user: {
        name: user.name,
        email: user.email,
        password: user.password,
      }
    }).then(res => {
      if (res.err || !res) {
        console.log('Error on fetch dispatch. Name: ' + res.name + ' - ' + res.mssg)
      } else {
        console.log('not error dispatch')
        console.log(res)
        dispatch(signUp(res.user))
        //dispatch(logIn(res.user))
      }
    })
  }
}