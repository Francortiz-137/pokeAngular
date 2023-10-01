import { createReducer, on } from "@ngrx/store";
import {PokemonDetails} from "./interfaces/pokemon.interfaces";
import { addFavoriteAction, removeFavoriteAction } from "./pokemon.actions";


export const initialState: PokemonDetails = {
    abilities: [],
    base_experience: 0,
    forms: [],
    game_indices: [],
    height: 0,
    held_items: [],
    id: 0,
    is_default: false,
    location_area_encounters: "",
    moves: [],
    name: "",
    order: 0,
    past_types: [],
    species: null,
    sprites: null,
    stats: [],
    types: [],
    weight: 0
}

export const pokemonReducer = createReducer(
    initialState,
    on(addFavoriteAction, (state, {pokeFav})=> {
        return { ...pokeFav};
    }), 
    on(removeFavoriteAction, (state)=> {
        return initialState;
    }),
)