<template>
  <div id="app">
    <Menu />
    <Home />
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Home, Menu
  }
}
</script>

<style lang="scss">
  @import "./assets/sass/main.scss";
</style>