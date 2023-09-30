import { Component, Input } from '@angular/core';
import { Pokemon, PokemonDetails } from '../interfaces/pokemon.interfaces';
import { Action, Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { addFavoriteAction, removeFavoriteAction,/*  RemoveFavoriteAction */ } from '../pokemon.actions';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent {

  @Input() pokemon?:PokemonDetails;

  pokeFav?: PokemonDetails;


  constructor(private store: Store<AppState>){
    this.store.select('pokeFav').subscribe( pokeFav => {
      this.pokeFav = pokeFav;
    });
  }

  addFavorite(newFav:PokemonDetails){

   const props = {pokeFav: newFav}
    this.store.dispatch( addFavoriteAction(props));
  }

   removeFavorite(){
    this.store.dispatch( removeFavoriteAction() );

  } 

}
