import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email : new FormControl('',[
      Validators.required,
    ]),
    password : new FormControl('',[ 
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
    ]),
  });
  
  constructor(private router: Router) { }

  alert(): void {
    alert("Logged in Successfully");
  }

  ngOnInit() {
  }

}
