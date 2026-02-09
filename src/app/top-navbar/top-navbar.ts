import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-top-navbar',
  imports: [CommonModule, MatIconModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './top-navbar.html',
  styleUrl: './top-navbar.less',
})
export class TopNavbar implements OnInit {
  workflowOpen = false;
  activeNav = 'dashboard';
  constructor(private router: Router) {

  }

  ngOnInit() {
   this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      const url = event.urlAfterRedirects;

      if (url === '/dashboard') {
        this.activeNav = 'dashboard';
      } 
      else if (url.startsWith('/mis')) {
        this.activeNav = 'mis';
        this.workflowOpen = true;
      } 
      else if (url.startsWith('/configuration')) {
        this.activeNav = 'configuration';
      }
    });
  }
  setActive(nav: string) {
    this.activeNav = nav;
  }

  toggleWorkflow() {
    this.workflowOpen = !this.workflowOpen;
  }
}
