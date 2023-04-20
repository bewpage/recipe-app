import { Component } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Cucumbers', 15),
    new Ingredient('Strawberries', 20),
    new Ingredient('Onions', 25),
    new Ingredient('Mushrooms', 30),
    new Ingredient('Pears', 35),
  ];
}
