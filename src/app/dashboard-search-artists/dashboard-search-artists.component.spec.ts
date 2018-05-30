import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSearchArtistsComponent } from './dashboard-search-artists.component';

describe('DashboardSearchArtistsComponent', () => {
  let component: DashboardSearchArtistsComponent;
  let fixture: ComponentFixture<DashboardSearchArtistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSearchArtistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSearchArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
