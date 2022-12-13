import { NgForm } from '@angular/forms';
import { CategoryRepository } from './../../../model/category.repository';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from './../../../model/category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit{

  editing:boolean=false;
  category: Category = new Category() ;

  constructor(private activatedRoute:ActivatedRoute, private categoryRepository:CategoryRepository,
              private router:Router){
                this.editing = activatedRoute.snapshot.params["mode"] == "edit";
                if(this.editing){
                    this.category = categoryRepository.getCategory(activatedRoute.snapshot.params["id"]);
                 }
              }

  ngOnInit(): void {

  }

  save(form:NgForm){
    this.categoryRepository.saveCategory(this.category);
    this.router.navigateByUrl("/admin/main/categories");

}
}
