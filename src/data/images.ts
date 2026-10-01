import obra from '../assets/images/obra.png';
import insonorizacion from '../assets/images/insonorizacion.png';
import escayolas from '../assets/images/escayolas.png';
import techos from '../assets/images/techos.jpg';
import acabados from '../assets/images/acabados.jpg';
import pladur from '../assets/images/pladur.jpg';
import enlucido from '../assets/images/enlucido.jpg';
import reforma from '../assets/images/reforma.jpg';
import techoPladur from '../assets/images/techo_pladur.jpg';
import lijadoTecho from '../assets/images/lijado_techo.jpg';
import enlucidoPlaca from '../assets/images/enlucido_placa.jpg';
import reformaPasillo from '../assets/images/reforma_pasillo.jpg';
import techoDecorativo from '../assets/images/techo_decorativo.jpg';
import moldurasEscayola from '../assets/images/molduras_escayola.jpg';
import yesoDetalle from '../assets/images/yeso_detalle.jpg';
import galTabique from '../assets/images/gal_tabique.jpg';
import galPladur from '../assets/images/gal_pladur.jpg';
import galAtornillado from '../assets/images/gal_atornillado.jpg';
import galPlaca from '../assets/images/gal_placa.jpg';
import galAcabado from '../assets/images/gal_acabado.jpg';
import galJuntas from '../assets/images/gal_juntas.jpg';
import galTechoLijado from '../assets/images/gal_techo_lijado.jpg';
import galInstalacion from '../assets/images/gal_instalacion.jpg';
import equipoObra from '../assets/images/equipo_obra.jpg';
import heroEscayolista from '../assets/images/hero_escayolista.jpg';

export const images = {
  obra,
  insonorizacion,
  escayolas,
  techos,
  acabados,
  pladur,
  enlucido,
  reforma,
  techoPladur,
  lijadoTecho,
  enlucidoPlaca,
  reformaPasillo,
  techoDecorativo,
  moldurasEscayola,
  yesoDetalle,
  galTabique,
  galPladur,
  galAtornillado,
  galPlaca,
  galAcabado,
  galJuntas,
  galTechoLijado,
  galInstalacion,
  equipoObra,
  heroEscayolista,
} as const;

export type ImageKey = keyof typeof images;
