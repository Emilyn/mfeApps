import { Injectable, isDevMode } from "@angular/core";
import { mountRootParcel, Parcel, ParcelConfig } from "single-spa";
import { Observable, from } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "../environments/environment";
import { AppConfigService } from "./app-config.service";

@Injectable({
  providedIn: "root",
})
export class SingleSpaService {
  constructor(private appConfigService: AppConfigService) {}

  private loadedParcels: {
    [appName: string]: Parcel;
  } = {};

  mount(appName: string, domElement: HTMLElement): Observable<unknown> {
    let appURL: string;
    if (!isDevMode()) {
      appURL = location.origin + this.appConfigService.get().appUrlMap[appName];
    } else {
      appURL = this.appConfigService.get().appUrlMap[appName];
    }
    return from(System.import<ParcelConfig>(appURL)).pipe(
      tap((app: ParcelConfig) => {
        this.loadedParcels[appName] = mountRootParcel(app, {
          domElement,
        });
      })
    );
  }

  unmount(appName: string): Observable<unknown> {
    return from(this.loadedParcels[appName].unmount()).pipe(
      tap(() => delete this.loadedParcels[appName])
    );
  }
}
