import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from './recipe.model'; // Importa la interfaz

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [ // Usa la interfaz Recipe[]
    { name: 'Pastel de Chocolate', description: 'Delicioso pastel de chocolate casero' },
    { name: 'Ensalada César', description: 'Clásica ensalada César con pollo y crutones' },
    { name: 'Paella Valenciana', description: 'Auténtica paella valenciana con mariscos y pollo' }
  ];

  onRecipeClicked(recipe: Recipe) {
    // Aquí puedes implementar la lógica para navegar al detalle de la receta
    console.log('Receta clickeada:', recipe.name);
  }
}