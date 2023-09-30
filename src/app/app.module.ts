import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { pokemonReducer } from './pokemon/pokemon.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PokemonModule,
    StoreModule.forRoot({pokeFav: pokemonReducer}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
