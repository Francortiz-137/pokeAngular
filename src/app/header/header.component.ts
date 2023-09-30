import { Component } from '@angular/core';
import { PokemonDetails } from '../pokemon/interfaces/pokemon.interfaces';
import { AppState } from '../app.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  pokeFav?: PokemonDetails

  constructor(private store: Store<AppState>){
    this.store.select('pokeFav').subscribe( pokeFav => {
      this.pokeFav = pokeFav;
    });
  }
}
