<template>
  <main>

    <!-- =======================
Main Content START -->
    <section class="vh-xxl-100">
      <div class="container h-100 d-flex px-0 px-sm-4">
        <div class="row justify-content-center align-items-center m-auto">
          <div class="col-12">
            <div class="bg-mode shadow rounded-3 overflow-hidden">
              <div class="row g-0">
                <!-- Vector Image -->
                <div class="col-lg-6 d-flex align-items-center order-2 order-lg-1">
                  <div class="p-3 p-lg-5">
                    <img :src="imageUrl1" alt="">
                  </div>
                  <!-- Divider -->
                  <div class="vr opacity-1 d-none d-lg-block"></div>
                </div>

                <!-- Information -->
                <div class="col-lg-6 order-1">
                  <div class="p-4 p-sm-7">
                    <!-- Logo -->
                    <router-link :to="{name:'home'}">
                      <img class="h-50px mb-4" :src="imageUrl" alt="logo">
                    </router-link>
                    <!-- Title -->
                    <h1 class="mb-2 h3">Welcome back</h1>
                    <p class="mb-0">New here?<router-link :to="{name: 'register'}"> Create an account</router-link></p>

                    <!-- Form START -->
                    <form class="mt-4 text-start" @submit.prevent="loginUser">
                      <!-- Email -->
                      <div class="mb-3">
                        <label class="form-label">Enter email id</label>
                        <input type="email" class="form-control" v-model="credentials.usernameOrEmail">
                      </div>
                      <!-- Password -->
                      <div class="mb-3 position-relative">
                        <label class="form-label">Enter password</label>
                        <input class="form-control fakepassword" type="password" id="psw-input"
                          v-model="credentials.motDePasse">
                        <span class="position-absolute top-50 end-0 translate-middle-y p-0 mt-3">
                          <i class="fakepasswordicon fas fa-eye-slash cursor-pointer p-2"></i>
                        </span>
                      </div>
                      <!-- Remember me -->
                      <div class="mb-3 d-sm-flex justify-content-between">
                        <div>
                          <input type="checkbox" class="form-check-input" id="rememberCheck">
                          <label class="form-check-label" for="rememberCheck">Remember me?</label>
                        </div>
                        <a href="forgot-password.html">Forgot password?</a>
                      </div>
                      <!-- Button -->
                      <div><button type="submit" class="btn btn-primary w-100 mb-0">Login</button></div>

                      <!-- Divider -->
                      <div class="position-relative my-4">
                        <hr>
                        <p class="small bg-mode position-absolute top-50 start-50 translate-middle px-2">Or sign in with
                        </p>
                      </div>
                    </form>
                    <!-- Form END -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- =======================
Main Content END -->

  </main>
  <!-- Back to top -->
  <div class="back-top"></div>
</template>


<script>
import '@/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js'
import '@/assets/vendor/choices/js/choices.min.js'
import '@/assets/vendor/flatpickr/js/flatpickr.min.js'
import '@/assets/js/functions.js'
import '@/assets/vendor/theme'
import signin from "@/assets/images/element/signin.svg"
import logo from "@/assets/images/logo.jpg"; // Chemin relatif à votre image
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useToast } from 'vue-toastification';
import axios from 'axios';

export default {
  setup() {
    const router = useRouter();
    const toast = useToast();
    const route = useRoute()

    // Données utilisateur
    const credentials = ref({
      usernameOrEmail: '',
      motDePasse: '',
    });

    // Fonction de connexion
    const loginUser = async () => {
      try {
        const response = await axios.post('/auth/signin', credentials.value);

        // Vérification de la réponse
        if (response.data.token) {
          // Stocker le token dans localStorage
          localStorage.setItem('token', response.data.token);
          // Stocker les infos utilisateur dans localStorage
          localStorage.setItem('nom', response.data.username);
          localStorage.setItem('prenom', response.data.prenom);
          localStorage.setItem('email', response.data.email);
          localStorage.setItem('role', response.data.role.nomRole);
          localStorage.setItem('id', response.data.idUser);

          toast.success('Connexion réussie !');

          // Redirection selon le rôle
          if (response.data.email === 'Admin') {
            router.push('/dashboard');
          } else {
            const redirectPath = route.query.redirect || '/'
            router.push(redirectPath) // Redirection après connexion
          }
        }
      } catch (error) {
        toast.error("Email ou mot de passe incorrect.");
        console.error(error);
      }
    };

    return {
      credentials, loginUser, imageUrl: logo,
      imageUrl1: signin, };
  }
};
</script>


<style>
@import url('https://fonts.gstatic.com');
@import url('https://fonts.googleapis.com');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Poppins:wght@400;500;700&display=swap');
@import '@/assets/vendor/font-awesome/css/all.min.css';
@import '@/assets/vendor/bootstrap-icons/bootstrap-icons.css';
@import '@/assets/vendor/choices/css/choices.min.css';
@import '@/assets/vendor/flatpickr/css/flatpickr.min.css';
@import '@/assets/css/style.css';
</style>
