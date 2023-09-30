import { Component } from '@angular/core';
import { PokemonDetails } from './pokemon/interfaces/pokemon.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokeAngular';
  pokeFav: PokemonDetails | undefined;
  
  constructor(){
    this.pokeFav = undefined;
  }
}
