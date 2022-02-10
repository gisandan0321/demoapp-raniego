import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditComponent } from './user-edit.component';
import { FormBuilder,  Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../services/users.service';
import Swal from 'sweetalert2';

describe('UserEditComponent', () => {
  let component: UserEditComponent;
  let fixture: ComponentFixture<UserEditComponent>;

  let mockFormBuilder: jasmine.SpyObj<FormBuilder>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockActivatedRoute: jasmine.SpyObj<Router>;
  let mockUserService: jasmine.SpyObj<UserService>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ UserEditComponent ],
      providers: [ 
        {provide : FormBuilder, useValue : mockFormBuilder},
        {provide : Router, useValue : mockRouter},
        {provide : ActivatedRoute, useValue : mockActivatedRoute},
        {provide : UserService, useValue : mockUserService},
      ]
    })

    fixture = TestBed.createComponent(UserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
