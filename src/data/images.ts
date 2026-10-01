import obra from '../assets/images/obra.png';
import insonorizacion from '../assets/images/insonorizacion.png';
import escayolas from '../assets/images/escayolas.png';
import techos from '../assets/images/techos.jpg';
import acabados from '../assets/images/acabados.jpg';
import pladur from '../assets/images/pladur.jpg';
import enlucido from '../assets/images/enlucido.jpg';
import reforma from '../assets/images/reforma.jpg';

export const images = {
  obra,
  insonorizacion,
  escayolas,
  techos,
  acabados,
  pladur,
  enlucido,
  reforma,
} as const;

export type ImageKey = keyof typeof images;
