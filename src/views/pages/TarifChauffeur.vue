<template>
  <Sidebar />
  <div class="page-content">
    <div class="page-content-wrapper p-xxl-4">
      <!-- Title -->
      <div class="row">
        <div class="col-12 mb-4 mb-sm-5">
          <div class="d-sm-flex justify-content-between align-items-center">
            <h1 class="h3 mb-2 mb-sm-0">Gestion des Tarifs Chauffeur</h1>
          </div>
        </div>
      </div>

      <!-- Formulaire d'ajout / modification du tarif -->
      <div class="card p-4 shadow-lg">
        <form @submit.prevent="saveTarif">
          <div class="mb-3">
            <label class="form-label">Tarif Jour (FCFA)</label>
            <input type="number" v-model="tarif.tarifJour" class="form-control" required />
          </div>

          <div class="mb-3">
            <label class="form-label">Tarif Nuit (FCFA)</label>
            <input type="number" v-model="tarif.tarifNuit" class="form-control" required />
          </div>

          <div class="d-flex justify-content-end">
            <button type="submit" class="btn btn-primary">
              {{ tarif.id ? "Modifier" : "Ajouter" }} Tarif
            </button>
          </div>
        </form>
      </div>

      <!-- Liste des tarifs -->
      <div class="card mt-4 p-4 shadow-lg">
        <h4>Tarifs existants</h4>
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tarif Jour (FCFA)</th>
              <th>Tarif Nuit (FCFA)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="tarif in tarifs" :key="tarif.id">
              <td>{{ tarif.id }}</td>
              <td>{{ tarif.tarifJour }}</td>
              <td>{{ tarif.tarifNuit }}</td>
              <td>
                <button class="btn btn-warning btn-sm me-2" @click="editTarif(tarif)">Modifier</button>
                <button class="btn btn-danger btn-sm" @click="deleteTarif(tarif.id)">Supprimer</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      toast: useToast(),
      tarif: { id: null, tarifJour: 0, tarifNuit: 0 },
      tarifs: [],
    };
  },
  mounted() {
    this.fetchTarifs();
  },
  methods: {
    // Récupérer tous les tarifs
    async fetchTarifs() {
      try {
        const response = await axios.get("http://localhost:9091/api/tarifs");
        this.tarifs = response.data;
      } catch (error) {
        console.error("Erreur lors de la récupération des tarifs", error);
      }
    },

    // Ajouter ou modifier un tarif
    async saveTarif() {
      const token = localStorage.getItem("token");

      try {
        if (this.tarif.id) {
          // Modifier un tarif existant
          await axios.put(`http://localhost:9091/api/tarifs/${this.tarif.id}`, this.tarif, {
            headers: { Authorization: `Bearer ${token}` },
          });
          this.toast.success("Tarif modifié avec succès ✅");
        } else {
          // Ajouter un nouveau tarif
          await axios.post("http://localhost:9091/api/tarifs", this.tarif, {
            headers: { Authorization: `Bearer ${token}` },
          });
          this.toast.success("Tarif ajouté avec succès ✅");
        }

        this.fetchTarifs();
        this.tarif = { id: null, tarifJour: 0, tarifNuit: 0 }; // Réinitialisation du formulaire
      } catch (error) {
        console.error("Erreur lors de l'enregistrement du tarif", error);
        this.toast.error("Erreur lors de l'enregistrement ❌");
      }
    },

    // Pré-remplir le formulaire pour modifier un tarif
    editTarif(tarif) {
      this.tarif = { ...tarif };
    },

    // Supprimer un tarif
    async deleteTarif(id) {
      const token = localStorage.getItem("token");

      if (!confirm("Voulez-vous vraiment supprimer ce tarif ?")) return;

      try {
        await axios.delete(`http://localhost:9091/api/tarifs/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        this.toast.success("Tarif supprimé avec succès 🗑️");
        this.fetchTarifs();
      } catch (error) {
        console.error("Erreur lors de la suppression du tarif", error);
        this.toast.error("Erreur lors de la suppression ❌");
      }
    },
  },
};
</script>

<style>
/* Styles pour le modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  text-align: center;
}

.modal input {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 5px;
}

.modal-buttons button {
  margin: 5px;
}
</style>
