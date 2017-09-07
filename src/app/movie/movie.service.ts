import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { imbdApiKey, imbdLink } from '../imbdApi';

@Injectable()
export class MovieService {
  constructor(private http: Http) {}

  public imdbID: string;
  private url: string = imbdLink;
  private paramsData = {
    params: {
      apikey: imbdApiKey,
      r: 'json',
      plot: 'full',
      i: ''
    }
  };

  getData = function() {
    this.paramsData.params.i = this.imdbID;

    return this.http.get(this.url, this.paramsData);
  };

  checkData = function (data) {
    for(let i in data) {
      if(data[i] == "N/A")
        if(i === "Poster")
          data[i] = "assets/moviePlaceholder.jpg";
        else
          data[i] = "-";
    }
  };

  getVideo = function (title: string, year: string) {
    return this.http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: "AIzaSyDjUkQln0pPFuAABkKzMvf0Msi0ALX2l5I",
        type: 'video',
        maxResults: '1',
        part: 'snippet',
        fields: 'items/id',
        q: title + " " + year + " trailer"
      }
    })
  }

}
