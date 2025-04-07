'use client';

import { useState, useEffect } from 'react';
import { catService } from '@/services/api';
import CatGrid from '@/components/sections/CatGrid';
import { ExternalCat } from '@/types/cat';
import { toast } from 'react-hot-toast';

export default function Cats() {
    const [cats, setCats] = useState<ExternalCat[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchCats = async () => {
        try {
            setLoading(true);
            const data = await catService.getExternalCats();
            setCats(data);
            setError(null);
        } catch (err) {
            setError('Falha ao buscar os gatos. Por favor, tente novamente mais tarde.');
            console.error('Error fetching cats:', err);
            toast.error('Não foi possível carregar os gatos');
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchCats();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Descubra Gatos</h1>
                <button
                    onClick={fetchCats}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Atualizar Gatos
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
                />
            )}
        </div>
    );
}