import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsAdded = new EventEmitter<Ingredient[]>();
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

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsAdded.emit(this.ingredients.slice());
    // let tempIngredient: Ingredient[] = this.getIngredientsList();
    // tempIngredient.push(ingredient);
    // this.setIngredients(tempIngredient);
  }
}
