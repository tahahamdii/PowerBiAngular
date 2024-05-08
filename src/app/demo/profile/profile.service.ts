import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Profile } from './profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private baseUrl = 'http://localhost:8080/rest/auth/user/1'

  constructor(private http: HttpClient) { }

  getData(): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${this.baseUrl}`).pipe(
      map((data: any) => data)
    );
  }
}
