<template>
  <div class="container_form d-flex align-items-center justify-content-center">
    <div class=" card">
      <h4 class="form-title">Login</h4>
      <section class="card-body">
          <Form @submit="submitFormLogin" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
              <section class="form-group">
                  <label>Username</label>
                  <Field name="username" v-model="user.username" type="text" class="form-control" :class="{ 'is-invalid': errors.username }" />
                  <section class="invalid-feedback">{{ errors.username }}</section>
              </section>
              <section class="form-group">
                  <label>Password</label>
                  <Field name="password" v-model="user.password" type="password" class="form-control" :class="{ 'is-invalid': errors.password }" />
                  <section class="invalid-feedback">{{ errors.password }}</section>
              </section>
              <section class="form-group">
                  <button class="btn btn-primary" :disabled="isSubmitting">
                      <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
                      Login
                  </button>
                  <router-link to="register" class="btn btn-link">Register</router-link>
              </section>
          </Form>
      </section>
  </div>
  </div>
</template>
<script>
import * as yup from "yup";
import { Form, Field } from "vee-validate";
import { useUsersStore } from "../stores/user";
import MyAlert from "../services/MyAlert";
  export default {
    setup(){
      const UsersStore = useUsersStore();
      return {UsersStore}
    },
    components: {
      Form,
      Field
    },
    data() {
      const schema = yup.object().shape({
        username: yup.string().required('Username is required'),
        password: yup.string().required('Password is required')
      });
      return {
          schema,
          user:{
            username:'',
            password:''
          }
      };
    },
    methods: {
      async submitFormLogin(){
          try {
          await this.UsersStore.login(
            this.user.username,
            this.user.password
          )
          if(!this.UsersStore.user){
            MyAlert.Alert('error', 'Username or password is incorrect')
            return;
          }
          else{
              await this.$router.push({name: 'home'})
              MyAlert.Alert('success', 'Login successfully');
          }
          } catch (error) {
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
  backdrop-filter: blur(10px);
}
.card-header{
  text-align: center;
  margin-bottom: 24px;
  background-color: #24252A;
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