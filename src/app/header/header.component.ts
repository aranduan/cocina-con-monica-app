import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  appName = 'Cocina con Mónica';
  menuItems = [
    { label: 'Bienvenida', route: '/welcome' },
    { label: 'Login', route: '/login' },
    { label: 'Home', route: '/home' },
    { label: 'Recetas', route: '/recipe-list' },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
