import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'opel';
  data: any;
  color: string = 'lightblue';

  constructor(private http: HttpClient) {
    this.http.get('https://api.debugger.pl/items').subscribe((resp: any) => {
      this.data = resp.data;
    });
  }

  onClick(value: any) {
    //  alert(value)
    this.title = value;
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    console.log(randomColor);
    this.color = '#' + randomColor;
  }
}
