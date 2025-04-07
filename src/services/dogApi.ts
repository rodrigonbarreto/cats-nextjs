import axios from 'axios';
import { ExternalDog, SavedDog } from '@/types/dog';

const API_URL = 'http://localhost:8181/api/v1';

export const api = axios.create({
    baseURL: API_URL,
});

export const dogService = {
    getExternalDogs: async (limit = 10): Promise<ExternalDog[]> => {
        try {
            const response = await api.get<ExternalDog[]>(`/dogs/?limit=${limit}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching external dogs:', error);
            throw error;
        }
    },

    getMyDogs: async (): Promise<SavedDog[]> => {
        try {
            const response = await api.get<SavedDog[]>('/dogs/my_dogs');
            return response.data;
        } catch (error) {
            console.error('Error fetching my dogs:', error);
            throw error;
        }
    },

    saveDog: async (dog: ExternalDog): Promise<SavedDog> => {
        try {
            const response = await api.post<SavedDog>('/dogs/', {
                width: dog.width,
                height: dog.height,
                url: dog.url,
                name: dog.name,
            });
            return response.data;
        } catch (error) {
            console.error('Error saving dog:', error);
            throw error;
        }
    },

    updateDogName: async (id: number, name: string, dog: SavedDog): Promise<SavedDog> => {
        try {
            const response = await api.put<SavedDog>(`/dogs/${id}`, {
                width: dog.width,
                height: dog.height,
                url: dog.url,
                name: name
            });
            return response.data;
        } catch (error) {
            console.error('Error updating dog name:', error);
            throw error;
        }
    },

    deleteDog: async (id: number): Promise<void> => {
        try {
            await api.delete(`/dogs/${id}`);
        } catch (error) {
            console.error('Error deleting dog:', error);
            throw error;
        }
    },
};