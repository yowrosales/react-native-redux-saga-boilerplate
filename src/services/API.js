const host = 'YOUR_API_HOST'
const headers = {
  'Content-Type': 'application/json',
  'Cache-Control': 'no-cache',
  'max-age': 0
}

class API {
  constructor (token) {
    this.headers = headers
    this.delete = this.delete.bind(this)
    this.get = this.get.bind(this)
    this.post = this.post.bind(this)
    this.patch = this.patch.bind(this)
    this.put = this.put.bind(this)
    this.xhr = this.xhr.bind(this)

    if (token) {
        
      this.headers['Authorization'] = 'Bearer '.concat(token)
      this.headers['X-Token'] = token
    }
  }

  get (route) {
    return this.xhr(route, null, 'GET')
  }

  put (route, params) {
    return this.xhr(route, params, 'PUT')
  }

  post (route, params) {
    return this.xhr(route, params, 'POST')
  }

  delete (route, params) {
    return this.xhr(route, params, 'DELETE')
  }

  patch (route, params) {
    return this.xhr(route, params, 'PATCH')
  }

  /* istanbul ignore next: untestable for now */
  xhr (route, params, verb) {
    const url = `${host}${route}`
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null)
    options.headers = this.headers

    return fetch(url, options).then(resp => {
      let json = resp.json()

      if (resp.ok) { // eslint-disable-line no-unused-vars
        return json
      }
      return json.then(err => { throw err })
    })
  }
}

export default API
