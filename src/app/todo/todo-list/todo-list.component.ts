import { Component, OnInit } from "@angular/core";
import { AppState } from "src/app/app.reducers";
import { Store } from "@ngrx/store";
import { TodoModel } from "../models/todo.model";
import * as fromFilterActions from '../../filter/filter.actions';

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styles: []
})
export class TodoListComponent implements OnInit {
  todos: TodoModel[] = [];
  filtro: fromFilterActions.filtrosValidos;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe(state => {
      this.todos = state.todos;
      this.filtro = state.filtro;
    });
  }
}
