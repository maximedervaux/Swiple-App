// src/api/axios.ts
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL, // à mettre dans .env
});

api.interceptors.request.use(async (config) => {
  // Ajoute le token si présent
  const token = await getTokenFromSecureStore(); 
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
