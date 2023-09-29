import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChange = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Cucumbers', 15),
    new Ingredient('Strawberries', 20),
    new Ingredient('Onions', 25),
    new Ingredient('Mushrooms', 30),
    new Ingredient('Pears', 35),
  ];

  getIngredientsList(): Ingredient[] {
    return this.ingredients.slice();
  }

  getIngredientsListByIndex(index: number): Ingredient {
    return this.ingredients[index];
  }

  setIngredients(ingredients: Ingredient[]) {
    this.ingredients = ingredients;
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChange.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    // add copy of ingredients array
    this.ingredientsChange.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChange.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChange.next(this.ingredients);
  }
}
