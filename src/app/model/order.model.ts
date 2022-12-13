import { Cart } from 'src/app/model/cart.model';
import { Injectable } from "@angular/core";

@Injectable()
export class Order {
  public id:number;
  public name:string;
  public address:string;
  public city: string;
  public phone: string;
  public mail:string;

  public isSent:boolean = false;

  constructor(public cart:Cart){}

  clearOrder(){
    this.id = null;
    this.name = this.address = this.city = this.phone = this.mail=null;
    this.isSent =false;
    this.cart.clear();
  }

}
