import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check if user is logged in by inspecting sessionStorage
    const currentUser = sessionStorage.getItem('currentUser');
    if (currentUser) {
      // User is logged in, redirect to default route
      this.router.navigateByUrl('/default');
      return false; // Prevent access to the login page
    }
    // User is not logged in, allow access to the login page
    return true;
  }
}
