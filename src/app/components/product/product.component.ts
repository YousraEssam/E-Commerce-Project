import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: object[];
  // id: number = event.target['id'];
  public count:number=0;
  constructor(private router: Router, private http: HttpClient) { }
  cartContent = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : [];
  cart = this.cartContent;

  public navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  public navigateToSinglePage(path:string):void{
    this.router.navigate(['single',event.target['id']]);
  }

  ngOnInit() {
    this.http.get('../../../assets/products_list.json')
        .subscribe(data => {
        this.products = data["productsList"];
      });
  }
  
  public addToCart(){
    var id = event.target['id'];
    var exist=false;
    console.log(id);
    var counter = {};
    console.log("fun");

    if(this.cart.length>0)
    { console.log("if");
      for ( var i=0; i<this.cart.length; i++)
      {
        if(this.cart[i]['id'] == id)
        {
          this.cart[i].count++ ;
          localStorage.setItem('cart', JSON.stringify(this.cart)) ;
          exist=true;
          console.log(this.cart)
        }
      }
      if(!exist)
      {
        counter = 
        {
          id: id,
          count: 1
        };
        this.cartContent.push(counter);
        localStorage.setItem('cart', JSON.stringify(this.cartContent));
    

      }

    }else if(this.cart.length==0)
    { console.log("else");
      counter = 
      {
        id: id,
        count: 1
      }
     this.cartContent.push(counter)
     localStorage.setItem('cart', JSON.stringify(this.cartContent))
    }
   this.getCount();
  }
  getCount(){
    this.count++;
  }  
   

}
