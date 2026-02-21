import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-top-navbar',
  imports: [CommonModule, MatIconModule, RouterOutlet, RouterLink, RouterLinkActive, MatButtonModule, MatTooltipModule],
  templateUrl: './top-navbar.html',
  styleUrl: './top-navbar.less',
})
export class TopNavbar implements OnInit {
  workflowOpen = false;
  activeNav = '';
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
      else if (url.startsWith('/bom')) {
        this.activeNav = 'bom';
      }
      else if (url.startsWith('/stock')) {
        this.activeNav = 'stock';
      }
      else if (url.startsWith('/asset')) {
        this.activeNav = 'asset';
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

  logout(){
    this.router.navigate(['/login'])
  }
}
