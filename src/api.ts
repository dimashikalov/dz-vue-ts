import axios from 'axios';
import { useAuthStore } from './store/auth.store';

export const API_ROUTES = {
  meditations: 'meditations',
  auth: {
    login: 'auth/login',
    registration: 'auth/register',
  },
};
export function client() {
  const authStore = useAuthStore();

  return axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 10000,
    headers: {
      Authorization: `Bearer ${authStore.getToken}`,
    },
  });
}
