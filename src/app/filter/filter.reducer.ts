import * as fromFilterActions from "./filter.actions";

const estadoInicial: fromFilterActions.filtrosValidos = "todos";

export function filtroReducer(
  state = estadoInicial,
  action: fromFilterActions.actions
): fromFilterActions.filtrosValidos {
  switch (action.type) {
    case fromFilterActions.SET_FILTRO:
      return action.filtro;

    default:
      return state;
  }
}
