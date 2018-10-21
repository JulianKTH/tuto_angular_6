import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeDetail: Recipe ;
  recipeSelected = false;
  constructor() { }

  ngOnInit() {
  }

  onRecipeReceived(recipe: Recipe) {
    console.log('in recipes.component, onRecipeReceived(), recipe = ', recipe);
    this.recipeDetail = recipe;
    this.recipeSelected = true;
  }

}
