import { Component, OnInit, OnDestroy } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { PokemonService } from "src/app/shared/services/pokemon.service";

/**
 * We display the details for pokemon based on their ID,
 * the data is then pulled from the pokemoncollection.service
 */
@Component({
  selector: "pokemon-details",
  templateUrl: "./pokemon-details.component.html",
  styleUrls: ["./pokemon-details.component.scss"]
})
export class PokemonDetailsComponent implements OnInit, OnDestroy {

  public id: number;
  public subscriptions: Subscription;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private pokemonService: PokemonService
  )
  { }

  ngOnInit() {
    this.subscriptions = this.route.params.subscribe(params => {
      this.id = Number(params.id);
    });
    console.log(this.pokemonService.getPokemonDetails(this.id));

  }

  public navigateBack() {
    this.location.back();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
