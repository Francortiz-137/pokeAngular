import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './pokedex/pokedex.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { SummaryComponent } from './summary/summary.component';
import { ModalFavoriteComponent } from './modal-favorite/modal-favorite.component';

@NgModule({
    declarations: [
        PokedexComponent,
        FiltroPipe,
        PokemonDetailsComponent,
        SummaryComponent,
        ModalFavoriteComponent
    ],
    exports: [
        PokedexComponent,
        PokemonDetailsComponent
    ],
    imports: [
        CommonModule,
    ]
})
export class PokemonModule { }
