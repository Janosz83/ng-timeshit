import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'timesheet';
  mounts = {
    january: {
      days: 31,
    },
    february: {
      days: 28,
    },
    march: {
      days: 31,
    },
    april: {
      days: 30,
    },

    may: {
      days: 31,
    },
    june: {
      days: 30,
    },
    july: {
      days: 31,
    },
    august: {
      days: 31,
    },
    september: {
      days: 30,
    },
    october: {
      days: 31,
    },
    november: {
      days: 30,
    },
    december: {
      days: 31,
    },
  };
  constructor() {}
}
