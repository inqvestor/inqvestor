import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialLib } from './material-lib';
import { AngularDraggableModule } from 'angular2-draggable';
import { AppPopupComponent } from './components/app-popup/app-popup.component';
import { AlertEditComponent } from './components/alert-edit/alert-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AppPopupComponent,
    AlertEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialLib,
    AngularDraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
