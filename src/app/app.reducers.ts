import { TodoModel } from "./todo/models/todo.model";
import { ActionReducerMap } from '@ngrx/store';
import * as fromTodoReducer from './todo/todo.reducer';
import * as fromFiltroReducer from './filter/filter.reducer';

import * as fromFilterActions from './filter/filter.actions';

export interface AppState{
  todos: TodoModel[];
  filtro: fromFilterActions.filtrosValidos;
}

export const reducers: ActionReducerMap<AppState> = {
  todos: fromTodoReducer.todoReducer,
  filtro: fromFiltroReducer.filtroReducer
}