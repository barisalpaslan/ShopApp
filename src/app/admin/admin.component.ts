import { Router } from '@angular/router';
import { AuthService } from './../model/auth.service';
import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl : "admin.component.html"
})

export class AdminComponent {

  constructor(private authService : AuthService, private router:Router){}

   logout(){
      this.authService.clear();
      this.router.navigateByUrl("/shop");
   }
}
