import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { ViewPokemonComponent } from "./view-pokemon/view-pokemon.component";
import { PokemonComponent } from "./view-pokemon/pokemon/pokemon.component";
import { PokemonDetailsComponent } from "./view-pokemon/pokemon/pokemon-details/pokemon-details.component";

@NgModule({
  declarations: [
    AppComponent,
    ViewPokemonComponent,
    PokemonComponent,
    PokemonDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "pokemon-list", pathMatch: "full" },
      { path: "pokemon-list", component: ViewPokemonComponent },
      { path: "pokemon-details/:id", component: PokemonDetailsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
