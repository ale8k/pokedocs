import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { IPokemon } from "src/app/shared/models/IPokemon";

@Component({
  selector: "pokemon",
  templateUrl: "./pokemon.component.html",
  styleUrls: ["./pokemon.component.scss"]
})
export class PokemonComponent implements OnInit {

  @Input() pokemon: IPokemon;

  constructor(private route: Router)
  { }

  ngOnInit() {
  }

  public navigateToPokemon(id) {
    this.route.navigate(["/pokemon-details", id]);
  }

}
