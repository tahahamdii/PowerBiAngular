import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrl: './market.component.scss'
})
export class MarketComponent implements OnInit {
  marketForm: FormGroup;
  predictions: number[] = [];

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.marketForm = this.formBuilder.group({
      year1: [null, Validators.required],
      year2: [null, Validators.required],
      year3: [null, Validators.required]
    });
  }

  getPredictions() {
    if (this.marketForm.valid) {
      const years = [
        this.marketForm.get('year1').value,
        this.marketForm.get('year2').value,
        this.marketForm.get('year3').value
      ];
      const data = {
        "data": years.map(year => ({ "Year": year }))
      };
      this.http.post<any>('http://127.0.0.1:5000/predict', data).subscribe(response => {
        console.log(data)
        console.log(response)
        this.predictions = response.predictions;
      });
    }
  }
}