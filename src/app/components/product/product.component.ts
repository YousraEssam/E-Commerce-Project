import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: object[];

  constructor(private router: Router, private http: HttpClient) { }
  
  public navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  ngOnInit() {
    this.http.get('../../../assets/products_list.json')
        .subscribe(data => {
        this.products = data["productsList"];
      });
  }
  
}
