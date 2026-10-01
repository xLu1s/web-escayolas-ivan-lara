export const site = {
  name: 'Escayolas Ivan Lara',
  shortName: 'Ivan Lara',
  owner: 'Ivan Lara',
  tagline: 'Escayolas, pladur y aislamientos en Alcoy',
  description:
    'Empresa familiar de escayolas, pladur, techos y aislamientos en Alcoy (Alicante). Más de 25 años de experiencia. Presupuesto sin compromiso por teléfono.',
  phoneDisplay: '616 754 170',
  phoneHref: 'tel:+34616754170',
  whatsappNumber: '34616754170',
  whatsappHref:
    'https://wa.me/34616754170?text=Hola%2C%20quiero%20presupuesto%20para%20un%20trabajo%20de%20escayola',
  email: '',
  years: 25,
  city: 'Alcoy',
  region: 'Alicante',
  schedule: [
    { days: 'Lunes a Viernes', hours: '8:00 - 20:00' },
    { days: 'Sábado', hours: '9:00 - 14:00' },
    { days: 'Domingo', hours: 'Cerrado' },
  ],
  url: 'https://xlu1s.github.io/web-escayolas-ivan-lara/',
};

export const stats = [
  { value: '25+', label: 'años de experiencia' },
  { value: '100%', label: 'presupuesto sin compromiso' },
  { value: '6', label: 'servicios especializados' },
  { value: 'Alcoy', label: 'y toda la comarca' },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
};

export const services: Service[] = [
  {
    id: 'techos',
    title: 'Techos de escayola',
    description:
      'Techos continuos enlucidos, registrables y desmontables. Acabados lisos y perfectos para viviendas y locales.',
    image: 'techos',
    icon: 'ceiling',
  },
  {
    id: 'pladur',
    title: 'Pladur y tabiquería seca',
    description:
      'Tabiques, trasdosados y divisiones con placa de yeso laminado. Soluciones rápidas, limpias y a medida.',
    image: 'escayolas',
    icon: 'wall',
  },
  {
    id: 'molduras',
    title: 'Molduras, cenefas y decoración',
    description:
      'Molduras, escocias, arcos y elementos decorativos de escayola. Detalles únicos que transforman cualquier estancia.',
    image: 'acabados',
    icon: 'mold',
  },
  {
    id: 'aislamiento',
    title: 'Aislamiento acústico y térmico',
    description:
      'Insonorización y aislamiento térmico para ganar confort, privacidad y eficiencia energética en tu hogar.',
    image: 'insonorizacion',
    icon: 'sound',
  },
  {
    id: 'falsos-techos',
    title: 'Falsos techos con luz indirecta',
    description:
      'Falsos techos con iluminación integrada, cajones de luz y formas a medida. Elegancia y calidez en cada espacio.',
    image: 'reforma',
    icon: 'light',
  },
  {
    id: 'reparaciones',
    title: 'Reparaciones y urgencias',
    description:
      'Reparación de techos, grietas, humedades y desperfectos. Intervenciones rápidas y limpias cuando más lo necesitas.',
    image: 'obra',
    icon: 'tools',
  },
];

export type ProcessStep = { step: string; title: string; description: string };

export const process: ProcessStep[] = [
  {
    step: '01',
    title: 'Llámanos',
    description:
      'Cuéntanos qué necesitas por teléfono. Te asesoramos y resolvemos tus dudas sin ningún compromiso.',
  },
  {
    step: '02',
    title: 'Visita y presupuesto',
    description:
      'Visitamos tu vivienda u obra y te entregamos un presupuesto ajustado, claro y detallado.',
  },
  {
    step: '03',
    title: 'Ejecución',
    description:
      'Trabajamos con materiales de primera calidad, puntualidad, orden y limpieza en cada jornada.',
  },
  {
    step: '04',
    title: 'Acabado y garantía',
    description:
      'Revisamos el resultado contigo y no damos el trabajo por terminado hasta dejarlo perfecto.',
  },
];

export const reasons = [
  {
    title: 'Empresa familiar',
    text: 'Más de 25 años de oficio pasando de generación en generación. Trato cercano y honesto.',
    icon: 'family',
  },
  {
    title: 'Trato directo con Ivan Lara',
    text: 'Hablas siempre con el profesional que ejecuta el trabajo. Sin intermediarios ni sorpresas.',
    icon: 'person',
  },
  {
    title: 'Presupuesto sin compromiso',
    text: 'Presupuesto claro y ajustado, gratis y sin ningún tipo de obligación por tu parte.',
    icon: 'check',
  },
  {
    title: 'Materiales de calidad',
    text: 'Trabajamos con primeras marcas y los mejores materiales del sector para un resultado duradero.',
    icon: 'star',
  },
  {
    title: 'Limpieza y puntualidad',
    text: 'Dejamos tu casa u obra limpia cada día. Cumplimos los plazos acordados.',
    icon: 'broom',
  },
  {
    title: 'Particulares y constructoras',
    text: 'Nos adaptamos a reformas pequeñas, viviendas y grandes obras de construcción.',
    icon: 'building',
  },
];

export const zones = [
  'Alcoy',
  'Muro de Alcoy',
  'Cocentaina',
  'Ibi',
  'Onil',
  'Banyeres de Mariola',
  'Castalla',
  'Alicante',
  'Comunidad Valenciana',
];

export const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#trabajos', label: 'Trabajos' },
  { href: '#contacto', label: 'Contacto' },
];
