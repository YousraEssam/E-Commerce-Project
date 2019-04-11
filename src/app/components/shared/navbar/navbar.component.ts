import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }
  
  logged: any;

  public navigateTo(path: string): void {
    this.router.navigate([path]);
    
  }

  public afterLogOut(path: string): void{
    localStorage.removeItem("LoggedUsers");
    window.location.replace('/');
  }

  ngOnInit() {
    this.logged = JSON.parse(localStorage.getItem('LoggedUsers'));
  }

}
