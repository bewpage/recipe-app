import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Recipe } from '../../recipe.model';
import { Injectable } from '@angular/core';
import { RecipesService } from '../../recipes.service';
import { Observable } from 'rxjs';

@Injectable()
export class RecipeResolverService implements Resolve<Recipe> {
  constructor(private recipesService: RecipesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Recipe> | Promise<Recipe> | Recipe {
    return this.recipesService.getRecipeById(Number(route.params['id']));
  }
}
