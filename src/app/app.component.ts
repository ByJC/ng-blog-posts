import { Component } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd} from '@angular/router'

import { ProgressBarService } from './progressbar/progressbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router: Router, private progressbarService: ProgressBarService) {

    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        progressbarService.show();
      }
      if (event instanceof NavigationEnd) {
        progressbarService.hide();
      }
    });
  }


}
