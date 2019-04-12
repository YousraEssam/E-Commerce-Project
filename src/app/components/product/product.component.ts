import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ObsService } from 'src/app/service/obs.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: object[];
  count: number=0; 

  cartCounter: BehaviorSubject<any> = new BehaviorSubject('');
  wishListCounter: BehaviorSubject<any> = new BehaviorSubject('');

  cartContent = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : [];
  wishListContent = JSON.parse(localStorage.getItem("wishList")) ? JSON.parse(localStorage.getItem("wishList")) : [];

  constructor(private router: Router, private http: HttpClient,  private obs : ObsService) { }

  public navigateToSinglePage(path:string):void{
    this.router.navigate(['single',event.target['id']]);
  }

  ngOnInit() {
    this.http.get('../../../assets/products_list.json')
        .subscribe(data => {
        this.products = data["productsList"];
      });
  }
  
  addToCart(){
    var id = event.target['id'];
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
    this.obs.cartCounter.next(this.count);
  } 

  getCartCounter(){
    return this.cartCounter.asObservable();
  }

  addtoWishList(){
    var id = event.target['id'];
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
    // this.getWishListCount();
  }

  // getWishListCount(){
  //   // this.count = this.wishListContent.length;
  //   this.obs.wishListCounter.next(this.wishListContent.length);
  // } 

  // getWishListCounter(){
  //   return this.wishListCounter.asObservable();
  // }

}
