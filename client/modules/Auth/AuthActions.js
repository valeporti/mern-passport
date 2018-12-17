import callApi from '../../util/apiCaller';

// Export Constants
export const SIGN_UP = 'SIGN_UP';
export const LOG_IN = 'LOG_IN';
export const AUTH_SECTION = 'AUTH_SECTION';

// Export Actions
export function signUp(user) { return { type: SIGN_UP, user } }
export function logIn(user, bool) { return { type: LOG_IN, user, bool } }
export function authSection(auth_section) { return { type: LOGGED_IN, auth_section } }

export function logInRequest(user) {
  return (dispatch) => {
    return callApi('auth', 'post', {
      user: {
        username: user.email,
        password: user.password,
      }
    }).then(res => {
      if (res.err || !res) { console.log('Error on fetch dispatch. Name: ' + res.name + ' - ' + res.mssg) }
      else { dispatch(logIn(res.user, true)) }
    })
  }
}

export function signUpRequest(user) {
  return (dispatch) => {
    return callApi('auth/register', 'post', {
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