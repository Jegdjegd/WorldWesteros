import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavthroneComponent } from './navthrone.component';

describe('NavthroneComponent', () => {
  let component: NavthroneComponent;
  let fixture: ComponentFixture<NavthroneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavthroneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavthroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
