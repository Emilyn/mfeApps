import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteReuseStrategy } from '@angular/router';
import { MicroFrontendRouteReuseStrategy } from 'src/services/route-reuse-strategy';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppConfigService } from 'src/services/app-config.service';
import { ApplicationinsightsAngularpluginErrorService } from '@microsoft/applicationinsights-angularplugin-js';
import { InterceptorService } from './interceptors/Interceptor.service';
const appInitializerFn = (appConfigService: AppConfigService) => {
  return () => {
    return appConfigService.set();
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AppConfigService,
    {
    provide: RouteReuseStrategy,
    useClass: MicroFrontendRouteReuseStrategy,
  },
  {
    provide: APP_INITIALIZER, useFactory: appInitializerFn, deps:[AppConfigService], multi: true
  },
  // { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  // {
  //   provide: ErrorHandler,
  //   useClass: ApplicationinsightsAngularpluginErrorService
  // },

],
  bootstrap: [AppComponent]
})
export class AppModule { }
