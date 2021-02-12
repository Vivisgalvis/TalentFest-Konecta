import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
  
  constructor(private router: Router, private loginService: LoginService ) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLogged = localStorage.getItem('login')
    console.log(isLogged, state.url)
    if(state.url === '/home' && isLogged === 'true' ) {
      return true
    } else if (state.url === '/home' && isLogged === null ) {
      this.router.navigate(['/'])
      return false
    } else if (state.url === '/' && isLogged === 'true' ) {
      this.router.navigate(['/home'])
      return false
    } else if(state.url === '/' && isLogged === null) {
      return true
    }
  }
}
