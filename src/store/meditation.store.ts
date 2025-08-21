import { API_ROUTES, client } from '@/api';
import type { IMeditation } from '@/interfaces/meditation.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

interface MeditationsResponce {
  data: {
    meditations: IMeditation[];
  };
  status: string;
}

export const useMeditationsStore = defineStore('meditations', () => {
  const meditations = ref<IMeditation[]>([]);

  async function fetchMeditations() {
    const { data } = await client().get<MeditationsResponce>(API_ROUTES.meditations);
    meditations.value = data.data.meditations;
  }
  return { meditations, fetchMeditations };
});
