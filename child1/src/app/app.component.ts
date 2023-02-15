import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AnalyticsService } from './services/analytics.service';

@Component({
  selector: 'child1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'child1';

  constructor(private analytics: AnalyticsService){

}
  ngOnInit(): void {
    console.log('child 01 app load')
    this.analytics.initializeAnalytics();
  }


}
