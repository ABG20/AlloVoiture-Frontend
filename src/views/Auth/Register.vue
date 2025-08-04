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
                <div class="col-lg-6 d-md-flex align-items-center order-2 order-lg-1">
                  <div class="p-3 p-lg-5">
                    <img :src="imageUrl1" alt="">
                  </div>
                  <!-- Divider -->
                  <div class="vr opacity-1 d-none d-lg-block"></div>
                </div>

                <!-- Information -->
                <div class="col-lg-6 order-1">
                  <div class="p-4 p-sm-6">
                    <!-- Logo -->
                    <router-link :to="{ name: 'home'}">
                      <img class="h-50px mb-4" :src="imageUrl" alt="logo">
                    </router-link>
                    <!-- Title -->
                    <h1 class="mb-2 h3">Create new account</h1>
                    <p class="mb-0">Already a member?<router-link :to="{name:'login'}"> Log in</router-link></p>

                    <!-- Form START -->
                    <form class="mt-4 text-start" @submit.prevent="registerUser">
                      <!-- Nom -->
                      <div class="mb-3">
                        <label class="form-label">Nom</label>
                        <input type="text" class="form-control" v-model="user.username">
                      </div>
                      <!-- Prenom -->
                      <div class="mb-3">
                        <label class="form-label">Prénom</label>
                        <input type="text" class="form-control" v-model="user.prenom">
                      </div>
                      <!-- Email -->
                      <div class="mb-3">
                        <label class="form-label">Enter email id</label>
                        <input type="email" class="form-control" v-model="user.email">
                      </div>
                      <!-- Telephone -->
                      <div class="mb-3">
                        <label class="form-label">Téléphone</label>
                        <input type="tel" class="form-control " v-model="user.telephone" id="">
                      </div>
                      <!-- Password -->
                      <div class="mb-3 position-relative">
                        <label class="form-label">Enter password</label>
                        <input class="form-control fakepassword" type="password" id="psw-input"
                          v-model="user.motDePasse">
                        <span class="position-absolute top-50 end-0 translate-middle-y p-0 mt-3">
                          <i class="fakepasswordicon fas fa-eye-slash cursor-pointer p-2"></i>
                        </span>
                      </div>
                      <!-- Remember me -->
                      <div class="mb-3">
                        <input type="checkbox" class="form-check-input" id="rememberCheck">
                        <label class="form-check-label" for="rememberCheck">Keep me signed in</label>
                      </div>
                      <!-- Button -->
                      <div><button type="submit" class="btn btn-primary w-100 mb-0">Sign
                          up</button></div>

                      <!-- Google and facebook button -->



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
  <!-- **************** MAIN CONTENT END **************** -->

  <!-- Back to top -->
  <div class="back-top"></div>

</template>

<script>
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import '@/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js'
import '@/assets/vendor/choices/js/choices.min.js'
import '@/assets/vendor/flatpickr/js/flatpickr.min.js'
import '@/assets/js/functions.js'
import '@/assets/vendor/theme'
import axios from 'axios';
import { ref, onMounted } from 'vue';
import signin from "@/assets/images/element/signin.svg"
import logo from "@/assets/images/logo.jpg"; // Chemin relatif à votre image
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification'; // Utilisation de Vue Toastification

export default {

  setup() {
    const router = useRouter();
    const toast = useToast();

    const user = ref({
      username: '',
      prenom: '',
      email: '',
      telephone: '',
      motDePasse: '',
      role: {
        idRole: 3
      }// Rôle utilisateur par défaut
    });

  


    const registerUser = async () => {
      try {
        await axios.post('/users/creer', user.value);
        toast.success('Compte créé avec succès !');
        router.push('/login');
      } catch (error) {
        if (error.response) {
          toast.error(`Erreur : ${error.response.data}`);
        } else {
          toast.error("Une erreur inattendue s'est produite.");
        }
        console.error(error);
      }
    };

    return {
      user, registerUser, imageUrl: logo,
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


/* Personnalisation de l'input */
.custom-phone-input {
  font-size: 16px;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #ced4da;
  width: 100%;
  background-color: white;
  /* Assure-toi qu'il n'y a pas de fond caché */
}

/* Appliquer le style au champ intl-tel-input */
.iti {
  width: 100% !important;
  /* Assurer que le champ prend toute la largeur disponible */
}

.iti__input {
  padding-left: 40px !important;
  /* Laisser de l'espace pour l'indicatif */
  font-size: 16px !important;
  /* Taille du texte */
  color: #495057;
  /* Couleur du texte */
}

/* Assurer que l'input n'est pas couvert par un autre élément */
.iti__flag-container {
  z-index: 1;
}

.iti__selected-flag {
  z-index: 2;
}

/* Pour éviter que l'input soit remplacé de manière intrusive */
.iti__input {
  z-index: 2;
}


</style>
