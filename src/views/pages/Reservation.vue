<template>

  <SidebarClient />

  <div class="page-content">
    <div class="page-content-wrapper p-xxl-4">

      <!-- Title -->
      <div class="row">
        <div class="col-12 mb-4 mb-sm-5">
          <div class="d-sm-flex justify-content-between align-items-center">
            <h1 class="h3 mb-2 mb-sm-0">Réservations</h1>
            <div class="d-grid"><router-link class="btn btn-primary-soft mb-0" :to="{ name:'vehicule'}"><i
                  class="bi bi-plus-lg fa-fw"></i> New Booking</router-link>
            </div>
          </div>

        </div>


      </div>

      <!-- Card body START -->
      <div class="card-body">
        <!-- Table head -->
        <div class="bg-light rounded p-3 d-none d-xxl-block">
          <div class="row row-cols-6 g-4">
            <div class="col">
              <h6 class="mb-0">Room Name</h6>
            </div>
            <div class="col">
              <h6 class="mb-0">Bed Type</h6>
            </div>
            <div class="col">
              <h6 class="mb-0">Room Floor</h6>
            </div>
            <div class="col">
              <h6 class="mb-0">Amount</h6>
            </div>
            <div class="col">
              <h6 class="mb-0">Rating</h6>
            </div>
            <div class="col">
              <h6 class="mb-0">Action</h6>
            </div>
          </div>
        </div>



        <!-- Table data -->
        <div v-for="reservation in reservations" :key="reservation.id"
          class="row row-cols-1 row-cols-sm-2  row-cols-md-3 row-cols-xl-4 row-cols-xxl-6 g-2 g-sm-4 align-items-md-center border-bottom px-2 py-4">
          <!-- Data item -->
          <div class="col">
            <small class="d-block d-xxl-none">Room name:</small>
            <div class="d-flex align-items-center">
              <!-- Image -->
              <div class="w-80px flex-shrink-0">
                <img src="@/assets/images/category/hotel/4by3/07.jpg" class="rounded" alt="">
              </div>
              <!-- Title -->
              <h6 class="mb-0 ms-2">{{ reservation.vehicule.modele }} - {{ reservation.vehicule.marque }}</h6>
            </div>
          </div>

          <!-- Data item -->
          <div class="col">
            <small class="d-block d-xxl-none">Date début:</small>
            <h6 class="mb-0 fw-normal">{{ formatDate(reservation.dateDebut) }}</h6>
          </div>

          <!-- Data item -->
          <div class="col">
            <small class="d-block d-xxl-none">Date fin:</small>
            <h6 class="mb-0 fw-normal">{{ formatDate(reservation.dateFin) }}</h6>
          </div>


          <!-- Data item -->
          <div class="col">
            <small class="d-block d-xxl-none">Montant Total:</small>
            <h6 class="text-success mb-0">{{reservation.montantTotal}}F</h6>
          </div>


          <div class="col">
            <small class="d-block d-xxl-none">Statut:</small>
            <h6 class="mb-0 fw-normal"> <span
                :class="{ 'status-en-cours': reservation.statut === 'EN_COURS', 'status-terminee': reservation.statut === 'TERMINEE' }">
                {{ reservation.statut }}
              </span></h6>
          </div>
        </div>

      </div>
      <!-- Card body END -->

      <!-- Card footer START -->
      <div class="card-footer pt-0">
        <!-- Pagination and content -->
        <div class="d-sm-flex justify-content-sm-between align-items-sm-center">
          <!-- Affichage du nombre de résultats -->
          <p class="mb-sm-0 text-center text-sm-start">
            Affichage de {{ startIndex }} à {{ endIndex }} sur {{ totalElements }} réservations
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

  <!-- Counter boxes END -->

</template>



<script>
import '@/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js'
import '@/assets/vendor/choices/js/choices.min.js'
import '@/assets/vendor/flatpickr/js/flatpickr.min.js'
import '@/assets/js/functions.js'
import '@/assets/vendor/theme'
import axios from 'axios'
import SidebarClient from '@/components/SidebarClient.vue'

export default {
  components: {
    SidebarClient
  },
  data() {
    return {
      reservations: [],
      page: 0,
      size: 5, // Nombre d'éléments par page
      totalElements: 0,
      totalPages: 0,
    };
  },
  computed: {
    startIndex() {
      return this.page * this.size + 1;
    },
    endIndex() {
      return Math.min((this.page + 1) * this.size, this.totalElements);
    },
    displayedPages() {
      let pages = [];
      if (this.totalPages <= 5) {
        for (let i = 1; i <= this.totalPages; i++) {
          pages.push(i);
        }
      } else {
        if (this.page < 3) {
          pages = [1, 2, 3, '...', this.totalPages];
        } else if (this.page >= this.totalPages - 3) {
          pages = [1, '...', this.totalPages - 2, this.totalPages - 1, this.totalPages];
        } else {
          pages = [1, '...', this.page, this.page + 1, this.page + 2, '...', this.totalPages];
        }
      }
      return pages;
    },
    showDots() {
      return this.totalPages > 5;
    }
  },
  methods: {
    async fetchReservations() {
      try {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('id');

        console.log("Fetching reservations for user:", userId, "on page:", this.page);

        const response = await axios.get(`http://localhost:9091/api/locations/user/${userId}`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });

        console.log("API Response:", response.data);

        if (Array.isArray(response.data)) {
          // ✅ Pagination manuelle si l'API renvoie un tableau simple
          this.totalElements = response.data.length;
          this.totalPages = Math.ceil(this.totalElements / this.size);

          // Découpage des résultats en fonction de la page actuelle
          const start = this.page * this.size;
          const end = start + this.size;
          this.reservations = response.data.slice(start, end);
        } else {
          console.error("Format inattendu de la réponse API :", response.data);
          this.reservations = [];
          this.totalElements = 0;
          this.totalPages = 0;
        }
      } catch (error) {
        console.error("Erreur lors du chargement des réservations :", error);
      }
    },
    nextPage() {
      if (this.page < this.totalPages - 1) {
        this.page++;
        this.fetchReservations();
      }
    },
    prevPage() {
      if (this.page > 0) {
        this.page--;
        this.fetchReservations();
      }
    },
    goToPage(num) {
      if (typeof num === "number" && num > 0 && num <= this.totalPages) {
        this.page = num - 1;
        this.fetchReservations();
      }
    },
    formatDate(dateStr) {
      const date = new Date(dateStr);
      return date.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    }
  },
  mounted() {
    this.fetchReservations();
  }
};
</script>
<style scoped>
.status-en-cours {
  color: orange;
  font-weight: bold;
}

.status-terminee {
  color: green;
  font-weight: bold;
}
</style>
