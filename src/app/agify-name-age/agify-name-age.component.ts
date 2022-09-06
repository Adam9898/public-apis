import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-agify-name-age',
  templateUrl: './agify-name-age.component.html',
  styleUrls: ['./agify-name-age.component.css']
})
export class AgifyNameAgeComponent implements OnInit {

  @ViewChild('f') nameForm: NgForm;
  public name: string;
  public age: number;

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.age = null;
    this.name = this.nameForm.value.name;
    this.httpClient.get('https://api.agify.io/?name=' + this.name)
      .subscribe((agifyApiObj: {name: string, age: number}) => this.age = agifyApiObj.age);
    this.nameForm.resetForm();
  }

}
