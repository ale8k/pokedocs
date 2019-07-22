import { HttpClient } from "@angular/common/http";
import { IPokemon } from "../models/IPokemon";
import { Subject } from "rxjs";

export class ApiService {

  private subjectOfPokemon$: Subject<Array<IPokemon>> = new Subject<Array<IPokemon>>();

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Performs single requests for each pokemon,
   * we subscribe immediately, push the single pokemon onto the local array
   * and then send a 'new' array through the subject stream
   * This is better than having a local array stored, as this will be garbage collected
   * We are also able to pipe as the Pokemon come in now, 1 by 1.
   *
   * Downside, slightly lower loading speed, but I feel it is worth it.
   */
  public getAllPokemonFromAPI() {
    const arrayOfPokemon: Array<IPokemon> = new Array<IPokemon>();
    for (let i = 1; i < 800; i++) {
      this.http.get<IPokemon>("https://pokeapi.co/api/v2/pokemon/" + i).subscribe(data => {
        arrayOfPokemon.push(data);
        this.subjectOfPokemon$.next(arrayOfPokemon);
      });

    }
    return this.subjectOfPokemon$;
  }
}
