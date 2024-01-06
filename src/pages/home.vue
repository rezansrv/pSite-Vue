<template>
  <div >
    <Head/>
    <Glitch/>
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
*{
  padding: 0;
  margin: 0;
  background-color: #111827;
}
</style>
