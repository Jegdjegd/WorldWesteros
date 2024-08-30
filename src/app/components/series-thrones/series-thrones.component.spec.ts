import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesThronesComponent } from './series-thrones.component';

describe('SeriesThronesComponent', () => {
  let component: SeriesThronesComponent;
  let fixture: ComponentFixture<SeriesThronesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesThronesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesThronesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
