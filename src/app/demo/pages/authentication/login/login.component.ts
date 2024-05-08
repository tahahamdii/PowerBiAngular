// angular import
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginComponent {
  constructor(private http: HttpClient, private readonly router: Router
  ) {}
  
  loginUser(email: string, password: string) {
    const user = {
      email: email,
      password: password
    };
    this.http.post<any>('http://localhost:8080/rest/auth/C', user)
    .subscribe(
      loginResponse => {
        console.log('Login successful', loginResponse);
        // Save user data to session storage
        sessionStorage.setItem('currentUser', JSON.stringify(loginResponse));
        
        // Fetch user role after successful login
        this.http.post<{ role: string }>('http://localhost:8080/rest/auth/user/role', { email: email })
    .subscribe(
        response => {
            const role = response.role;
            localStorage.setItem('userRole', role);

            console.log('User role:', role);
            // Redirect user based on role
                this.router.navigateByUrl('/default');
            
        },
        error => {
            console.error('Failed to fetch user role', error);
            // Handle error fetching role (e.g., show error message)
        }
    );

      },
      error => {
        console.error('Login failed', error);
        // Handle error (e.g., show error message)
      }
    );
  }

  
}
