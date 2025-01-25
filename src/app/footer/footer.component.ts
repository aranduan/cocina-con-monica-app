import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
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