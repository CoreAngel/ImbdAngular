import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public movieResult;
  public videoSrc: SafeResourceUrl;

  constructor(private route:ActivatedRoute,
              private movie: MovieService,
              private sanitizer: DomSanitizer,
              private title: Title){}

  ngOnInit(){
    this.movie.imdbID = this.route.snapshot.params['id'];

    let handler = this.movie.getData();

    handler.subscribe(e => {
      let rawData = JSON.parse(e['_body']);
      if(rawData.Response == "True")
        this.movie.checkData(rawData);
      this.movieResult = rawData;
      this.title.setTitle(this.movieResult.Title + " " + this.movieResult.Year);

      this.movie.getVideo(this.movieResult.Title, this.movieResult.Year).subscribe(e => {
        if(e.status === 200) {
          let rawData = JSON.parse(e['_body']);
          let videoSrc = "http://www.youtube.com/embed/" + rawData.items[0].id.videoId;
          this.videoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(videoSrc);
        }
      });

    });

  }

}
