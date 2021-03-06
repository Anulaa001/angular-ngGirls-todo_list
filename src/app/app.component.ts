import { Component } from "@angular/core";
import { TodoItem } from "./todo-item";

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Welcome to {{ title }}!
    </h1>
    <app-list-manager></app-list-manager>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My To Do List APP';
}