import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() loginForm: FormGroup;
  @Input() registerForm: FormGroup;

  ngOnInit() {
  }

}
