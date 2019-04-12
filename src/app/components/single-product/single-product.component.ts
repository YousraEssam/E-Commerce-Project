import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  products:any=[];
  id: number;

  constructor(private router: Router, private http: HttpClient,private route :ActivatedRoute) { }

  public navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  ngOnInit() {
    this.http.get('../../../assets/products_list.json')
    .subscribe(data => {
   this.products = data["productsList"];
    this.id = parseInt(this.route.snapshot.paramMap.get('id'))
  });
  }

}
