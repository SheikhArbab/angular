import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isMessage: boolean = false;
  inputVal: string = "";
  msg: string = "Product is added to cart";

  constructor() {}

  addCart(): void {
    this.isMessage = !this.isMessage;
  }

  inputFnc(e: string): void {
    this.inputVal = e;
  }
}
