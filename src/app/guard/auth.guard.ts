import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(sessionStorage.getItem('user')){
      return true;
    }
      
      Swal.fire({
        icon: 'error',
        title: 'Error...',
        text: 'You need to login to do that!!',

      })
      this.router.navigate(['/login']);
      return false;
  }

  isLoggedIn(){
    localStorage.setItem('id', "3456");
  }
  
}
