import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AngularPlugin } from "@microsoft/applicationinsights-angularplugin-js";
import {
  ApplicationInsights,
  DistributedTracingModes,
  Telemetry,
} from "@microsoft/applicationinsights-web";

@Injectable({
  providedIn: "root",
})
export class AnalyticsService {
  private appInsight: ApplicationInsights;
  constructor(private router: Router) {}

  public initializeAnalytics() {
    let angularPlugin = new AngularPlugin();

    this.appInsight = new ApplicationInsights({
      config: {
        instrumentationKey: "",
        connectionString:
          "InstrumentationKey=140d411e-f7cb-4e39-9681-9e1dad933e48;IngestionEndpoint=https://japaneast-1.in.applicationinsights.azure.com/;LiveEndpoint=https://japaneast.livediagnostics.monitor.azure.com/",
        extensions: [angularPlugin],
        extensionConfig: {
          [angularPlugin.identifier]: { router: this.router },
        },
        enableAutoRouteTracking: false,
        autoTrackPageVisitTime: false,
        distributedTracingMode: DistributedTracingModes.W3C,
        enableCorsCorrelation: true,
        enableRequestHeaderTracking: true,
        maxBatchInterval: 0,
        disableFetchTracking: false,
        disableAjaxTracking: false,
      },
    });

    this.appInsight.loadAppInsights();
    this.appInsight.trackPageView();
  }

  changeTraceParent() {
    this.appInsight.context.telemetryTrace.traceID =
      Telemetry.Util.generateW3CId();
    return this.appInsight.context.telemetryTrace.traceID;
  }
}
