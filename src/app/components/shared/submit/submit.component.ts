import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {

  constructor() { }

  @Input() loginForm: FormGroup;

  alert(): void {
    alert("Logged in Successfully");
  }

  ngOnInit() {
  }

}
