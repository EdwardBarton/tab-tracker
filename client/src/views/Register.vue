<template>
  <div>
    <h1>REGISTER VIEW</h1>
    <input v-model="email" type="email" name="email" id="email" placeholder="Email">
    <br>
    <input v-model="password" type="password" name="password" id="password" placeholder="Password">
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  name: "register",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async register() {
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>
