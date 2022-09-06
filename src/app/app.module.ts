import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { AgifyNameAgeComponent } from './agify-name-age/agify-name-age.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { CryptoComponent } from './crypto/crypto.component';
import { TvMazeComponent } from './tv-maze/tv-maze.component';
import { TvShowComponent } from './tv-maze/tv-show/tv-show.component';
import {TruncatePipe} from "./pipes/transform.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AgifyNameAgeComponent,
    CryptoComponent,
    TvMazeComponent,
    TvShowComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
