import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { UserCardComponent } from './user-card.component';
import { UserService } from '../user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;
  let mockUser = { name: 'John' };
  let userService: UserService;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCardComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    userService = fixture.debugElement.injector.get(UserService);
    spy = spyOn(userService, 'getOne').and.returnValue(of(mockUser));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call user service', () => {
    component.somemethod();
    expect(spy).toHaveBeenCalled();
  });

  it('should set user', () => {
    component.somemethod();
    expect(component.user).toEqual(mockUser);
  });
});
