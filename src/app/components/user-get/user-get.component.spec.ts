import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserGetComponent } from './user-get.component';

import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../services/users.service';
import Swal from 'sweetalert2';

describe('UserGetComponent', () => {
  let component: UserGetComponent;
  let fixture: ComponentFixture<UserGetComponent>;

  let mockRouter: jasmine.SpyObj<Router>;
  let mockUserService: jasmine.SpyObj<UserService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGetComponent ],
      providers: [ 
        {provide : Router, useValue : mockRouter},
        {provide : UserService, useValue : mockUserService},
      ]
    })

    fixture = TestBed.createComponent(UserGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
