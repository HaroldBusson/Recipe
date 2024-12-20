import { Component, inject } from '@angular/core';
import { Recipe } from '../Type/interfaces';
import { RecipeServiceService } from '../service/recipe-service.service';


@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  private RecipeServiceService = inject(RecipeServiceService);
recipes: recipe[] = [];



ngOnInit(){
  this.recipes = this.RecipeServiceService
}
}
