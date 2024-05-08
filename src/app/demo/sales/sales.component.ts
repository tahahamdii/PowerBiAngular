import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent {
  inputData: any[] = [];
  clusters: number[] = [];

  constructor(private http: HttpClient) {}

  addInputRow() {
    this.inputData.push({ Produit: '', 'Quantité vendu': null, Region: '' });
  }

  removeInputRow(index: number) {
    this.inputData.splice(index, 1);
  }

  analyzeSales() {
    const data = { data: this.inputData };
    this.http.post<any>('http://127.0.0.1:5000/kmeans', data).subscribe(response => {
      this.clusters = response.clusters;
    });
  }
}
