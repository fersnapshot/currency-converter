export const SHOW_ALERT = 'SHOW_ALERT';

export const alertWithType = (tipo: string, titulo: string, mensaje: string) => ({
  type: SHOW_ALERT,
  tipo,
  titulo,
  mensaje,
});
