import { Action, createAction, props } from "@ngrx/store";
import { PokemonDetails } from "./interfaces/pokemon.interfaces";


export const ADD_FAVORITE = '[Favorito] Agregar'; 
export const REMOVE_FAVORITE = '[Favorito] Remover'; 


export const addFavoriteAction = createAction(
    ADD_FAVORITE,
    props<{ pokeFav: PokemonDetails }>()
  );

export const removeFavoriteAction = createAction(
    REMOVE_FAVORITE
  );
