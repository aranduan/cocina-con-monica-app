import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-recipe',
  standalone: true,
  imports: [],
  templateUrl: './daily-recipe.component.html',
  styleUrl: './daily-recipe.component.scss'
})
export class DailyRecipeComponent implements OnInit {
  recipe = {
    title: 'Festín de salchichas en honor del tío feo desnudo',
    description: 'Preparad bastantes salchichas para un batallón y ofreced tres guarniciones distintas para daros un festín.',
    image: 'assets/img/sausage-fest.png', // Ruta a la imagen (sustitúyela por tu ruta)
    buttonText: 'Continuar',
  };

  constructor() { }

  ngOnInit(): void {
  }
}
