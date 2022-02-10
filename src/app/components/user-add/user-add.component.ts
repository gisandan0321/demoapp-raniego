import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})

export class UserAddComponent implements OnInit {

  userForm: FormGroup;

  user: User = new User();

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }
  
  ngOnInit(): void {
    this.createFormValidator();
  }

  createFormValidator(){
		this.userForm = this.formBuilder.group({
			usr_email: ['', [Validators.required, Validators.email] ],
      usr_fullname: ['', Validators.required ],
      usr_address: ['', Validators.required ]
  	});
	}

  addUser() {
    if (!this.userForm?.invalid) {
      this.user.usr_email = this.userForm?.get('usr_email').value;
      this.user.usr_fullname = this.userForm?.get('usr_fullname').value;
      this.user.usr_address = this.userForm?.get('usr_address').value;

      this.userService.create(this.user)
        .then((response) => {
          Swal.fire( 'Success!', 'User succesfully added!', 'success');
          this.router.navigate(['']);
        })
        .catch(() => {
          Swal.fire( 'Error!', 'Something went wrong.', 'error')
        })
    }
  }
}
