import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeThroneComponent } from './home-throne.component';

describe('HomeThroneComponent', () => {
  let component: HomeThroneComponent;
  let fixture: ComponentFixture<HomeThroneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeThroneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeThroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
