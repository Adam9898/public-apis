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
  public gender: 'male' | 'female';
  public nationality: string;

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.age = null;
    this.gender = null;
    this.nationality = null;
    this.name = this.nameForm.value.name;
    this.httpClient.get('https://api.agify.io/?name=' + this.name)
      .subscribe((agifyApiObj: {name: string, age: number}) => this.age = agifyApiObj.age);
    if (this.nameForm.value.gender) {
      this.checkGender();
    }
    if (this.nameForm.value.nationality) {
      this.checkNationality()
    }

  }

  checkGender() {
    this.httpClient.get('https://api.genderize.io/?name=' + this.name)
      .subscribe((res: {gender: 'male' | 'female'}) => {
        this.gender = res.gender;
      })
  }

  checkNationality() {
    this.httpClient.get('https://api.nationalize.io/?name=' + this.name)
      .subscribe((res: {country: {country_id: string}[]}) => {
        const nation = new Intl.DisplayNames(['en'], {type: 'region'});
        // country[0] contains the highest probability nation
        this.nationality = nation.of(res.country[0].country_id);
      });
  }

  onClearResults() {
    this.age = null;
    this.gender = null;
    this.nationality = null;
  }
}
