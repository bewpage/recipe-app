import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../../shared/ingredient.model';
import { ShoppingListService } from '../shoppingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  editingSubscription: Subscription;
  editMode: boolean;
  editingItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.editingSubscription =
      this.shoppingListService.startedEditing.subscribe((index: number) => {
        this.editingItemIndex = index;
        this.editMode = true;
        this.editedItem =
          this.shoppingListService.getIngredientsListByIndex(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      });
  }

  ngOnDestroy(): void {
    this.editingSubscription.unsubscribe();
  }

  resetForm(form: NgForm) {
    form.reset();
    this.editMode = false;
  }

  onClearForm() {
    this.slForm.reset();
    this.editMode = false;
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(
        this.editingItemIndex,
        newIngredient
      );
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.resetForm(form);
  }

  onDeleteItem() {
    this.shoppingListService.deleteIngredient(this.editingItemIndex);
    this.resetForm(this.slForm);
  }
}
