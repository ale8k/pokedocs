import { Component, OnInit } from "@angular/core";
import { PokemonService } from "../shared/services/pokemon.service";
import { IPokemon } from "../shared/models/IPokemon";
import { Observable } from "rxjs";
import { ApiService } from "../shared/services/api.service";

/**
 * ViewPokemonComponent is our outer wrapper for the (individual) PokemonComponent
 */
@Component({
  selector: "view-pokemon",
  templateUrl: "./view-pokemon.component.html",
  styleUrls: ["./view-pokemon.component.scss"]
})
export class ViewPokemonComponent implements OnInit {

  public allPokemon$: Observable<Array<IPokemon>>;

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.allPokemon$ = this.pokemonService.getAllPokemon();
  }

}
