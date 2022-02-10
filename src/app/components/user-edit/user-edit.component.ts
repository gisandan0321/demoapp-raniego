import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { User } from 'src/app/models/user.model';
import { UserService } from '../../services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})

export class UserEditComponent implements OnInit {

  userForm: FormGroup;
  user: User = new User();

  constructor(private activeRoute: ActivatedRoute, private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }
  
  ngOnInit(): void {
    const id = this.activeRoute?.snapshot.params?.id;
    if (!id) {
      this.router?.navigate(['']);
    }
    this.getUser(id);
  }

  getUser(id: number) {
    this.userService?.getById(id)
      .then((response) => {
        this.user = response;
        this.createFormValidator();
      });
  }

  createFormValidator() {
		this.userForm = this.formBuilder.group({
			usr_email: [this.user.usr_email, [Validators.required, Validators.email] ],
      usr_fullname: [this.user.usr_fullname, Validators.required ],
      usr_address: [this.user.usr_address, Validators.required ]
  	});
	}

  editUser() {
    if (!this.userForm.invalid) {
      this.user.usr_email = this.userForm.get('usr_email').value;
      this.user.usr_fullname = this.userForm.get('usr_fullname').value;
      this.user.usr_address = this.userForm.get('usr_address').value;

      
      this.userService.update(this.user)
        .then((response) => {
          Swal.fire( 'Success!', 'User succesfully updated!', 'success');
          this.router.navigate(['']);
        })
        .catch(() => {
          Swal.fire( 'Error!', 'Something went wrong.', 'error')
        })
    }
  }
}
