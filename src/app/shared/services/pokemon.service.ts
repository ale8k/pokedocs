import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { IPokemon } from "../models/IPokemon";
import { Observable, Subject, of, BehaviorSubject } from "rxjs";


@Injectable({
  providedIn: "root"
})
export class PokemonService {

  constructor(
    private api: ApiService
  ) { }

  public getAllPokemon() {
    return new BehaviorSubject<IPokemon[]>(this.api.getAllPokemon());
  }


}
