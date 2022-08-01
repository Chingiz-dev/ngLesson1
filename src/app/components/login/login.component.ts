import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  text: string = '';
  title: string = '';
  output: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(this.text && this.title) {
      this.output = this.text + this.title;
      this.text = this.title = "";
    } else {
      this.output = "Введите новый пост";
      this.text = this.title = "";
    }
  }

}
