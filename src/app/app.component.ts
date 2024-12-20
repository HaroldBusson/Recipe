import { Component, inject } from '@angular/core';
import { RecipeServiceService } from './service/recipe-service.service';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RecipeListComponent, RecipeServiceService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Recipe';
recipes: any;
ingredients: any;
}
