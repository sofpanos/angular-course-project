import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipesService} from './recipes.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit, OnDestroy {

  recipeSelectedSubscription: Subscription;
  selectedRecipe: Recipe;

  constructor(private recipesService: RecipesService) {
  }

  ngOnInit(): void {
    this.recipeSelectedSubscription = this.recipesService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }

  ngOnDestroy(): void {
    this.recipeSelectedSubscription.unsubscribe();
  }


  onRecipeSelected(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }
}
