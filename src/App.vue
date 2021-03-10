<template>
  <div id="app">
    <Menu />
    <Home />
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'

import {WOW} from 'wowjs'

export default {
  name: 'App',
  components: {
    Home, Menu
  },
  mounted() { 
    new WOW().init()
  },
}
</script>

<style lang="scss">
  @import "./assets/sass/main.scss";
</style>