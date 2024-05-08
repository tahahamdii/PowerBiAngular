import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Profile } from './profile.interface';
import { ProfileService } from './profile.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

  profile: any[] = []; // Assuming your profile data structure matches the response from the API

  constructor(private service: ProfileService) { }

  ngOnInit(): void {
    this.service.getData().subscribe((data: any[]) => {
      this.profile = data;
      console.log(this.profile);
    })
  }

  
}
