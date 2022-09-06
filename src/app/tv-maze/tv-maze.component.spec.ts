import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvMazeComponent } from './tv-maze.component';

describe('TvMazeComponent', () => {
  let component: TvMazeComponent;
  let fixture: ComponentFixture<TvMazeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvMazeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvMazeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
