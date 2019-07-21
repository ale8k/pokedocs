import { Component, OnInit } from "@angular/core";
import { ApiService } from "../shared/services/api.service";

@Component({
  selector: "view-pokemon",
  templateUrl: "./view-pokemon.component.html",
  styleUrls: ["./view-pokemon.component.scss"]
})
export class ViewPokemonComponent implements OnInit {

  public pokemonSprites: Array<object>;

  constructor(private api: ApiService)
  { }

  ngOnInit() {
    this.pokemonSprites = this.api.getPokemons();
  }

}
