import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { ErrorsComponent } from './components/errors/errors.component';

import {UserssearchService} from './services/userssearch.service';
import { NavbarComponent } from './components/navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ErrorsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule    
  ],
  providers: [
    UserssearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
