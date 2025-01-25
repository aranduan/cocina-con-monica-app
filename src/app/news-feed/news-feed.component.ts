@Component({
  selector: 'app-news-feed',
  standalone: true,
  imports: [CommonModule], // Corregido aquí
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
  ```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule], // Corregido aquí
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
    footerItems = [
      { icon: 'assets/img/home-icon.png', route: '/home', alt: "home icon"},
      { icon: 'assets/img/heart-icon.png', route: '/favorites', alt: "heart icon" },
      { icon: 'assets/img/chef-icon.png', route: '/recipes', alt: "chef icon" },
      { icon: 'assets/img/community-icon.png', route: '/community', alt: "community icon" },
      { icon: 'assets/img/profile-icon.png', route: '/profile', alt: "profile icon" },
    ];
  constructor() { }

  ngOnInit(): void {
  }
}
```

*   `CommonModule`: Este módulo proporciona las directivas comunes como `*ngFor`.