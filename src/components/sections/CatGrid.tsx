import { ExternalCat, SavedCat } from '@/types/cat';
import CatCard from '@/components/ui/CatCard';

interface CatGridProps {
    cats: (ExternalCat | SavedCat)[];
    isFavorites?: boolean;
    onCatSaved?: () => void;
    onCatDeleted?: (id: number) => Promise<void>;
}

const CatGrid = ({ cats, isFavorites = false, onCatSaved, onCatDeleted }: CatGridProps) => {
    if (!cats.length) {
        return (
            <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-md p-4">
                {isFavorites
                    ? "Você ainda não possui gatos favoritos."
                    : "Nenhum gato encontrado. Tente atualizar."}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cats.map((cat) => (
                <CatCard
                    key={isFavorites ? `fav-${cat.id}` : `ext-${cat.id}`}
                    cat={cat}
                    isFavorite={isFavorites}
                    onSave={onCatSaved}
                    onDelete={onCatDeleted}
                />
            ))}
        </div>
    );
};

export default CatGrid;
