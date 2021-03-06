import { Action } from "@ngrx/store";

export const AGREGAR_TODO = "[TODO] Agregar Todo";
export const TOGGLE_TODO = "[TODO] Toggle Todo";
export const EDITAR_TODO = "[TODO] Editar Todo";
export const ELIMINAR_TODO = "[TODO] Eliminar Todo";
export const TOGGLE_ALL_TODO = "[TODO] Toggle All Todo";
export const REMOVE_TODOS_COMPLETED =
 "[TODO] Remover todos los Todo completados";

export class AgregarTodoAction implements Action {
  readonly type = AGREGAR_TODO;

  constructor(public texto: string) {}
}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor(public id: number) {}
}

export class EditarTodoAction implements Action {
  readonly type = EDITAR_TODO;

  constructor(public id: number, public texto: string) {}
}

export class EliminarTodoAction implements Action {
  readonly type = ELIMINAR_TODO;

  constructor(public id: number) {}
}

export class ToggleAllTodoAction implements Action {
  readonly type = TOGGLE_ALL_TODO;

  constructor(public completado: boolean) {}
}

export class RemoveTodosCompletedAction implements Action {
  readonly type = REMOVE_TODOS_COMPLETED;
}

export type Actions =
  | AgregarTodoAction
  | ToggleTodoAction
  | EditarTodoAction
  | EliminarTodoAction
  | ToggleAllTodoAction
  | RemoveTodosCompletedAction;
