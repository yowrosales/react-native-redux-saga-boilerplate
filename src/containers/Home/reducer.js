import {
    LOGIN,
    LOGIN_OK,
    LOGIN_ERROR
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
      default:
        return state
    }
}
  