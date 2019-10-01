import { Action } from "@ngrx/store";

export type filtrosValidos = "todos" | "pendientes" | "completados";

export const SET_FILTRO = "[FILTER] Set Filtro";

export class SetFiltroAction implements Action {
  readonly type = SET_FILTRO;

  constructor(public filtro: filtrosValidos) {}
}

export type actions = SetFiltroAction;
