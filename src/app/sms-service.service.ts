import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SmsServiceService {

  constructor(private httpClient: HttpClient) { }


  public getSmsDetail(body: any = {}): Observable<any> {
   
      return this.httpClient.get<any[]>("http://localhost:8081/getDetails")
    
}

}