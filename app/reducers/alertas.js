import { SHOW_ALERT } from '../actions/alertas';

const initialState = {
  tipo: null,
  titulo: null,
  mensaje: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        tipo: action.tipo,
        titulo: action.titulo,
        mensaje: action.mensaje,
      };

    default:
      return state;
  }
};

export default reducer;
