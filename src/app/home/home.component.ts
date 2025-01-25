import { Component, OnInit } from '@angular/core';
import { DailyRecipeComponent } from '../daily-recipe/daily-recipe.component';
import { NewsFeedComponent } from '../news-feed/news-feed.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DailyRecipeComponent, NewsFeedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
```
*    Se añade el `import { NewsFeedComponent } from '../news-feed/news-feed.component';`
*    Se añade el componente `NewsFeedComponent` en el array de `imports`.

7.  **Usar el componente en `src/app/home/home.component.html`:**

```html
  <h2>Página de inicio</h2>
  <app-daily-recipe></app-daily-recipe>
  <app-news-feed></app-news-feed>
```

**Componente 4: `footer`**

1.  **Elimina la carpeta `src/app/footer` si existe.**
2.  **Crea el componente `footer`:**

```bash
ng generate component footer
```
  Asegúrate de responder "n" a la pregunta "¿Use inline template?" y "¿Use inline styles?".
3.  **Modifica `src/app/footer/footer.component.ts`:**

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
}
```

4.  **Modifica `src/app/footer/footer.component.html`:**

```html
<footer class="footer">
  <nav class="navbar fixed-bottom navbar-light bg-light">
    <div class="container-fluid justify-content-center">
        <div class="d-flex">
            <button type="button" class="btn btn-link">
                 <img src="assets/img/home-icon.png" alt="home icon" height="30">
             </button>
             <button type="button" class="btn btn-link">
                <img src="assets/img/heart-icon.png" alt="heart icon" height="30">
             </button>
             <button type="button" class="btn btn-link">
                 <img src="assets/img/chef-icon.png" alt="chef icon" height="30">
            </button>
             <button type="button" class="btn btn-link">
               <img src="assets/img/community-icon.png" alt="community icon" height="30">
            </button>
             <button type="button" class="btn btn-link">
                 <img src="assets/img/profile-icon.png" alt="profile icon" height="30">
            </button>
        </div>
    </div>
  </nav>
</footer>
```

*  HTML del footer con rutas estáticas.

5.  **Modifica `src/app/footer/footer.component.css` (Opcional):**
 ```css
 .footer{
   position: relative;
 }