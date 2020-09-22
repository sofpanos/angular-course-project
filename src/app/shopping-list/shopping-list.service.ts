import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientAdded = new EventEmitter<Ingredient>();
  private igredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() {
  }

  getIngredients(): Ingredient[] {
    return this.igredients.slice();
  }

  addIngredient(newIngredient: Ingredient): void {
    this.igredients.push(newIngredient);
    this.ingredientAdded.emit(newIngredient);
  }
}
