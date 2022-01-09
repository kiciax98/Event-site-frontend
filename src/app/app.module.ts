import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './components/card/card.component';
import { MainComponent } from './components/main/main.component';
import { DetailedCardComponent } from './components/detailed-card/detailed-card.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    WelcomeComponent,
    CardComponent,
    MainComponent,
    DetailedCardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,    
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [WelcomeComponent]
})
export class AppModule { }
