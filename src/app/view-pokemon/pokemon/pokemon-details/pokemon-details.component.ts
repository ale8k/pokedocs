import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "pokemon-details",
  templateUrl: "./pokemon-details.component.html",
  styleUrls: ["./pokemon-details.component.scss"]
})
export class PokemonDetailsComponent implements OnInit {

  public id: number;

  constructor(private route: ActivatedRoute)
  { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
  }

}
