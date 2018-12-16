import callApi from '../../util/apiCaller';

// Export Constants
export const SIGN_UP = 'SIGN_UP';

// Export Actions
export function signUp(user) {
  return {
      type: SIGN_UP,
      user,
  }
}

export function signUpRequest(user) {
  return (dispatch) => {
    return callApi('auth', 'post', {
      user: {
        name: user.name,
        email: user.email
      }
    }).then(res => dispatch(signUp(res.user)))
  }
}