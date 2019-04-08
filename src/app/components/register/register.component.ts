import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(4),
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [ 
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
      ]]
    })
  }

}
