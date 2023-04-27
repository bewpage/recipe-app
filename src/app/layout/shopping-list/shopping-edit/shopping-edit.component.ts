import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../../shared/ingredient.model';
import { ShoppingListService } from '../shoppingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {
  }

  onAddItem() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    let itemAmountNumber;
    if (!isNaN(Number(ingredientAmount))) {
      itemAmountNumber = +ingredientAmount;
    }
    const newIngredient = new Ingredient(ingredientName, itemAmountNumber);
    this.shoppingListService.addIngredients(newIngredient);
  }
}
