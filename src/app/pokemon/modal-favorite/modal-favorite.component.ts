import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { PokemonDetails } from '../interfaces/pokemon.interfaces';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-modal-favorite',
  templateUrl: './modal-favorite.component.html',
  styleUrls: ['./modal-favorite.component.css']
})
export class ModalFavoriteComponent {

  pokemon?: PokemonDetails;

  constructor(public activeModal: NgbActiveModal,private store: Store<AppState>){
    this.store.select('pokeFav').subscribe( pokeFav => {
      this.pokemon = pokeFav;
    });
  }
}
