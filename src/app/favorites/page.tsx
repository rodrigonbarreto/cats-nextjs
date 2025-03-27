'use client';

import { useState, useEffect } from 'react';
import { catService } from '@/services/api';
import CatGrid from '@/components/sections/CatGrid';
import { SavedCat } from '@/types/cat';
import { Toaster, toast } from 'react-hot-toast';

export default function Favorites() {
    const [cats, setCats] = useState<SavedCat[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchMyCats = async () => {
        try {
            setLoading(true);
            const data = await catService.getMyCats();
            setCats(data);
            setError(null);
        } catch (err) {
            setError('Falha ao buscar seus gatos favoritos. Por favor, tente novamente mais tarde.');
            console.error('Error fetching favorite cats:', err);
            toast.error('Não foi possível carregar seus gatos favoritos');
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteCat = async (id: number) => {
        try {
            await catService.deleteCat(id);
            setCats(cats.filter(cat => cat.id !== id));
            toast.success('Gato excluído com sucesso!');
        } catch (err) {
            console.error('Error deleting cat:', err);
            toast.error('Falha ao excluir o gato');
        }
    };

    const handleUpdateCat = async (id: number, name: string, catObj: SavedCat) => {
        try {
            const updatedCat = await catService.updateCatName(id, name, catObj);

            setCats(cats.map(cat =>
                cat.id === id ? { ...cat, name } : cat
            ));

            toast.success('Nome do gato atualizado com sucesso!');
            return updatedCat;
        } catch (err) {
            console.error('Error updating cat name:', err);
            toast.error('Falha ao atualizar o nome do gato');
            throw err;
        }
    };

    useEffect(() => {
        fetchMyCats();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <Toaster />
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Meus Gatos Adotados</h1>
                <button
                    onClick={fetchMyCats}
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
                <CatGrid
                    cats={cats}
                    isFavorites={true}
                    onCatDeleted={handleDeleteCat}
                    onCatUpdated={handleUpdateCat}
                />
            )}
        </div>
    );
}