import { Component, OnInit } from "@angular/core";
import { PokemonService } from "../shared/services/pokemon.service";
import { IPokemon } from "../shared/models/IPokemon";
import { Subject, BehaviorSubject } from "rxjs";
import { filter, map } from "rxjs/operators";

/**
 * ViewPokemonComponent is our outer wrapper for the (individual) PokemonComponent
 */
@Component({
  selector: "view-pokemon",
  templateUrl: "./view-pokemon.component.html",
  styleUrls: ["./view-pokemon.component.scss"]
})
export class ViewPokemonComponent implements OnInit {

  public pokemon$;

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.pokemon$ = this.pokemonService.getAllPokemon();
  }

}
