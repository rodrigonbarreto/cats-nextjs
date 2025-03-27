import axios from 'axios';
import { ExternalCat, SavedCat } from '@/types/cat';

const API_URL = 'http://localhost:8181/api/v1';

export const api = axios.create({
    baseURL: API_URL,
});

export const catService = {
    getExternalCats: async (limit = 10): Promise<ExternalCat[]> => {
        try {
            const response = await api.get<ExternalCat[]>(`/cats/?limit=${limit}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching external cats:', error);
            throw error;
        }
    },

    getMyCats: async (): Promise<SavedCat[]> => {
        try {
            const response = await api.get<SavedCat[]>('/cats/my_cats');
            return response.data;
        } catch (error) {
            console.error('Error fetching my cats:', error);
            throw error;
        }
    },

    saveCat: async (cat: ExternalCat): Promise<SavedCat> => {
        try {
            const response = await api.post<SavedCat>('/cats/', {
                cod_cat: cat.id,
                width: cat.width,
                height: cat.height,
                url: cat.url,
                name: cat.name,
            });
            return response.data;
        } catch (error) {
            console.error('Error saving cat:', error);
            throw error;
        }
    },

    updateCatName: async (id: number, name: string, cat: SavedCat): Promise<SavedCat> => {
        try {
            const response = await api.put<SavedCat>(`/cats/${id}`, {
                cod_cat: cat.cod_cat,
                width: cat.width,
                height: cat.height,
                url: cat.url,
                name: name
            });
            return response.data;
        } catch (error) {
            console.error('Error updating cat name:', error);
            throw error;
        }
    },

    deleteCat: async (id: number): Promise<void> => {
        try {
            await api.delete(`/cats/${id}`);
        } catch (error) {
            console.error('Error deleting cat:', error);
            throw error;
        }
    },
};