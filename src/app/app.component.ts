import { Component } from '@angular/core';
import {TodoTask} from "./todoTask";

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent  {

  tasks: TodoTask[] = [];

  addTask(taskName: string): void {
    var todoTask = new TodoTask(taskName);
    this.tasks.concat(todoTask);
  }

  getTasks(): TodoTask[] {
    return this.tasks;
  }
}
