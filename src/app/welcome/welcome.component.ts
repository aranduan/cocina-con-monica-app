import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-welcome',
  imports: [HeaderComponent, NgIf],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
 })
export class WelcomeComponent {
  title = '¡Bienvenido a Cocina con Mónica!';
  showExtraMessage = true;
}