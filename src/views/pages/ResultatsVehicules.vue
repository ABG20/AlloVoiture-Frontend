<template>
  <div class="container">
    <div class="p-4">


      <!-- Affichage des filtres appliqués
      <div class="mb-4 p-2 bg-gray-100 rounded">
        <p><strong>Marque :</strong> {{ filters.marque || "Toutes" }}</p>
        <p><strong>Modèle :</strong> {{ filters.modele || "Tous" }}</p>
        <p><strong>Catégorie :</strong> {{ filters.categorie || "Toutes" }}</p>
        <p><strong>Nombre de sièges :</strong> {{ filters.nombreSieges || "Tous" }}</p>
      </div>
-->
    </div>

    <div v-if="vehicules.length > 0">
      <h2 class="text-xl font-bold mb-4">Résultats de la recherche</h2>
      <div class="card border p-4 mb-4 col-8" v-for="vehicule in vehicules" :key="vehicule.id">
        <!-- Card body START -->
        <div class="card-body p-0">
          <div class="row g-2 g-sm-4 mb-4">
            <!-- Card image -->
            <div class="col-md-4 col-xl-3">
              <div >
                <img
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
                <li class="nav-item"></li>
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

    <!-- Message si aucun véhicule disponible -->
    <div v-else class="text-center text-gray-500 p-4">
      <h3 class="text-lg font-semibold mb-2">Aucun véhicule trouvé</h3>
      <p>Essayez de modifier vos filtres pour trouver d'autres véhicules disponibles.</p>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  props: ["filters"], // si tu veux l’utiliser comme prop aussi (optionnel)
  data() {
    return {
      vehicules: [],
    };
  },
  computed: {
    filtresActuels() {
      // On prend les filtres depuis l'URL (query params)
      return this.$route.query;
    }
  },
  methods: {
    async chargerVehicules() {
      try {
        const params = { ...this.filtresActuels };
        const response = await axios.get("http://localhost:9091/api/vehicules/dispo", { params });
        this.vehicules = response.data;
      } catch (err) {
        console.error("Erreur de chargement des véhicules :", err);
      }
    }
  },
  mounted() {
    this.chargerVehicules();
  },
}
</script>
