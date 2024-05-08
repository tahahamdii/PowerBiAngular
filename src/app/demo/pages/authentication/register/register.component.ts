// angular import
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export default class RegisterComponent {
  constructor(private http : HttpClient, private readonly router: Router) {}

  registerUser(firstName: string, lastName: string, email: string, password: string, role: string) {
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      role : role  // Assuming a default role for new users
    };
    this.http.post('http://localhost:8080/rest/auth/register', user)
    .subscribe(
      response => {
        console.log('Registration successful', response);
        // Handle success (e.g., show success message)
        this.router.navigateByUrl('/guest/login');
      },
      error => {
        console.error('Registration failed', error);
        // Handle error (e.g., show error message)
      }
    );
}
}
