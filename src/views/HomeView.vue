<template>
  <Header />

  <main>
    <section class="pt-0 pt-lg-5">
      <div class="container">
        <div class="row">

          <div class="col-lg-10 ms-auto position-relative">
            <img :src="imageUrl" class="rounded-3" alt="">

            <!-- Search START -->
            <div class="col-11 col-sm-10 col-lg-8 col-xl-6 position-lg-middle ms-lg-8 ms-xl-7">
              <div class="card shadow pb-0 mt-n7 mt-sm-n8 mt-lg-0">

                <!-- Card header -->
                <div class="card-header border-bottom p-3 p-sm-4">
                  <h5 class="card-title mb-0">Réservez votre vehicule en ligne</h5>
                </div>

                <!-- Card body START -->
                <form class="card-body form-control-border p-3 p-sm-4" @submit.prevent="goToResults">
                  <!-- Tabs START -->
                  <!-- Tabs END -->

                  <!-- Tabs content START -->
                  <div class="tab-content my-4" id="pills-tabContent">
                    <!-- One way START -->
                    <div class="tab-pane fade show active" id="cab2-one-way" role="tabpanel"
                      aria-labelledby="cab2-one-way-tab">
                      <div class="row g-2 g-md-4">
                        <!-- Pickup -->
                        <div class="col-md-6 position-relative">
                          <div class="form-fs-lg form-control-transparent">
                            <label class="form-label small">Marque</label>
                            <select class="form-select js-choice" data-search-enabled="true" v-model="filters.marque">
                              <option value="" selected>Sélectionner une marque</option>
                              <option v-for="marque in marques" :key="marque" :value="marque">{{ marque }}</option>
                            </select>
                          </div>

                          <!-- Auto fill button -->

                        </div>

                        <!-- Drop -->
                        <div class="col-md-6 text-md-end">
                          <div class="form-fs-lg form-control-transparent">
                            <label class="form-label small ms-3 ms-md-0 me-md-3">Modele</label>
                            <select class="form-select js-choice" data-search-enabled="true" v-model="filters.modele">
                              <option value="" selected>Sélectionner un modèle</option>
                              <option v-for="modele in modeles" :key="modele" :value="modele">{{ modele }}</option>
                            </select>
                          </div>
                        </div>

                        <!-- Date -->
                        <div class="col-md-6">
                          <div class="form-fs-lg form-control-transparent">
                            <label class="form-label small">Catégorie de Véhicule</label>
                            <select class="form-select js-choice" data-search-enabled="true"
                              v-model="filters.categorie">
                              <option value="" selected>Sélectionner une catégorie</option>
                              <option v-for="nom in noms" :key="nom" :value="nom">{{ nom }}
                              </option>
                            </select>
                          </div>
                        </div>

                        <!-- Time -->
                        <div class="col-md-6 text-md-end">
                          <div class="form-fs-lg form-control-transparent">
                            <label class="form-label small ms-3 ms-md-0 me-md-3">Nombre de place</label>
                            <select class="form-select js-choice" data-search-enabled="true"
                              v-model="filters.nombreSieges">
                              <option value="" selected>Sélectionner le nombre de place</option>
                              <option value="4">4/places</option>
                              <option value="5">5/places</option>
                              <option value="6">6/places</option>
                              <option value="8">8/places</option>
                              <option value="9">9/places</option>
                            </select>
                          </div>
                        </div>

                      </div>
                    </div>
                    <!-- One way END -->

                    <!-- Round trip START -->
                    <div class="tab-pane fade" id="cab2-round-way" role="tabpanel" aria-labelledby="cab2-round-way-tab">
                      <div class="row g-2 g-md-4">
                        <!-- Pickup -->
                        <div class="col-md-6 position-relative">
                          <label class="form-label small">Pickup</label>
                          <div class="form-fs-lg form-control-transparent">
                            <select class="form-select js-choice" data-search-enabled="true">
                              <option value="">Select Location</option>
                              <option>New York</option>
                              <option>Canada</option>
                              <option>Paris</option>
                            </select>
                          </div>

                          <!-- Auto fill button -->
                          <div class="btn-flip-icon z-index-9 mt-2 mt-md-1">
                            <button class="btn btn-dark shadow btn-round mb-0"><i
                                class="fa-solid fa-right-left"></i></button>
                          </div>
                        </div>

                        <!-- Drop -->
                        <div class="col-sm-6 text-sm-end">
                          <label class="form-label small ms-3 ms-md-0 me-md-3">Drop</label>
                          <div class="form-fs-lg form-control-transparent">
                            <select class="form-select js-choice" data-search-enabled="true">
                              <option value="">Select Location</option>
                              <option>Canada</option>
                              <option>New York</option>
                              <option>Paris</option>
                            </select>
                          </div>
                        </div>

                        <!-- Date -->
                        <div class="col-sm-6">
                          <div class="form-fs-lg form-control-transparent">
                            <label class="form-label small">Pickup Date</label>
                            <input type="text" class="form-control flatpickr" placeholder="Select date">
                          </div>
                        </div>

                        <!-- Time -->
                        <div class="col-sm-6 text-sm-end">
                          <div class="form-fs-lg form-control-transparent">
                            <label class="form-label small ms-3 ms-md-0 me-md-3">Pickup time</label>
                            <input type="text" class="form-control flatpickr text-sm-end" data-enableTime="true"
                              data-noCalendar="true" placeholder="Select time">
                          </div>
                        </div>

                        <!-- Date -->
                        <div class="col-sm-6">
                          <div class="form-fs-lg form-control-transparent">
                            <label class="form-label small">Return Date</label>
                            <input type="text" class="form-control flatpickr" placeholder="Select date">
                          </div>
                        </div>

                        <!-- Time -->
                        <div class="col-sm-6 text-sm-end">
                          <div class="form-fs-lg form-control-transparent">
                            <label class="form-label small ms-3 ms-md-0 me-md-3">Return time</label>
                            <input type="text" class="form-control flatpickr text-sm-end" data-enableTime="true"
                              data-noCalendar="true" placeholder="Select time">
                          </div>
                        </div>
                      </div> <!-- Row END -->
                    </div>
                    <!-- Round trip END -->
                  </div>
                  <!-- Tabs content END -->

                  <!-- Button -->
                  <div class="d-grid">
                    <button class="btn btn-dark mb-0">Rechercher un vehicule</button>
                  </div>

                </form>
                <!-- Card-body END -->
              </div>
            </div>
            <!-- Search END -->
          </div>
        </div> <!-- Row END -->
      </div>
    </section>
    <!-- ======================= Main Banner END -->
    <section class="pt-0 pt-md-5">
      <div class="container">

        <!-- Title -->
        <div class="row mb-4">
          <div class="col-12 text-center">
            <h2 class="mb-0">Our Awesome Vehicles</h2>
          </div>
        </div>

        <div class="row g-4">
          <!-- Fleet item -->
          <div class="col-sm-4 col-xl-2">
            <div class="card shadow text-center align-items-center h-100 p-4">
              <!-- Image -->
              <div class="icon-xxl bg-light rounded-circle">
                <img :src="imagecar1" class="w-90px" alt="">
              </div>
              <!-- Card body -->
              <div class="card-body px-0 pb-0">
                <h5 class="card-title"><router-link :to="'/categorie/' + categorie[0]"
                    class="stretched-link">Sedan</router-link></h5>
                <span> {{ sedanCount }} Cars</span>
              </div>
            </div>
          </div>

          <!-- Fleet item -->
          <div class="col-sm-4 col-xl-2">
            <div class="card shadow text-center align-items-center h-100 p-4">
              <!-- Image -->
              <div class="icon-xxl bg-light rounded-circle">
                <img :src="imagecar2" class="w-90px" alt="">
              </div>
              <!-- Card body -->
              <div class="card-body px-0 pb-0">
                <h5 class="card-title"><router-link :to="'/categorie/' + categorie[1]"
                    class="stretched-link">Micro</router-link></h5>
                <span>{{ microCount }} Cars</span>
              </div>
            </div>
          </div>

          <!-- Fleet item -->
          <div class="col-sm-4 col-xl-2">
            <div class="card shadow text-center align-items-center h-100 p-4">
              <!-- Image -->
              <div class="icon-xxl bg-light rounded-circle">
                <img :src="imagecar3" class="w-90px" alt="">
              </div>
              <!-- Card body -->
              <div class="card-body px-0 pb-0">
                <h5 class="card-title"><router-link :to="'/categorie/' + categorie[5]"
                    class="stretched-link">CUV</router-link></h5>
                <span>{{ cuvCount }} Cars</span>
              </div>
            </div>
          </div>

          <!-- Fleet item -->
          <div class="col-sm-4 col-xl-2">
            <div class="card shadow text-center align-items-center h-100 p-4">
              <!-- Image -->
              <div class="icon-xxl bg-light rounded-circle">
                <img :src="imagecar4" class="w-90px" alt="">
              </div>
              <!-- Card body -->
              <div class="card-body px-0 pb-0">
                <h5 class="card-title"><router-link :to="'/categorie/' + categorie[2]"
                    class="stretched-link">SUV</router-link></h5>
                <span>{{ suvCount }} Cars</span>
              </div>
            </div>
          </div>

          <!-- Fleet item -->
          <div class="col-sm-4 col-xl-2">
            <div class="card shadow text-center align-items-center h-100 p-4">
              <!-- Image -->
              <div class="icon-xxl bg-light rounded-circle">
                <img :src="imagecar5" class="w-90px" alt="">
              </div>
              <!-- Card body -->
              <div class="card-body px-0 pb-0">
                <h5 class="card-title"><router-link :to="'/categorie/' + categorie[4]" class="stretched-link">Pick
                    up</router-link></h5>
                <span>{{ pickupCount }} Pickup Truck</span>
              </div>
            </div>
          </div>

          <!-- Fleet item -->
          <div class="col-sm-4 col-xl-2">
            <div class="card shadow text-center align-items-center h-100 p-4">
              <!-- Image -->
              <div class="icon-xxl bg-light rounded-circle">
                <img :src="imagecar6" class="w-90px" alt="">
              </div>
              <!-- Card body -->
              <div class="card-body px-0 pb-0">
                <h5 class="card-title"><router-link :to="'/categorie/' + categorie[3]"
                    class="stretched-link">Coupe</router-link></h5>
                <span>{{ coupeCount }}  Cars</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>



    <!-- =======================
Why Choose Us START -->
    <section class="pt-0 pt-xl-5">
      <div class="container">
        <!-- Title -->
        <div class="row mb-3 mb-sm-4">
          <div class="col-12 text-center">
            <h2>Why Choose Us</h2>
          </div>
        </div>

        <div class="row g-4">
          <!-- Category item -->
          <div class="col-sm-6 col-lg-4">
            <!-- Card START -->
            <div class="card card-body shadow p-4 h-100">
              <!-- Icon -->
              <div class="icon-lg bg-primary bg-opacity-10 text-primary rounded-circle mb-4"><i
                  class="bi bi-lightning-fill fs-5"></i></div>
              <h5>Advance Booking</h5>
              <p class="mb-0">Happiness prosperous impression had conviction For every delay in they Extremity now. </p>
            </div>
            <!-- Card END -->
          </div>

          <!-- Category item -->
          <div class="col-sm-6 col-lg-4">
            <!-- Card START -->
            <div class="card card-body shadow p-4 h-100">
              <!-- Icon -->
              <div class="icon-lg bg-success bg-opacity-10 text-success rounded-circle mb-4"><i
                  class="fa-solid fa-leaf fs-5"></i></div>
              <h5>Economical Trip</h5>
              <p class="mb-0">Extremity now strangers contained breakfast him discourse additions Sincerity.</p>
            </div>
            <!-- Card END -->
          </div>

          <!-- Category item -->
          <div class="col-sm-6 col-lg-4">
            <!-- Card START -->
            <div class="card card-body shadow p-4 h-100">
              <!-- Icon -->
              <div class="icon-lg bg-warning bg-opacity-15 text-warning rounded-circle mb-4"><i
                  class="bi bi-life-preserver fs-5"></i></div>
              <h5>Secure and Safer</h5>
              <p class="mb-0">Perpetual extremity now strangers contained breakfast him discourse additions.</p>
            </div>
            <!-- Card END -->
          </div>

          <!-- Category item -->
          <div class="col-sm-6 col-lg-4">
            <!-- Card START -->
            <div class="card card-body shadow p-4 h-100">
              <!-- Icon -->
              <div class="icon-lg bg-danger bg-opacity-10 text-danger rounded-circle mb-4"><i
                  class="fa-solid fa-car fs-5"></i></div>
              <h5>Vehicle Options</h5>
              <p class="mb-0">The Prosperous impression had conviction For every delay in they Extremity now. </p>
            </div>
            <!-- Card END -->
          </div>

          <!-- Category item -->
          <div class="col-sm-6 col-lg-4">
            <!-- Card START -->
            <div class="card card-body shadow p-4 h-100">
              <!-- Icon -->
              <div class="icon-lg bg-orange bg-opacity-10 text-orange rounded-circle mb-4"><i
                  class="fa-solid fa-wifi fs-5"></i></div>
              <h5>Cab Entertainment</h5>
              <p class="mb-0">Extremity now strangers contained breakfast him discourse additions Sincerity.</p>
            </div>
            <!-- Card END -->
          </div>

          <!-- Category item -->
          <div class="col-sm-6 col-lg-4">
            <!-- Card START -->
            <div class="card card-body shadow p-4 h-100">
              <!-- Icon -->
              <div class="icon-lg bg-info bg-opacity-10 text-info rounded-circle mb-4"><i
                  class="fa-solid fa-wheelchair fs-5"></i></div>
              <h5>Polite Driver</h5>
              <p class="mb-0">Perpetual extremity now strangers contained breakfast him discourse additions.</p>
            </div>
            <!-- Card END -->
          </div>

        </div> <!-- Row END -->

      </div>
    </section>
  </main>
  <Footer />


</template>



<script>
import '@/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js'
import '@/assets/vendor/choices/js/choices.min.js'
import '@/assets/vendor/flatpickr/js/flatpickr.min.js'
import '@/assets/js/functions.js'
import '@/assets/vendor/theme'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import bg3 from "@/assets/images/bg/bg3.jpg"
import seadan from "@/assets/images/category/cab/seadan.svg"
import micro from "@/assets/images/category/cab/micro.svg"
import suv2 from '@/assets/images/category/cab/suv2.svg'
import suv from '@/assets/images/category/cab/suv.svg'
import pickup from '@/assets/images/category/cab/pickup.svg'
import coupe from '@/assets/images/category/cab/coupe.svg'
import axios from "axios"
import vehiculeService from '@/Services/vehiculeService';
import CategorieVehiculeService from '@/Services/CategorieVehiculeService'
export default {
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Header, Footer },
  data() {
    return {
      filters: {
        marque: "",
        modele: "",
        categorie: "",
        nombreSieges: null,
      },
      imageUrl: bg3,
      imagecar1: seadan,
      imagecar2: micro,
      imagecar3: suv2,
      imagecar4: suv,
      imagecar5: pickup,
      imagecar6: coupe,
      sedanCount: 0,
      microCount: 0,
      suvCount: 0,
      coupeCount: 0,
      pickupCount: 0,
      cuvCount: 0,

       categorie: ["Sedan", "Micro", "SUV", "Coupe", "Pickup","CUV"]
    };
  },
  created() {
    this.fetchVehicleCounts();
    this.fetchModeles();
    this.getMarques();
    this.getCategories();
  },
  methods: {
    async fetchVehicleCounts() {
      try {
        const categories = ["Sedan", "Micro", "SUV", "Coupe", "Pickup", "CUV"];
        for (const category of categories) {
          const response = await axios.get(`http://localhost:9091/api/vehicules/count-by-categorie/${category}`);
          this[`${category.toLowerCase()}Count`] = response.data;
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des comptages de véhicules:', error);
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
    async getMarques() {
      try {
        const response = await vehiculeService.getMarques();
        this.marques = response.data;
      } catch (error) {
        console.error("Erreur lors de la récupération des marques :", error);
      }
    },
    async getCategories() {
      try {
        const response = await CategorieVehiculeService.getCategories();
        this.noms = response.data;
      } catch (error) {
        console.error("Erreur lors de la récupération des catégories :", error);
      }
    },
    goToResults() {
      // Redirection vers la page des résultats avec les filtres en paramètre
      this.$router.push({ path: "/resultats", query: this.filters });
    },
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
