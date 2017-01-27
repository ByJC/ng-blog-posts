import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing'; 

import { HomeModule } from './home/home.module';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { ProgressBarService } from './progressbar/progressbar.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    HomeModule,
    MaterialModule.forRoot()
  ],
  declarations: [AppComponent, ProgressbarComponent],
  providers: [ProgressBarService],
  bootstrap: [AppComponent],
})
export class AppModule { }
