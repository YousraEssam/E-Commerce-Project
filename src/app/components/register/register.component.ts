import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
    ]),
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
  
  public navigateTo(path: string): void {
    this.router.navigate([path]);
  }
  ngOnInit() {
  }

}
