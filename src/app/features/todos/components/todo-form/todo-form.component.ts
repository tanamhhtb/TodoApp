import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule, InputTextModule, ButtonModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {
  private todoService = inject(TodoService);
  title: string = '';

  addTodo() {
  const trimmed = this.title.trim();
  if (!trimmed) return;
  this.todoService.add(trimmed);
  this.title = '';
  }
}