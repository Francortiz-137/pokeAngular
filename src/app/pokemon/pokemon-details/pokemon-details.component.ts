import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { PokemonDetails } from '../interfaces/pokemon.interfaces';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { addFavoriteAction, removeFavoriteAction,/*  RemoveFavoriteAction */ } from '../pokemon.actions';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent {

  @Input() pokemon?:PokemonDetails;
  pokeFav?: PokemonDetails;
  @ViewChild('pokeSelected') pokeSelected!: ElementRef;

  constructor(private store: Store<AppState>, private pokemonService:PokemonService){
    this.store.select('pokeFav').subscribe( pokeFav => {
      this.pokeFav = pokeFav;
    });
  }

  ngAfterViewInit(): void {
    this.pokeSelected.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  addFavorite(newFav:PokemonDetails){
    const props = {pokeFav: newFav}
    this.store.dispatch( addFavoriteAction(props));
  }

  removeFavorite(){
    this.store.dispatch( removeFavoriteAction() );
  } 

  prevPokemon(){
    if(this.pokemon && this.pokemon.id > 1)
      this.pokemonService.getPokemon(`${this.pokemon.id - 1}`)
        .subscribe( pokemon =>{
          this.pokemon = pokemon
      });
  }

  nextPokemon(){
    if(this.pokemon)
      this.pokemonService.getPokemon(`${this.pokemon.id + 1}`)
        .subscribe( pokemon =>{
          this.pokemon = pokemon;
      });
  }
}
