<template>
  <div id="app">
    <MainMenu />
    <router-view />
    <MainContact />
  </div>
</template>

<script>
import MainMenu from "./components/MainMenu.vue";
import MainContact from "./components/MainContact.vue";

export default {
  components: {
    MainMenu,
    MainContact,
  },
};
</script>

<style lang="scss">
@import "./assets/sass/main.scss";
</style>
