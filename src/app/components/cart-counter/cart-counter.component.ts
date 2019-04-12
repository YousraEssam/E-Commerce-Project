import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart-counter',
  templateUrl: './cart-counter.component.html',
  styleUrls: ['./cart-counter.component.scss']
})
export class CartCounterComponent implements OnInit {
  constructor(private router: Router , private http: HttpClient, private route :ActivatedRoute) { }
  
  logged: any;
  cart: any;
  products: object[];
  id: number;
  cartContent = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : [];
  itemsCount: number = 0;
  totalPrice: number = 0;
  total: number = 0;
  itemToBeDeleted: any;
  
  ngOnInit() {
    this.logged = JSON.parse(localStorage.getItem('LoggedUsers'));
    this.cart = JSON.parse(localStorage.getItem('cart'));
    this.http.get('../../../assets/products_list.json')
    .subscribe(data => {
    this.products = data["productsList"];
  });
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.calculateItemsCount();
    this.calculateTotalPrice();
    this.calculateOverallTotal();
  }

  calculateItemsCount(){
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

  calculateTotalPrice(){
    this.totalPrice = 0;
    if(this.cartContent.length){
      for ( var i=0; i<this.cartContent.length; i++){
        this.totalPrice  += parseInt(this.cartContent[i].price);
      }
    }else{
      this.totalPrice = 0;
    }
    
    return this.totalPrice;
  }

  calculateOverallTotal(){
    this.total = this.totalPrice + 60.00;
    return this.total;
  }

  deleteItem(){
    var id = event.target['id'];
    var itemToBeDeleted = this.cartContent.map(itemToBeDeleted => itemToBeDeleted.id);
    let index = itemToBeDeleted.findIndex(id => id == id);
    console.log(index);
    this.cartContent = this.cartContent.splice(index,1);
    this.cartContent.push(this.cartContent);
  }

}
