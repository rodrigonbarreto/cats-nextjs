export interface ExternalDog {
    id: string;
    url: string;
    width: number;
    height: number;
    name?: string;
}

export interface SavedDog {
    id: number;
    type: string;
    code_pet: string;
    width: number;
    height: number;
    url: string;
    name: string;
}