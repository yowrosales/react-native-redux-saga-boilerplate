import {put, take, call, takeLatest, all} from 'redux-saga/effects'
import { loginError, loginSuccess } from './actions'
import Auth from '../../services/auth'

import {
  LOGIN
} from './constants'

export function * login () {
  while (true) {
    try {
      const params = yield take(LOGIN)
      const email = params.email
      const password = params.password
      const auth = new Auth()
      const response = yield call(auth.login, {email, password})
      if (response.status >= 400 || !response.data) {
        throw response
      }
      yield put(loginSuccess(response.data))
    } catch (err) {
      yield put(loginError(err))
    }
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function * () {
  yield all([
    takeLatest(LOGIN, login)
  ])
}
