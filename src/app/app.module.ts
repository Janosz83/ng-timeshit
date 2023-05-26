import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import {HttpClientModule} from '@angular/common/http';
import { AutobusComponent } from './components/autobus/autobus.component'

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    AutobusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
