import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'timesheet';
  data: any

  constructor(
    private http:HttpClient
  ) {
    this.http.get('https://api.debugger.pl/items').subscribe((resp:any) =>{
      this.data = resp.data

    })
  }
}
