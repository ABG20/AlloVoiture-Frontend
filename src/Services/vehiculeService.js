import axios from "axios";

const API_URL = "http://localhost:9091/api/vehicules"; // URL du backend

export default {
  // Récupérer tous les véhicules avec pagination
  getAllVehicules(page = 0, size = 5) {
    return axios.get(`${API_URL}/disponibles`, {
      params: { page, size },
    });
  },

  async searchVehicules(params) {
  return axios.get('http://localhost:9091/api/vehicules/searchVehicules', { params });
  },

 // Récupérer toutes les marques
  getMarques() {
    return axios.get("http://localhost:9091/api/vehicules/marques");
  },

  searchVehicule(filters) {
    return axios.get(`${API_URL}/search`, { params: filters });
  },
};




