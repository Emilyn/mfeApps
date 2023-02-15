import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "header",
    children: [
      {
        path: "**",
        loadChildren: () =>
          import("./spa-host/spa-host.module").then((m) => m.SpaHostModule),
         data: { app: "headermfe" },
      },
    ],
  },
  {
    path: "domain",
    children: [
      {
        path: "**",
        loadChildren: () =>
          import("./spa-host/spa-host.module").then((m) => m.SpaHostModule),
        data: { app: "domainmfe" },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: "/shell",
    },
  ],
})
export class AppRoutingModule {}
