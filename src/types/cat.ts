export interface ExternalCat {
    id: string;
    url: string;
    width: number;
    height: number;
    name?: string;
}

export interface SavedCat {
    id: number;
    cod_cat: string;
    url: string;
    width: number;
    height: number;
    name: string;
}