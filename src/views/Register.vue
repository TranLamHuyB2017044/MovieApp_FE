<template>
  <div class="container_form d-flex align-items-center justify-content-center">
    <div class="card">
      <h4 class="form-title">Register</h4>
      <section class="card-body">
          <Form @submit="submitFormRegister" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
              <section class="form-group">
                  <label>First Name</label>
                  <Field name="firstName" type="text" v-model="user.firstName" class="form-control" :class="{ 'is-invalid': errors.firstName }" />
                  <section class="invalid-feedback">{{ errors.firstName }}</section>
              </section>
              <section class="form-group">
                  <label>Last Name</label>
                  <Field name="lastName" type="text" v-model="user.lastName" class="form-control" :class="{ 'is-invalid': errors.lastName }" />
                  <section class="invalid-feedback">{{ errors.lastName }}</section>
              </section>
              <section class="form-group">
                  <label>Username</label>
                  <Field name="username" type="text" v-model="user.username" class="form-control" :class="{ 'is-invalid': errors.username }" />
                  <section class="invalid-feedback">{{ errors.username }}</section>
              </section>
              <section class="form-group">
                  <label>Password</label>
                  <Field name="password" type="password" v-model="user.password" class="form-control" :class="{ 'is-invalid': errors.password }" />
                  <section class="invalid-feedback">{{ errors.password }}</section>
              </section>
              <section class="form-group">
                  <button class="btn btn-primary" :disabled="isSubmitting">
                      <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
                      Register
                  </button>
                  <router-link to="login" class="btn btn-link">Cancel</router-link>
              </section>
          </Form>
      </section>
  </div>
  </div>
</template>

<script>
import * as Yup from "yup";
import { Form, Field} from "vee-validate";
import {useUsersStore} from "../stores/user";
import MyAlert from "../services/MyAlert";
  export default {
    setup(){
      const UsersStore = useUsersStore();
      return {UsersStore}
    },
    components: {
      Form,
      Field,
    },
    data() {
      const schema = Yup.object().shape({
        firstName: Yup.string()
          .required('First Name is required'),
        lastName: Yup.string()
         .required('Last Name is required'),
        username: Yup
          .string()
          .required(),
        password: Yup
          .string()
          .required()
      });
      return {
          schema,
          user: {
            "firstName" : "",
            "firstName" : "",
            "username" : "",
            "password" : "",
            "admin" : false,
          }
      };
    },
    methods: {
       async submitFormRegister(user){
          try {
            await this.UsersStore.register(user,{
                  firstName : this.user.firstName,
                  lastName : this.user.lastName,
                  username : this.user.username,
                  password : this.user.password,
                  admin: this.user.admin
            })
            await this.$router.push({name: 'login'})
            MyAlert.Alert('success', 'Registered successfully')

          } catch (error) {
            MyAlert.Alert('error', 'Failed to register username already registered');
              console.log(error)
          }  
       }
    },
  }


</script>
<style scoped>
.container_form{
    width: 100%;
    height: 100vh;
    margin: 0;
    background: url(@/assets/arcane_br.png)  bottom;
}

.card{
  border: 2px solid #0088a9;
  width: 450px;
  color: #fff;
  background: transparent !important;
  opacity: 0.8;
  backdrop-filter: blur(20px);
}

.card{
  border: 2px solid #0088a9;
  width: 450px;
  color: #fff;
}
.card-header{
  text-align: center;
  margin-bottom: 24px;
  background-color: #24252A;
  border-bottom: 1px solid #0088a9;
}
.btn {
  margin-top: 24px;
  text-decoration: none;
  font-size: 18px;
}
.form-title{
  text-align: center;
  font-size: 36px;
  font-weight: 600;
}
.error-feedback {
  color: red;
  margin: auto;
}
</style>