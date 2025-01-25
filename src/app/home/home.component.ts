import { Component, OnInit } from '@angular/core';
import { DailyRecipeComponent } from '../daily-recipe/daily-recipe.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DailyRecipeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}