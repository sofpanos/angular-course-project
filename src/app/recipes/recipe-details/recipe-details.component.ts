import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {ActivatedRoute} from '@angular/router';
import {RecipesService} from '../recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: Recipe;

  constructor(private slService: ShoppingListService, private route: ActivatedRoute, private recipesService: RecipesService) {
  }

  ngOnInit(): void {
    this.recipe = this.recipesService.getRecipeByID(+this.route.snapshot.params.id);
    this.route.params.subscribe(params => {
      this.recipe = this.recipesService.getRecipeByID(+params.id);
    });
  }

  onAddToShoppingList(): void {
    this.recipe.ingredients.forEach((ingredient) => this.slService.addIngredient(ingredient));
  }
}
