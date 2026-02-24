export default {
  global: {
    Name: 'Valoración y fomento de la dimensión social',
    Description:
      'El componente valoración y fomento de la dimensión social, busca fortalecer capacidades para medir y dinamizar aspectos sociales y económicos de la transición agroecológica. A través de indicadores IPPTA, se evalúan participación, equidad, ingresos y organización. Se diseñan planes de acción integrando familia, redes, escuelas y mercados, fomentando el desarrollo comunitario y territorial frente a la crisis socioeconómica.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Indicadores productivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Indicadores productivos: concepto, tipos y finalidad',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Indicadores Socioeconómicos IPPTA',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Componentes socioeconómicos valorados',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Mecánica de valoración',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Indicadores productivos evaluados en la herramienta IPPTA',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Algunas propuestas agroecológicas frente a la crisis socioeconómica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Prácticas agroecológicas para el fortalecimiento socioeconómico',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'La familia como núcleo del sistema agroecológico',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Redes, plataformas y organizaciones',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Escuelas agroecológicas',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Mercados',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Plan de acompañamiento agroecológico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Bases para proponer un plan de acción para la transición',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Identificar necesidades sociales prioritarias',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Definir objetivos específicos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Seleccionar las alternativas agroecológicas',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/21250009_CF2_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Indicadores productivos',
      referencia:
        'FAO. (2024). Guía para el levantamiento y registro de indicadores de género para la Transición Agroecológica en el Instrumento de Planificación Predial para la Transición Agroecológica (IPPTA). Organización de las Naciones Unidas para la Alimentación y la Agricultura.',
      tipo: 'Manual',
      link:
        'https://drive.google.com/file/d/1vVllA0GmISHUYDd9kgYQ4R7mSxjMGWY0/view?usp=drive_link',
    },
    {
      tema: 'Plan de acompañamiento agroecológico',
      referencia:
        'Una antropología de la praxis. (2020). Feminismo campesino popular y agroecología [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=T_y-3LxpxzE',
    },
    {
      tema: 'Plan de acompañamiento agroecológico',
      referencia:
        'Reyes, V. C., del Moral, J. B., García, A. E., Rodríguez, A. B., & Montes, M. S. (2017). Agricultura multifuncional y sistemas de producción bajo un contexto de agricultura diversificada. Agricultura multifuncional y políticas públicas en México, 35.',
      tipo: 'Artículo Leer página 36-53',
      link:
        'https://www.researchgate.net/profile/Pablo-Gonzalez-Moctezuma/publication/336706714_La_gestion_del_agua_y_su_relacion_con_el_desarrollo_de_la_comunidad_de_Yoactun_Quintana_Roo_desde_su_fundacion_hasta_hoy/links/5dae4deb92851c577eb96dfe/La-gestion-del-agua-y-su-relacion-con-el-desarrollo-de-la-comunidad-de-Yoactun-Quintana-Roo-desde-su-fundacion-hasta-hoy.pdf#page=36',
    },
    {
      tema: 'Plan de acompañamiento agroecológico',
      referencia:
        'OvinApp - Aplicación Ovina y Caprina. (2024). Diversificar los cultivos: Estrategias clave para una producción agrícola rentable y sostenible [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=OSInnASSRH8 ',
    },
  ],
  glosario: [
    {
      termino: 'Autosuficiencia alimentaria',
      significado:
        'capacidad de una familia para producir la mayoría de los alimentos que consume, con diversidad nutricional y pertinencia cultural.',
    },
    {
      termino: 'Circuitos cortos de comercialización',
      significado:
        'estrategias de venta directa entre productores y consumidores que reducen la intermediación y fortalecen la autonomía económica.',
    },
    {
      termino: 'Complementariedad intergeneracional',
      significado:
        'alternancia planificada de especies en el mismo terreno para mejorar la fertilidad y romper ciclos de plagas.',
    },
    {
      termino: 'Equidad de género',
      significado:
        'distribución justa de roles y responsabilidades entre hombres y mujeres en la vida productiva, doméstica y comunitaria.',
    },
    {
      termino: 'Gestión del conocimiento agroecológico',
      significado:
        'proceso de enseñanza, aprendizaje e investigación que fortalece la innovación y el diálogo de saberes en la comunidad.',
    },
    {
      termino: 'Indicador socioeconómico',
      significado:
        'instrumento que analiza dinámicas familiares y comunitarias, integrando factores sociales, económicos y organizativos.',
    },
    {
      termino: 'Línea base social y económica',
      significado:
        'diagnóstico inicial que refleja el estado actual de las dinámicas familiares y comunitarias en un territorio.',
    },
    {
      termino: 'Memoria biocultural',
      significado:
        'conjunto de saberes, prácticas y valores transmitidos en las comunidades que articulan identidad territorial con sostenibilidad agroecológica.',
    },
    {
      termino: 'Participación comunitaria',
      significado:
        'involucramiento de las familias en espacios colectivos de decisión y acción para fortalecer la cohesión social.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguilar, E. E. (Coord.). (2022). Agroecología y organización social: estudios críticos sobre prácticas y saberes. Universidad de Monterrey y Editorial Ítaca.',
      link: 'https://libreriacentros.clacso.org/publicacion.php?p=2896&cm=668',
    },
    {
      referencia:
        'Alegría Fernández, G. A. (2020). La agroecología: una estrategia en educación ambiental. Universidad del Cauca.',
      link: '',
    },
    {
      referencia:
        'Buraschi, D., y Oldano, N. (2021). La herencia de Paulo Freire en las prácticas participativas dialógicas. Revista de Educación Social, (35).',
      link:
        'https://www.eduso.net/res/revista/35/miscelanea/la-herencia-de-paulo-freire-en-las-practicas-participativas-dialogicas',
    },
    {
      referencia:
        'Coraggio, J. L. (Comp.). (2016). Economía social y solidaria en movimiento. Universidad Nacional de General Sarmiento, CLACSO y Instituto de Altos Estudios Nacionales.',
      link: 'https://repositorio.ungs.edu.ar/handle/UNGS/266',
    },
    {
      referencia:
        'FAO, MADR, ADR y Unión Europea en Colombia. (2023). Guía de transición a la agroecología para extensionistas y promotores rurales en Colombia. Organización de las Naciones Unidas para la Alimentación y la Agricultura.',
      link: 'https://www.fao.org/agroecology/database/detail/es/c/1711004/',
    },
    {
      referencia:
        'FAO. (2024). Guía para el levantamiento y registro de indicadores de género para la transición agroecológica en el instrumento de planificación predial para la transición agroecológica (IPPTA). Organización de las Naciones Unidas para la Alimentación y la Agricultura.',
      link: '',
    },
    {
      referencia:
        'Fitzgerald, V. (2012). Mercados globales de capitales, impuestos directos y redistribución de la renta. Revista de Economía Crítica, (13), 55-73.',
      link: '',
    },
    {
      referencia:
        'Giraldo, O. F. (2022). Multitudes agroecológicas. Universidad Nacional Autónoma de México. ',
      link: 'https://www.comecso.com/publicaciones/multitudes-agroecologicas',
    },
    {
      referencia:
        'Herrero, Y. (2012). Propuestas ecofeministas para un sistema cargado de deudas. Revista de Economía Crítica, (13), 30-54.',
      link: '',
    },
    {
      referencia:
        'Lugo Perea, L. J., y Rodríguez Rodríguez, L. H. (2022). Utopías agroecológicas para el agrocapitalismo: una perspectiva crítica desde las agroecologías de los sures. Sello Editorial Universidad del Tolima.',
      link: '',
    },
    {
      referencia:
        'OvinApp. (2022). Diversificar los cultivos: estrategias clave para una producción agrícola rentable y sostenible [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=OSInnASSRH8',
    },
    {
      referencia:
        'Red Comparte. (2021, agosto 17). Red COMPARTE. Circuitos cortos de comercialización y consumo [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=-2B1ssTdFH0',
    },
    {
      referencia:
        'Reyes, V. C., del Moral, J. B., García, A. E., Rodríguez, A. B., y Montes, M. S. (2017). Agricultura multifuncional y sistemas de producción bajo un contexto de agricultura diversificada. En Agricultura multifuncional y políticas públicas en México (pp. 35-56).',
      link: '',
    },
    {
      referencia:
        'Sánchez, D. S. (2025). Hacia la integración generacional de las juventudes en los territorios rurales: entrevista al Dr. Rafael Mesén Vega. Ixaya. Revista Universitaria de Desarrollo Social, 15(28).',
      link: '',
    },
    {
      referencia:
        'Valdivia-Díaz, M., Le Coq, J. F., y Daza, P. (2022). Propuesta de hoja de ruta para el escalamiento de la agroecología en Colombia: desde un análisis de las políticas, programas y factores limitantes actuales (Info Note). CGIAR.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Alava Arevalo',
          cargo: 'Instructor técnico',
          centro:
            'Centro Internacional de Producción Limpia Lope - Regional Nariño',
        },
        {
          nombre: 'Gonzalo Cardona',
          cargo: 'Coordinador Colombia',
          centro: 'Agronomos y Veterinarios sin Fronteras (AVSF)',
        },
        {
          nombre: 'Pablo Aguirre',
          cargo: 'Coordinador',
          centro:
            'Proyecto Apoyo a la Reforma Rural Integral en Colombia (ARRIC) - Agronomos y Veterinarios sin Fronteras (AVSF)',
        },
        {
          nombre: 'Jenny Gómez',
          cargo: 'Asistente técnica',
          centro:
            'Proyecto Apoyo a la Reforma Rural Integral en Colombia (ARRIC) - Agronomos y Veterinarios sin Fronteras (AVSF)',
        },
        {
          nombre: 'Roger Garcia',
          cargo: 'Consultor',
          centro:
            'Proyecto Apoyo a la Reforma Rural Integral en Colombia (ARRIC) - Agronomos y Veterinarios sin Fronteras (AVSF)',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
