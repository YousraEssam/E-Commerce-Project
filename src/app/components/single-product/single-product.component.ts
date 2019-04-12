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
  public count:number=0;  
  cartContent = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : [];
  wishListContent = JSON.parse(localStorage.getItem("wishList")) ? JSON.parse(localStorage.getItem("wishList")) : [];

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

  public addToCart(){
    var id = this.id;
    var exist=false;
    var counter = {};

    if(this.cartContent.length>0){

      for (var i=0; i<this.cartContent.length; i++){
        
        if(this.cartContent[i]['id'] == id){
          this.cartContent[i].count++ ;
          localStorage.setItem('cart', JSON.stringify(this.cartContent)) ;
          exist=true;
        }
      }

      if(!exist){
        counter = {
          id: id,
          name: this.products[id-1]['name'],
          img: this.products[id-1]['img'],
          price: this.products[id-1]['priceAfterSale'],
          category: this.products[id-1]['category'],
          count: 1
        };
        this.cartContent.push(counter);
        localStorage.setItem('cart', JSON.stringify(this.cartContent));
      }

    }else if(this.cartContent.length==0){ 
      counter = {
        id: id,
        name: this.products[id-1]['name'],
        img: this.products[id-1]['img'],
        price: this.products[id-1]['priceAfterSale'],
        category: this.products[id-1]['category'],
        count: 1
      }
      this.cartContent.push(counter);
      localStorage.setItem('cart', JSON.stringify(this.cartContent));
    }
    this.getCount();
  }

  getCount(){
    this.count++;
  } 
  
  public addtoWishList(){
    var id = this.id;
    var exist=false;
    var wish = {};

    if(this.wishListContent.length>0){

      for (var i=0; i<this.wishListContent.length; i++){
  
        if(this.wishListContent[i]['id'] == id){
          alert("Item already exists in your Wish List")
          localStorage.setItem("wishList", JSON.stringify(this.wishListContent)) ;
          exist=true;
        }
      }
      if(!exist){
        wish = {
          id: id,
          name: this.products[id-1]['name'],
          img: this.products[id-1]['img'],
          price: this.products[id-1]['priceAfterSale'],
          category: this.products[id-1]['category'],
          count: 1
        };
        this.wishListContent.push(wish);
        localStorage.setItem("wishList", JSON.stringify(this.wishListContent));
      }

    }else if(this.wishListContent.length==0){ 
      wish = {
        id: id,
        name: this.products[id-1]['name'],
        img: this.products[id-1]['img'],
        price: this.products[id-1]['priceAfterSale'],
        category: this.products[id-1]['category'],
        count: 1
      }
      this.wishListContent.push(wish);
      localStorage.setItem("wishList", JSON.stringify(this.wishListContent));
    }

  }

}
