import {Route, RouterModule} from '@angular/router';
import {RecipesComponent} from '../app/recipes/recipes.component';
import {ShoppingListComponent} from '../app/shopping-list/shopping-list.component';
import {NgModule} from '@angular/core';
import {RecipeStartComponent} from '../app/recipes/recipe-start/recipe-start.component';
import {RecipeEditComponent} from '../app/recipes/recipe-edit/recipe-edit.component';
import {RecipeDetailsComponent} from '../app/recipes/recipe-details/recipe-details.component';


const AppRoutes: Route[] = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent, pathMatch: 'full'},
      {path: 'add', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailsComponent},
      {path: ':id/edit', component: RecipeEditComponent}
    ]},
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
