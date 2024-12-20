import { Injectable } from '@angular/core';
import { Recipe } from '../Type/interfaces';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes: Recipe[]= [
    {
      id: 1,
      name: "Salade Niçoise",
      description: "La meilleure salade",
      ingredients:[{
      id: 12,
      name: "Cheriff",
      description: " Cheriff est chaud",
      unit: gr
    }]
    },

  ]
}
