<script>
import useValidate from "@vuelidate/core";
import { required, minLength, email, sameAs, helpers } from "@vuelidate/validators";
import { MDBBtn, MDBInput } from "mdb-vue-ui-kit";

export default {
  data() {
    return {
      v$: useValidate(),
      firstname:'',
      lastname:'',
      email: "",
      password: {
        password: "",
        confirm: "",
      },
    };
  },
  methods: {
    submitForm() {
      this.v$.$validate(); // checks all inputs
      console.log(this.v$);
      if (!this.v$.$error) {
        // if ANY fail validation
        console.log("Form successfully submitted.");
      } else {
        console.log("Form failed validation");
      }
    },
  },
  validations() {
    return {
        firstname: {
        required: helpers.withMessage("Please input your firstname", required),
      },lastname: {
        required: helpers.withMessage("Please input your lastname", required),
      },
      email: {
        required: helpers.withMessage("Please input your email", required),
        email: helpers.withMessage("Please include @ character and .com.",email)
      },
      password: {
        password: {
          required: helpers.withMessage("Please input your password", required),
          minLength: minLength(6),
        },
        confirm: {
          required: helpers.withMessage("Please input your password", required),
          sameAs: sameAs(this.password.password),
        },
      },
    };
  },
  components: { MDBBtn, MDBInput },
};
</script>

<template>
  <div class="root">
    <div class="text-center">
      <h2 class="p-4">Register</h2>
      <p>
          <MDBInput
            white
            label="Please input your first name"
            type="text"
            size="lg"
            v-model="firstname"
          />
          <span v-if="v$.firstname.$error">{{ v$.firstname.$errors[0].$message }}</span>
      </p>
      <p>
          <MDBInput
            white
            label="Please input your last name"
            type="text"
            size="lg"
            v-model="lastname"
          />
          <span v-if="v$.lastname.$error">{{ v$.lastname.$errors[0].$message }}</span>
      </p>
      <p>
        <MDBInput
          white
          label="Please input your Email"
          type="email"
          size="lg"
          v-model="email"
        />
        <span v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>
      </p>
      <p>
        <MDBInput
          white
          label="Please input your password"
          type="password"
          size="lg"
          v-model="password.password"
        />
        <span v-if="v$.password.password.$error">{{ v$.password.password.$errors[0].$message }}</span>
      </p>
      <p>
        <MDBInput
          white
          label="Please input your password again"
          type="password"
          size="lg"
          v-model="password.confirm"
        />
        <span v-if="v$.password.confirm.$error">{{ v$.password.confirm.$errors[0].$message }}</span>
      </p>
      <div class="mx-auto m-4">
        <MDBBtn type="submit" color="dark" size="lg" rounded @click="submitForm"
          >Register</MDBBtn
        >
        <MDBBtn color="success" size="lg" rounded @click="$router.push('/')"
          >Login</MDBBtn
        >
      </div>
    </div>
  </div>
</template>

<style lang="css">
.root {
  width: 400px;
  margin: 0 auto;
  background-color: #a0a0a0;
  color: white;
  padding: 30px;
  margin-top: 100px;
  border-radius: 20px;
}
</style>
