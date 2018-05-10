<template>
  <div>
    <h1>Register</h1>
    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="email"/>
      <br>
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password"/>
      <br>
    <button
      @click="register">
      Register
    </button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  // To watch when the email value changes
  // watch: {
  //   email(value) {
  //     console.log('email has changed value: ', value)
  //   },
  methods: {
      async register () {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        // console.log('register button clicked', this.email, this.password)
        console.log(response.data)
      }
    }
    // Run a command whenever this Vue component is mounted onto the page
    // Set a 2sec timer
    // mounted () {
    //   setTimeout(() => {
    //     this.email = 'hello world'
    //   }, 2000)
    // }
}
</script>

<style scoped>

</style>
