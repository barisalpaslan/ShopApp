import { AuthService } from './../model/auth.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from "@angular/core";


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router:Router, private authService:AuthService){}

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){

    if(!this.authService.authenticated){
      this.router.navigateByUrl("/admin/auth");
      return false;
    }
    return true;
  }


}
