import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent {
  title = '¡Bienvenido a Cocina con Mónica!';
 showExtraMessage = true;
 }
