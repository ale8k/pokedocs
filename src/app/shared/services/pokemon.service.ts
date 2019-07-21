import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { IPokemon } from "../models/IPokemon";
import { Observable, of } from "rxjs";


@Injectable({
  providedIn: "root"
})
export class PokemonService {

  private pokemonArr: Array<IPokemon> = new Array<IPokemon>();

  constructor(
    private api: ApiService
  ) { }

  public getAllPokemon(): Observable<Array<IPokemon>> {
    let pokemonArr$: Observable<Array<IPokemon>>;

    if (this.pokemonArr.length > 0) {
      return of(this.pokemonArr);
    } else {
      console.log("PokemonService: Getting Pokemons from API");
      this.api.getAllPokemonFromAPI().subscribe(data => this.pokemonArr.push(data));
      pokemonArr$ = of(this.pokemonArr);
      return pokemonArr$;
    }

  }

  public getPokemonDetails(id: number) {
    console.log(id);
    return this.pokemonArr.find( (pokemon: IPokemon) => {
      return pokemon.id === id;
    });
  }

  // Need to figure way to sort by default....
  private sortPokemonByID(array: Array<IPokemon>): Array<IPokemon> {
      return array.sort( (a, b) => {
        return a.id - b.id;
      });
  }

}
