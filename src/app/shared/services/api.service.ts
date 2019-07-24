import { HttpClient } from "@angular/common/http";
import { IPokemon } from "../models/IPokemon";

export class ApiService {

  private pokemonArray = [];

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get all pokemon from the api
   * Due to the API requests coming in async,
   * we sort them as they come. To ensure consistency.
   *
   * TODO: Replace null return on push with some kind of placeholder for data,
   * cache the pokemon locally and return data from cache. Maybe do this
   * in pokemon service...?
   */
  public getAllPokemon() {
    if (this.pokemonArray.length === 0) {
      for (let i = 1; i < 800; i++) {
        this.http.get<IPokemon>("https://pokeapi.co/api/v2/pokemon/" + i).subscribe(data => {
          this.pokemonArray.push(data ? data : null);
          this.pokemonArray.sort((a, b) => a.id - b.id);
        });
      }
      return this.pokemonArray;
    }
    return this.pokemonArray;
  }

}
