import { Component, OnInit } from "@angular/core";
import * as fromFilterActions from "../../filter/filter.actions";
import { AppState } from "src/app/app.reducers";
import { Store } from "@ngrx/store";
import { TodoModel } from '../models/todo.model';
import { RemoveTodosCompletedAction } from '../todo.actions';

@Component({
  selector: "app-todo-footer",
  templateUrl: "./todo-footer.component.html",
  styles: []
})
export class TodoFooterComponent implements OnInit {
  filtrosValidos: fromFilterActions.filtrosValidos[] = [
    "todos",
    "completados",
    "pendientes"
  ];

  filtroActual: string;
  pendientes: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe(state => {
      this.contarPendientes(state.todos);
      this.filtroActual = state.filtro;
    });
  }

  nuevoFiltro(nuevoFiltro: fromFilterActions.filtrosValidos) {
    const action = new fromFilterActions.SetFiltroAction(nuevoFiltro);
    this.store.dispatch(action);
  }

  contarPendientes(todos:TodoModel[]){
    this.pendientes = todos.filter( todo => !todo.completado).length;
  }

  limpiarCompletados(){
    const action = new RemoveTodosCompletedAction();
    this.store.dispatch(action);
  }
}
