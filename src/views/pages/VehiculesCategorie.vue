<template>
  <Header />
  <div class="container">
    <h2>Véhicules disponibles pour la catégorie : {{ nomCategorie }}</h2>

    <div class="card border p-4 mb-4 col-8" v-for="vehicule in vehicules" :key="vehicule.immatriculation">
      <!-- Card body START -->
      <div class="card-body p-0">
        <div class="row g-2 g-sm-4 mb-4">
          <!-- Card image -->
          <div class="col-md-4 col-xl-3">
            <div class="bg-light rounded-3 px-4 py-5">
              <img class="bg-light rounded-3 px-4 py-5"
                :src="`http://localhost:9091/api/images/${vehicule.photoPrincipale}`" alt="">

            </div>
          </div>

          <!-- Card title and rating -->
          <div class="col-sm-6 col-md-4 col-xl-6">
            <h4 class="card-title mb-2"><router-link :to="{ name: 'vehiculeDetails', params: { id: vehicule.id } }"
                class="stretched-link">{{ vehicule.marque
                }} - {{ vehicule.modele }}</router-link>
            </h4>
            <!-- Nav divider -->
            <ul class="nav nav-divider h6 fw-normal mb-2">
              <li class="nav-item"></li>
              <li class="nav-item">{{ vehicule.tarifHoraire }}/h</li>
              <li class="nav-item">{{ vehicule.nombreSieges }} places</li>
            </ul>
            <ul class="nav nav-divider h6 fw-normal mb-2">
              <li class="nav-item"></li>
              <li class="nav-item">{{ vehicule.categorie.nom }}</li>
            </ul>
          </div>

          <!-- Button -->
          <div class="col-sm-6 col-md-4 col-xl-3 text-sm-end">
            <!-- Discount -->
            <p class="text-danger mb-0"></p>
            <!-- Price -->
            <ul class="list-inline mb-1">
              <li class="list-inline-item text-decoration-line-through me-1"></li>
              <li class="list-inline-item h5 mb-0"></li>
            </ul>
            <router-link :to="{ name: 'vehiculeDetails', params: { id: vehicule.id } }"
              class="btn btn-dark mb-0">Réversez
              Maintenant</router-link>
          </div>
        </div> <!-- Row END -->
      </div>
      <!-- Card body END -->

      <!-- Card footer START -->
      <div class="card-footer border-top p-0 pt-3">
        <div class="row">
          <!-- List -->
          <div class="col-md-6">
            <ul class="list-group list-group-borderless mb-0">
              <li class="list-group-item d-flex pb-0 mb-0">
                <span class="h6 fw-normal mb-0"><i class="bi bi-check-circle me-2"></i>{{
                  vehicule.vitesseMax }}Klm/h</span>
              </li>
              <li class="list-group-item d-flex pb-0 mb-0">
                <span class="h6 fw-normal mb-0"><i class="bi bi-check-circle me-2"></i>{{
                  vehicule.modele
                  }}/{{ vehicule.anneeFabrication }}
                </span>
              </li>
              <li class="list-group-item d-flex pb-0 mb-0">
                <span class="h6 fw-normal mb-0"><i class="bi bi-check-circle me-2"></i>{{
                  vehicule.typeCarburant }} Car</span>
              </li>
            </ul>
          </div>

          <!-- Info -->
          <div class="col-md-6">
            <ul class="list-group list-group-borderless mb-0">
              <li class="list-group-item d-flex h6 fw-light text-success pb-0 mb-0">
                Free Cancellation, till 1 hour of Pick up
              </li>
              <li class="list-group-item d-flex h6 fw-light text-success pb-0 mb-0">
                Free waiting up to 45 minutes
              </li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  </div>

  <Footer />

</template>

<script>
import axios from 'axios';
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {

  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Header,
    // eslint-disable-next-line vue/no-reserved-component-names
    Footer,
  },
  props: ['nomCategorie'], // Récupération du paramètre de l'URL
  data() {
    return {
      vehicules: [],
    };
  },
  created() {
    this.fetchVehiclesByCategory();
  },
  methods: {
    async fetchVehiclesByCategory() {
      try {
        const response = await axios.get(`http://localhost:9091/api/vehicules/disponibles-by-categorie/${this.nomCategorie}`);
        this.vehicules = response.data;
      } catch (error) {
        console.error('Erreur lors de la récupération des véhicules:', error);
      }
    }
  }
};
</script>
<style scoped>
@import url('https://fonts.gstatic.com');
@import url('https://fonts.googleapis.com');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Poppins:wght@400;500;700&display=swap');
@import '@/assets/vendor/font-awesome/css/all.min.css';
@import '@/assets/vendor/bootstrap-icons/bootstrap-icons.css';
@import '@/assets/vendor/choices/css/choices.min.css';
@import '@/assets/vendor/flatpickr/css/flatpickr.min.css';
@import '@/assets/css/style.css';
</style>
