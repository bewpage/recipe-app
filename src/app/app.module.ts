import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { RecipesComponent } from './layout/recipes/recipes.component';
import { RecipeListComponent } from './layout/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './layout/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './layout/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './layout/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './layout/shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
