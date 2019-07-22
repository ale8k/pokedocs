import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { IPokemon } from "../models/IPokemon";
import { map } from "rxjs/operators";
import { Subject } from "rxjs";


@Injectable({
  providedIn: "root"
})
export class PokemonService {

  private pokemonSubject$: Subject<Array<IPokemon>>;

  constructor(
    private api: ApiService
  ) { }

  public getAllPokemon(): Subject<Array<IPokemon>> {
    return this.pokemonSubject$ = this.api.getAllPokemonFromAPI();
  }

}
