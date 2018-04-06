import {
    LOGIN,
    LOGIN_OK,
    LOGIN_ERROR,
    AUTH0_LOGIN
  } from './constants'
  
  const defaultState = {
    isLoading: false,
    error: null,
    errors: null,
    user: null
  }
  
  export default function loginReducer (state = defaultState, action) {
    switch (action.type) {
      case LOGIN:
        return Object.assign({}, state, {
          isLoading: false,
          error: null,
          errors: null,
          user: null
        })
      case LOGIN_OK:
        return Object.assign({}, state, {
          isLoading: true,
          error: null,
          errors: null,
          user: action.data
        })
      case LOGIN_ERROR:
        return Object.assign({}, state, {
          isLoading: false,
          error: action.error.error,
          errors: action.error.errors,
          user: null
        })
      case AUTH0_LOGIN:
        console.log('reducer', action)
        return Object.assign({}, state, {
          isLoading: true,
          data: null
        })
      default:
        return state
    }
}
  