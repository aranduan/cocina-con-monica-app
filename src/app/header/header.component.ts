import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  appName = 'Cocina con Mónica';
  menuItems = [
    { label: 'Bienvenida', route: '/welcome' },
    { label: 'Login', route: '/login' },
    { label: 'Home', route: '/home' },
    { label: 'Listado de Recetas', route: '/recipe-list' },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
```