import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TvShow} from "../tv-show.model";

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {

  @Input() tvShow: TvShow;
  @Input('savable') isSavable = true;
  @Input('savingButtonDisabled') isDisabled = false;
  @Output() deletion = new EventEmitter<number>();
  @Output() saving = new EventEmitter<number>();
  readonly stripHtmlTags = /(<([^>]+)>)/ig;

  constructor() { }

  ngOnInit(): void {
  }

  onSaveInit() {
    this.saving.emit(this.tvShow.show.id);
  }

  onDeleteInit() {
    this.deletion.emit(this.tvShow.show.id);
  }


}
