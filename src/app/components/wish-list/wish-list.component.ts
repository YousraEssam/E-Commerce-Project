import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  logged: any;
  wish: any;
  products: object[];
  id: number;
  wishListContent = JSON.parse(localStorage.getItem("wishList")) ? JSON.parse(localStorage.getItem("wishList")) : [];

  constructor(private router: Router, private http: HttpClient, private route :ActivatedRoute) { }

  ngOnInit() {
    this.logged = JSON.parse(localStorage.getItem('LoggedUsers'));
    this.wish = JSON.parse(localStorage.getItem('wishList'));
    this.http.get('../../../assets/products_list.json')
    .subscribe(data => {
    this.products = data["productsList"];
  });
  this.id = parseInt(this.route.snapshot.paramMap.get('id'));
  }

}
