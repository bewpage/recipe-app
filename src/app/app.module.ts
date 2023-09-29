import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { RecipesComponent } from './layout/recipes/recipes.component';
import { RecipeListComponent } from './layout/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './layout/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './layout/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './layout/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './layout/shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './layout/shopping-list/shoppingList.service';
import { AppRoutingModule } from './app-routing.module';
import { RouterOutlet } from '@angular/router';
import { RecipeResolverService } from './layout/recipes/recipe-list/recipe-item/recipe-resolver.service';
import { RecipeStartComponent } from './layout/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './layout/recipes/recipe-edit/recipe-edit.component';
import { NgOptimizedImage } from '@angular/common';
import { RecipesService } from './layout/recipes/recipes.service';

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
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterOutlet,
    ReactiveFormsModule,
    NgOptimizedImage,
  ],
  providers: [ShoppingListService, RecipeResolverService, RecipesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
