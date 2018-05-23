import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTopArtistsComponent } from './dashboard-top-artists.component';

describe('DashboardTopArtistsComponent', () => {
  let component: DashboardTopArtistsComponent;
  let fixture: ComponentFixture<DashboardTopArtistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTopArtistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTopArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
