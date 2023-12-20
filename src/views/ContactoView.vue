<template>
  <div class="page-container">
    <div class="container mt-4">
      <h1>¿Eres un artista emergente y necesitas visibilidad?</h1>
      <h3>Rellena este formulario y nos pondremos en contacto contigo</h3>
      <div style="height: 40px;"></div>
      <form @submit.prevent="submitForm">

        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre y apellidos:</label>
          <input type="text" class="form-control" id="nombre" v-model="formData.nombre" required>
        </div>

  <div class="mb-3">
          <label for="direccion" class="form-label">Nombre artístico:</label>
          <input type="text" class="form-control" id="direccion" v-model="formData.direccion" required>
        </div>
        
        <div class="mb-3">
          <label for="email" class="form-label">Correo electrónico:</label>
          <input type="email" class="form-control" id="email" v-model="formData.email" required>
        </div>

        <div class="mb-3">
          <label for="telefono" class="form-label">Número de teléfono:</label>
          <input type="tel" class="form-control" id="telefono" v-model="formData.telefono" required>
        </div>

        <div class="mb-3">
          <label for="direccion" class="form-label">Dirección:</label>
          <input type="text" class="form-control" id="direccion" v-model="formData.direccion" required>
        </div>

        <div class="mb-3">
          <label for="mensaje" class="form-label">Cuéntanos sobre ti y tu música:</label>
          <textarea class="form-control" id="mensaje" v-model="formData.mensaje" rows="4" required></textarea>
        </div>

        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    </div>

<div style="height: 40px;"></div>
     <div class="container mt-4">
      <h2>Si eres de LLeida o cercanías podremos tener una entrevista</h2>
      <p>Visítanos en Google Maps:</p>
      <iframe
        width="100%"
        height="400"
        frameborder="0"
        style="border:0"
        allowfullscreen=""
        loading="lazy"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59538.905163974106!2d0.635513974731778!3d41.61758924993676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a19dfb90cf87e5%3A0x319c7657d43bd425!2sLleida%2C%20Lleida%2C%20Spain!5e0!3m2!1sen!2sus!4v1640081240122!5m2!1sen!2sus"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nombre: '',
        email: '',
        telefono: '',
        direccion: '',
        mensaje: '',
      },
    };
  },
  methods: {
    submitForm() {
      // Lógica del formulario (envío de datos, etc.)
      console.log('Formulario enviado:', this.formData);
    },
  },
};
</script>

<style scoped>
.page-container {
  margin-top: 50px;
  padding: 20px;
}
</style>
