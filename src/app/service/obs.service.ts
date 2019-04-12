import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObsService {

  cartCounter : BehaviorSubject <any> = new BehaviorSubject('')
  wishListCounter : BehaviorSubject <any> = new BehaviorSubject('')

  constructor() { 
    this.cartCounter.next(this.getCartCount())
  }

  getCartCount (){
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    let counter = 0;
    for(var i=0; i<cart.length; i++){
      counter = counter + cart[i].count;
    }
    return counter;
  }

  getCartObs() {
    return this.cartCounter.asObservable();
  }

  getWishCount (){
    let wish = JSON.parse(localStorage.getItem('wishList')) || []
    return wish.length
  }

  getWishObs() {
    return this.wishListCounter.asObservable();
  }
}
