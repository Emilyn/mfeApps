import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AppConfigService {
  private appConfig: any;
  constructor(private httpClient: HttpClient) {}

  async set(): Promise<any> {
    const config = await this.httpClient
      .get<any>("./assets/configs/app-config.json")
      .toPromise();
    return (this.appConfig = config);
  }

  get(): any {
    return this.appConfig;
  }
}
