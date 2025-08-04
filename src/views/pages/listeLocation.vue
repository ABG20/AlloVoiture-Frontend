<template>

  <Sidebar />

  <div class="page-content">
    <div class="page-content-wrapper p-xxl-4">

      <!-- Title -->
      <div class="row">
        <div class="col-12 mb-4 mb-sm-5">
          <div class="d-sm-flex justify-content-between align-items-center">
            <h1 class="h3 mb-2 mb-sm-0">Location</h1>
            <div class="d-grid"><a class="btn btn-primary-soft mb-0"><i class="bi bi-plus-lg fa-fw"></i> New Booking</a>
            </div>

          </div>
        </div>
      </div>

      <!-- Filters START -->
      <div class="row g-4 align-items-center">
        <!-- Tabs -->
        <div class="col-lg-6">
          <ul class="nav nav-pills-shadow nav-responsive">
            <li class="nav-item">
              <a class="nav-link mb-0" :class="{ active: !filters.statut }" @click="setStatut('')">Tous</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mb-0" :class="{ active: filters.statut === 'TERMINEE' }"
                @click="setStatut('TERMINEE')">TERMINEE</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mb-0" :class="{ active: filters.statut === 'EN_COURS' }"
                @click="setStatut('EN_COURS')">EN COURS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mb-0" :class="{ active: filters.statut === 'ANNULEE' }"
                @click="setStatut('ANNULEE')">ANNULEE</a>
            </li>
          </ul>
        </div>

        <!-- Search -->
        <div class="col-md-6 col-lg-3">
          <div class="rounded position-relative">
            <input class="form-control bg-transparent" v-model="filters.dateDebut" @change="fetchLocations" type="Date"
              placeholder="Search" aria-label="Search">
            <button
              class="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
              type="submit">
              <i class="fas fa-search fs-6"></i>
            </button>
          </div>
        </div>

        <div class="col-md-6 col-lg-3">
          <div class="rounded position-relative">
            <input class="form-control bg-transparent" v-model="filters.dateFin" @change="fetchLocations" type="Date"
              placeholder="Search" aria-label="Search">
            <button
              class="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
              type="submit">
              <i class="fas fa-search fs-6"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="card shadow mt-5">
        <!-- Card body START -->
        <div class="card-body">
          <!-- Table head -->
          <div class="bg-light rounded p-3 d-none d-lg-block">
            <div class="row row-cols-7 g-4">
              <div class="col">
                <h6 class="mb-0">Vehicule</h6>
              </div>
              <div class="col">
                <h6 class="mb-0">Client</h6>
              </div>
              <div class="col">
                <h6 class="mb-0">Date de Début</h6>
              </div>
              <div class="col">
                <h6 class="mb-0">Date de fin </h6>
              </div>
              <div class="col">
                <h6 class="mb-0">Montant</h6>
              </div>
              <div class="col">
                <h6 class="mb-0">Status</h6>
              </div>
              <div class="col">
                <h6 class="mb-0">Action</h6>
              </div>
            </div>
          </div>

          <!-- Table data -->
          <div v-for="location in locations" :key="location.id"
            class="row row-cols-xl-7 align-items-lg-center border-bottom g-4 px-2 py-4">
            <!-- Data item -->
            <div class="col">
              <small class="d-block d-lg-none">Vehicule:</small>
              <div class="d-flex align-items-center">
                <!-- Avatar -->
                <div class="avatar avatar-xs flex-shrink-0">
                  <img class="avatar-img rounded-circle" :src="`http://localhost:9091/api/images/${location.vehicule.photoPrincipale}`" alt="avatar">
                </div>
                <!-- Info -->
                <div class="ms-2">
                  <h6 class="mb-0 fw-light"> {{ location.vehicule.marque }}-{{ location.vehicule.modele }}</h6>
                </div>
              </div>
            </div>

            <!-- Data item -->
            <div class="col">
              <small class="d-block d-lg-none">Client</small>
              <h6 class="mb-0 fw-normal">{{ location.client.user.username }}</h6>
            </div>

            <!-- Data item -->
            <div class="col">
              <small class="d-block d-lg-none">Date de Début</small>
              <h6 class="mb-0 fw-normal">{{ formatDate(location.dateDebut) }}</h6>
            </div>

            <!-- Data item -->
            <div class="col">
              <small class="d-block d-lg-none">Date de FIN:</small>
              <h6 class="mb-0 fw-normal">{{ formatDate(location.dateFin) }}</h6>
            </div>

            <!-- Data item -->
            <div class="col">
              <small class="d-block d-lg-none">Montant:</small>
              <h6 class="mb-0 fw-normal">{{ location.montantTotal }}</h6>
            </div>

            <!-- Data item -->
            <div class="col">
              <small class="d-block d-lg-none">Status:</small>
              <div class="badge bg-success bg-opacity-10 text-success">{{ location.statut }}</div>
            </div>

            <!-- Data item -->
            <div class="col"><router-link :to="'/locationDetails/' + location.id"  href=" #"
                class="btn btn-sm btn-light mb-0">Voir</router-link></div>
          </div>



        </div>
        <div class="card-footer pt-0">
          <!-- Pagination and content -->
          <div class="d-sm-flex justify-content-sm-between align-items-sm-center">
            <!-- Content -->
            <!-- Pagination -->
            <nav class="mb-sm-0 d-flex justify-content-center" aria-label="navigation">
              <ul class="pagination pagination-sm pagination-primary-soft mb-0">
                <button @click="changePage(currentPage - 1)" :disabled="currentPage === 0"
                  class="p-2 bg-blue-500 text-white rounded">Précédent</button>
                <span>Page {{ currentPage + 1 }} / {{ totalPages }}</span>
                <button @click="changePage(currentPage + 1)" :disabled="currentPage >= totalPages - 1"
                  class="p-2 bg-blue-500 text-white rounded">Suivant</button>
              </ul>
            </nav>
          </div>
        </div>
      </div>





    </div>
  </div>
</template>



<script>
import '@/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js'
import '@/assets/vendor/choices/js/choices.min.js'
import '@/assets/vendor/flatpickr/js/flatpickr.min.js'
import '@/assets/js/functions.js'
import '@/assets/vendor/theme'
import axios from 'axios'
import Sidebar from '@/components/Sidebar.vue'
export default {
  components: {
    Sidebar
  },
  data() {
    return {
      locations: [],
      currentPage: 0,
      totalPages: 1,
      filters: {
        statut: '',
        dateDebut: '',
        dateFin: ''
      }

    };
  },

  methods: {
    async fetchLocations() {
      try {
        const token = localStorage.getItem('token'); // Récupérer le token d'authentification

        const params = {
          page: this.currentPage,
          size: 5,
          statut: this.filters.statut || null,
          dateDebut: this.filters.dateDebut ? `${this.filters.dateDebut}T00:00:00` : null,
          dateFin: this.filters.dateFin ? `${this.filters.dateFin}T23:59:59` : null
        };

        const response = await axios.get('http://localhost:9091/api/locations', {
          params,
          headers: {
            Authorization: `Bearer ${token}` // Ajout du token dans l'en-tête
          }
        });

        this.locations = response.data.content;
        this.totalPages = response.data.totalPages;
      } catch (error) {
        console.error("Erreur lors du chargement des locations :", error);
      }
    },
    setStatut(statut) {
      this.filters.statut = statut;
      this.fetchLocations();
    },
    changePage(page) {
      if (page >= 0 && page < this.totalPages) {
        this.currentPage = page;
        this.fetchLocations();
      }
    },
    formatDate(date) {
      return new Date(date).toLocaleString();
    }
  },
  mounted() {
    this.fetchLocations();
  }
};
</script>
<style scoped>
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.nav-link {
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
}

.nav-link.active {
  background-color: #007bff;
  color: white;
}
</style>
