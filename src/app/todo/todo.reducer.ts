import * as fromTodo from "./todo.actions";
import { TodoModel } from "./models/todo.model";

const todo1 = new TodoModel("Vencer a Tanos");
const todo2 = new TodoModel("Salvar al mundo");
todo2.completado = true;
const todo3 = new TodoModel("Pedir prestado el traje de Ironman");

const estadoInicial: TodoModel[] = [todo1, todo2, todo3];

export function todoReducer(
  state = estadoInicial,
  action: fromTodo.Actions
): TodoModel[] {
  switch (action.type) {
    case fromTodo.AGREGAR_TODO:
      const todo = new TodoModel(action.texto);
      return [...state, todo];

    case fromTodo.TOGGLE_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            completado: !todoEdit.completado
          };
        } else {
          return todoEdit;
        }
      });

    case fromTodo.EDITAR_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            texto: action.texto
          };
        } else {
          return todoEdit;
        }
      });

    case fromTodo.ELIMINAR_TODO:
      return state.filter(todoEdit => todoEdit.id !== action.id);

    case fromTodo.TOGGLE_ALL_TODO:
      return state.map(todoEdit => {
        const completado = action.completado;
        return {
          ...todoEdit,
          completado
        };
      });

      case fromTodo.REMOVE_TODOS_COMPLETED:
        return state.filter(todo => !todo.completado);

    default:
      return state;
  }
}
