<template>
    <div class="carrusel" style="margin-top= 2%!important">
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
      caption="CRUZ CAFUNÉ"
      img-src='../assets/novedad1.png'
    ></b-carousel-slide>
    <b-carousel-slide
      caption="BB TRICKZ"
      img-src="../assets/novedad2.png"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="LUCHO RK"
      img-src="../assets/novedad3.png"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="CANDELA Y POL. EL DÚO DINÁMICO"
      img-src='../assets/novedad4.png'
    ></b-carousel-slide>
  </b-carousel>
</div>
</template>

<style>
.carrusel{
    margin-block-start: 100px;
    margin-inline-end: 10px;
}
</style>
