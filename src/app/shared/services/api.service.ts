import { HttpClient } from "@angular/common/http";
import { IPokemon } from "../models/IPokemon";
import { Observable, merge } from "rxjs";

export class ApiService {

  private arrayOfPokemonObs: Array<Observable<IPokemon>> = new Array<Observable<IPokemon>>();
  private mergedPokemonObs$: Observable<IPokemon>;

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Gets all Pokemon via individual requests,
   * then merges all requests Observables into single
   * Observable and returns it.
   */
  public getAllPokemonFromAPI(): Observable<IPokemon> {

    // TODO: Remove hard coded count of pokemon, shit way of doing this
    for (let i = 1; i < 800; i++) {
      this.arrayOfPokemonObs.push(this.http.get<IPokemon>("https://pokeapi.co/api/v2/pokemon/" + i));
    }
    this.mergedPokemonObs$ = merge(...this.arrayOfPokemonObs);
    return this.mergedPokemonObs$;
  }
}
