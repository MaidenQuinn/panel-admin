import { NgModule } from '@angular/core';

import { MatPaginatorIntl, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { getFrenchPaginatorIntl } from './shared/french-paginator-intl';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');
import { LOCALE_ID } from '@angular/core';
import { AppDateAdapter, APP_DATE_FORMATS } from './shared/my-date-adapter';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { ArticlesModule } from './articles/articles.module';
import { ClientsModule } from './clients/clients.module';
import { CommentairesModule } from './commentaires/commentaires.module';

import { CoreModule } from './core/core.module';
import { TagsModule } from './tags/tags.module';
import { AuthGuard } from './core/auth/auth.guard';
import { AuthInterceptor } from './core/auth/auth-interceptor';
import { GlobalEventsManager } from './shared/global-events-manager';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    CoreModule,
    ClientsModule,
    CommentairesModule,
    ArticlesModule,
    TagsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    AuthGuard,
    GlobalEventsManager,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    { provide: MatPaginatorIntl, useValue: getFrenchPaginatorIntl() },
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
