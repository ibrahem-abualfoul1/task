import { Component, OnInit } from '@angular/core';

import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  emailControl = new FormControl('', [Validators.required,Validators.email]);
  passwordControl = new FormControl('', [Validators.required,Validators.minLength(8),]);
  showMessage = false;
  toggleShowMessage() {
  this.showMessage = !this.showMessage;
  }
  ngOnInit(): void {
  }

}
