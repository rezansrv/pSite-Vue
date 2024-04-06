<template>
  <div>
    <Head/>
    <Main/>
    <FooterApp/>
  </div>
</template>

<script>
import Head from '../components/HeaderApp.vue';
import Main from '../components/WritingMain.vue'
import FooterApp from '../components/FooterApp.vue'

export default {
  name: 'App',
  components: {
    Head,
    Main,
    FooterApp
  }
}
</script>

