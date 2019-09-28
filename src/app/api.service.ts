import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getPost() {
    return this.httpClient.get(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@manojvirat457`);
  }
}
