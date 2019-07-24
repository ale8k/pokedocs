import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { IPokemon } from "../models/IPokemon";
import { Observable, of } from "rxjs";


@Injectable({
  providedIn: "root"
})
export class PokemonService {

  constructor(
    private api: ApiService
  ) { }

  public getAllPokemon(): Observable<Array<IPokemon>> {
    return of(this.api.getAllPokemon());
  }


}
