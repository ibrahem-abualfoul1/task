import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
    },
    {
    path: 'register',
    component: RegisterComponent
    }



];

@NgModule({
  imports: [RouterModule.forChild(routes),MatFormFieldModule,MatInputModule],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
