import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExFormControlComponent } from './ex.formcontrol.component';

const routes: Routes = [
  { path: '', component: ExFormControlComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExFormControlRoutingModule { }