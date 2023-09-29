import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipeData: Recipe;
  id: number;

  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: Date) => {
      this.recipeData = data['recipe'];
    });
    this.route.params.subscribe(params => {
      this.id = Number(params['id']);
    });
  }

  onAddToShoppingList() {
    this.recipesService.addIngredientsToShoppingList(
      this.recipeData.ingredients
    );
  }

  onEditRecipe() {
    // this.router.navigate(['edit'], { relativeTo: this.route });
    // go up one lebvle and then add id and edit to the route url
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }

  deleteRecipe() {
    this.recipesService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
