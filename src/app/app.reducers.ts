import { PokemonDetails } from "./pokemon/interfaces/pokemon.interfaces";

export interface AppState{
    pokeFav: PokemonDetails;
    pokeSelected: PokemonDetails;
}