'use client';

import { useState, useEffect } from 'react';
import { dogService } from '@/services/dogApi';
import DogGrid from '@/components/sections/DogGrid';
import { SavedDog } from '@/types/dog';
import { toast } from 'react-hot-toast';

export default function DogFavorites() {
    const [dogs, setDogs] = useState<SavedDog[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchMyDogs = async () => {
        try {
            setLoading(true);
            const data = await dogService.getMyDogs();
            setDogs(data);
            setError(null);
        } catch (err) {
            setError('Falha ao buscar seus cachorros favoritos. Por favor, tente novamente mais tarde.');
            console.error('Error fetching favorite dogs:', err);
            toast.error('Não foi possível carregar seus cachorros favoritos');
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteDog = async (id: number) => {
        try {
            await dogService.deleteDog(id);
            setDogs(dogs.filter(dog => dog.id !== id));
            toast.success('Cachorro excluído com sucesso!');
        } catch (err) {
            console.error('Error deleting dog:', err);
            toast.error('Falha ao excluir o cachorro');
        }
    };

    const handleUpdateDog = async (id: number, name: string, dogObj: SavedDog) => {
        try {
            const updatedDog = await dogService.updateDogName(id, name, dogObj);

            setDogs(dogs.map(dog =>
                dog.id === id ? { ...dog, name } : dog
            ));

            toast.success('Nome do cachorro atualizado com sucesso!');
            return updatedDog;
        } catch (err) {
            console.error('Error updating dog name:', err);
            toast.error('Falha ao atualizar o nome do cachorro');
            throw err;
        }
    };

    useEffect(() => {
        fetchMyDogs();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Meus Cachorros Adotados</h1>
                <button
                    onClick={fetchMyDogs}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Atualizar
                </button>
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            ) : error ? (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <span className="block sm:inline">{error}</span>
                </div>
            ) : (
                <DogGrid
                    dogs={dogs}
                    isFavorites={true}
                    onDogDeleted={handleDeleteDog}
                    onDogUpdated={handleUpdateDog}
                />
            )}
        </div>
    );
}