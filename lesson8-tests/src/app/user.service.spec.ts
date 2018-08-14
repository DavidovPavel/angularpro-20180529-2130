import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should be created', inject(
    [UserService, HttpTestingController],
    (service: UserService, backend: HttpTestingController) => {
       const mockUser = { name: 'John' };

      service.getOne(7).subscribe(user => {
        expect(user).toEqual(mockUser);
      });

      backend.expectOne({
        method: 'GET',
        url: '/users/7'
      }).flush(mockUser);
    }
  ));
});
