import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddComponent } from './user-add.component';
import { FormBuilder,  Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../services/users.service';
import Swal from 'sweetalert2';

describe('UserAddComponent', () => {
  let component: UserAddComponent;
  let fixture: ComponentFixture<UserAddComponent>;

  let mockFormBuilder: jasmine.SpyObj<FormBuilder>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockUserService: jasmine.SpyObj<UserService>;

  beforeEach(async(() => {
    mockFormBuilder = jasmine.createSpyObj(['group']);
    mockRouter = jasmine.createSpyObj(['navigate']);
    mockUserService = jasmine.createSpyObj(['create']);

    TestBed.configureTestingModule({
      declarations: [ UserAddComponent ],
      providers: [ 
        {provide : FormBuilder, useValue : mockFormBuilder},
        {provide : Router, useValue : mockRouter},
        {provide : UserService, useValue : mockUserService},
      ]
    })

    fixture = TestBed.createComponent(UserAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
