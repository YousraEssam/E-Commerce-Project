import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router , private http: HttpClient, private route :ActivatedRoute) { }
  
  logged: any;
  cart: any;
  wish: any;
  products: object[];
  id: number;
  cartContent = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : [] ;
  wishListContent = JSON.parse(localStorage.getItem("wishList")) ? JSON.parse(localStorage.getItem("wishList")) : [] ;
  itemsCount: number = 0;
  wishListItemsCount: number = 0;

  public navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  public afterLogOut(path: string): void{
    localStorage.removeItem("LoggedUsers");
    window.location.replace('/');
  }

  ngOnInit() {
    this.logged = JSON.parse(localStorage.getItem('LoggedUsers'));
    this.cart = JSON.parse(localStorage.getItem('cart'));
    this.wish = JSON.parse(localStorage.getItem("wishList"));
    this.http.get('../../../assets/products_list.json')
    .subscribe(data => {
    this.products = data["productsList"];
  });
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.calculateCartItemsCount();
    this.calculateWishListItemsCount();
  }

  calculateCartItemsCount(){
    this.itemsCount = 0;
    if(this.cartContent.length){
      for ( var i=0; i<this.cartContent.length; i++){
        this.itemsCount  += this.cartContent[i].count;
      }
    }else{
      this.itemsCount = 0;
    }
    
    return this.itemsCount;
  }

  calculateWishListItemsCount(){
    this.wishListItemsCount = this.wishListContent.length;
    return this.wishListItemsCount;
  }
}
