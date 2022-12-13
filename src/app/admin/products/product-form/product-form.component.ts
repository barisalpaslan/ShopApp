import { NgForm } from '@angular/forms';
import { ProductRepository } from './../../../model/product.repository';
import { Product } from './../../../model/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  editing:boolean=false;
  product: Product = new Product() ;

  constructor(private activatedRoute:ActivatedRoute, private productRepository: ProductRepository,
               private router:Router){
    this.editing = activatedRoute.snapshot.params["mode"] == "edit";
    if(this.editing){
      this.product = productRepository.getProduct(activatedRoute.snapshot.params["id"]);
    }
  }

  ngOnInit(): void {

  }

  save(form:NgForm){
       this.productRepository.saveProduct(this.product);
       this.router.navigateByUrl("/admin/main/products");

  }


}
