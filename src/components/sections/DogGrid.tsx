import { ExternalDog, SavedDog } from '@/types/dog';
import DogCard from '@/components/ui/DogCard';

interface DogGridProps {
    dogs: (ExternalDog | SavedDog)[];
    isFavorites?: boolean;
    onDogSaved?: () => void;
    onDogDeleted?: (id: number) => Promise<void>;
    onDogUpdated?: (id: number, name: string, dog: SavedDog) => Promise<SavedDog | void>;
}

const DogGrid = ({ dogs, isFavorites = false, onDogSaved, onDogDeleted, onDogUpdated }: DogGridProps) => {
    if (!dogs.length) {
        return (
            <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-md p-4">
                {isFavorites
                    ? "Você ainda não possui cachorros favoritos."
                    : "Nenhum cachorro encontrado. Tente atualizar."}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {dogs.map((dog) => (
                <DogCard
                    key={isFavorites ? `fav-${dog.id}` : `ext-${dog.id}`}
                    dog={dog}
                    isFavorite={isFavorites}
                    onSave={onDogSaved}
                    onDelete={onDogDeleted}
                    onUpdate={onDogUpdated}
                />
            ))}
        </div>
    );
};

export default DogGrid;