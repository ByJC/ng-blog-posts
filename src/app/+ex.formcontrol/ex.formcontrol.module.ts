import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { ExFormControlRoutingModule } from './ex.formcontrol.routing';
import { ExFormControlComponent }   from './ex.formcontrol.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExFormControlRoutingModule,
    MaterialModule.forRoot()
  ],
  exports: [],
  declarations: [ExFormControlComponent],
  providers: [],
})
export class ExFormControlModule { }
