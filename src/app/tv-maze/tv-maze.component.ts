import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {TvShow} from "./tv-show.model";
import {TvMazeService} from "./tv-maze.service";

@Component({
  selector: 'app-tv-maze',
  templateUrl: './tv-maze.component.html',
  styleUrls: ['./tv-maze.component.css'],
  providers: [TvMazeService]
})
export class TvMazeComponent implements OnInit {

  @ViewChild('f') searchForm: NgForm;

  public searchedTvShows: TvShow[] = [];

  constructor(private http: HttpClient, public tvMazeService: TvMazeService) { }

  ngOnInit(): void {
    this.tvMazeService.loadSavedTvShows();
  }

  onSubmit() {
    const searchTerm = this.searchForm.value['tv-search'];
    this.http.get('https://api.tvmaze.com/search/shows?q=' + encodeURIComponent(searchTerm))
      .subscribe((tvShows: TvShow[]) => {
        // limit to 5 tv shows
        this.searchedTvShows = tvShows.slice(0, 5);
      });
  }

  onClearSearchResults() {
    this.searchedTvShows = [];
  }

}
