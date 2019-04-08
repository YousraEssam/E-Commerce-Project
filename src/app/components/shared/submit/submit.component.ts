import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() loginForm: FormGroup;
  @Input() registerForm: FormGroup;

  alertLogin(): void {
    alert("Logged in Successfully");
  }

  alertRegister(): void {
    alert("Registered Successfully. Please Log in");
  }

  ngOnInit() {
  }

}
