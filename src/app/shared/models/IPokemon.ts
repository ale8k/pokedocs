import { IForm } from "./IForm";
import { ISprite } from "./ISprite";

/**
 * Main API model
 * Contains all sub models within this single model,
 * this should be the default used in all API calls.
 */
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
    sprites: ISprite;
    stats: Array<object>;
    types: Array<object>;
    weight: number;
}
