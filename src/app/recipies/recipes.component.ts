import { Recipe } from "./recipe.model";
import { Component, OnInit } from "@angular/core";
import { RecipeService } from "./recipe.service";
@Component({
  selector: "app-recipes",
  templateUrl: "./recipies.component.html",
  styleUrls: ["./recipies.component.css"],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) {}
  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
