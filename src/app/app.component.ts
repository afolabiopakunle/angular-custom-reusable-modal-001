import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  selectedModal!: boolean;
  ngOnInit() {
    console.log(this.selectedModal)
  }
  signUp() {
    this.selectedModal = true;
  }

  logIn() {
    this.selectedModal = true
  }

}
