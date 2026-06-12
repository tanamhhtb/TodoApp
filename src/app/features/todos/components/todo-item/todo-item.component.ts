import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DatePipe } from '@angular/common';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [InputTextModule, ButtonModule, CheckboxModule, DatePipe, FormsModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  isEditing = false;
  editTitle = '';
  private todoService = inject(TodoService);

  toggle() { this.todoService.toggle(this.todo.id); }
  delete() { this.todoService.delete(this.todo.id); }
  startEdit() { this.editTitle = this.todo.title; this.isEditing = true; }
  saveEdit() {
    const trimmed = this.editTitle.trim();
    if (trimmed) this.todoService.update(this.todo.id, trimmed);
    this.isEditing = false;
  }
}