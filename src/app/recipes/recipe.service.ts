import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Pizza Royale', 'Une délicieuse pizza', 'https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2018.2F07.2F30.2F509a5313-6545-4cb1-ad93-af5895dd35b6.2Ejpeg/748x372/quality/80/crop-from/center/pizza-royale.jpeg'),
    new Recipe('Tagliatelle Carbonara', 'Une recette authentique', 'https://recettescookeo.com/wp-content/uploads/2016/03/Tagliatelles-carbonara.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
