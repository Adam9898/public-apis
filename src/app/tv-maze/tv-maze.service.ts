import {TvShow} from "./tv-show.model";


export class TvMazeService {

  public savedTvShows: TvShow[] = [];
  private readonly localStorageKeyName = 'tvShows';

  constructor() { }

  onSave(tvShow: TvShow) {
    this.savedTvShows.push(tvShow);
    localStorage.setItem(this.localStorageKeyName, JSON.stringify(this.savedTvShows));
  }

  onDelete(id: number) {
    const shows = [...this.savedTvShows];
    const showIndex = shows.findIndex(show => show.show.id === id);
    shows.splice(showIndex, 1);
    localStorage.setItem(this.localStorageKeyName, JSON.stringify(shows));
    this.savedTvShows = shows;
  }

  loadSavedTvShows() {
    const showsStr = localStorage.getItem(this.localStorageKeyName);
    if (showsStr !== null) {
      this.savedTvShows = JSON.parse(showsStr);
    } else {
      localStorage.setItem(this.localStorageKeyName, '[]');
    }
  }

  isTvShowSavable(tvShowId: number) {
    let savable = true;
    if (this.savedTvShows.length >= 10) {
      savable = false;
    } else if (this.savedTvShows.find(tvShow => tvShow.show.id === tvShowId)) {
      savable = false;
    }
    return savable;
  }



}
