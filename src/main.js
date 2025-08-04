import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast, { POSITION } from 'vue-toastification';
import axios from 'axios';
import App from './App.vue'
import router from './router'
import 'vue-toastification/dist/index.css';
const app = createApp(App)

axios.defaults.baseURL = 'http://localhost:9091/api';

app.use(createPinia())
app.use(router)
app.use(Toast, {
  position: POSITION.TOP_RIGHT, // Position de la notification
  timeout: 3000, // Temps d'affichage en ms
});
app.config.globalProperties.$axios = axios;

// Ajouter automatiquement le token dans chaque requête
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axios;

app.mount('#app')
