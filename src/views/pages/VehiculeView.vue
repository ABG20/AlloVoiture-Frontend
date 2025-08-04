<template>

  <Header />
  <h1></h1>
  <main>
    <section class="bg-primary">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!-- Booking from START -->
            <div class="form-control-bg-light bg-mode border p-4 rounded-3">
              <div class="row g-4">


                <!-- Nav tabs END -->
              </div>

              <!-- Tab content START -->
              <div class="tab-content mt-0" id="pills-tabContent">
                <!-- One way tab START -->
                <div class="tab-pane fade show active" id="cab-one-way" role="tabpanel"
                  aria-labelledby="cab-one-way-tab">
                  <form class="row g-4 align-items-center">
                    <div class="col-xl-10">
                      <div class="row g-4">
                        <!-- Pickup -->
                        <div class="col-md-6 col-xl-4">
                          <div class="form-size-lg">
                            <label class="form-label">Marque</label>
                            <!-- Formulaire de recherche v-model="selectedMarque" -->
                            <select class="form-select js-choice" data-search-enabled="true"
                              aria-label=".form-select-sm" v-model="filters.marque" @change="fetchModeles">
                              <option value="" selected>Sélectionner une marque</option>
                              <option v-for=" marque in marques" :key="marque" :value="marque">{{ marque }}</option>
                              <option></option>
                            </select>
                          </div>
                        </div>

                        <!-- Drop v-model="selectedModele"  -->
                        <div class="col-md-6 col-xl-4">
                          <div class="form-size-lg">
                            <label class="form-label">Model</label>
                            <select class="form-select js-choice" data-search-enabled="true"
                              aria-label=".form-select-sm" v-model="filters.modele">
                              <option value="" selected>Sélectionner un modèle</option>
                              <option v-for="modele in modeles" :key="modele" :value="modele">{{ modele }}</option>
                            </select>
                          </div>
                        </div>

                        <!-- Date -->
                        <div class="col-md-6 col-xl-4">
                          <div class="form-size-lg">
                            <label class="form-label">Catégorie:</label>
                            <select class="form-select js-choice" data-search-enabled="true"
                              aria-label=".form-select-sm" v-model="filters.categorie">
                              <option value="">Sélectionner le nombre de place</option>
                              <option value="">Toutes les catégories</option>
                              <option v-for="categorie in categories" :key="categorie" :value="categorie">{{ categorie
                                }}</option>
                            </select>
                          </div>
                        </div>

                        <!-- Time -->

                      </div>
                    </div>

                    <div class="col-xl-2 d-grid mt-xl-auto">
                      <a class="btn btn-lg btn-primary mb-0" @click="searchVehicules">Rechercher</a>
                    </div>
                  </form>
                </div>
                <!-- One way tab END -->

                <!-- Round way tab END -->
                <div class=" tab-pane fade" id="cab-round-way" role="tabpanel" aria-labelledby="cab-round-way-tab">
                  <form class="row g-4 align-items-center">
                    <div class="col-xl-12">
                      <div class="row g-4">
                        <!-- Leaving From -->
                        <div class="col-md-6 col-xl-6">
                          <div class="form-size-lg">
                            <label class="form-label">Pickup</label>
                            <select class="form-select js-choice" data-search-enabled="true"
                              aria-label=".form-select-sm">
                              <option value="">Select location</option>
                              <option>New York</option>
                              <option>Canada</option>
                              <option>Paris</option>
                            </select>
                          </div>
                        </div>

                        <!-- Going To -->
                        <div class="col-md-6 col-xl-6">
                          <div class="form-size-lg">
                            <label class="form-label">Drop</label>
                            <select class="form-select js-choice" data-search-enabled="true"
                              aria-label=".form-select-sm">
                              <option value="">Select location</option>
                              <option>Canada</option>
                              <option>New York</option>
                              <option>Paris</option>
                            </select>
                          </div>
                        </div>

                        <!-- Date -->
                        <div class="col-md-6 col-xl-3">
                          <label class="form-label">Pickup Date</label>
                          <input type="text" class="form-control form-control-lg flatpickr" placeholder="Select date">
                        </div>

                        <!-- Time -->
                        <div class="col-md-6 col-xl-3">
                          <label class="form-label">Pickup time</label>
                          <input type="text" class="form-control form-control-lg flatpickr" data-enableTime="true"
                            data-noCalendar="true" placeholder="Select time">
                        </div>

                        <!-- Date -->
                        <div class="col-md-6 col-xl-3">
                          <label class="form-label">Return Date</label>
                          <input type="text" class="form-control form-control-lg flatpickr" placeholder="Select date">
                        </div>

                        <!-- Time -->
                        <div class="col-md-6 col-xl-3">
                          <label class="form-label">Return time</label>
                          <input type="text" class="form-control form-control-lg flatpickr" data-enableTime="true"
                            data-noCalendar="true" placeholder="Select time">
                        </div>
                      </div>
                    </div>

                    <div class="col-xl-2">
                      <a class="btn btn-lg btn-primary w-100 mb-0" href="cab-list.html#">Update</a>
                    </div>
                  </form>
                </div>
                <!-- Round way tab END -->
              </div>
              <!-- Tab content END -->
            </div>
            <!-- Booking from END -->
          </div>
        </div>
      </div>
    </section>
    <!-- =======================
Search START -->

    <!-- =======================
Titles START -->
    <section class="pt-6">
      <div class="container position-relative">

        <!-- Title and button START -->

        <!-- Title and button END -->

      </div>
    </section>

    <section class="pt-0">
      <div class="container" data-sticky-container>
        <div class="row">

          <!-- Left sidebar START -->

          <!-- Left sidebar END -->

          <!-- Main content START -->
          <div class="col-xl-10 col-xxl-9">
            <div class="vstack gap-4">

              <!-- Alert box START -->
              <div class="alert alert-warning border-warning rounded-3 mb-0" role="alert">
                <h5>Why book a one-way trip with us?</h5>
                <!-- List -->
                <ul class="list-group list-group-borderless mb-0">
                  <li class="list-group-item d-flex text-body mb-0">
                    <i class="fa-solid fa-check text-warning me-2"></i>Only one-side fare for your doorstep pickup &
                    drop to destination.
                  </li>
                  <li class="list-group-item d-flex text-body mb-0">
                    <i class="fa-solid fa-check text-warning me-2"></i>No hidden charges - Pay nothing extra than what's
                    mentioned.
                  </li>
                  <li class="list-group-item d-flex text-body mb-0">
                    <i class="fa-solid fa-check text-warning me-2"></i>Experienced & polite drivers with clean &
                    comfortable cabs.
                  </li>
                </ul>
              </div>
              <!-- Alert box END -->
              <div v-if="loading" class="text-gray-500">Chargement...</div>

              <!-- Aucun véhicule trouvé -->
              <div v-else-if="!loading && vehicules.length === 0">
                <p class="text-center text-danger">Aucun véhicule disponible pour le moment.</p>
              </div>
              <!-- Cab item START -->
              <div v-else>


                <div class="card border p-4 mb-4" v-for="vehicule in vehicules" :key="vehicule.id">
                  <!-- Card body START -->
                  <div class="card-body p-0">
                    <div class="row g-2 g-sm-4 mb-4">
                      <!-- Card image -->
                      <div class="col-md-4 col-xl-3">
                        <div class="">
                           <img v-if="vehicule.photoPrincipale"
                           :src="`http://localhost:9091/api/images/${vehicule.photoPrincipale}`"
                            alt="photo véhicule" width="100">
                          <span v-else>Pas d'image</span>
                        </div>
                      </div>

                      <!-- Card title and rating -->
                      <div class="col-sm-6 col-md-4 col-xl-6">
                        <h4 class="card-title mb-2"><router-link
                            :to="{ name: 'vehiculeDetails', params: { id: vehicule.id } }" class="stretched-link">{{
                            vehicule.marque
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
                  <!-- card footer END -->

                  <!-- Cab item END -->
                  <!-- Car</div>d body END -->

                </div>
              </div>
              <!-- card footer END -->
              <!-- Pagination -->
              <div class="mt-4 flex justify-between">
                <button @click="prevPage" :disabled="page === 0" class="p-2 rounded btn btn-link p-0 mb-0">
                  Précédent
                </button>
                <span>Page {{ page + 1 }} / {{ totalPages }}</span>
                <button @click="nextPage" :disabled="page === totalPages - 1"
                  class="bg-gray-400 text-white p-2 rounded btn btn-primary mb-0">
                  Suivant
                </button>
              </div>
              <!-- Cab item
              <div class="d-flex justify-content-between p-2 p-xl-0 mt-xl-4">
                <button class="btn btn-link p-0 mb-0">Clear all</button>
                <button class="btn btn-primary mb-0">Filter Result</button>
              </div>
               END -->
              <!-- Pagination -->

            </div>
          </div>
          <!-- Main content END -->

        </div> <!-- Row END -->

      </div>
    </section>
  </main>

  <Footer />
</template>

<script>
import axios from "axios";
import vehiculeService from "@/Services/vehiculeService";
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import CategorieVehiculeService from '@/Services/CategorieVehiculeService'
export default {
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Header,
    // eslint-disable-next-line vue/no-reserved-component-names
    Footer,
  },
  data() {
    return {
      vehicules: [],
      marques: [],
      modeles: [],
      categories: [], // Exemple de catégories
      filters: {
        marque: "",
        modele: "",
        categorie: "",
        nombreSieges: "",
        disponible: true
      },
      page: 0,
      totalPages: 0
    };
  },
  created() {
    this.fetchVehicules();
    this.fetchMarques();
    this.getCategories();
  },
  methods: {
    async fetchMarques() {
      try {
        const response = await vehiculeService.getMarques();
        this.marques = response.data;
      } catch (error) {
        console.error("Erreur lors de la récupération des marques", error);
      }
    },
    async fetchModeles() {
      try {
        // Récupérer tous les modèles
        const response = await axios.get("http://localhost:9091/api/vehicules/modeles");
        if (response.data && response.data.length > 0) {
          this.modeles = response.data; // Mettre à jour la liste des modèles
        } else {
          this.modeles = []; // Si aucun modèle n'est trouvé
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des modèles:", error);
      }
    },
    async fetchVehicules(page = 0) {
      const params = {
        marque: this.filters.marque,
        modele: this.filters.modele,
        categorie: this.filters.categorie,
        nombreSieges: this.filters.nombreSieges,
        disponible: this.filters.disponible,
        page: page,
        size: 10 // Limite de 10 véhicules par page
      };

      try {
        const response = await axios.get("http://localhost:9091/api/vehicules/search", { params });
        this.vehicules = response.data.content;
        this.page = response.data.pageable.pageNumber;
        this.totalPages = response.data.totalPages;
      } catch (error) {
        console.error("Erreur lors de la récupération des véhicules", error);
      }
    },
    async getCategories() {
      try {
        const response = await CategorieVehiculeService.getCategories();
        this.categories = response.data;
      } catch (error) {
        console.error("Erreur lors de la récupération des catégories :", error);
      }
    },
    searchVehicules() {
      this.fetchVehicules();
    }
  }
};
</script>

<style scoped>
/* Style de base pour la liste des véhicules */
.vehicle-list {
  padding: 20px;
}

.filters {
  margin-bottom: 20px;
}

.vehicles {
  margin-bottom: 20px;
}

.vehicle-item {
  margin-bottom: 10px;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
