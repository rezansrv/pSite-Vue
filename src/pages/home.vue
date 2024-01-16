<template>
  <div>
    <Head/>
    <Glitch class="animate__animated animate__backInUp"/>
    <AboutME/>
    <FooterApp/>
  </div>
</template>

<script>
import Glitch from '../components/GlitchApp.vue';
import Head from '../components/HeaderApp.vue';
import AboutME from '../components/AboutMe.vue';
import FooterApp from '../components/FooterApp.vue'

export default {
  name: 'App',
  components: {
    Glitch,
    Head,
    AboutME,
    FooterApp
  }
}
</script>

<style>

</style>
