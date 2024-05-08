// Angular import
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss']
})
export class NavRightComponent {

  constructor(private readonly router : Router) { }

  logout() {
    sessionStorage.removeItem('currentUser');
    // Redirect to login page or any other desired route
    this.router.navigateByUrl('/guest/login');
  }
}
