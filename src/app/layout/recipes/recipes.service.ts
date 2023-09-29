import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppingList.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipesChanged = new Subject<Recipe[]>();
  private recipeList: Recipe[] = [
    new Recipe(
      'Chicken Breast',
      'Chicken breasts are the most popular food in the world.',
      'https://placehold.jp/3d4070/ffffff/150x150.png?text=recipe_01',
      [
        new Ingredient('Chicken Breast', 1),
        new Ingredient('Lemon', 1),
        new Ingredient('Olive Oil', 1),
        new Ingredient('Garlic', 1),
        new Ingredient('Salt', 1),
        new Ingredient('Pepper', 1),
      ]
    ),
    new Recipe(
      'Creamy Chicken Pasta',
      'Creamy chicken pasta with mushrooms in a creamy sauce.',
      'https://placehold.jp/3d4070/ffffff/150x150.png?text=recipe_02',
      [
        new Ingredient('Chicken Breast', 1),
        new Ingredient('Pasta', 1),
        new Ingredient('Mushrooms', 1),
        new Ingredient('Cream', 1),
        new Ingredient('Garlic', 1),
        new Ingredient('Salt', 1),
        new Ingredient('Pepper', 1),
      ]
    ),
    new Recipe(
      'Chicken Parmesan',
      'Chicken Parmesan is a classic Italian-American dish.',
      'https://placehold.jp/3d4070/ffffff/150x150.png?text=recipe_03',
      [
        new Ingredient('Chicken Breast', 1),
        new Ingredient('Tomato Sauce', 1),
        new Ingredient('Mozzarella', 1),
        new Ingredient('Parmesan', 1),
        new Ingredient('Basil', 1),
        new Ingredient('Salt', 1),
        new Ingredient('Pepper', 1),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipeList() {
    return this.recipeList.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipeById(id: number) {
    return this.recipeList.slice()[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipeList.push(recipe);
    this.recipesChanged.next(this.recipeList.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipeList[index] = newRecipe;
    this.recipesChanged.next(this.recipeList.slice());
  }

  deleteRecipe(index: number) {
    this.recipeList.splice(index, 1);
    this.recipesChanged.next(this.recipeList.slice());
  }
}
