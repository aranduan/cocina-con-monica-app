import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive], // Corregido aquí
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
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