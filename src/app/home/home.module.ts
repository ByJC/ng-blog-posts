import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';


import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';


@NgModule({
  imports: [
    HomeRoutingModule,
    MaterialModule.forRoot()
  ],
  exports: [],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule { }
