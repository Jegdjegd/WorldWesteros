import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasasThronesComponent } from './casas-thrones.component';

describe('CasasThronesComponent', () => {
  let component: CasasThronesComponent;
  let fixture: ComponentFixture<CasasThronesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasasThronesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasasThronesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
