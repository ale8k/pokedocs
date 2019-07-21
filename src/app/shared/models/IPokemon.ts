import { IForm } from "./IForm";

export interface IPokemon {
    abilities: Array<object>;
    base_experience: number;
    forms: Array<IForm>;
    game_indices: Array<object>;
    height: number;
    held_items: Array<object>;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Array<object>;
    name: string;
    order: number;
    species: object;
    sprites: object;
    stats: Array<object>;
    types: Array<object>;
    weight: number;
}
