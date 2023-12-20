<template>
  <div id="app">
    <div class="container-fluid">
      <Menu/>
      <router-view/>
    </div>
    <div>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Menu from './components/MenuComp.vue'
import Footer from './components/FooterComp.vue'

export default {
  name: "app",
  components: {
    Menu,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #fffffff;
}

nav a.router-link-exact-active {
  color: #000000!important;
}
</style>
