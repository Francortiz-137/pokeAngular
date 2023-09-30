import { Action, createAction, props } from "@ngrx/store";
import { PokemonDetails } from "./interfaces/pokemon.interfaces";


export const ADD_FAVORITE = '[Favorito] Agregar'; 
export const REMOVE_FAVORITE = '[Favorito] Remover'; 

/* export class AddFavoriteAction implements Action{
    readonly type = ADD_FAVORITE;

    constructor(public payload:PokemonDetails) {}
}  */

export const addFavoriteAction = createAction(
    ADD_FAVORITE,
    props<{ pokeFav: PokemonDetails }>()
  );

export const removeFavoriteAction = createAction(
    REMOVE_FAVORITE
  );

/*  export class RemoveFavoriteAction implements Action{
    readonly type = REMOVE_FAVORITE;
}  */

/*  export type actions = AddFavoriteAction   |
                    RemoveFavoriteAction;  */