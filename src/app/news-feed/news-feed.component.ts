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

```typescript
import { Component, OnInit } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
@Component({
  selector: 'app-news-feed',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './news-feed.component.html',
  styleUrl: './news-feed.component.scss'
})
export class NewsFeedComponent implements OnInit {
  newsItems = [
    {
      title: '¡El mejor para esta Navidad!',
      text: 'Estas recetas, más tradicionales, son las que Monica pretende llevar a la mesa, aunque las cosas no salgan siempre como las ha planeado',
      image: 'assets/img/christmas-turkey.png',
    },
    {
      title: 'Nueva receta para San Valentín',
      text: 'Nuestra nueva receta enamorará a cualquiera, descubre la receta y enamora con la cocina',
      image: 'assets/img/valentines-recipe.png',
    },
    {
      title: 'Recetas de Halloween',
      text: '¿Truco o trato? Con nuestras recetas de halloween no habrá quien se resista a probarlas',
      image: 'assets/img/halloween-recipe.png',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
```