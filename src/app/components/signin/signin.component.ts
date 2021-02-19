import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm : FormGroup;

  constructor(private authService: AuthService){
    this.signinForm = new FormGroup({
      "login": new FormControl(null),
      "password": new FormControl(null),
    });
  }

  ngOnInit(): void {
  }

  submit() {
    const login = this.signinForm.get('login').value?.trim();
    const password = this.signinForm.get('password').value?.trim();
    console.log('sub', login, password)

    this.authService.authorize(login, password);
  }

}
