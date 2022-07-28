import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string = 'Angular Routing';
  public oneWay: string = 'Oneway Data Binding';
  public twoWay: string = 'Twoway Data Binding';
  public color: string = '';
  public useName: string = '';
  public passWord: string = '';
  credentials() {
    console.log('Username:' + this.useName);
    console.log('Password:' + this.passWord);
  }
}
