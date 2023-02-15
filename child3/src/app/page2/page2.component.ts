import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../services/analytics.service';

@Component({
  selector: 'child3-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor(private analyticsService: AnalyticsService) { }

  ngOnInit(): void {
    //this.analyticsService.dispatchAnalyticsStartEvent('page2');
  }

}
