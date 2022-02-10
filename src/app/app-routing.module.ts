import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGetComponent } from './components/user-get/user-get.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserAddComponent } from './components/user-add/user-add.component';


const routes: Routes = [
  {
    path: '',
    component: UserGetComponent
  },
  {
    path: 'edit/:id',
    component: UserEditComponent
  },
  {
    path: 'create',
    component: UserAddComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
