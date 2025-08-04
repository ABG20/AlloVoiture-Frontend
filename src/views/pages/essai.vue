<template>
  <div>
    <h2>Liste des Véhicules</h2>

    <!-- Formulaire de filtrage -->
    <div>
      <label>Marque:</label>
      <input v-model="filters.marque" placeholder="Rechercher par marque">

      <label>Modèle:</label>
      <input v-model="filters.modele" placeholder="Rechercher par modèle">

      <label>Disponibilité:</label>
      <select v-model="filters.disponible">
        <option value="">Tous</option>
        <option :value="true">Disponible</option>
        <option :value="false">Indisponible</option>
      </select>

      <button @click="fetchVehicules">Rechercher</button>
    </div>

    <!-- Affichage des véhicules -->
    <table>
      <thead>
        <tr>
          <th>Marque</th>
          <th>Modèle</th>
          <th>Année</th>
          <th>Disponible</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="vehicule in vehicules" :key="vehicule.id">
          <td>{{ vehicule.marque }}</td>
          <td>{{ vehicule.modele }}</td>
          <td>{{ vehicule.anneeFabrication }}</td>
          <td>{{ vehicule.disponible ? 'Oui' : 'Non' }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination -->
    <div>
      <button :disabled="page === 0" @click="changePage(-1)">Précédent</button>
      <span>Page {{ page + 1 }}</span>
      <button @click="changePage(1)">Suivant</button>
    </div>
  </div>
</template>

<script>
import vehiculeService from '@/Services/vehiculeService';

export default {
  name: 'VehiculeList',
  data() {
    return {
      vehicules: [],
      filters: {
        marque: '',
        modele: '',
        disponible: ''
      },
      page: 0,
      size: 10
    };
  },
  created() {
    this.fetchVehicules();
  },
  methods: {
    async fetchVehicules() {
      try {
        const params = {
          ...this.filters,
          page: this.page,
          size: this.size
        };
        const response = await vehiculeService.getVehiculesAvecFiltres(params);
        this.vehicules = response.data.content; // Récupère les véhicules paginés
      } catch (error) {
        console.error('Erreur lors de la récupération des véhicules:', error);
      }
    },
    changePage(direction) {
      this.page += direction;
      this.fetchVehicules();
    }
  }
};
</script>
