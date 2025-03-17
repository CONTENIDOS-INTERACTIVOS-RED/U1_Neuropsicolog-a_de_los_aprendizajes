export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
    numeroUnidad: '1',
    tituloUnidad: 'Fundamentos de la neuropsicología del aprendizaje	',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Definición y principios de la neuropsicología',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Desarrollo cerebral y aprendizaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Aprendizaje',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Estructuras cerebrales involucradas en los procesos de memoria, atención y aprendizaje',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Cao, G., & Duan, Y. (2018). The Impact of Big Data Analytics on Firm Performance: A Resource-Based View. Information & Management, 55(8), 1031-1043.',
      link: '',
    },
    {
      referencia:
        'Chen, H., Chiang, R. H., & Storey, V. C. (2012). Business intelligence and analytics: From big data to big impact. MIS Quarterly, 36(4), 1165-1188.',
      link: 'https://doi.org/10.2307/41703503',
    },
    {
      referencia:
        'Chen, M., Mao, S., & Liu, Y. (2014). Big Data: A Survey. Mobile Networks and Applications, 19(2), 171-209.',
      link: '',
    },
    {
      referencia:
        'Gartner, Inc. (2020). Magic Quadrant for Analytics and Business Intelligence Platforms.',
      link: '',
    },
    {
      referencia:
        'Han, J., Kamber, M., & Pei, J. (2011). Data mining: Concepts and techniques (3rd ed.). Morgan Kaufmann.',
      link: '',
    },
    {
      referencia:
        'Inmon, W. H. (2005). Building the Data Warehouse. John Wiley & Sons.',
      link: '',
    },
    {
      referencia:
        'Laursen, G. H., & Thorlund, J. (2010). Business Analytics for Managers: Taking Business Intelligence Beyond Reporting. Wiley.',
      link: '',
    },
    {
      referencia:
        'Power, D. J. (2007). A Brief History of Decision Support Systems. Knowledge and Information Systems, 4(2), 103-106.',
      link: '',
    },
    {
      referencia:
        'Russom, P. (2011). Big Data Analytics. TDWI Best Practices Report, 1-28.',
      link: '',
    },
    {
      referencia:
        'Turban, E., Sharda, R., & Delen, D. (2011). Business Intelligence: A Managerial Approach. Pearson Prentice Hall.',
      link: '',
    },
    {
      referencia:
        'Turban, E., Sharda, R., & Delen, D. (2011). Decision support and business intelligence systems (9th ed.). Pearson Education.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Afasia',
      significado:
        'Trastorno del lenguaje que afecta la capacidad de comunicarse debido a daño cerebral en áreas específicas del cerebro.',
    },
    {
      termino: 'Atención',
      significado:
        'Proceso cognitivo que permite seleccionar y concentrarse en ciertos estímulos mientras se ignoran otros, fundamental para el procesamiento de información.',
    },
    {
      termino: 'Conectividad cerebral',
      significado:
        'Red de interacciones neuronales que permite la comunicación entre diferentes áreas del cerebro, esencial para procesos cognitivos y aprendizaje.',
    },
    {
      termino: 'Función ejecutiva',
      significado:
        'Conjunto de procesos mentales que incluyen la planificación, toma de decisiones y control de impulsos, esenciales para el aprendizaje y el comportamiento adaptativo.',
    },
    {
      termino: 'Lenguaje',
      significado:
        'Sistema de comunicación que involucra áreas cerebrales como el área de broca y el área de Wernicke, esencial para la interacción social.',
    },
    {
      termino: 'Plasticidad cerebral',
      significado:
        'Capacidad del cerebro para reorganizarse y adaptarse en respuesta a experiencias, permitiendo el aprendizaje y la recuperación tras lesiones.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
