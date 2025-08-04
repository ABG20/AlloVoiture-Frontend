import { defineStore } from "pinia";
import axios from "axios";

export const useVehiculeStore = defineStore("vehicules", {
  state: () => ({
    vehicules: [],
    totalPages: 1,
    currentPage: 1,
    status: "", // "disponible", "loue", ""
    search: "",
  }),

  actions: {
    async fetchVehicules(page = 1) {
      try {
        const response = await axios.get("http://localhost:9091/api/vehicules/getVehicules", {
          params: {
            status: this.status,
            search: this.search,
            page: page - 1, // Spring Boot utilise un index basé sur 0
            size: 6,
          },
        });
        this.vehicules = response.data.content;
        this.totalPages = response.data.totalPages;
        this.currentPage = page;
      } catch (error) {
        console.error("Erreur lors du chargement des véhicules", error);
      }
    },

    setStatus(newStatus) {
      this.status = newStatus;
      this.fetchVehicules(1);
    },

    setSearch(query) {
      this.search = query;
      this.fetchVehicules(1);
    },

    goToPage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.fetchVehicules(page);
      }
    },
  },
});
