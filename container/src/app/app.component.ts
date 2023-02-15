import { Component } from "@angular/core";
import { AnalyticsService } from "./services/app-insight.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "container";

  constructor(private analytics: AnalyticsService) {
   // this.analytics.initializeAnalytics();

  }



}
