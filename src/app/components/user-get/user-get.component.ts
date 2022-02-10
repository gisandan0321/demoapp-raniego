import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/users.service';
import { User } from '../../models/user.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-get',
  templateUrl: './user-get.component.html',
  styleUrls: ['./user-get.component.scss']
})
export class UserGetComponent implements OnInit {

  users: User[] = [];
  constructor(private userService: UserService) { }

  async ngOnInit(): Promise<void> {
    await this.getUsers();
  }

  async getUsers() : Promise<void> {
    this.userService?.get()
      .then((response) => {
        this.users = response;
      }), (error) => {
        Swal.fire( 'Error!', 'Something went wrong.', 'error')
      }
  }

  showDeleteConfirmation(id: number) : void {
    Swal.fire({
      title: 'Are you sure to delete this user?',
      text: "You won't be able to undo this operation!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.deleteUser(id);
      }
    })
  }

  async deleteUser(id: number) : Promise<void> {
    this.userService.delete(id)
      .then((response) => {
        Swal.fire( 'Success!', 'User Succesfully Deleted!.', 'success')
          .then(() => {
            this.getUsers();
          })
      }), (error) => {
        Swal.fire( 'Error!', 'Something went wrong.', 'error')
      }
  }
}
