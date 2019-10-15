// tslint:disable: deprecation
import { Component, ChangeDetectorRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { articlesRoutesNames } from '../../articles/articles.routes.names';
import { clientsRoutesNames } from '../../clients/clients.routes.names';
import { commentairesRoutesNames } from '../../commentaires/commentaires.routes.names';
import { tagsRoutesNames } from '../../tags/tags.routes.names';
import { coreRoutesNames } from '../core.routes.names';
import { TokenStorageService } from '../auth/token-storage.service';
import { GlobalEventsManager } from 'src/app/shared/global-events-manager';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  info: any;
  isInfo = false;
  isAdmin = false;
  showNavBar: Boolean = false;
  creerArticleLink = './articles/' + articlesRoutesNames.CREER_ARTICLE;
  listeArticlesLink = './articles/' + articlesRoutesNames.LISTE_ARTICLES;
  listeCommentairesLink = './commentaires/' + commentairesRoutesNames.LISTE_COMMENTAIRES;
  validerCommentairesLink = './commentaires/' + commentairesRoutesNames.VALIDER_COMMENTAIRES;
  creerClientLink = './clients/' + clientsRoutesNames.CREER_CLIENT;
  listeClientsLink = './clients/' + clientsRoutesNames.LISTE_CLIENTS;
  listeTagsLink = './tags/' + tagsRoutesNames.LISTE_TAGS;
  connexionLink = './' + coreRoutesNames.CONNEXION;
  @ViewChild(MatSidenav) snav: MatSidenav;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private token: TokenStorageService,
    private globalEventsManager: GlobalEventsManager,
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.globalEventsManager.showNavBarEmitter.subscribe((mode) => {

      this.showNavBar = mode;
    });

  }

  logout() {
    this.token.signOut();
    this.showNavBar = false;
    this.router.navigate(['/connexion']);
    this.snav.close();
  }

  login() {
    this.info = {
      username: this.token.getUsername(),
      // authorities: this.token.getAuthorities()
    };
    if (this.info.username !== '' && this.info.username != null) {
      this.showNavBar = true;
      this.snav.open();
    } else { this.showNavBar = false; }


    // if (this.info.authorities === 'ROLE_ADMIN') {
    //   this.isAdmin = true;
    // } else { this.isAdmin = false; }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.login();
  }
}
