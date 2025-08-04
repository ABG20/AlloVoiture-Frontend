<template>

  <Sidebar />

  <div class="page-content">
    <div class="page-content-wrapper p-xxl-4">

      <!-- Title -->
      <div class="row">
        <div class="col-12 mb-4 mb-sm-5">
          <div class="d-sm-flex justify-content-between align-items-center">
            <h1 class="h3 mb-2 mb-sm-0">Vehicule</h1>
            <div class="d-grid"><a class="btn btn-primary-soft mb-0" @click="ouvrirModal"><i
                  class="bi bi-plus-lg fa-fw"></i> Ajouter</a>
            </div>

          </div>
        </div>
      </div>
      <!-- Tabs and search START -->
      <div class="row g-4 justify-content-between align-items-center">
        <div class="col-lg-5">
          <!-- Tabs -->
          <ul class="nav nav-pills-shadow nav-responsive">
            <li class="nav-item">
              <a class="nav-link mb-0 me-sm-2 active" data-bs-toggle="tab" @click="filterByStatus('')"
                href="admin-booking-list.html#tab-1">Tous</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mb-0 me-sm-2" @click="filterByStatus('disponible')" data-bs-toggle="tab"
                href="admin-booking-list.html#tab-2">Disponible</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mb-0" data-bs-toggle="tab" @click="filterByStatus('loue')"
                href="admin-booking-list.html#tab-3">Réserver</a>
            </li>
          </ul>
        </div>

        <div class="col-lg-6 col-xxl-5">
          <div class="d-sm-flex gap-4 justify-content-between justify-content-lg-end">
            <!-- Search -->
            <div class="col-md-8">
              <form class="rounded position-relative">
                <input class="form-control bg-transparent" v-model="searchQuery" @input="searchVehicules" type="search"
                  placeholder="Search" aria-label="Search">
                <button
                  class="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
                  type="submit">
                  <i class="fas fa-search fs-6"></i>
                </button>
              </form>
            </div>
            <!-- Tabs -->
            <div class="d-flex justify-content-end mt-2 mt-sm-0">
              <ul class="nav nav-pills nav-pills-dark" id="room-pills-tab" role="tablist">
                <!-- Tab item -->
                <li class="nav-item">
                  <button class="nav-link rounded-start rounded-0 active" id="grid-tab" data-bs-toggle="tab"
                    data-bs-target="#grid-tab-pane" type="button" role="tab" aria-controls="grid-tab-pane"
                    aria-selected="true"><i class="bi fa-fw bi-grid-fill"></i></button>
                </li>
                <!-- Tab item -->
                <li class="nav-item">
                  <button class="nav-link rounded-end rounded-0" id="list-tab" data-bs-toggle="tab"
                    data-bs-target="#list-tab-pane" type="button" role="tab" aria-controls="list-tab-pane"
                    aria-selected="false"><i class="bi fa-fw bi-list-ul"></i></button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- Tabs and search END -->

      <div class="row">
        <!-- Parcours des véhicules -->
        <div class="col-md-4 mb-4" v-for="(vehicule) in filteredVehicules" :key="vehicule.id">
          <div class="tab-content mt-5 " id=" myTabContent">
            <!-- Content item START -->
            <div class="tab-pane fade show active" id="grid-tab-pane">
              <!-- Rooms START -->
              <!-- Room item -->
              <div class=" d-flex">
                <div class="card shadow h-100 w-100 col-6">
                  <!-- Overlay item -->
                  <div class="position-relative">
                    <!-- Image -->
                    <img src=" ">
                    <img :src="`http://localhost:9091/api/images/${vehicule.photoPrincipale}`" alt="Photo voiture"
                      width="100" class="card-img-top"  height="">
                    <!-- Overlay -->
                    <div class="card-img-overlay d-flex flex-column p-3">
                      <!-- Card overlay top -->
                      <div class="d-flex justify-content-between align-items-center">
                        <!-- Buttons -->
                        <div class="list-inline-item dropdown">
                          <!-- Dropdown button -->
                          <a href="admin-booking-list.html#" class="btn btn-sm btn-round btn-light" role="button"
                            id="dropdownAction1" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-three-dots-vertical"></i>
                          </a>
                          <!-- dropdown items -->
                          <ul class="dropdown-menu dropdown-menu-end min-w-auto shadow rounded small"
                            aria-labelledby="dropdownAction1">
                            <li>
                              <a class="dropdown-item" href="#" @click.prevent="editerVehicule(vehicule)">
                                <i class="bi bi-info-circle me-2"></i>Modifier
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#" @click="supprimerVehicule(vehicule.id)">
                                <i class="bi bi-slash-circle me-2"></i>Supprimer
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Card body START -->
                  <div class="card-body px-3">
                    <!-- Title -->
                    <h5 class="card-title mb-1"><a href="admin-booking-detail.html">{{ vehicule.marque }} - {{
                        vehicule.modele }}</a></h5>
                    <ul class="list-group list-group-borderless small mt-2 mb-0">
                      <li class="list-group-item pb-0">
                        <i class="fa-solid fa-building fa-fw me-2"></i>{{ vehicule.categorie.nom }}
                      </li>
                      <li class="list-group-item pb-0">
                        <i class="fa-solid fa-bed fa-fw me-2"></i>{{ vehicule.anneeFabrication }}
                      </li>
                    </ul>
                  </div>
                  <!-- Card body END -->

                  <!-- Card footer START-->
                  <div class="card-footer pt-0">
                    <!-- Price -->
                    <div class="hstack gap-2 mb-2">
                      <h6 class="fw-normal mb-0">{{ vehicule.tarifHoraire }}/h</h6>
                    </div>
                    <a href="admin-booking-detail.html" class="btn btn-sm btn-primary-soft mb-0 w-100">View detail</a>
                  </div>
                </div>
              </div>
              <!-- Room item END -->
            </div>
            <!-- Rooms END -->
          </div>


        </div>
      </div>

      <!-- Pagination -->
      <!-- Contenu de la page avec pagination -->
      <div class="d-sm-flex justify-content-sm-between align-items-sm-center">
        <p class="mb-sm-0 text-center text-sm-start">
          Affichage de {{ startItem }} à {{ endItem }} sur {{ totalElements }} entrées
        </p>
        <nav class="mb-sm-0 d-flex justify-content-center" aria-label="navigation">
          <ul class="pagination pagination-sm pagination-primary-soft mb-0">
            <li class="page-item" :class="{ disabled: currentPage === 0 }">
              <button class="page-link" @click="changePage(currentPage - 1)">Précédent</button>
            </li>
            <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: page === currentPage + 1 }">
              <button class="page-link" @click="changePage(page - 1)">{{ page }}</button>
            </li>
            <li class="page-item" :class="{ disabled: currentPage + 1 >= totalPages }">
              <button class="page-link" @click="changePage(currentPage + 1)">Suivant</button>
            </li>
          </ul>
        </nav>
      </div>

    </div>
  </div>


  <!-- Content item END -->
  <!-- Modal pour Ajout/Modification d'un Véhicule -->
  <div v-if="showModal" @click="fermerModal"
    class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
    <div @click.stop class="bg-white p-6 rounded-lg shadow-lg w-1/2">
      <h2 class="text-xl font-semibold mb-4">{{ modeEdition ? 'Modifier' : 'Ajouter' }} un Véhicule</h2>

      <form @submit.prevent="sauvegarderVehicule">
        <div class="grid grid-cols-2 gap-4">
          <input v-model="vehicule.immatriculation" type="text" placeholder="Immatriculation" required class="input" />
          <input v-model="vehicule.modele" type="text" placeholder="Modèle" required class="input" />
          <input v-model="vehicule.marque" type="text" placeholder="Marque" required class="input" />
          <input v-model.number="vehicule.anneeFabrication" type="number" placeholder="Année de fabrication" required
            class="input" />
          <input v-model="vehicule.dateMiseService" type="date" placeholder="Date de mise en service" required
            class="input" />
          <input v-model.number="vehicule.tarifHoraire" type="number" placeholder="Tarif horaire" required
            class="input" />
          <input v-model.number="vehicule.nombreSieges" type="number" placeholder="Nombre de sièges" required
            class="input" />
          <input v-model.number="vehicule.vitesseMax" type="number" placeholder="Vitesse maximale" required
            class="input" />
          <input v-model="vehicule.typeCarburant" type="text" placeholder="Type de carburant" required class="input" />

          <!-- Sélection de la catégorie -->
          <select v-model="vehicule.categorieId" required class="input">
            <option value="" disabled>Choisir une catégorie</option>
            <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ cat.nom }}</option>
          </select>

          <!-- Disponibilité -->
          <label class="flex items-center space-x-2">
            <input v-model="vehicule.disponible" type="checkbox" />
            <span>Disponible</span>
          </label>
        </div>

        <!-- Upload photo principale -->
        <div class="mt-4">
          <label>Photo principale :</label>
          <input type="file" @change="handlePhotoPrincipale" accept="image/*" class="input" />
        </div>

        <!-- Upload photos intérieures -->
        <div class="mt-4">
          <label>Photos intérieures :</label>
          <input type="file" multiple @change="handlePhotosInterieur" accept="image/*" class="input" />
        </div>

        <!-- Boutons -->
        <div class="flex justify-end mt-4">
          <button type="button" @click="fermerModal" class="btn-secondary">Annuler</button>
          <button type="submit" class="btn-primary ml-2">{{ modeEdition ? 'Modifier' : 'Enregistrer' }}</button>
        </div>
      </form>
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
import { useToast } from "vue-toastification";
export default {
  components: {
    Sidebar
  },
  props: {
    show: Boolean,
    closeModal: Function,
  },
  data() {
    const toast = useToast();
    return {
      vehicules: [],
      currentPage: 0,
      pageSize: 6,
      toast,
      totalElements: 0,
      modeEdition: false,
      showModal: false, // Gère l'affichage du modal
      totalPages: 0,
      status: '', // '', 'disponible', 'loue'
      searchQuery: '',

      timeout: null, // Pour stocker l'ID du timeout
      vehicule: {
        immatriculation: "",
        modele: "",
        marque: "",
        anneeFabrication: null,
        dateMiseService: "",
        tarifHoraire: null,
        disponible: true,
        nombreSieges: null,
        vitesseMax: null,
        typeCarburant: "",
        photoPrincipale: null,
        photosInterieur: [],
        categorieId: "",
      },
      categories: [],
    };
  },
  computed: {
    startItem() {
      return this.currentPage * this.pageSize + 1;
    },
    endItem() {
      return Math.min((this.currentPage + 1) * this.pageSize, this.totalElements);
    },
    filteredVehicules() {
      let filtered = this.vehicules;

      // Filtrer par statut
      if (this.status) {
        filtered = filtered.filter(v => {
          if (this.status === 'disponible') {
            return v.disponible === true;
          } else if (this.status === 'loue') {
            return v.disponible === false;
          }
          return true;
        });
      }

      // Filtrer par recherche (marque ou modèle)
      if (this.searchQuery) {
        filtered = filtered.filter(v =>
          v.marque.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          v.modele.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }

      return filtered;
    }
  },
  methods: {
    searchVehicules() {
      this.fetchVehicules(); // Refaites appel à l'API pour obtenir les véhicules filtrés.
    },
    async fetchVehicules(page = 0) {
      try {
        const response = await axios.get(`http://localhost:9091/api/vehicules/getVehicules?page=${page}&size=${this.pageSize}`);
        this.vehicules = response.data.content;
        this.totalElements = response.data.totalElements;
        this.totalPages = response.data.totalPages;
        this.currentPage = response.data.number;
      } catch (error) {
        console.error('Erreur lors de la récupération des véhicules:', error);
      }
    },
    ouvrirModal() {
      this.showModal = true; // Afficher le modal
    },
    fermerModal() {
      this.showModal = false; // Cacher le modal
    },
    changePage(page) {
      if (page >= 0 && page < this.totalPages) {
        this.fetchVehicules(page);
      }
    },
    // Méthode pour filtrer les véhicules par statut (disponible/loué)
    filterByStatus(status) {
      this.status = status;
      this.fetchVehicules(); // Recharger les véhicules avec le filtre de statut
    },
    handlePhotoPrincipale(event) {
      this.vehicule.photoPrincipale = event.target.files[0];
    },

    handlePhotosInterieur(event) {
      this.vehicule.photosInterieur = [...event.target.files];
    },
    async fetchCategories() {
      const token = localStorage.getItem("token"); // Récupérer le token depuis le localStorage

      try {
        const response = await axios.get("http://localhost:9091/api/categories", {
          headers: {
            "Authorization": `Bearer ${token}` // Ajout du token dans l'en-tête
          }
        });
        this.categories = response.data;
      } catch (error) {
        console.error("Erreur lors de la récupération des catégories", error);
      }
    },
    async ajouterVehicule() {
      const formData = new FormData();

      // Ajoute les propriétés du véhicule sous forme de données JSON
      formData.append("vehicule", JSON.stringify({
        immatriculation: this.vehicule.immatriculation,
        modele: this.vehicule.modele,
        marque: this.vehicule.marque,
        anneeFabrication: this.vehicule.anneeFabrication,
        dateMiseService: this.vehicule.dateMiseService,
        tarifHoraire: this.vehicule.tarifHoraire,
        disponible: this.vehicule.disponible,
        nombreSieges: this.vehicule.nombreSieges,
        vitesseMax: this.vehicule.vitesseMax,
        typeCarburant: this.vehicule.typeCarburant,
        categorie: { id: this.vehicule.categorieId }
      }));

      // Ajoute la photo principale si elle existe
      if (this.vehicule.photoPrincipale) {
        formData.append("photoPrincipale", this.vehicule.photoPrincipale);
      }

      // Ajoute les photos intérieures si elles existent
      this.vehicule.photosInterieur.forEach((photo, index) => {
        formData.append(`photosInterieur[${index}]`, photo);
      });

      const token = localStorage.getItem("token");

      try {
        await axios.post("http://localhost:9091/api/vehicules/ajouter", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}`,
          },
        });

        this.toast.success("Véhicule ajouté avec succès ! 🚗✅");
        this.$emit("vehiculeAjoute");

        this.fermerModal();
        setTimeout(() => {
          window.location.reload();
        }, 1000)
      } catch (error) {
        console.error("Erreur lors de l'ajout du véhicule", error);
        this.toast.error("Erreur lors de l'ajout du véhicule ❌");
      }
    },
    async supprimerVehicule(id) {
      const token = localStorage.getItem("token"); // Récupérer le token JWT
      try {
        const response = await axios.delete(`http://localhost:9091/api/vehicules/${id}`, {
          headers: {
            "Authorization": `Bearer ${token}` // Envoi du token dans les headers
          }
        });
        this.toast.success("Véhicule supprimé avec succès 🚗❌"); // Notification succès
        this.fetchVehicules(); // Récupérer la liste des véhicules après suppression
      } catch (error) {
        console.error("Erreur lors de la suppression du véhicule", error);
        this.toast.error("Erreur lors de la suppression du véhicule ❌"); // Notification erreur
      }
    },
    async modifierVehicule() {
      const formData = new FormData();

      // Ajoute les données du véhicule sous forme de JSON
      formData.append("vehicule", JSON.stringify({
        immatriculation: this.vehicule.immatriculation,
        modele: this.vehicule.modele,
        marque: this.vehicule.marque,
        anneeFabrication: this.vehicule.anneeFabrication,
        dateMiseService: this.vehicule.dateMiseService,
        tarifHoraire: this.vehicule.tarifHoraire,
        disponible: this.vehicule.disponible,
        nombreSieges: this.vehicule.nombreSieges,
        vitesseMax: this.vehicule.vitesseMax,
        typeCarburant: this.vehicule.typeCarburant,
        categorie: { id: this.vehicule.categorieId }
      }));

      // Vérifie si une nouvelle photo principale a été ajoutée
      if (this.vehicule.photoPrincipale instanceof File) {
        formData.append("photoPrincipale", this.vehicule.photoPrincipale);
      }

      // Ajoute les nouvelles photos intérieures si elles existent
      if (this.vehicule.photosInterieur.length > 0) {
        this.vehicule.photosInterieur.forEach((photo, index) => {
          if (photo instanceof File) {
            formData.append(`photosInterieur[${index}]`, photo);
          }
        });
      }

      const token = localStorage.getItem("token");

      try {
        await axios.put(`http://localhost:9091/api/vehicules/modifier/${this.vehicule.id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}`,
          },
        });

        this.toast.success("Véhicule modifié avec succès ! 🚗✅");
        this.fermerModal();
        this.fetchVehicules();
      } catch (error) {
        console.error("Erreur lors de la modification du véhicule", error);
        this.toast.error("Erreur lors de la modification du véhicule ❌");
      }

  },
    editerVehicule(vehicule) {
      this.vehicule = { ...vehicule, photosInterieur: [] }; // Réinitialiser les photos intérieures
      this.modeEdition = true; // Passer en mode édition
      this.showModal = true; // Ouvrir le modal

      // Assurez-vous que la catégorie est bien assignée
      this.vehicule.categorieId = vehicule.categorie.id; // En cas de modification, attribuer l'ID de la catégorie
      console.log("Véhicule en édition :", this.vehicule);
    },
    async sauvegarderVehicule() {
      if (this.modeEdition) {
        await this.modifierVehicule(); // Si c'est en mode édition
      } else {
        await this.ajouterVehicule(); // Sinon, c'est en mode ajout
      }
    },

  },
  mounted() {
    this.fetchVehicules();
    this.fetchCategories();
  }

};
</script>
<style>
/* Style pour le modal */
/* Style pour le modal */
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  /* Ombre semi-transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  /* Centrage vertical et horizontal */
  z-index: 1000;
  /* Pour s'assurer qu'il est au-dessus de tous les autres éléments */
}

/* Contenu du modal */
.bg-white {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  /* Ombre douce autour du modal */
  padding: 30px;
  width: 60%;
  max-width: 700px;
max-height: 80vh;
  /* Limite la hauteur du modal */
  transform: scale(0.95);
  transition: all 0.3s ease-in-out;
  margin: auto;
    /* S'assure que le modal est centré */
    overflow-y: auto;
      /* Ajoute une barre de défilement si nécessaire */
}

/* Animation d'apparition du modal */
.fixed .bg-white {
  transform: scale(1);
}

/* Style des inputs et selects */
.input {
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  /* Coins arrondis pour les champs de texte */
  border: 1px solid #ddd;
  background-color: #f8f8f8;
  margin-bottom: 15px;
  font-size: 14px;
  /* Réduit légèrement la taille des textes des inputs */
  transition: border 0.3s ease;
}

.input:focus {
  border-color: #007bff;
  /* Couleur de bordure lors du focus */
  outline: none;
  background-color: #fff;
}

/* Label */
label {
  font-size: 14px;
  /* Réduit légèrement la taille du texte des labels */
  font-weight: 500;
  color: #555;
  margin-bottom: 5px;
  display: block;
}

/* Styles pour les boutons */
button {
  background-color: #007bff;
  color: white;
  padding: 8px 18px;
  /* Réduit la taille du bouton */
  font-size: 14px;
  /* Réduit légèrement la taille du texte du bouton */
  border: none;
  border-radius: 10px;
  /* Coins arrondis pour le bouton */
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

.btn-secondary {
  background-color: #f0f0f0;
  color: #333;
  border-radius: 10px;
  /* Coins arrondis pour le bouton secondaire */
}

.btn-secondary:hover {
  background-color: #e0e0e0;
}

/* Alignement des boutons */
.flex {
  display: flex;
  justify-content: flex-end;
}

/* Styles spécifiques aux champs de photo */
input[type="file"] {
  padding: 8px;
  border: 1px solid #ddd;
  background-color: #fafafa;
  border-radius: 10px;
  /* Coins arrondis pour le champ de fichier */
  margin-top: 10px;
}

input[type="file"]:focus {
  border-color: #007bff;
  background-color: #fff;
}

/* Espacement du modal */
.mt-4 {
  margin-top: 16px;
}

.mb-4 {
  margin-bottom: 16px;
}
</style>
