import { Recipe } from "./recipe.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipies.component.html",
  styleUrls: ["./recipies.component.css"]
})
export class RecipiesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() {}

  ngOnInit() {}
}
