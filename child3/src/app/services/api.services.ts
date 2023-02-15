import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: "root",
})
export class ApiServiceService {

 
  baseURL: string = "https://60ad290a9e2d6b00174591ab.mockapi.io/api/v1/userdata";
 
  constructor(private http: HttpClient) {
  }
 
  getUsers(): Observable<any> {
    return this.http.get(this.baseURL)
  }
}
