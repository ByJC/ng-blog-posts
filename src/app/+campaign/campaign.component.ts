import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Campaign } from './campaign.interface';

@Component({
  selector: 'campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  campaign;

  constructor() {
    
   }

  ngOnInit() {
    this.campaign = new FormGroup({
      name: new FormControl('Test Campaign', [Validators.required, Validators.minLength(3)]),
      content : new FormGroup({
        url: new FormControl('http://www.test.com' ),
        price: new FormControl(2)
      })
    });
  }

  onSubmit({value, valid}: {value: Campaign, valid: boolean}) {
    console.log(value, valid);
  }

  onSubmitInternal() {
    console.log(this.campaign.value, this.campaign.valid);
  }

}
