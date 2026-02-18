<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .fondo___color_1
      .px-5
    
        p.mb-5 El componente formativo Valoración y fomento de la dimensión social,  tiene como propósito brindar a los aprendices herramientas para analizar, comprender y fortalecer la dimensión social y económica de los sistemas prediales como fundamento para su transición. Se abordan conceptos y técnicas de valoración de indicadores socioeconómicos, integrando metodologías participativas, registros familiares y comunitarios, y análisis de dinámicas organizativas y de mercado.

        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/intro/img2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Se promueve la identificación de fortalezas y limitaciones en aspectos como la generación de ingresos, la autosuficiencia alimentaria, la participación comunitaria, la equidad de género y el control sobre las decisiones económicas, articulando estos procesos con el bienestar familiar y el fortalecimiento organizativo. Además, se trabaja en la sistematización de experiencias sociales y económicas, el uso de los indicadores del IPPTA y la formulación de propuestas de acción social contextualizadas, favoreciendo la cohesión comunitaria, la autonomía territorial y la sostenibilidad agroecológica.

        .row.align-items-center.m-0.box___style_1(data-aos="zoom-in")
          .col-xl
            p.mb-0 Asimismo, se reconoce el valor de las prácticas emergentes construidas por familias rurales, organizaciones comunitarias y escuelas agroecológicas, que enriquecen el repertorio socioeconómico de la transición agroecológica desde la experiencia, la innovación local y la construcción colectiva de soluciones frente a la crisis socioeconómica.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/intro/img3.svg", alt="" ).m-auto

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
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
