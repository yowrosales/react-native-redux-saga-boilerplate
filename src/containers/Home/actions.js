import {
    LOGIN,
    LOGIN_ERROR,
    LOGIN_OK,
    AUTH0_LOGIN
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
  
  export function authLogin (connection) {
    return {
      type: AUTH0_LOGIN,
      connection
    }
  }