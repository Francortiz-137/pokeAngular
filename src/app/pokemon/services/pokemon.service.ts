import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllPokemon, Pokemon, PokemonDetails } from '../interfaces/pokemon.interfaces';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string = 'https://pokeapi.co/api/v2';

  constructor( private http: HttpClient) { }

  getPokedex(): Observable<Pokemon[]>{
    return this.http.get<AllPokemon>(`${this.url}/pokemon/?limit=1500`)
    .pipe(
      map(resp => this.formatPokemon(resp))
    );
  }

  private formatPokemon(resp: AllPokemon): Pokemon[]{
    const pokemonList: Pokemon[] = resp.results.map(poke =>{

      const urlArr = poke.url.split('/');
      const id = urlArr[6];
      const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png`;

      return {
        id,
        name: poke.name,
        sprite
      }
    })

    return pokemonList;
  }

  getPokemon(id:string): Observable<PokemonDetails>{
    return this.http.get<PokemonDetails>(`${this.url}/pokemon/${id}`);
  }

}
