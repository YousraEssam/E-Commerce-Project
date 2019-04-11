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

  logged: any;
  @Input() loginForm: FormGroup;
  @Input() registerForm: FormGroup;

  alertLogin(){
    let Users: any;
    let isMember: boolean= false;

    if (localStorage.getItem("Users")) {
      Users = JSON.parse(localStorage.getItem('Users'));
    } else {
        Users = [];
    }
    for(var i=0; i<Users.length; i++){
      if(Users[i].email == this.loginForm.value.email)
      {
        isMember = true;
        if(Users[i].password == this.loginForm.value.password)
        {
          alert('Logged in Successfully');
          this.logged = localStorage.setItem("LoggedUsers", JSON.stringify(this.loginForm.value.email));
        }else{
          alert('Wrong Email or Password');
        }
      }
    }
    if(isMember == false){
      alert('You are not a member! Please Register');
    }  
  }

  alertRegister(): void {
    let Users: any;

    if (localStorage.getItem("Users")) {
      Users = JSON.parse(localStorage.getItem('Users'));
    } else {
        Users = [];
    }
    
    let newUser = {
      name: this.registerForm.value.name,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    };
    Users.push(newUser);
    localStorage.setItem("Users", JSON.stringify(Users));
    alert("Registered Successfully. Please Log in");
  }

  ngOnInit() {
  }

}
