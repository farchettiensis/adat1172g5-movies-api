import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../service/authentication.service";

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {
  model: any[] = [];

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.model = [
      {
        label: 'Home',
        items: [
          {label: 'About', icon: 'pi pi-fw pi-home', routerLink: ['/']}
        ]
      },
      {
        label: 'TMDB',
        items: [
          {label: 'Trending Movies', icon: 'pi pi-chart-line', routerLink: ['/trending-movies']},
        ]
      },
      {
        label: 'Pages',
        icon: 'pi pi-fw pi-briefcase',
        items: [
          {
            label: 'Auth',
            icon: 'pi pi-fw pi-user',
            items: [
              {
                label: 'Login',
                icon: 'pi pi-fw pi-sign-in',
                routerLink: ['/auth/login']
              },
              {
                label: 'Logout',
                icon: 'pi pi-fw pi-sign-out',
                command: () => {
                  this.logout();
                }
              },
              {
                label: 'Sign up',
                icon: 'pi pi-fw pi-book',
                routerLink: ['/auth/register']
              }
            ]
          },
        ]
      },
    ];
  }

  logout() {
    this.authenticationService.logout();
  }
}
