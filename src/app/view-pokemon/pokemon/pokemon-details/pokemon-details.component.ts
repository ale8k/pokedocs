import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "pokemon-details",
  templateUrl: "./pokemon-details.component.html",
  styleUrls: ["./pokemon-details.component.scss"]
})
export class PokemonDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute)
  { }

  ngOnInit() {

  }

}
