import { TestBed } from '@angular/core/testing';

import { WesterosInfoService } from './westeros-info.service';

describe('WesterosInfoService', () => {
  let service: WesterosInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WesterosInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
