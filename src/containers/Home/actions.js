import {
    LOGIN,
    LOGIN_ERROR,
    LOGIN_OK
  } from './constants'
  
  export const login = (email, password) => {
    return {
      type: LOGIN,
      email: email,
      password: password
    }
  }
  
  export function loginSuccess (data) {
    return {
      type: LOGIN_OK,
      data
    }
  }
  
  export function loginError (error) {
    return {
      type: LOGIN_ERROR,
      error
    }
  }
  