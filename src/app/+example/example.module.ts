import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { ExampleRoutingModule } from './example.routing';
import { ExampleComponent }   from './example.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExampleRoutingModule,
    MaterialModule.forRoot()
  ],
  exports: [],
  declarations: [ExampleComponent],
  providers: [],
})
export class ExampleModule { }
