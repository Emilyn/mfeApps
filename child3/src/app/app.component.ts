import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AnalyticsService } from './services/analytics.service';

@Component({
  selector: 'child3-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'child3';

  constructor(private analytics: AnalyticsService){
   
  console.log('child 03 app load')
  this.analytics.initializeAnalytics();
}

ngOnInit(): void {
}


}
