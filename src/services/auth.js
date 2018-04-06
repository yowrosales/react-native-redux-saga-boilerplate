import API from './API'

class Auth extends API {
  constructor (token) {
    super(token)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.signup = this.signup.bind(this)
    this.setpassword = this.setpassword.bind(this)
    this.uploadAvatar = this.uploadAvatar.bind(this)
  }

  login (params) {
    return this.post('/auth/signin', params)
  }

  logout () {
    return this.post('/auth/signout')
  }

  signup (params) {
    return this.post('/auth/register', params)
  }

  setpassword (params) {
    return this.put('/auth/change-password', params)
  }

  uploadAvatar(file) {
    return this.post('/upload/profile-photo', { image: file.data });
  }
}

export default Auth
