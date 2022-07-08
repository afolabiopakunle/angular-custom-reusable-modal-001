import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  signUpModal!: boolean;
  loginModal!: boolean;

  ngOnInit() {
  }

  signUp() {
    this.loginModal = false;
    this.signUpModal = true;
  }

  logIn() {
    this.signUpModal = false;
    this.loginModal = true;
  }

}
