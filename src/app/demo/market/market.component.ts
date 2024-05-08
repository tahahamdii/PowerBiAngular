import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-market',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './market.component.html',
  styleUrl: './market.component.scss'
})
export class MarketComponent {
  years: number[] = [null, null, null];
  predictions: number[] = [];

  constructor(private http: HttpClient) { }

  getPredictions() {
    const data = {
      "data": this.years.map(year => ({ "Year": year }))
                 .filter(yearObj => yearObj.Year !== null) // Filter out null values
    };
    this.http.post<any>('http://your-flask-api-url/predict', data).subscribe(response => {
      this.predictions = response.predictions;
    });
  }    
}
