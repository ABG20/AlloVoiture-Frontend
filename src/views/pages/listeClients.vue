<template>

  <Sidebar />

  <div class="page-content">
    <div class="page-content-wrapper p-xxl-4">

      <!-- Title -->
      <div class="row">
        <div class="col-12 mb-4 mb-sm-5">
          <div class="d-sm-flex justify-content-between align-items-center">
            <h1 class="h3 mb-2 mb-sm-0">Client</h1>

            <div class="rounded position-relative">
              <input class="form-control bg-transparent" type="text" v-model="search" @input="fetchClients"
                placeholder="Rechercher un client..." aria-label="Search">
              <button
                class="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
                type="submit">
                <i class="fas fa-search fs-6"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">

      </div>





      <div class="card shadow mt-5">
        <!-- Card body START -->
        <div class="card-body">
          <!-- Table head -->
          <div class="bg-light rounded p-3 d-none d-lg-block">
            <div class="row row-cols-7 g-4">
              <div class="col">
                <h6 class="mb-0">Nom</h6>
              </div>
              <div class="col">
                <h6 class="mb-0">Prénom</h6>
              </div>
              <div class="col">
                <h6 class="mb-0">Sexe </h6>
              </div>
              <div class="col">
                <h6 class="mb-0">Adresse</h6>
              </div>
              <div class="col">
                <h6 class="mb-0">Téléphone</h6>
              </div>
              <div class="col">
                <h6 class="mb-0">Email</h6>
              </div>

            </div>
          </div>

          <!-- Table data -->
          <div v-for="client in clients" :key="client.id"
            class="row row-cols-xl-7 align-items-lg-center border-bottom g-4 px-2 py-4">
            <!-- Data item -->
            <div class="col">
              <small class="d-block d-lg-none">Nom:</small>
              <div class="d-flex align-items-center">
                <!-- Info -->
                <div class="ms-2">
                  <h6 class="mb-0 fw-light"> {{ client.nom }}</h6>
                </div>
              </div>
            </div>

            <!-- Data item -->
            <div class="col">
              <small class="d-block d-lg-none">Prenom</small>
              <h6 class="mb-0 fw-normal">{{ client.prenom }}</h6>
            </div>

            <!-- Data item -->
            <div class="col">
              <small class="d-block d-lg-none">Sexe</small>
              <h6 class="mb-0 fw-normal">{{ client.sexe }}</h6>
            </div>

            <!-- Data item -->
            <div class="col">
              <small class="d-block d-lg-none">Adresse</small>
              <h6 class="mb-0 fw-normal">{{ client.adresse }}</h6>
            </div>

            <!-- Data item -->
            <div class="col">
              <small class="d-block d-lg-none">Téléphone:</small>
              <h6 class="mb-0 fw-normal">{{ client.tel }}</h6>
            </div>

            <!-- Data item -->
            <div class="col">
              <small class="d-block d-lg-none">Email</small>
              <h6 class="mb-0 fw-normal">{{ client.email }}</h6>
            </div>

          </div>


          <!-- Counter boxes END -->

        </div>
      </div>
      <!-- Pagination -->
      <div class="card-footer pt-0">
        <div class="d-sm-flex justify-content-sm-between align-items-sm-center">
          <!-- Affichage du nombre de résultats -->
          <p class="mb-sm-0 text-center text-sm-start">
            Affichage de {{ startIndex }} à {{ endIndex }} sur {{ totalElements }} clients
          </p>

          <!-- Pagination -->
          <nav class="mb-sm-0 d-flex justify-content-center" aria-label="navigation">
            <ul class="pagination pagination-sm pagination-primary-soft mb-0">
              <li class="page-item" :class="{ disabled: page === 0 }">
                <button class="page-link" @click="prevPage" :disabled="page === 0">Précédent</button>
              </li>

              <li v-for="num in displayedPages" :key="num" class="page-item" :class="{ active: page === num - 1 }">
                <button class="page-link" @click="goToPage(num)">{{ num }}</button>
              </li>

              <li class="page-item disabled" v-if="showDots">
                <span class="page-link">...</span>
              </li>

              <li class="page-item" :class="{ disabled: page >= totalPages - 1 }">
                <button class="page-link" @click="nextPage" :disabled="page >= totalPages - 1">Suivant</button>
              </li>
            </ul>
          </nav>
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
      clients: [],
      search: '',
      page: 0,
      totalPages: 1,
      pageSize: 10,
      totalElements: 0,
      token: localStorage.getItem('token'), // Récupère le token depuis le stockage local
    }
  },
  computed: {
    startIndex() {
      return this.page * this.pageSize + 1;
    },
    endIndex() {
      return Math.min((this.page + 1) * this.pageSize, this.totalElements);
    },
    displayedPages() {
      let pages = [];
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
      return pages;
    },
    showDots() {
      return this.totalPages > 5 && this.page < this.totalPages - 2;
    }
  },
  methods: {
    async fetchClients() {
      try {
        const response = await axios.get('http://localhost:9091/api/clients/liste', {
          params: {
            page: this.page,
            size: this.pageSize,
            search: this.search
          },
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        });
        this.clients = response.data.content;  // Liste des clients paginée
        this.totalPages = response.data.totalPages;
        this.totalElements = response.data.totalElements;
      } catch (error) {
        console.error("Erreur lors de la récupération des clients", error);
      }
    },
    getPhotoUrl(photoPath) {
      return `http://localhost:9091/uploads/${photoPath}`;
    },
    prevPage() {
      if (this.page > 0) {
        this.page--;
        this.fetchClients();
      }
    },
    nextPage() {
      if (this.page < this.totalPages - 1) {
        this.page++;
        this.fetchClients();
      }
    },
    goToPage(num) {
      this.page = num - 1;
      this.fetchClients();
    }
  },
  mounted() {
    this.fetchClients();
  }
}
</script>
