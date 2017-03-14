import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NeedLoginGuard implements CanActivate {
constructor(private router:Router){

}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> |
    boolean {
      if(next.queryParams['apikey']=='123')
      {
        return true;
      }
      else
      {
        this.router.navigateByUrl('/login');
        return false;
      }
  }
}
