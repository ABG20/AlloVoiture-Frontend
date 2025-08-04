import axios from "axios";

const API_URL = "http://localhost:9091/api/categories"; // URL du backend

export default {
  // Récupérer toutes les catégories de véhicules
  getCategories() {
    return axios.get(`${API_URL}/nom`);
  },
};
