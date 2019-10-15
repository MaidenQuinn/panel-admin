import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { GlobalEventsManager } from '../../shared/global-events-manager';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  isLoginFailed = false;
  // roles: string[] = [];
  loading = false;
  public formConnect: FormGroup = this.fb.group(
    {
      username: [null, Validators.required],
      password: [null, Validators.required]
    }
  );

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private fb: FormBuilder,
    private globalEventsManager: GlobalEventsManager
  ) { }

  submitFormulaireConnexion() {
    this.loading = true;
    this.authService.attemptAuth(this.formConnect.value).subscribe(
      (data: HttpResponse<Response>) => {
        this.tokenStorage.saveToken(data.headers.get('Authorization'));
        this.tokenStorage.saveUsername(this.formConnect.value.username);
        this.isLoginFailed = false;
        // this.tokenStorage.saveAuthorities(data.authorities);
        // this.roles = this.tokenStorage.getAuthorities();
        // if (this.roles[0] === 'ROLE_ADMIN') { this.router.navigate(['../articles/liste-articles']); }

        this.globalEventsManager.showNavBar(true);
        this.router.navigate(['/articles/liste-articles']);
      },
      error => {
        this.isLoginFailed = true;
        this.loading = false;
      }
    );

  }

  ngOnInit() {
  }
}
