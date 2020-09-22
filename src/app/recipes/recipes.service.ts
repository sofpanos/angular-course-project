import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

@Injectable()
export class RecipesService {

  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Burger',
      'This is simply a test',
      '/assets/burger.jpg',
      [
        new Ingredient('bread', 2),
        new Ingredient('burger', 1)
      ]),
    new Recipe('Schnitzel',
      'This is simply another test',
      '/assets/schnitzel.jpg',
      [
        new Ingredient('meat', 1),
        new Ingredient('pommes', 1),
        new Ingredient('Eggs', 1)
      ]
    )
  ];

  constructor() {
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
