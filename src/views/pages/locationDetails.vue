<template>
  <Sidebar />
  <div class="page-content">
    <div class="page-content-wrapper p-xxl-4">
      <!-- Title -->
      <div class="row">
        <div class="col-12 mb-4 mb-sm-5">
          <div class="d-sm-flex justify-content-between align-items-center">
            <h1 class="h3 mb-2 mb-sm-0"></h1>
          </div>
        </div>
      </div>

      <div v-if="location" class="w-full md:w-1/2 mx-auto mt-10">
        <h1 class="text-2xl font-bold mb-6 text-gray-800 text-center">🚗 Détails de la Location</h1>

        <div class="flex flex-col md:flex-row gap-6 items-start">
          <!-- Photo du véhicule -->
          <div class="flex-shrink-0">
            <img :src="`http://localhost:9091/api/images/${location.vehicule.photoPrincipale}`" alt="Photo du véhicule"
              width="100" height="20" />
          </div>

          <!-- Infos -->
          <div class="flex-1 space-y-3 text-gray-800">
            <p><strong>Véhicule :</strong> {{ location.vehicule.marque }} - {{ location.vehicule.modele }}</p>
            <p><strong>Date de début :</strong> {{ formatDate(location.dateDebut) }}</p>
            <p><strong>Date de fin :</strong> {{ formatDate(location.dateFin) }}</p>
            <p><strong>Montant Total :</strong> {{ location.montantTotal.toLocaleString() }} FCFA</p>
            <p>
              <strong>Statut :</strong>
              <span :class="statusColor(location.statut)" class="font-semibold">
                {{ location.statut }}
              </span>
            </p>
          </div>
        </div>

        <!-- Bouton Terminer -->
        <div class="mt-8 text-center">
          <button @click="terminerLocation"
            class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            Terminer la location
          </button>
        </div>
      </div>

      <div v-else class="text-center mt-10 text-gray-500">
        <p>Chargement des données...</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      toast: useToast(),
      location: null,
      error: null
    };
  },
  created() {
    this.fetchLocationDetails();
  },
  methods: {
    // Méthode pour récupérer les détails de la location
    async fetchLocationDetails() {
      const locationId = this.$route.params.id; // Récupérer l'ID de la location depuis l'URL

      // Récupérer le token d'authentification depuis localStorage
      const token = localStorage.getItem('token');;

      try {
        const response = await axios.get(`http://localhost:9091/api/locations/${locationId}`, {
          headers: {
            Authorization: `Bearer ${token}` // Ajouter le token dans l'en-tête
          }
        });
        this.location = response.data; // Stocker les données de la location dans le state
      } catch (error) {
        this.error = 'Erreur lors de la récupération des détails de la location';
        console.error(error);
      }
    },
    // Méthode pour terminer une location
    async terminerLocation() {
      const locationId = this.$route.params.id; // Récupérer l'ID de la location depuis l'URL

      // Récupérer le token d'authentification depuis localStorage
      const token = localStorage.getItem('token');

      if (!token) {
        this.error = 'Aucun token trouvé, veuillez vous reconnecter.';
        return;
      }

      try {
        // Envoi de la requête PUT pour terminer la location
        const response = await axios.put(`http://localhost:9091/api/locations/${locationId}/terminer`, {}, {
          headers: {
            Authorization: `Bearer ${token}` // Ajouter le token dans l'en-tête
          }
        });

        // Si la réponse est réussie, mettre à jour l'état de la location
        this.location = response.data; // Mise à jour de la location avec les nouvelles données

        this.$toast.success("Location terminée avec succès !");
      } catch (error) {
        this.error = 'Erreur lors de la terminaison de la location';
        console.error(error);
        this.$toast.error("Erreur lors de la terminaison de la location.");
      }
    },
    // Formatage de la date (si nécessaire)
    formatDate(dateStr) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(dateStr).toLocaleDateString('fr-FR', options)
    },
    statusColor(statut) {
      switch (statut) {
        case 'Terminée':
          return 'text-green-600'
        case 'En cours':
          return 'text-blue-600'
        case 'Annulée':
          return 'text-red-600'
        default:
          return 'text-gray-600'
      }
    }
  }
};
</script>

<style>

</style>
