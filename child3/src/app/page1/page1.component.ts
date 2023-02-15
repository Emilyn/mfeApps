import { Component, OnInit } from "@angular/core";
import { AnalyticsService } from "../services/analytics.service";
import { ApiServiceService } from "../services/api.services";

declare global {
  interface Window {
    gtag: any;
  }
}

@Component({
  selector: "child3-page1",
  templateUrl: "./page1.component.html",
  styleUrls: ["./page1.component.css"],
})
export class Page1Component implements OnInit {
  ga: any;
  constructor(private apiServiceService:ApiServiceService, private analyticsService: AnalyticsService) {}

  ngOnInit() {
   
   // this.analyticsService.dispatchAnalyticsStartEvent('page01');
   // this.analyticsService.dispatchAnalyticsEndEvent('page01');

  }

  clicked() {
    this.apiServiceService.getUsers().subscribe();
    window.gtag("event", "screen_view", {
      app_name: "myAppName",
      screen_name: "Home",
    });
  }
}
