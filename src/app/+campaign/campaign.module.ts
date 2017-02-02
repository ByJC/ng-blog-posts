import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { CampaignRoutingModule } from './campaign.routing';
import { CampaignComponent } from './campaign.component';

@NgModule({
  imports: [
    CommonModule,
    CampaignRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule.forRoot()
  ],
  declarations: [CampaignComponent]
})
export class CampaignModule { }
