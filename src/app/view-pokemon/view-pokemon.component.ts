import { Component, OnInit } from "@angular/core";
import { ApiService } from "../shared/api.service";

@Component({
  selector: "view-pokemon",
  templateUrl: "./view-pokemon.component.html",
  styleUrls: ["./view-pokemon.component.scss"]
})
export class ViewPokemonComponent implements OnInit {

  constructor(private api: ApiService) {
    console.log(this.api.getPokemons());
  }

  ngOnInit() {

  }

}
