import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ConnexionComponent } from './connexion/connexion.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ConnexionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    NavbarComponent,
  ],
  providers: []
})
export class CoreModule { }
