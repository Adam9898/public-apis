import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgifyNameAgeComponent } from './agify-name-age.component';

describe('AgifyNameAgeComponent', () => {
  let component: AgifyNameAgeComponent;
  let fixture: ComponentFixture<AgifyNameAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgifyNameAgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgifyNameAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
