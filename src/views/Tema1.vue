<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Indicadores productivos
    
    .fondo___color_2
      .px-5

        .row.align-items-center.m-0.mb-5
          .col-xl.box___style_2(data-aos="zoom-in")
            p.mb-0 Los indicadores productivos son herramientas que permiten observar, medir y valorar aspectos clave del sistema agroecológico, integrando dimensiones técnicas, sociales y ecológicas. Su aplicación, basada en una mirada situada y participativa, facilita el análisis de las dinámicas familiares y comunitarias, orientando procesos de transición hacia sistemas más equitativos, sostenibles y adaptados al contexto territorial.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img2.png", alt="" ).m-auto

        <!-- BLOQUE 1 -->
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Indicadores productivos: concepto, tipos y finalidad

        p.mb-5 En los procesos de transición agroecológica, los #[b indicadores socioeconómicos] no se limitan a medir ingresos o participación, sino que permiten observar, valorar y orientar las dinámicas familiares y comunitarias en relación con sus contextos territoriales. Ayudan a comprender cómo interactúan los factores sociales, económicos y organizativos en cada finca o comunidad, convirtiéndose en #[b herramientas estratégicas] para fortalecer la equidad, la cohesión social y la sostenibilidad de los sistemas agroecológicos.

        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img3.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La agroecología reconoce que cada territorio posee dinámicas, saberes locales y condiciones sociales particulares. Por eso, los indicadores deben aplicarse desde una #[b mirada situada], que permita identificar avances, limitaciones y oportunidades de mejora, según los factores del entorno.

    p.mb-5 Esta unidad busca que los aprendices comprendan el #[b sentido profundo] de los indicadores socioeconómicos y su #[b utilidad práctica] en el diseño y monitoreo de procesos de transición agroecológica.

    <!-- SLYDER IMAGENES -->
    .fondo___slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Indicador productivo
                p.mb-0 Herramienta que permite observar, medir y valorar aspectos del sistema productivo.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img5.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Características de los indicadores IPPTA
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-2
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Cuantitativos]: expresan valores numéricos (ej. número de especies, % de insumos producidos).
                  li.mb-2
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Cualitativos]: describen condiciones o prácticas (ej. tipo de manejo del suelo).
                  li.mb-2
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Combinados]: integran aspectos técnicos, sociales y ecológicos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Participativos]: construidos y valorados colectivamente por actores del territorio.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img6.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Finalidad de los indicadores socioeconómicos
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-2
                    span.fa-li
                      i.fas.fa-check-circle
                    | Conocer el estado y evolución de las dinámicas familiares y comunitarias.
                  li.mb-2
                    span.fa-li
                      i.fas.fa-check-circle
                    | Identificar fortalezas y debilidades en la dimensión socioeconómica.
                  li.mb-2
                    span.fa-li
                      i.fas.fa-check-circle
                    | Diseñar estrategias de transición adaptadas al contexto territorial y cultural.
                  li.mb-2
                    span.fa-li
                      i.fas.fa-check-circle
                    | Facilitar el diálogo entre saberes comunitarios y enfoques técnicos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Evaluar impactos sociales, organizativos y económicos de las prácticas agroecológicas implementadas.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img7.png', alt='' style="max-width: 500px").m-auto

    <!-- BLOQUE 2 -->
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Indicadores Socioeconómicos IPPTA

    p.mb-5 Valorar un #[b indicador socioeconómico] en agroecología significa analizar las dinámicas familiares, la participación comunitaria y los procesos organizativos que impulsan la transición hacia sistemas más justos y sostenibles. Esta valoración debe realizarse mediante técnicas #[b claras, situadas y participativas], que permitan a las familias y organizaciones identificarse con los criterios y asumir como propio el proceso de transición.

    .fondo___color_2
      .px-5

        .row.justify-content-center.mb-0
          .col-xl-10
            .row.align-items-center.m-0.box___style_3(data-aos="zoom-in")
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img8.jpg', alt='').m-auto
              .col-xl
                p.mb-0 Estas técnicas facilitan la observación de relaciones de género y generación, la detección de limitaciones en ingresos o acceso a mercados y la toma de decisiones informadas que refuercen la #[b equidad], la #[b cohesión social] y la #[b planificación colectiva]. En el marco del IPPTA, su aplicación contribuye a desarrollar capacidades para diseñar estrategias socioeconómicas orientadas a la mejora continua, la #[b comunalidad] y la #[b autonomía campesina].

        <!-- BLOQUE 3 -->
        Separador
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3 Componentes socioeconómicos valorados
        
        .row.align-items-center.m-0.mb-5
          .col-xl.box___style_2.box___fit_2(data-aos="zoom-in")
            p.mb-0 Este apartado describe los elementos sociales y económicos que se articulan al IPPTA para comprender la organización familiar y comunitaria en cada territorio. En el marco del IPPTA, los indicadores socioeconómicos se aplican de forma articulada con componentes concretos de la vida familiar y comunitaria.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img9.png", alt="" ).m-auto
        
    p.mb-5 Estos componentes reflejan relaciones, prácticas y decisiones que configuran la organización social y económica territorial. Su valoración permite comprender la interrelación entre factores sociales y económicos, el nivel de solidez de los procesos comunitarios y las oportunidades existentes para su fortalecimiento. Este ejercicio reconoce la diversidad de formas organizativas, pone en valor los saberes locales y orienta los procesos de transición agroecológica desde la realidad de cada finca o comunidad.

    <!-- CARRUSEL DE TARJETAS CON IMAGEN -->
    .fondo___carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img11.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img12.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Participación comunitaria
                p.mb-0 Grado de involucramiento de las familias en espacios colectivos, toma de decisiones y acciones comunitarias.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img13.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Equidad de género
                p.mb-0 Distribución de roles, responsabilidades y oportunidades entre mujeres y hombres en la vida productiva y organizativa.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img14.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Generación y control de ingresos
                p.mb-0 Formas de obtención, administración y uso de los ingresos familiares y su impacto en la autonomía económica.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img15.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Autosuficiencia alimentaria familiar
                p.mb-0 Capacidad de la familia para garantizar su alimentación a partir de la producción propia y prácticas agroecológicas.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img16.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Organización para la comercialización
                p.mb-0 Modalidades asociativas y estrategias colectivas para el intercambio y la venta de productos.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img17.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Gestión del conocimiento agroecológico
                p.mb-0 Procesos de construcción, intercambio y apropiación de saberes locales y técnicos.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img18.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Trabajo y uso del tiempo en la agricultura familiar
                p.mb-0 Distribución del tiempo de trabajo productivo, reproductivo y comunitario dentro del hogar.

        p.mb-0 La valoración de estos indicadores permite establecer la Línea Base Social y Económica del sistema agroecológico. Este diagnóstico facilita la identificación del estado actual de las dinámicas familiares y comunitarias, la identificación de prácticas clave y la orientación de decisiones colectivas. A partir de esta información, las familias y los equipos territoriales priorizan acciones dirigidas al fortalecimiento organizativo, la equidad y la autonomía, asegurando que la transición agroecológica se consolide de manera contextualizada, progresiva y estratégicamente articulada desde la familia.

    <!-- BLOQUE 4 -->
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Mecánica de valoración
    
    .row.align-items-center.m-0.mb-5
      .col-xl.box___style_2.box___fit_2_1(data-aos="zoom-in")
        p.mb-0 Este apartado explica cómo el IPPTA convierte la información social y económica en una calificación que orienta decisiones colectivas. En el IPPTA, la mecánica de valoración de los indicadores socioeconómicos transforma la información recogida a partir del diálogo con las familias y comunidades en un índice numérico.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img19.png", alt="" ).m-auto
    
    p.mb-5 Con base en aspectos como la participación organizativa, el control de los ingresos, la equidad de género y la autosuficiencia alimentaria, se asigna un puntaje entre 1 y 5 según la descripción definida para cada indicador. Esta calificación permite construir un diagnóstico claro del estado social y económico del predio, realizar comparaciones entre comunidades, identificar avances a lo largo del tiempo y orientar decisiones colectivas que fortalezcan la transición agroecológica.

    .row.justify-content-center.mb-5
      .col-xl-6
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 1.
          span Escala cualitativa de valoración socioeconómica
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Puntaje
                th.texto-left Descripción cualitativa
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left 1
                td.texto-left Condición crítica o de alto riesgo social.
              tr
                td.ajuste-border-tabla.texto-left 2
                td.texto-left Condición deficiente, con necesidad prioritaria de mejora.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left 3
                td.texto-left Condición intermedia, con prácticas parcialmente sostenibles.
              tr
                td.ajuste-border-tabla.texto-left 4
                td.texto-left Condición buena, con prácticas socioeconómicas de base agroecológica consolidadas.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left 5
                td.texto-left Condición óptima, plenamente agroecológica y comunitaria.

    p.mb-5 Cada indicador socioeconómico cuenta con una escala progresiva de descripciones que abarca desde escenarios de baja organización, inequidad o limitada participación comunitaria, hasta formas de gestión equitativas, autónomas y sostenibles. El evaluador selecciona la descripción que se ajusta con mayor precisión a la realidad social y económica del predio o de la comunidad, lo cual define el puntaje dentro de la escala establecida.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img20.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El IPPTA propone realizar dos mediciones al año, una en temporada seca y otra en época de lluvias, con el fin de captar las variaciones en las dinámicas familiares y comunitarias a lo largo del ciclo agrícola. Este proceso posibilita la construcción de una línea base social y económica del territorio, la identificación de oportunidades de mejora y el seguimiento de los avances en la transición agroecológica, articulando criterios técnicos con análisis participativo y saberes locales.

    <!-- BLOQUE 5 -->
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Indicadores productivos evaluados en la herramienta IPPTA

    p.mb-5 La transición agroecológica requiere una comprensión detallada de las dinámicas familiares y comunitarias en cada territorio. Para ello, la herramienta #[b IPPTA] propone un conjunto de i#[b ndicadores socioeconómicos] que permiten observar y entender aspectos fundamentales como:

    .fondo___color_2
      .px-5

        .row.justify-content-center.mb-5
          .col-xl-9
            .row.align-items-center.m-0.box___style_3(data-aos="zoom-in")
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img21.jpg', alt='').m-auto
              .col-xl
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-1
                    span.fa-li
                      i.fas.fa-check-circle
                    | La participación comunitaria.
                  li.mb-1
                    span.fa-li
                      i.fas.fa-check-circle
                    | La equidad de género.
                  li.mb-1
                    span.fa-li
                      i.fas.fa-check-circle
                    | La generación y control de ingresos.
                  li.mb-1
                    span.fa-li
                      i.fas.fa-check-circle
                    | La autosuficiencia alimentaria.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | La organización para la comercialización.

        p.mb-5 Estos indicadores facilitan la construcción de un diagnóstico claro y participativo de la situación social y económica. Además, permiten establecer una línea base para tomar decisiones que fortalezcan #[b la autonomía, la cohesión y la sostenibilidad] de las comunidades, partiendo de su propia realidad territorial.

        .row.justify-content-center.mb-5
          .col-xl-10
            .row.align-items-center.m-0.box___style_4(data-aos="zoom-in")
              .col-xl
                p.mb-0 Cuando estos indicadores se aplican mediante #[b técnicas participativas], se genera un espacio de diálogo entre familias, organizaciones y equipos técnicos. Esto posibilita reconocer avances, discutir prácticas actuales y definir en conjunto acciones de mejora. En este proceso, #[b los saberes locales se articulan con criterios técnicos], lo que da lugar a estrategias socioeconómicas #[b contextualizadas, pertinentes y transformadoras].
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img22.jpg', alt='').m-auto
    
    p.mb-5 A continuación, se presenta el desglose de cada indicador socioeconómico, su descripción y su relevancia dentro del proceso de transición agroecológica.

    <!-- SLYDER IMAGENES -->
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Generación de ingresos e índices de autoempleo
                p.mb-3 Valora el porcentaje de los gastos de la finca (mano de obra, insumos, administración y comercialización) cubiertos con los ingresos generados. Este indicador refuerza la autonomía económica familiar y la sostenibilidad del sistema agroecológico. 
                h4 Medición: 
                ol.lista-ol--cuadro
                  li
                    .lista-ol--cuadro__vineta
                      span 1
                    | Hasta el 20% de los gastos cubiertos.
                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    | Entre el 21 y 40%.
                  li 
                    .lista-ol--cuadro__vineta
                      span 3
                    | Entre el 41 y 60%.
                  li 
                    .lista-ol--cuadro__vineta
                      span 4
                    | Entre el 61 y 80%.
                  li 
                    .lista-ol--cuadro__vineta
                      span 5
                    | Más del 80%.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img23.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Organización para la comercialización de los productos
                p.mb-3 Analiza la participación del productor en procesos organizativos para la venta de productos agroecológicos. Fortalece la autonomía económica, reduce la intermediación y consolida redes comunitarias de comercialización. 
                h4 Medición: 
                ol.lista-ol--cuadro
                  li
                    .lista-ol--cuadro__vineta
                      span 1
                    | Sin organización, gestión total del intermediario.
                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    | Existe organización, pero el productor no participa.
                  li 
                    .lista-ol--cuadro__vineta
                      span 3
                    | Participa, pero depende del intermediario. 
                  li 
                    .lista-ol--cuadro__vineta
                      span 4
                    | Participa y vende parcialmente sin intermediarios. 
                  li 
                    .lista-ol--cuadro__vineta
                      span 5
                    | Participa y vende directamente sin intermediarios.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img24.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Autosuficiencia alimentaria familiar
                p.mb-3 Evalúa la capacidad de la familia para producir alimentos que cubran de forma balanceada sus necesidades nutricionales, respetando prácticas culturales alimentarias. Fortalece la soberanía alimentaria, la autonomía familiar y la resiliencia ante crisis externas. 
                h4 Medición: 
                ol.lista-ol--cuadro
                  li
                    .lista-ol--cuadro__vineta
                      span 1
                    | No se produce alimento para el hogar.
                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    | Se produce el 10% de los alimentos.
                  li 
                    .lista-ol--cuadro__vineta
                      span 3
                    | Se produce el 30%.
                  li 
                    .lista-ol--cuadro__vineta
                      span 4
                    | Se produce el 50% con diversidad nutricional y pertinencia cultural.
                  li 
                    .lista-ol--cuadro__vineta
                      span 5
                    | Se produce el 70% con diversidad nutricional y pertinencia cultural.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img26.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Participación de la familia en procesos comunitarios
                p.mb-3 Mide el nivel de involucramiento de la familia en espacios comunitarios orientados a la resolución de problemáticas colectivas. Fortalece la cohesión social, el sentido de pertenencia y la capacidad organizativa territorial. 
                h4 Medición: 
                ol.lista-ol--cuadro
                  li
                    .lista-ol--cuadro__vineta
                      span 1
                    | Familia aislada, sin participación.
                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    | Participación esporádica (una vez al año).
                  li 
                    .lista-ol--cuadro__vineta
                      span 3
                    | Participación ocasional (dos veces al año).
                  li 
                    .lista-ol--cuadro__vineta
                      span 4
                    | Participación frecuente (tres o más veces al año) sin toma de decisiones.
                  li 
                    .lista-ol--cuadro__vineta
                      span 5
                    | Participación permanente con presencia en espacios de decisión.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img28.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Gestión del conocimiento agroecológico
                p.mb-3 Estima la vinculación de la familia en procesos de enseñanza, aprendizaje, investigación y diálogo comunitario en torno a la agroecología. Potencia la innovación local, la apropiación de saberes y el fortalecimiento de redes de aprendizaje. 
                h4 Medición: 
                ol.lista-ol--cuadro
                  li
                    .lista-ol--cuadro__vineta
                      span 1
                    | Sin participación ni investigación.
                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    | Participa solo en procesos de transformación.
                  li 
                    .lista-ol--cuadro__vineta
                      span 3
                    | Recibe intercambios o giras sin investigar.
                  li 
                    .lista-ol--cuadro__vineta
                      span 4
                    | Participa en enseñanza, investiga y comparte con la comunidad.
                  li 
                    .lista-ol--cuadro__vineta
                      span 5
                    | Enseña, investiga, comparte y es referente agroecológico.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img25.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Trabajo y uso del tiempo en la agricultura familiar
                p.mb-3 Analiza la distribución del tiempo, especialmente de las mujeres, entre trabajo productivo, cuidado, autocuidado y descanso. Visibiliza cargas de trabajo, promueve el equilibrio y fortalece la equidad familiar. 
                h4 Medición: 
                ol.lista-ol--cuadro
                  li
                    .lista-ol--cuadro__vineta
                      span 1
                    | Todo el tiempo dedicado al cuidado, sin autocuidado ni producción.
                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    | Mayor dedicación al cuidado, poco tiempo productivo y sin descanso.
                  li 
                    .lista-ol--cuadro__vineta
                      span 3
                    | Balance entre cuidado y producción, sin autocuidado.
                  li 
                    .lista-ol--cuadro__vineta
                      span 4
                    | Tiempo para producción, autocuidado y descanso con persistencia de carga de cuidado.
                  li 
                    .lista-ol--cuadro__vineta
                      span 5
                    | Equilibrio entre cuidado, producción, autocuidado y descanso.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img27.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Control y decisión sobre el ingreso
                p.mb-3 Evalúa quién toma decisiones sobre el uso, control y beneficio del ingreso generado en la finca. Promueve la equidad intrafamiliar, la corresponsabilidad económica y la autonomía compartida. 
                h4 Medición: 
                ol.lista-ol--cuadro
                  li
                    .lista-ol--cuadro__vineta
                      span 1
                    | Una sola persona controla el ingreso sin consulta.
                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    | Controla y consulta de forma ocasional.
                  li 
                    .lista-ol--cuadro__vineta
                      span 3
                    | Control compartido, pero una persona decide.
                  li 
                    .lista-ol--cuadro__vineta
                      span 4
                    | Decisiones compartidas entre adultos.
                  li 
                    .lista-ol--cuadro__vineta
                      span 5
                    | Participación activa y equitativa de todos los miembros del hogar.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img29.png', alt='' style="max-width: 500px").m-auto

    <!-- TITULOS TERCER NIVEL -->
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img55.svg" style="max-width: 60px").m-auto
      .col
        h3 Ejemplo práctico: Finca Renacer 
    
    .fondo___color_2
      .px-5

        p.mb-5 En la estación socioeconómica, la finca “El Renacer” evidencia una dinámica familiar activa y comprometida con el proceso agroecológico. La familia participa en espacios comunitarios y forma parte de una red local de intercambio de semillas, lo que fortalece la cohesión territorial y la soberanía alimentaria. Se reconocen avances importantes en la autosuficiencia alimentaria, con más del 50% de los alimentos producidos en la finca, y en la gestión del conocimiento agroecológico, donde uno de los integrantes participa en giras y procesos de formación.

        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img30.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Sin embargo, la evaluación también visibilizó aspectos que requieren fortalecimiento. El control sobre el ingreso aún se concentra en una sola persona, lo que limita la equidad en la toma de decisiones económicas dentro del hogar. Además, aunque la familia pertenece a una organización de comercialización, su participación es esporádica y la venta directa sigue siendo limitada, lo que mantiene cierta dependencia de intermediarios. Estos hallazgos permiten identificar oportunidades para mejorar la corresponsabilidad económica y fortalecer la autonomía comercial desde una perspectiva comunitaria.
        
        p.mb-5 La evaluación de los indicadores es:
    
    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 2.
          span Valoración de indicadores socioeconómicos en la finca
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Indicador
                th.ajuste-border-tabla.texto-left Condición observada en la finca
                th.texto-left Valoración (1-5)
            tbody
              tr
                td.ajuste-border-tabla.texto-left #[b Participación comunitaria]
                td.ajuste-border-tabla.texto-left La familia participa en reuniones comunitarias y forma parte de una red de intercambio de semillas.
                td.texto-left 4
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b Equidad de género]
                td.ajuste-border-tabla.texto-left Roles distribuidos de forma parcial; las mujeres participan en decisiones productivas pero no económicas.
                td.texto-left 3
              tr
                td.ajuste-border-tabla.texto-left #[b Generación y control de ingresos]
                td.ajuste-border-tabla.texto-left Una persona toma la mayoría de decisiones económicas sin consulta regular al resto del hogar.
                td.texto-left 2
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b Autosuficiencia alimentaria familiar]
                td.ajuste-border-tabla.texto-left Más del 50% de los alimentos se producen en la finca, con diversidad nutricional y pertinencia cultural.
                td.texto-left 4
              tr
                td.ajuste-border-tabla.texto-left #[b Organización para la comercialización]
                td.ajuste-border-tabla.texto-left La familia pertenece a una organización, pero vende solo una parte de sus productos directamente.
                td.texto-left 3
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b Gestión del conocimiento agroecológico]
                td.ajuste-border-tabla.texto-left Un integrante participa en giras y procesos de formación; se comparten saberes con la comunidad.
                td.texto-left 4
              tr
                td.ajuste-border-tabla.texto-left #[b Trabajo y uso del tiempo en la agricultura familiar]
                td.ajuste-border-tabla.texto-left Las mujeres logran balance entre trabajo productivo y cuidado, pero con poco tiempo para descanso.
                td.texto-left 3
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left 
                td.ajuste-border-tabla.texto-left #[b PROMEDIO]
                td.texto-left 3.3

    p.mb-0 #[b Condición socioeconómica del predio]: la finca se encuentra en un nivel #[b intermedio-alto], con avances claros en participación comunitaria, autosuficiencia alimentaria y gestión del conocimiento, pero con aspectos por mejorar en el control de ingresos y la organización para la comercialización. 

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
