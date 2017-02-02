import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', loadChildren: './+about/about.module#AboutModule' },
  { path: 'example', loadChildren: './+example/example.module#ExampleModule' },
  { path: 'example2', loadChildren: './+ex.formcontrol/ex.formcontrol.module#ExFormControlModule' },
  { path: 'campaign', loadChildren: './+campaign/campaign.module#CampaignModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
