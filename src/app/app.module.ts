import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {TodoListComponent} from "./todo-list.component";

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent, TodoListComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
