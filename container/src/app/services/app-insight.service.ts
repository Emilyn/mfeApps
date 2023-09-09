import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularPlugin } from '@microsoft/applicationinsights-angularplugin-js';
import { ApplicationInsights, DistributedTracingModes } from '@microsoft/applicationinsights-web';


@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private appInsight:ApplicationInsights;
  constructor(private router: Router) {
  }

  public initializeAnalytics(){
    let angularPlugin = new AngularPlugin();

     this.appInsight = new ApplicationInsights({
      config: {
        instrumentationKey:'',
        connectionString:
          "InstrumentationKey=140d411e-f7cb-4e39-9681-9e1dad933e48;IngestionEndpoint=https://japaneast-1.in.applicationinsights.azure.com/;LiveEndpoint=https://japaneast.livediagnostics.monitor.azure.com/",
        extensions: [angularPlugin],
        extensionConfig: {
          [angularPlugin.identifier]: { router: this.router },
        },
        enableAutoRouteTracking: false,
       // autoTrackPageVisitTime: true,
       distributedTracingMode: DistributedTracingModes.W3C,
       enableCorsCorrelation: true,
       enableRequestHeaderTracking: true,

      },
    });

    this.appInsight.loadAppInsights();
    console.log('app insight initit: ',this.appInsight?.core.isInitialized())
    this.appInsight.trackPageView();
    // this.appInsight.flush();
    // this.appInsight.updateSnippetDefinitions(this.appInsight.snippet)


  }

}
