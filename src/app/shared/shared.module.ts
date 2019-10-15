import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { BypassHtmlSecurity } from './bypass-html-security';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [
    AlertComponent,
    BypassHtmlSecurity
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    AngularEditorModule,
    FormsModule,
    RouterModule,
    ColorPickerModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    AngularEditorModule,
    RouterModule,
    AlertComponent,
    ColorPickerModule,
    BypassHtmlSecurity
  ]
})
export class SharedModule { }
