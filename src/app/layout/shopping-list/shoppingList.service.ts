import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsAdded = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Cucumbers', 15),
    new Ingredient('Strawberries', 20),
    new Ingredient('Onions', 25),
    new Ingredient('Mushrooms', 30),
    new Ingredient('Pears', 35),
  ];

  getIngredientsList() {
    return this.ingredients.slice();
  }

  setIngredients(ingredients: Ingredient[]) {
    this.ingredients = ingredients;
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsAdded.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    // add copy of ingredients array
    this.ingredientsAdded.next(this.ingredients.slice());
  }
}
