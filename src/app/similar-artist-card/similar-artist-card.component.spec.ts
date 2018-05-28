import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarArtistCardComponent } from './similar-artist-card.component';

describe('SimilarArtistCardComponent', () => {
  let component: SimilarArtistCardComponent;
  let fixture: ComponentFixture<SimilarArtistCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarArtistCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarArtistCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
