import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {TodoListComponent} from "./todo-list.component";

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'todolist',
    component: TodoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
