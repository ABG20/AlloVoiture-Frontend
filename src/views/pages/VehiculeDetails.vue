<template>
  <Header />


  <main>
    <section class="pt-0">
      <div class="container" data-sticky-container>
        <div class="row g-4">

          <!-- Main content START -->
          <div class="col-xl-8">
            <div class="vstack gap-5">

              <!-- Main cab list START -->
              <div class="card border p-4" v-if="vehicule">
                <!-- Card body START -->
                <div class="card-body p-0">
                  <div class="row g-4 align-items-center">
                    <!-- Image -->
                    <div class="col-md-4">
                      <div>
                        <img class="bg-light rounded-3 px-4 py-5"
                          :src="`http://localhost:9091/api/images/${vehicule.photoPrincipale}`" alt="">
                      </div>
                    </div>

                    <!-- card body -->
                    <div class="col-md-8">
                      <!-- Title and rating -->
                      <div class="d-sm-flex justify-content-sm-between">
                        <!-- Card title -->
                        <div>
                          <h4 class="card-title mb-2">{{ vehicule.marque }} - {{ vehicule.modele }}</h4>
                          <ul class="nav nav-divider h6 fw-normal mb-2">
                            <li class="nav-item">{{ vehicule.categorie ? vehicule.categorie.nom : 'Non défini' }}</li>
                            <li class="nav-item">Courant alternatif
                            </li>
                            <li class="nav-item">{{ vehicule.nombreSieges }} Places assises</li>
                          </ul>
                        </div>

                      </div>

                      <!-- List -->
                      <ul class="list-group list-group-borderless mt-2 mb-0">
                        <li class="list-group-item d-flex pb-0 mb-0">
                          <span class="h6 fw-normal mb-0"><i class="bi bi-check-circle me-2"></i> {{
                            vehicule.vitesseMax }}Kms</span>
                        </li>
                        <li class="list-group-item d-flex pb-0 mb-0">
                          <span class="h6 fw-normal mb-0"><i class="bi bi-check-circle me-2"></i>{{
                            vehicule.tarifHoraire }}/h </span>
                        </li>
                        <li class="list-group-item d-flex pb-0 mb-0">
                          <span class="h6 fw-normal mb-0"><i
                              class="bi bi-check-circle me-2"></i>{{vehicule.typeCarburant }}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- Card body END -->

                <!-- Card footer -->
                <div class="card-footer p-0 pt-4">
                  <div class="hstack gap-3 flex-wrap">
                    <!-- Item -->
                    <h6 class="bg-success bg-opacity-10 text-success fw-light rounded-2 d-inline-block mb-0 py-2 px-4">
                      Free Cancellation, till 1 hour of Pick up
                    </h6>

                    <!-- Item -->
                    <h6 class="bg-success bg-opacity-10 text-success fw-light rounded-2 d-inline-block mb-0 py-2 px-4">
                      Free waiting up to 45 minutes
                    </h6>
                  </div>
                </div>
              </div>
              <!-- Main cab list END -->
              <p v-else>Chargement...</p>
              <!-- Trip Details START -->
              <div class="card border">
                <!-- Card header -->
                <div class="card-header border-bottom bg-transparent">
                  <h4 class="mb-0">Détails de la location</h4>
                </div>

                <!-- Card body START -->
                <div class="card-body">
                  <!-- Form START -->
                  <form class="row g-4">
                    <!-- Input -->
                    <div class="col-md-6">
                      <div class="form-control-bg-light">
                        <label class="form-label">Date de debut de la location</label>
                        <input type="datetime-local" v-model="dateDebut" class="form-control form-control-lg"
                          placeholder="Entrez la Date" value="">
                      </div>
                    </div>

                    <!-- Input -->
                    <div class="col-md-6">
                      <div class="form-control-bg-light">
                        <label class="form-label">Date de fin de la location</label>
                        <input type="datetime-local" class="form-control form-control-lg" v-model="dateFin"
                          placeholder="Entrez la date" value="">
                      </div>
                    </div>



                    <!-- Radio button -->
                    <div class="col-md-6">
                      <div class="form-control-bg-light">
                        <label class="form-label">Destination</label>
                        <input type="text" class="form-control form-control-lg" placeholder="Entrez la ville d'arrive"
                          v-model="villeArrivee">
                      </div>
                    </div>

                    <!-- Input -->
                    <div class="col-md-6">
                      <div class="form-control-bg-light">
                        <label class="form-label">Heure de recuperation</label>
                        <input type="time" class="form-control form-control-lg" placeholder="Enter your name"
                          v-model="heureRecuperation">
                      </div>
                    </div>

                    <!-- Input -->
                    <div class="col-md-6">
                      <div class="form-control-bg-light">
                        <label class="form-label">Avec chauffeur</label>

                        <select id="chauffeur" name="chauffeur" class="form-control form-control-lg"
                          v-model="chauffeurRequis">
                          <option :value="false" selected>NON</option>
                          <option :value="true">OUI</option>
                        </select>
                      </div>
                    </div>
                  </form>
                  <!-- Form END -->
                </div>
                <!-- Card body END -->
              </div>
              <!-- Trip Details END -->



              <!-- Trip Details END -->

              <!-- Driver and cab detail START -->
              <div class="card bg-transparent">

                <!-- Card header -->
                <div class="card-header border-bottom bg-transparent px-0 pt-0">
                  <h4 class="mb-0">Driver and Cab details</h4>
                </div>

                <!-- Card body -->
                <div class="card-body pt-4 p-0">
                  <!-- List -->
                  <ul>
                    <li class="mb-2">Cab and driver details will be shared on your registered phone. (22 Jan 2021 at
                      6:55 pm) </li>
                    <li class="mb-2">Due to traffic or any other unavoidable reason, the pickup may be delayed for 30
                      minutes.</li>
                    <li>For nighttime driving (between 11:00 pm to 7:00 am) on any of the nights, there will be a night
                      driver charge of $100.</li>
                  </ul>

                  <!-- Cab images -->
                  <h5>Cab Images</h5>

                  <!-- Alert box -->
                  <div class="alert alert-warning" role="alert">
                    All pictures shown are for illustration purposes only. The actual product may vary due to product
                    enhancement.
                  </div>

                  <!-- Images -->
                  <div class="row">
                    <!-- Slider START -->
                    <div class="tiny-slider arrow-round arrow-xs arrow-dark">
                      <div class="tiny-slider-inner rounded-2" data-autoplay="false" data-arrow="true" data-dots="false"
                        data-items="3" data-items-sm="2">
                        <!-- Image item -->
                        <div>
                          <a class="w-100 h-100" data-glightbox data-gallery="gallery"
                            href="@/assets/images/category/cab/4by3/02.jpg">
                            <div class="card card-element-hover card-overlay-hover overflow-hidden">
                              <!-- Image -->
                              <img src="@/assets/images/category/cab/4by3/02.jpg" width="100" class="rounded-3" alt="">
                              <!-- Full screen button -->
                              <div class="hover-element w-100 h-100">
                                <i
                                  class="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
                              </div>
                            </div>
                          </a>
                        </div>

                        <!-- Image item -->
                        <div>
                          <a class="w-100 h-100" data-glightbox data-gallery="gallery"
                            href="@/assets/images/category/cab/4by3/01.jpg">
                            <div class="card card-element-hover card-overlay-hover overflow-hidden">
                              <!-- Image -->
                              <img src="@/assets/images/category/cab/4by3/01.jpg" width="100" class="rounded-3" alt="">
                              <!-- Full screen button -->
                              <div class="hover-element w-100 h-100">
                                <i
                                  class="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
                              </div>
                            </div>
                          </a>
                        </div>


                        <!-- Image item -->
                        <div>
                          <a class="w-100 h-100" data-glightbox data-gallery="gallery">
                            <div class="card card-element-hover card-overlay-hover overflow-hidden">
                              <!-- Image -->
                              <img src="@/assets/images/category/cab/4by3/05.jpg" width="100" class="rounded-3" alt="">
                              <!-- Full screen button -->
                              <div class="hover-element w-100 h-100">
                                <i
                                  class="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <!-- Slider END -->
                  </div>
                </div>

              </div>
              <!-- Driver and cab detail END -->

              <!-- Inclusion & Exclusion START -->
              <div class="card bg-transparent">
                <!-- Card header -->
                <div class="card-header border-bottom bg-transparent px-0 pt-0">
                  <h4 class="mb-0">Inclusion & Exclusion</h4>
                </div>

                <!-- Card body START -->
                <div class="card-body pt-4 p-0">
                  <!-- Detail START -->
                  <div class="row g-3">
                    <!-- List -->
                    <div class="col-sm-6">
                      <h5>Included in your price</h5>
                      <ul class="list-group list-group-borderless mb-0">
                        <li class="list-group-item mb-0 pb-0"><i class="fa-solid fa-check text-success me-1"></i>
                          State tax
                        </li>
                        <li class="list-group-item mb-0 pb-0"><i class="fa-solid fa-check text-success me-1"></i>
                          Toll charge
                        </li>
                        <li class="list-group-item mb-0 pb-0"><i class="fa-solid fa-check text-success me-1"></i>
                          Driver Allowance
                        </li>
                        <li class="list-group-item mb-0 pb-0"><i class="fa-solid fa-check text-success me-1"></i>
                          Only one pickup and drop
                        </li>
                      </ul>
                    </div>

                    <!-- List -->
                    <div class="col-sm-6">
                      <h5>Extra charge</h5>
                      <ul class="list-group list-group-borderless mb-0">
                        <li class="list-group-item mb-0 pb-0"><i class="bi bi-x-lg text-danger me-1"></i>
                          Fare beyond 600kms
                        </li>
                        <li class="list-group-item mb-0 pb-0"><i class="bi bi-x-lg text-danger me-1"></i>
                          Airport entry charge
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- Detail END -->
                </div>
                <!-- Card body END -->
              </div>
              <!-- Inclusion & Exclusion END -->

              <!-- Safety Guidelines START -->
              <div class="card bg-transparent">
                <!-- Card header -->
                <div class="card-header border-bottom bg-transparent px-0 pt-0">
                  <h4 class="mb-0">Safety Guidelines</h4>
                </div>

                <!-- Card body START -->
                <div class="card-body pt-4 p-0">
                  <ul class="list-group list-group-borderless mb-0">
                    <li class="list-group-item h6 fw-light d-flex mb-0">
                      <i class="bi bi-arrow-right me-2"></i>All passengers coming to the state by road must show a COVID
                      negative report (RT-PCR) not more than 72 hours old or a valid vaccination certificate. (Travel
                      period should commence after 14 days from the 2nd dose)
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0">
                      <i class="bi bi-arrow-right me-2"></i>Dependent on so extremely delivered by. Yet no jokes worse
                      her why. Bed one supposing breakfast day fulfilled off depending questions.
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0">
                      <i class="bi bi-arrow-right me-2"></i>Whatever boy her exertion his extended. Ecstatic followed
                      handsome drawings entirely Mrs one yet outweigh.
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0">
                      <i class="bi bi-arrow-right me-2"></i>Meant balls it if up doubt small purse. Required his you put
                      the outlived answered position. A pleasure exertion if believed provided to.
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0">
                      <i class="bi bi-arrow-right me-2"></i>All led out world this music while asked. Paid mind even
                      sons does he door no. Attended overcame repeated it is perceived Marianne in.
                    </li>
                  </ul>
                </div>
                <!-- Card body END -->
              </div>
              <!-- Safety Guidelines END -->
            </div>
          </div>
          <!-- Main content END -->

          <!-- Sidebar START -->
          <aside class="col-xl-4">
            <div data-sticky data-margin-top="80" data-sticky-for="1199">
              <div class="card card-body bg-light p-4">
                <!-- Title -->
                <h6 class="text-danger fw-normal">Hurry! Limited cars left</h6>
                <!-- List -->
                <ul class="list-group list-group-borderless mb-0">
                  <li class="list-group-item d-flex justify-content-between">
                    <span class="h6 fw-light mb-0">Base Price</span>
                    <span class="h6 fw-light mb-0">{{vehicule.tarifHoraire}}F </span>
                  </li>

                  <li class="list-group-item d-flex justify-content-between">
                    <span class="h6 fw-light mb-0">Tarif chauffeur</span>
                    <span class="h6 fw-light mb-0"> {{ montantChauffeur }}F</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between">
                    <span class="h6 fw-light mb-0">Charge Sup</span>
                    <span class="h6 fw-light mb-0"> 0F</span>
                  </li>
                  <li class="list-group-item py-0">
                    <hr class="my-0">
                  </li>
                  <!-- Divider -->
                  <li class="list-group-item d-flex justify-content-between pb-0">
                    <span class="h5 fw-normal mb-0">Total</span>
                    <span class="h5 fw-normal mb-0">{{ montantTotal }} F</span>
                  </li>
                </ul>

                <div class="d-grid mt-4 gap-2">
                  <div class="form-check form-check-inline mb-0">
                    <input class="form-check-input" type="radio" v-model="avancePayee" name="discountOptions"
                      id="discount1" :value="montantAvance">
                    <label class="form-check-label h6 fw-normal mb-0" for="discount1">Pay {{ montantAvance }} F now
                      (Half
                      Payment)</label>
                  </div>

                  <div class="form-check form-check-inline mb-0">
                    <input class="form-check-input" v-model="avancePayee" type="radio" name="discountOptions"
                      id="discount2" :value="montantTotal">
                    <label class="form-check-label h6 fw-normal mb-0" for="discount2">Pay {{ montantTotal }} F now (Full
                      payment)</label>
                  </div>

                  <!-- Button -->
                  <a href="#" class="btn btn-dark mb-0 mt-2" @click.prevent="createLocation">Pay Now</a>
                </div>
              </div>
            </div>
          </aside>
          <!-- Sidebar END -->
        </div>
      </div>
    </section>
    <!-- =======================
Main Content END -->
    <!-- Modal pour entrer les informations du client -->
    <div v-if="afficherModal" class="modal">
      <div class="modal-content">
        <div class="card-header border-bottom bg-transparent">
          <h4 class="mb-0">Veuillez entrer vos informations pour continuer.</h4>
        </div>

        <!-- Card body START -->
        <div class="card-body">
          <!-- Form START -->
          <form class="row g-4" @submit.prevent="enregistrerClient">
            <!-- Input -->
            <div class="col-md-6">
              <div class="form-control-bg-light">
                <label class="form-label">Adresse</label>
                <input type="text" v-model="client.adresse" class="form-control form-control-lg"
                  placeholder="Entrez Votre adresse" required>
              </div>
            </div>

            <!-- Input -->
            <div class="col-md-6">
              <div class="form-control-bg-light">
                <label class="form-label">Type de Permis</label>
                <select id="permis" v-model="client.typePermis" name="permis" class="form-control form-control-lg">
                  <option value="" selected> Choisissez un type de permis </option>
                  <option value="AM">Permis AM (cyclomoteur)</option>
                  <option value="A1">Permis A1 (125 cm³)</option>
                  <option value="A2">Permis A2 (moto intermédiaire)</option>
                  <option value="A">Permis A (moto)</option>
                  <option value="B">Permis B (voiture)</option>
                  <option value="C">Permis C (poids lourd)</option>
                  <option value="D">Permis D (transport en commun)</option>
                  <option value="BE">Permis BE (remorque)</option>
                  <option value="C1">Permis C1 (poids lourd léger)</option>
                  <option value="D1">Permis D1 (petit transport en commun)</option>
                </select>

              </div>
            </div>

            <!-- Radio button -->
            <div class="col-md-4">
              <label class="form-label">Gender</label>
              <div>
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                  <input type="radio" class="btn-check" value="M" v-model="client.sexe" name="btnradio" id="btnradio1">
                  <label class="btn btn-lg btn-light btn-dark-bg-check mb-0" for="btnradio1">Male</label>

                  <input type="radio" class="btn-check" v-model="client.sexe" name="btnradio" value="F" id="btnradio2">
                  <label class="btn btn-lg btn-light btn-dark-bg-check mb-0" for="btnradio2">Female</label>
                </div>
              </div>
            </div>

            <!-- Input -->
            <div class="col-md-8">
              <div class="form-control-bg-light">
                <label class="form-label">Date de Naissance</label>
                <input type="date" v-model="client.dateNaissance" class="form-control form-control-lg"
                  placeholder="Date de naissance">
              </div>
            </div>

            <button class="btn btn-primary">S'inscrire</button>
            <button @click="fermerModal" class="btn btn-secondary">Annuler</button>


          </form>
          <!-- Form END -->
        </div>
        <!-- Card body END -->


      </div>
    </div>
  </main>


  <Footer />
</template>

<script>
import '@/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js'
import '@/assets/vendor/choices/js/choices.min.js'
import '@/assets/vendor/flatpickr/js/flatpickr.min.js'
import '@/assets/js/functions.js'
import '@/assets/vendor/theme'
import axios from "axios"
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { useToast } from "vue-toastification";

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Header, Footer
  },
  data() {
    const toast = useToast(); // Utilisation de Vue Toastification
    const userId = localStorage.getItem('id');
    return {
      client: {
        sexe:'M',
        adresse: '',
        dateNaissance: '',
        typePermis: '',
        dateInscription: new Date().toISOString(), // Date d'inscription
        user: {
          id: userId, // Ajoute l'ID de l'utilisateur
        },
      },
      toast,
      vehicule: null,
      vehiculeId: null,  // Initialise avec une valeur par défaut
      clientId: null,
      errorMessage: "",
      dateDebut: "2025-10-01T14:00:00",
      dateFin: "2025-10-01T15:00:00",
      heureRecuperation: "",
      villeArrivee:"",
      chauffeurRequis: false,
      avancePayee: "montantAvance",

      // Durée en heures
      paiementChoix: "avance", // Choix de paiement : "avance" ou "totalite"
      afficherModal: false, // Ajoute cette ligne
      tarifChauffeurs: [],

    };
  },

  watch: {
    // Surveiller les changements de dateDebut, dateFin, tarif et paiementChoix
    // Vérifier si la date de début est après la date de fin
    dateDebut() {
      this.verifierDates();
    },
    dateFin() {
      this.verifierDates();
    },
  },
  computed: {

    tarif() {
      return this.vehicule ? this.vehicule.tarifHoraire : 0;
    },
    // Calcul du montant de l'avance en fonction du choix
    // Calcul de la durée en heures
    duree() {
      const debut = new Date(this.dateDebut);
      const fin = new Date(this.dateFin);
      const dureeEnMillisecondes = fin - debut;
      return (dureeEnMillisecondes / (1000 * 60 * 60)).toFixed(2);// Heures
    },
    // Calcul du montant total
    montantTotal() {
      return (this.duree * this.tarif).toFixed(2);
    },
    // Calcul du montant de l'avance
    montantAvance() {
      if (this.paiementChoix === "avance") {
        return (this.montantTotal / 2).toFixed(2); // Moitié du montant total
      } else if (this.paiementChoix === "totalite") {
        return this.montantTotal; // Totalité du montant total
      }
      return 0;
    },
    // Calcul du montant restant
    montantRestant() {
      return (this.montantTotal - this.montantAvance).toFixed(2);
    },
  },


  created() {
    this.fetchVehiculeDetails();
    // Calculer le montant au chargement de la page
    this.verifierUtilisateur();
    this.fetchAllTarifs();
    this.calculerMontantChauffeur();
  },
  methods: {
    // Fonction pour calculer les prestations du chauffeur
    calculerMontantChauffeur() {
      if (this.chauffeurRequis) {
        const heureDebut = new Date(this.dateDebut).getHours(); // Heure de début de la location

        let dureeJour = 0;
        let dureeNuit = 0;

        // Calcul de la durée en journée et en soirée
        for (let i = heureDebut; i < heureDebut + this.duree; i++) {
          if (i >= 18) {
            dureeNuit++;
          } else {
            dureeJour++;
          }
        }

        // Calcul des frais du chauffeur
        this.montantChauffeur = (dureeJour * this.tarifChauffeur.tarifJour) + (dureeNuit * this.tarifChauffeur.tarifNuit);
        console.log("montant du chauffeur :", this.montantChauffeur);
      } else {
        this.montantChauffeur = 0;  // Si pas de chauffeur requis
      }
    },

    async fetchVehiculeDetails() {
      const id = this.$route.params.id; // Récupérer l'ID de l'URL
      try {
        const response = await axios.get(`http://localhost:9091/api/vehicules/${id}`);
        this.vehicule = response.data;
        console.log("Détails du véhicule :", this.vehicule);
        // ✅ Affecter à la data pour que Vue.js puisse l'utiliser dans les calculs


      } catch (error) {
        this.errorMessage = "Véhicule introuvable.";
        console.error("Erreur lors de la récupération du véhicule :", error);
      }


    },

    // Vérifier si les dates sont valides
    verifierDates() {
      const debut = new Date(this.dateDebut);
      const fin = new Date(this.dateFin);
      if (debut > fin) {
        this.errorMessage = "La date de début doit être avant la date de fin.";
      } else {
        this.errorMessage = "";
      }
    },
    async fetchAllTarifs() {
      try {
        // Récupérer le token d'authentification depuis localStorage
        const token = localStorage.getItem('token');

        // Vérifier si le token existe
        if (!token) {
          throw new Error('Aucun token trouvé. Veuillez vous reconnecter.');
        }

        // Faire une requête GET à l'API pour récupérer tous les tarifs
        const response = await axios.get('http://localhost:9091/api/tarifs', {
          headers: {
            Authorization: `Bearer ${token}` // Ajouter le token dans l'en-tête de la requête
          }
        });

        // Stoker les tarifs récupérés dans une variable (par exemple, dans data)
        this.tarifChauffeurs = response.data;

        // Optionnel : afficher un message de succès ou faire autre chose avec les données récupérées
        console.log('Tarifs récupérés :', this.tarifChauffeurs);

      } catch (error) {
        // Gérer les erreurs
        this.error = error.message || 'Erreur lors de la récupération des tarifs';
        console.error('Erreur:', error);
      }
    },

    async verifierUtilisateur() {
      const iduser = localStorage.getItem('id')
      if (!iduser) {
        this.toast.error("Utilisateur non connecté !");
        return;
      }

      try {
        const response = await axios.get(`http://localhost:9091/api/clients/utilisateur/client/${iduser}`);

        if (response.status === 200) {
          if (response.data.estClient) {
            this.toast.success("Vous êtes déjà client !");
            this.clientId = response.data.id;
          } else {
            setTimeout(() => {
              this.afficherModal = true;
              console.log("Modal devrait s'afficher :", this.afficherModal);
              this.clientId = response.data.id;
              this.toast.warning("Vous devez vous inscrire comme client !");

            }, 500);
          }
        } else {
          this.toast.error("Problème de communication avec le serveur.");
        }
      } catch (error) {
        console.error("Erreur lors de la vérification :", error);

        if (error.response) {
          this.toast.error(`Erreur ${error.response.status} : ${error.response.data.message || "Une erreur est survenue."}`);
        } else if (error.request) {
          this.toast.error("Le serveur ne répond pas. Vérifiez votre connexion.");
        } else {
          this.toast.error("Une erreur inconnue s'est produite.");
        }
      }
    },

    async enregistrerClient() {
      try {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('id'); // Récupère l'ID de l'utilisateur

        if (!token) {
          this.toast.error("Vous devez être connecté pour vous inscrire.");
          return;
        }

        if (!userId) {
          this.toast.error("Utilisateur non trouvé. Veuillez vous reconnecter.");
          return;
        }


        // Ajoute l'ID de l'utilisateur à l'objet client
        const clientData = {
          sexe: this.client.sexe,
          adresse: this.client.adresse,
          dateNaissance: this.client.dateNaissance,
          typePermis: this.client.typePermis,
          dateInscription: new Date().toISOString(),
          user: {
            id: userId, // L'ID de l'utilisateur est requis
          }
        };

        await axios.post("http://localhost:9091/api/clients", clientData, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        this.toast.success("Inscription réussie ! Vous pouvez maintenant passer votre location.");
        this.afficherModal = false;
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (error) {
        console.error("Erreur lors de l'inscription :", error);
        if (error.response && error.response.status === 401) {
          this.toast.error("Token expiré ou non valide. Veuillez vous reconnecter.");
        } else {
          this.toast.error("Échec de l'inscription, veuillez réessayer.");
        }
      }
    },

    fermerModal() {
      this.afficherModal = false;
    },

    async createLocation() {
      console.log('createLocation() appelée');
      const token = localStorage.getItem('token');

      // Vérifier que `vehicule` est bien défini
      if (!this.vehicule || !this.vehicule.id) {
        this.toast.error("Véhicule introuvable ou non sélectionné.");
        return;
      }
      // Si la date de fin est avant la date de début
      if (this.dateFin < this.$piniadateDebut) {
        this.toast.error("La date de fin ne peut pas être antérieure à la date de début.");
        return; // Arrêter l'exécution si la validation échoue
      }

      // Vérification si le champ heure de récupération est vide
      if (!this.heureRecuperation || this.heureRecuperation.trim() === "") {
        this.toast.error("Le champ 'Heure de récupération' est obligatoire.");
        return; // Arrêter l'exécution si la validation échoue
      }
      // Vérification si le champ villeArrivee est vide
      if (!this.villeArrivee || this.villeArrivee.trim() === "") {
        this.toast.error("Le champ 'Destination est obligatoire.");
        return; // Arrêter l'exécution si la validation échoue
      }
      // Vérifier les dates
      if (!this.dateDebut || !this.dateFin) {
        this.toast.error("Veuillez sélectionner une date de début et de fin.");
        return;
      }

      const clientId = localStorage.getItem('clientId'); // Récupère l'ID du client

      if (!clientId) {
        this.toast.error("Client introuvable. Veuillez vous inscrire.");
        return;
      }

      // Construire l'objet de la location
      const locationData = {
        dateDebut: new Date(this.dateDebut).toISOString(), // Conversion en format ISO
        dateFin: new Date(this.dateFin).toISOString(), // Conversion en format ISO
        vehicule: {
          id: this.vehicule.id // Assurez-vous d'utiliser `this.vehicule.id`
        },
        client: {
          id: this.clientId,
          // Ajoute l'ID du client ici
            user:{
              id: localStorage.getItem('id'),
              username: localStorage.getItem('email'),
              prenom: localStorage.getItem('prenom'),
              email: localStorage.getItem('nom')
            },
        },
        chauffeurRequis: this.chauffeurRequis,
        avancePayee: this.avancePayee, // Convertir en nombre
        typeTrajet: "ALLER_RETOUR",
        heureRecuperation: this.heureRecuperation,
        villeArrivee: this.villeArrivee,
        statut: "EN_COURS",
        tarifChauffeur: {
          "id": 1, },
      };

      console.log('Données envoyées :', JSON.stringify(locationData, null, 2));

      try {
        const response = await axios.post('http://localhost:9091/api/locations', locationData, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
        });

        console.log('Location créée :', response.data);
        this.toast.success('Location créée avec succès!');
        // Redirection vers la page de réservation après le succès
        this.$router.push('/Reservation');
      } catch (error) {
        console.error('Erreur lors de la création de la location :', error);

        if (error.response) {
          this.toast.error(`Erreur ${error.response.status} : ${error.response.data.message || "Une erreur est survenue."}`);
        } else if (error.request) {
          this.toast.error("Le serveur ne répond pas. Vérifiez votre connexion.");
        } else {
          this.toast.error("Une erreur inconnue s'est produite.");
        }
      }
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

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* Fond semi-transparent */
}

.modal-content {
  background: white;
  padding: 50px;
  border-radius: 10px;
  width: 1000px;
}

/* Ajouter dans la section <style> ou dans un fichier CSS externe */
.modal-content button {
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.modal-content button.btn-primary {
  background-color: #007bff;
  color: white;
}

.modal-content button.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.modal-content button:hover {
  opacity: 0.8;
}
</style>
