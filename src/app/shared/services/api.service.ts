import { Injectable } from '@angular/core';
import { ConfigService } from "./config.service";
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public token: string;
  public tokenReady = false;

  constructor(private config:ConfigService, private http:HttpClient) { 

    this.setToken();
    setTimeout(() => {
      console.log(this.token);
    }, 5000);

  }

  setToken() {

    const payload = new HttpParams()
      .set('username', this.config.getUserName())
      .set('password', this.config.getKey());


    this.http.post(this.config.getUrl() + 'login', payload)
        .subscribe(data => {
          this.token =  data['cookie'];
          this.tokenReady = true;
         

    });
  }
}
