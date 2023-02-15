import { BrowserModule } from "@angular/platform-browser";
import { APP_INITIALIZER, NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmptyRouteComponent } from "./empty-route/empty-route.component";
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient,
} from "@angular/common/http";
import { InterceptorService } from "./services/Interceptor.service";
import { Page1Component } from "./page1/page1.component";
import { Page2Component } from "./page2/page2.component";
import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import { Observable } from "rxjs";
import { AnalyticsService } from "./services/analytics.service";

@NgModule({
  declarations: [AppComponent, EmptyRouteComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
