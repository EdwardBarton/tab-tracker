<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <div class="white elevation-2">
          <v-toolbar flat dense dark class="cyan">
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>

          <div class="pl-4 pr-4 pt-2 pb-2">
            <input v-model="email" type="email" name="email" id="email" placeholder="Email">
            <br>
            <input
              v-model="password"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            >
            <br>
            <div class="error" v-html="error"></div>
            <br>
            <v-btn class="cyan" @click="register">Register</v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  name: "register",
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
      } catch (err) {
        this.error = err.response.data.error;
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
