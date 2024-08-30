import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonesThronesComponent } from './dragones-thrones.component';

describe('DragonesThronesComponent', () => {
  let component: DragonesThronesComponent;
  let fixture: ComponentFixture<DragonesThronesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonesThronesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonesThronesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
