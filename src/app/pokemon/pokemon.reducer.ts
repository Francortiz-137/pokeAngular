import { createReducer, on } from "@ngrx/store";
import {PokemonDetails} from "./interfaces/pokemon.interfaces";
import { ADD_FAVORITE,  REMOVE_FAVORITE, addFavoriteAction, removeFavoriteAction } from "./pokemon.actions";


/* export function pokemonReducer(state: PokemonDetails | undefined, action: actions){

    switch( action.type ){
        case ADD_FAVORITE:
            console.log(action);
            return action.payload;
         case REMOVE_FAVORITE:
            return state ; 
         default:
            return state;
    } 

}  */


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
        console.log(state);
        return { ...pokeFav};
    }), 
    on(removeFavoriteAction, (state)=> {
        return initialState;
    }),
)