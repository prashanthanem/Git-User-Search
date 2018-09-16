import { TestBed } from '@angular/core/testing';

import { UserssearchService } from './userssearch.service';

describe('UserssearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserssearchService = TestBed.get(UserssearchService);
    expect(service).toBeTruthy();
  });
});
