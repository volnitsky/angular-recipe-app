import { HeaderComponent } from "./header/header.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { RecipeDetailComponent } from "./recipies/recipe-detail/recipe-detail.component";
import { RecipeListComponent } from "./recipies/recipe-list/recipe-list.component";
import { RecipeItemComponent } from "./recipies/recipe-list/recipe-item/recipe-item.component";
import { RecipesComponent } from "./recipies/recipes.component";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeItemComponent,
    RecipesComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeDetailComponent,
    RecipeListComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
