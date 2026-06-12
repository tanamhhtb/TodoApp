import { Component } from '@angular/core';
import { TodoFormComponent } from '../../components/todo-form/todo-form.component';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [TodoFormComponent, TodoListComponent],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss'
})
export class TodoPageComponent {}