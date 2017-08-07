import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class SearchService {

  private url: string = 'http://www.omdbapi.com/';
  private paramsData = {
    apikey: 'ee961568',
    r: 'json',
    s: ''
  };
  private urlParams: URLSearchParams = new URLSearchParams;

  constructor(private http: Http) { }

  getData = function(event) {
    if(event == "")
      return false;
    this.paramsData.s = event;
    this.urlParams.params = this.paramsData;

    return this.http.get(this.url, this.urlParams);
  };

}
