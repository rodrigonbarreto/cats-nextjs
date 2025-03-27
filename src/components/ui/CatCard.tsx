'use client';

import { useState } from 'react';
import { ExternalCat, SavedCat } from '@/types/cat';
import { catService } from '@/services/api';
import { toast } from 'react-hot-toast';

interface CatCardProps {
    cat: ExternalCat | SavedCat;
    isFavorite?: boolean;
    onSave?: () => void;
    onDelete?: (id: number) => Promise<void>;
}

const CatCard = ({ cat, isFavorite = false, onSave, onDelete }: CatCardProps) => {
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showNameInput, setShowNameInput] = useState(false);
    const [nickName, setNickName] = useState(`Cat ${cat.id}`);

    const saveCat = async () => {
        try {
            setSaving(true);
            setError(null);
            console.log(' nickname', nickName.trim());
            await catService.saveCat({
                ...cat as ExternalCat,
                name: nickName.trim() || `Cat ${cat.id}`
            });
            setSaved(true);
            if (onSave) onSave();
            toast.success('Gato adotado com sucesso!');
        } catch (err) {
            setError('Falha ao adotar o gato');
            console.error('Error saving cat:', err);
            toast.error('Não foi possível adotar o gato');
        } finally {
            setSaving(false);
            setShowNameInput(false);
        }
    };

    const deleteCat = async () => {
        try {
            if ('id' in cat && typeof cat.id === 'number') {
                if (window.confirm(`Tem certeza de que deseja excluir "${displayName}"?`)) {
                    setDeleting(true);
                    if (onDelete) await onDelete(cat.id);
                }
            }
        } catch (err) {
            setError('Falha ao excluir o gato');
            console.error('Error deleting cat:', err);
            setDeleting(false);
        }
    };

    const handleAddButtonClick = () => {
        setShowNameInput(true);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        saveCat();
    };

    const displayId = 'cod_cat' in cat ? cat.cod_cat : cat.id;
    const displayName = 'name' in cat ? cat.name : `Cat ${cat.id}`;

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
                <img
                    src={cat.url}
                    alt={`Gato ${displayId}`}
                    className="w-full h-48 object-cover"
                />
            </div>
            <div className="p-4">
                <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-800">
                        {displayName}
                    </h3>

                    {isFavorite && 'id' in cat && typeof cat.id === 'number' && (
                        <button
                            onClick={deleteCat}
                            disabled={deleting}
                            className={`text-red-500 hover:text-red-700 focus:outline-none ${deleting ? 'opacity-50' : ''}`}
                            title="Excluir gato"
                        >
                            {deleting ? (
                                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            )}
                        </button>
                    )}
                </div>

                <div className="mt-2 text-sm text-gray-600">
                    <p>ID: {displayId}</p>
                    <p>Largura: {cat.width}px</p>
                    <p>Altura: {cat.height}px</p>
                </div>

                {!isFavorite && (
                    <div className="mt-4">
                        {error && (
                            <p className="text-red-500 text-xs mb-2">{error}</p>
                        )}

                        {showNameInput ? (
                            <form onSubmit={handleSubmit} className="space-y-3">
                                <div>
                                    <label htmlFor="nickName" className="block text-sm font-medium text-gray-700">
                                        Apelido:
                                    </label>
                                    <input
                                        type="text"
                                        id="nickName"
                                        value={nickName}
                                        onChange={(e) => setNickName(e.target.value)}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm text-black"
                                        placeholder="Digite o nome do gato"
                                        disabled={saving}
                                    />
                                </div>
                                <div className="flex space-x-2">
                                    <button
                                        type="button"
                                        onClick={() => setShowNameInput(false)}
                                        className="flex-1 py-2 px-3 rounded text-sm font-medium border border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
                                        disabled={saving}
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        type="submit"
                                        className={`flex-1 py-2 px-3 rounded text-sm font-medium ${
                                            saving
                                                ? 'bg-gray-400 text-white cursor-not-allowed'
                                                : 'bg-blue-500 hover:bg-blue-600 text-white'
                                        }`}
                                        disabled={saving}
                                    >
                                        {saving ? 'Salvando...' : 'Salvar'}
                                    </button>
                                </div>
                            </form>
                        ) : saved ? (
                            <button
                                disabled
                                className="w-full py-2 px-3 rounded text-sm font-medium bg-green-500 text-white"
                            >
                                Gato adotado
                            </button>
                        ) : (
                            <button
                                onClick={handleAddButtonClick}
                                className="w-full py-2 px-3 rounded text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white"
                            >
                                Adotar
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CatCard;
