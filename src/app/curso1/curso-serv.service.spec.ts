import { TestBed } from '@angular/core/testing';

import { CursoServService } from './curso-serv.service';

describe('CursoServService', () => {
  let service: CursoServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
