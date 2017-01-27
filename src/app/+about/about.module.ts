import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { AboutRoutingModule } from './about.routing';
import { AboutComponent }   from './about.component';

@NgModule({
  imports: [
    AboutRoutingModule,
    MaterialModule.forRoot()
  ],
  exports: [],
  declarations: [AboutComponent],
  providers: [],
})
export class AboutModule { }
