<script>
import useValidate from "@vuelidate/core";
import { required, minLength, helpers } from "@vuelidate/validators";
import { MDBBtn, MDBInput } from "mdb-vue-ui-kit";

export default {
  data() {
    return {
      v$: useValidate(),
      username: "",
      password: "",
    };
  },
  methods: {
    async submitForm() {
      this.v$.$validate(); // checks all inputs
      console.log(this.v$);
      if (!this.v$.$error) {
        // if ANY fail validation
        const requestOption = {
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                "username": this.username,
                "password": this.password
            })
        }
        await fetch("https://tmsdev.tfnms.com:3000/api/v1/authenticate",requestOption)
        .then(response=>response.json())
        .then(res => {
             
          
            console.log(res);
            if(res.token){
              
            window.localStorage.setItem("token",res.token);
            this.$router.push("/home");
            }
        })
        console.log("Form successfully submitted.");
      } else {
        console.log("Form failed validation");
      }
    },
  },
  validations() {
    return {
      username: {
        required: helpers.withMessage("Please input your name", required),
      },
        password: {
          required: helpers.withMessage("Please input your password", required),
          minLength: minLength(6),
        }
    };
  },
  components: { MDBBtn, MDBInput },
};
</script>
<template>
  <div class="root">
    <h2>Login</h2>
    <p>
      <MDBInput
        white
        type="text"
        v-model="username"
        class="my-4"
        :class="{ 'bg-danger' : v$.password.$error}"
        label="Please input your Username"
        size="lg"
        @keyup.enter="submitForm"
      />
      <span v-if="v$.username.$error" class="text-danger">{{
        v$.username.$errors[0].$message
      }}</span>
    </p>
    <p>
      <MDBInput
      white
        type="password"
        v-model="password"
        class="my-4"
        label="Please input your Password"
        size="lg"
        :class="{ 'bg-danger' : v$.password.$error}"
        @keyup.enter="submitForm"
      />
      <span v-if="v$.password.$error" class="text-danger">{{
        v$.password.$errors[0].$message
      }}</span>
    </p>
    <MDBBtn
      @click="submitForm"
      class="m-2"
      type="submit"
      color="success"
      size="lg"
      rounded
      >Login</MDBBtn
    >
    <MDBBtn
      class="m-2"
      type="submit"
      color="dark"
      size="lg"
      rounded
      @click="$router.push('/register')"
      >Register</MDBBtn
    >
  </div>
</template>

<style lang="css">
.root {
  width: 400px;
  margin: 0 auto;
  background-color: #565658;
  color: white;
  padding: 30px;
  margin-top: 100px;
  border-radius: 20px;
}
</style>
