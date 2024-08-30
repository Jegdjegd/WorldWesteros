import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosThronesComponent } from './libros-thrones.component';

describe('LibrosThronesComponent', () => {
  let component: LibrosThronesComponent;
  let fixture: ComponentFixture<LibrosThronesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrosThronesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrosThronesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
