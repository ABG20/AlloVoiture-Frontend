import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import VehiculeView from '../views/pages/VehiculeView.vue'
import essai from '../views/pages/essai.vue'
import VehiculeDetails from '../views/pages/VehiculeDetails.vue'
import VehiculesCategorie from '../views/pages/VehiculesCategorie.vue'
import ResultatsVehicules from '../views/pages/ResultatsVehicules.vue'
import Dashboard from '../views/pages/Dashboard.vue'
import TarifChauffeur from '../views/pages/TarifChauffeur.vue'
import listeVehicules from '../views/pages/listeVehicules.vue'
import listeClients from '../views/pages/listeClients.vue'
import listeLocation from '../views/pages/listeLocation.vue'
import Reservation from '../views/pages/Reservation.vue'
import locationDetails from '../views/pages/locationDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login', name: 'login', component: Login,
    },
    {
      path: '/register', name: 'register', component: Register,
    },
    {
      path: '/vehicule', name: 'vehicule', component: VehiculeView,
    },
    {
      path: '/essai', name: 'essai', component: essai,
    },
    {
      path: '/dashboard', name: 'dashboard', component: Dashboard,
    },
    {
      path: '/listeVehicule', name: 'listeVehicule', component: listeVehicules,
    },
     {
      path: '/listeClient', name: 'listeClient', component: listeClients,
    },
     {
      path: '/listeLocation', name: 'listeLocation', component: listeLocation,
    },
    {
      path: '/Reservation', name: 'Reservation', component: Reservation,
    },
     {
      path: '/locationDetails/:id', name: 'locationDetails', component: locationDetails,
    },
     {
      path: '/tarif', name: 'tarif', component: TarifChauffeur,
    },
    { path: "/resultats", component: ResultatsVehicules, props: route => ({ filters: route.query }) },
      { path: '/vehicules/:id', name:'vehiculeDetails', component: VehiculeDetails, meta: { requiresAuth: true } },  // Route avec protection
       { path: '/categorie/:nomCategorie', component: VehiculesCategorie, props: true },

  ],

})

// Vérification de l'authentification avant chaque navigation
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token'); // Vérifie si l'utilisateur est connecté

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login'); // Redirige vers la connexion si l'utilisateur n'est pas connecté
  } else {
    next(); // Continue la navigation

  }
});

export default router
