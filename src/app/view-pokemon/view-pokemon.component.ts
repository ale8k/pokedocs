import { Component, OnInit } from "@angular/core";
import { ApiService } from "../shared/services/api.service";

import { IPokemon } from "../shared/models/IPokemon";

@Component({
  selector: "view-pokemon",
  templateUrl: "./view-pokemon.component.html",
  styleUrls: ["./view-pokemon.component.scss"]
})
export class ViewPokemonComponent implements OnInit {

  public allPokemon: Array<IPokemon>;

  constructor(private api: ApiService)
  { }

  ngOnInit() {
    this.allPokemon = this.api.getPokemons();
  }

}
