import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TokenStorageService } from '../auth/token-storage.service';

@Injectable()
export class AuthGuard implements CanActivate {
    info: any;

    constructor(
        private router: Router,
        private tokenService: TokenStorageService
    ) { }

    isLogged() {
        this.info = {
            username: this.tokenService.getUsername(),
            token: this.tokenService.getToken(),
            // authorities: this.tokenService.getAuthorities()
        };
        if (this.info.token !== null && this.info.username !== null) {
            return true;
        }
        return false;


    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.isLogged() === true) {
            // logged in so return true
            return true;
        } else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/connexion']);
        }

    }

}
