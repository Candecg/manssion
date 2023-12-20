<template>
  <div class="home">
    <Slide />
    <section class="justify-content-lg-between p-4 border-bottom">
      <div class="me-5 d-lg-block">
        <h2>SI, ESTÁS EN EL SITIO ADECUADO PARA ENTERARTE DE TODO</h2>
        <p>Desde las novedades más recientes hasta los temas para recordar</p>
      </div>
    </section>

    <div style="height: 100px;"></div>


    <div class="row text-center">
      <!-- Primera Tarjeta -->
      <div class="col-md-4 mb-4">
        <div class="card mx-auto" style="width: 70%;">
          <img src="../assets/PLAYLIST.png" class="card-img-top" alt="NUESTRA PLAYLIST">
          <div class="card-body">
            <h5 class="card-title">ESCUCHA NUESTRA PLAYLIST</h5>
            <p class="card-text">Os dejamos por aquí nuestra Playlist. Esperamos que compartáis nuestros gustos, si no es así siempre podréis descubrir nueva música chavales;)</p>
            <a href="https://open.spotify.com/playlist/6awgCghkH4VsbMCIrAi5OY?si=lBGxrYDoRoe_zJH4TdE2Cg&pi=e-0J-75QTkSVma" class="btn btn-primary">ESCÚCHALA BRO</a>
          </div>
        </div>
      </div>

    
      <div class="col-md-4 mb-4">
        <div class="card mx-auto" style="width: 70%;">
          <img src="../assets/SAIKO.png" class="card-img-top" alt="saiko">
          <div class="card-body">
            <h5 class="card-title">¡SAIKO ANUNCIA EP!</h5>
            <p class="card-text">Saiko nos ha anunciado su nuevo EP de 7 canciones. Ya sabemos que una de ellas es un ft. con Yandel y Sky. ¿Con qué creéis que nos sorprenderá el nuevo talento español?</p>
            <a href="https://x.com/yandeloficial/status/1733945584371777769?s=46" class="btn btn-primary">AQUÍ TENÉIS EL PREVIEW</a>
          </div>
        </div>
      </div>

   
      <div class="col-md-4 mb-4">
        <div class="card mx-auto" style="width: 70%;">
          <img src="../assets/losx.png" class="card-img-top" alt="delgado">
          <div class="card-body">
            <h5 class="card-title">LOS XAVALES ANUNCIAN FIESTA EN SEVILLA</h5>
            <p class="card-text">Los Xavales anuncian una fiesta en Sevilla post-Latin Grammys. Traerán sorpresas y artistas increíbles. ¿Estarás por allí para verlo? Spoiler: Nosotros sí ;)</p>
            <a href="https://m.twitch.tv/losxavales00" class="btn btn-primary">OBSERVA QUE TRAMAN</a>
          </div>
        </div>
      </div>
    </div>

    <div style="height: 100px;"></div>
  </div>
</template>

<script>
import Slide from '@/components/SlideComp.vue';

export default {
  name: 'HomeView',
  components: {
    Slide,
  },
};
</script>

