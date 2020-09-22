import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private slService: ShoppingListService) {
  }

  ngOnInit(): void {
  }

  onAddToShoppingList(): void {
    this.recipe.ingredients.forEach((ingredient) => this.slService.addIngredient(ingredient));
  }
}
