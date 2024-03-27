import { TestBed } from '@angular/core/testing';

import { YazilimIlanService } from './yazilim-ilan.service';

describe('YazilimIlanService', () => {
  let service: YazilimIlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YazilimIlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
