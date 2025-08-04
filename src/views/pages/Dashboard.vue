<template>
  <Sidebar />
  <!-- Page content START -->
  <div class="page-content">
    <div class="page-content-wrapper p-xxl-4">

      <!-- Title -->
      <div class="row">
        <div class="col-12 mb-4 mb-sm-5">
          <div class="d-sm-flex justify-content-between align-items-center">
            <h1 class="h3 mb-2 mb-sm-0">Tableau de bord</h1>

          </div>
        </div>
      </div>

      <!-- Counter boxes START -->
      <div class="row g-4 mb-5">
        <!-- Counter item -->
        <div class="col-md-6 col-xxl-3">
          <div class="card card-body bg-warning bg-opacity-10 border border-warning border-opacity-25 p-4 h-100">
            <div class="d-flex justify-content-between align-items-center">
              <!-- Digit -->
              <div>
                <h4 class="mb-0">{{ statistiques.totalVehicules }}</h4>
                <span class="h6 fw-light mb-0">Véhicules</span>
              </div>
              <!-- Icon -->
              <div class="icon-lg rounded-circle bg-warning text-white mb-0"><i class="fa-solid fa-hotel fa-fw"></i>
              </div>
            </div>
          </div>
        </div>

        <!-- Counter item -->
        <div class="col-md-6 col-xxl-3">
          <div class="card card-body bg-success bg-opacity-10 border border-success border-opacity-25 p-4 h-100">
            <div class="d-flex justify-content-between align-items-center">
              <!-- Digit -->
              <div>
                <h4 class="mb-0">{{ statistiques.vehiculesLoues }}</h4>
                <span class="h6 fw-light mb-0">Véhicules loués</span>
              </div>
              <!-- Icon -->
              <div class="icon-lg rounded-circle bg-success text-white mb-0"><i
                  class="fa-solid fa-hand-holding-dollar fa-fw"></i></div>
            </div>
          </div>
        </div>

        <!-- Counter item -->
        <div class="col-md-6 col-xxl-3">
          <div class="card card-body bg-primary bg-opacity-10 border border-primary border-opacity-25 p-4 h-100">
            <div class="d-flex justify-content-between align-items-center">
              <!-- Digit -->
              <div>
                <h4 class="mb-0">{{ statistiques.vehiculesDisponibles }}</h4>
                <span class="h6 fw-light mb-0">Véhicules disponibles</span>
              </div>
              <!-- Icon -->
              <div class="icon-lg rounded-circle bg-primary text-white mb-0"><i class="fa-solid fa-bed fa-fw"></i></div>
            </div>
          </div>
        </div>

        <!-- Counter item -->
        <div class="col-md-6 col-xxl-3">
          <div class="card card-body bg-info bg-opacity-10 border border-info border-opacity-25 p-4 h-100">
            <div class="d-flex justify-content-between align-items-center">
              <!-- Digit -->
              <div>
                <h4 class="mb-0">{{ statistiques.totalLocations }}</h4>
                <span class="h6 fw-light mb-0">Total des locations</span>
              </div>
              <!-- Icon -->
              <div class="icon-lg rounded-circle bg-info text-white mb-0"><i
                  class="fa-solid fa-building-circle-check fa-fw"></i></div>
            </div>
          </div>
        </div>

        <!-- Counter item -->
        <div class="col-md-6 col-xxl-3">
          <div class="card card-body bg-primary bg-opacity-10 border border-primary border-opacity-25 p-4 h-100">
            <div class="d-flex justify-content-between align-items-center">
              <!-- Digit -->
              <div>
                <h4 class="mb-0">{{ statistiques.totalClients }}</h4>
                <span class="h6 fw-light mb-0">Total de clients</span>
              </div>
              <!-- Icon -->
              <div class="icon-lg rounded-circle bg-primary text-white mb-0"><i class="fa-solid fa-bed fa-fw"></i></div>
            </div>
          </div>
        </div>
      </div>


      <!-- Counter boxes END -->

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
      statistiques: {
        totalVehicules: 0,
        vehiculesLoues: 0,
        vehiculesDisponibles: 0,
        totalLocations: 0,
        totalClients: 0
      }
    };
  },
  mounted() {
    this.fetchStatistiques();
  },
  methods: {
    async fetchStatistiques() {
      try {
        const response = await axios.get('http://localhost:9091/api/statistiques');
        this.statistiques = response.data;
      } catch (error) {
        console.error('Erreur lors de la récupération des statistiques:', error);
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
