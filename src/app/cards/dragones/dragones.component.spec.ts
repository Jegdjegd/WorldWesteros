import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonesComponent } from './dragones.component';

describe('DragonesComponent', () => {
  let component: DragonesComponent;
  let fixture: ComponentFixture<DragonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
