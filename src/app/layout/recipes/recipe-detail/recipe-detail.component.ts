import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input() recipeData: Recipe;

  constructor(private recipesService: RecipesService) {}

  onAddToShoppingList() {
    console.log('onAddToShoppingList');
    this.recipesService.addIngredientsToShoppingList(
      this.recipeData.ingredients
    );
  }
}
