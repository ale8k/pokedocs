import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { IPokemon } from "../models/IPokemon";

@Injectable({
  providedIn: "root"
})
export class ApiService {

  constructor(private http: HttpClient)
  { }

  public getPokemons(): Array<IPokemon> {
    const pokemonCount = 809;
    const allPokemon = [];

    for (let i = 1; i < pokemonCount; i++) {
      this.http.get<IPokemon>("https://pokeapi.co/api/v2/pokemon/" + i).subscribe(data => allPokemon.push(data));
    }

    return allPokemon;
  }

}
