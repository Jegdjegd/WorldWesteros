import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesThronesComponent } from './personajes-thrones.component';

describe('PersonajesThronesComponent', () => {
  let component: PersonajesThronesComponent;
  let fixture: ComponentFixture<PersonajesThronesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonajesThronesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonajesThronesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
