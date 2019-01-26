import { TestBed, inject } from '@angular/core/testing';

import { FlexmonsterService } from './flexmonster.service';

describe('FlexmonsterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlexmonsterService]
    });
  });

  it('should be created', inject([FlexmonsterService], (service: FlexmonsterService) => {
    expect(service).toBeTruthy();
  }));
});
