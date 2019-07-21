import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ViewPokemonComponent } from './view-pokemon/view-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewPokemonComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
