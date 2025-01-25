import { Component, OnInit } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor, CommonModule], // Agrega NgFor y CommonModule aquí
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
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