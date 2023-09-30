import { Component, ElementRef, ViewChild } from '@angular/core';
import { PokemonDetails } from '../pokemon/interfaces/pokemon.interfaces';
import { AppState } from '../app.reducers';
import { Store } from '@ngrx/store';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalFavoriteComponent } from '../pokemon/modal-favorite/modal-favorite.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  pokeFav?: PokemonDetails;

  constructor(private store: Store<AppState>,private modalService: NgbModal){
    this.store.select('pokeFav').subscribe( pokeFav => {
      this.pokeFav = pokeFav;
    });
  }

  closeResult: string = '';

  

  openModalDetails() {

    this.modalService.open(ModalFavoriteComponent, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {

      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;

    });

  }

  

  private getDismissReason(reason: any): string {

    if (reason === ModalDismissReasons.ESC) {

      return 'by pressing ESC';

    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {

      return 'by clicking on a backdrop';

    } else {

      return  `with: ${reason}`;

    }

  }

}
