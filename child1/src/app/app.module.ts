import { BrowserModule } from "@angular/platform-browser";
import { APP_INITIALIZER, NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmptyRouteComponent } from "./empty-route/empty-route.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { InterceptorService } from "./services/Interceptor.service";
import { AnalyticsService } from "./services/analytics.service";
import { CommonInputModule } from "src/app/core-components/common-input/common-input.module";
import { CommonButtonModule } from "./core-components/common-button/common-button.module";
import { Page2Component } from "./page2/page2.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToDoComponent } from './core-components/to-do/to-do.component';
import { StoreModule } from "@ngrx/store";
import { ToDoReducer } from "./core-components/to-do/store/todo.reducers";
import { Page1Component } from "./page1/page1.component";

@NgModule({
  declarations: [AppComponent, EmptyRouteComponent, Page2Component, ToDoComponent, Page1Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonInputModule,
    CommonButtonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
