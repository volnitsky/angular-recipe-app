import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  @Output()
  selectedRecipeEvent = new EventEmitter<string>();

  selectRecipe(recipe: string) {
    this.selectedRecipeEvent.emit(recipe);
  }
}
