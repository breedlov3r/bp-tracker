import Api from '@/services/Api'

export default {
  register (credentials) {
    //Do a post request on our register express server
    return Api().post('register', credentials)
  }
}

//This is how we'd call this method from another file
// AuthenticationService.register({
//   email: 'testing@gmail.com',
//   password: '123456'
// })
