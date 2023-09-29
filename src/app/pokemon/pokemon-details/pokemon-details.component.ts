import { Component, Input } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { PokemonDetails } from '../interfaces/pokemon.interfaces';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent {

  @Input() pokemon?:PokemonDetails;
  favPokemon?: PokemonDetails;
  constructor(pokemonService:PokemonService){}


  changeFavorite(newFav:PokemonDetails){
    if(this.favPokemon !== newFav){
      this.favPokemon = newFav;
      console.log(`Tu pokemon favorito es ahora ${this.favPokemon.name}`);
    }else{
      this.favPokemon = undefined;
      console.log(`Se ha quitado el favorito`);
    }
  }
}
