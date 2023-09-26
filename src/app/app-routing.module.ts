import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './layout/recipes/recipes.component';
import { ShoppingListComponent } from './layout/shopping-list/shopping-list.component';
import { RoutesURL } from '../routesURL';
import { RecipeDetailComponent } from './layout/recipes/recipe-detail/recipe-detail.component';
import { RecipeResolverService } from './layout/recipes/recipe-list/recipe-item/recipe-resolver.service';
import { RecipeStartComponent } from './layout/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './layout/recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: `${RoutesURL.RECIPES}`, pathMatch: 'full' },
  {
    path: `${RoutesURL.RECIPES}`,
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent, pathMatch: 'full' },
      { path: 'new', component: RecipeEditComponent, pathMatch: 'full' },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: { recipe: RecipeResolverService },
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: { recipe: RecipeResolverService },
      },
    ],
  },
  { path: `${RoutesURL.SHOPPING_LIST}`, component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
