import { Injectable } from '@angular/core';
import { RecipeServiceService } from '../Type'
import { recipe } from '../Type/interfaces';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  recipe:Recipe[]= [
    {
      id:1,
      name: "Soupe aux oignons",
      quantity: 200,
      unit: "cl",
    },
    {
      id: 2,
      name: "Ile flottante",
      quantity: 500,
      unit: "cl"
    }
  ]

}


tableau d'objet d'ingredients
