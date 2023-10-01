import { Component, ElementRef, ViewChild } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon, PokemonDetails } from '../interfaces/pokemon.interfaces';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {

  public pokemons: Pokemon[] = [];
  public page:number = 0;
  public search: string = '';
  public showSuggestions: boolean = false;
  public suggestions?: Pokemon[] = [];
  public selectedPokemon: PokemonDetails | null = null; 

  constructor( private pokemonService: PokemonService){}

  ngOnInit(){
    this.pokemonService.getPokedex()
    .subscribe( pokemons =>{
      this.pokemons = pokemons
    });
  }

  nextPage(){
    this.page+=10; 
  }
  
  prevPage(){
    if(this.page > 0)
      this.page-=10;
  }

  firstPage(){
    if(this.page > 0)
      this.page=0;
  }

  lastPage(){
      this.page= this.pokemons.length -10;
  }

  autoCompleteSearch(search:string){
    this.showSuggestions = true;
    this.suggestions = this.pokemons.filter(poke => poke.name.includes(search.toLowerCase().trim()));
  }

  searchPokemon(search:string){
    this.page = 0;
    this.search = search.toLowerCase().trim();
  }

  selectSuggestion(pokemon:Pokemon){
    this.searchPokemon(pokemon.name)
  }

  selectPokemon(pokemon:Pokemon){
    this.pokemonService.getPokemon(pokemon.id)
    .subscribe( (pokemon:PokemonDetails) =>{
      this.selectedPokemon = pokemon;
      this.selectedPokemon.height /= 10;
      this.selectedPokemon.weight /= 10;
    });
  }
}
