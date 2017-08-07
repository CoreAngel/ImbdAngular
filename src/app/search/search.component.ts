import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SearchService } from './search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  public searchResult: Array<any>;

  constructor(private search: SearchService,
              private title: Title) { }

  ngOnInit(){
    this.title.setTitle("Wyszukiwarka");
  }

  onChange = (event) => {
    let handler = this.search.getData(event.target.value);
    if(!handler) {
      this.searchResult = [];
      return;
    }
    handler.subscribe(e =>
    {
      let rawData = JSON.parse(e['_body']);
      if(rawData.Response == 'True')
        this.searchResult = rawData.Search;
    });
  }

  checkPoster = function (url) {
    if(url == "N/A")
      return "assets/serachPlaceholder.jpg";
    else
      return url;
  }

}
