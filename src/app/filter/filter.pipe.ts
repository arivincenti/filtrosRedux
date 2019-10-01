import { Pipe, PipeTransform } from "@angular/core";
import { TodoModel } from "../todo/models/todo.model";

import * as fromFilterActions from "./filter.actions";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(
    todos: TodoModel[],
    filtro: fromFilterActions.filtrosValidos
  ): TodoModel[] {
    switch (filtro) {
      case "completados":
        return todos.filter(todo => todo.completado);

      case "pendientes":
        return todos.filter(todo => !todo.completado);

      default:
        return todos;
    }
  }
}
