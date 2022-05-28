import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialLib } from './material-lib';
import { AngularDraggableModule } from 'angular2-draggable';
import { AppPopupComponent } from './components/app-popup/app-popup.component';
import { AlertEditComponent } from './components/alert-edit/alert-edit.component';
import { FormsModule } from '@angular/forms';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LayoutComponent } from './components/layout/layout.component';
import { IoniconComponent } from './components/ionicon/ionicon.component';

@NgModule({
  declarations: [AppComponent, AppPopupComponent,

    AlertEditComponent, SideNavComponent, LayoutComponent, IoniconComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialLib,
    AngularDraggableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
