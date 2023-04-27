import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipeDetails = new EventEmitter<Recipe>();
  private recipeList: Recipe[] = [
    new Recipe(
      'Chicken Breast',
      'Chicken breasts are the most popular food in the world.',
      'https://placehold.jp/3d4070/ffffff/150x150.png?text=recipe_01'
    ),
    new Recipe(
      'Creamy Chicken Pasta',
      'Creamy chicken pasta with mushrooms in a creamy sauce.',
      'https://placehold.jp/3d4070/ffffff/150x150.png?text=recipe_02'
    ),
    new Recipe(
      'Chicken Parmesan',
      'Chicken Parmesan is a classic Italian-American dish.',
      'https://placehold.jp/3d4070/ffffff/150x150.png?text=recipe_03'
    ),
  ];

  getRecipeList() {
    return this.recipeList.slice();
  }
}
