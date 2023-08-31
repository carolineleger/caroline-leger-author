<template>
  <MainMenu />
  <div class="home">
    <HomeHeader />
    <HomeBiographie />
    <HomeHistoires />
    <HomeCouvertures />
    <MainContact />
  </div>
</template>

<script>
import { WOW } from "wowjs";
import MainMenu from "./components/MainMenu.vue";
import HomeHeader from "./components/HomeHeader.vue";
import HomeBiographie from "./components/HomeBiographie.vue";
import HomeHistoires from "./components/HomeHistoires.vue";
import HomeCouvertures from "./components/HomeCouvertures.vue";
import MainContact from "./components/MainContact.vue";

export default {
  name: "App",
  components: {
    MainMenu,
    HomeHeader,
    HomeBiographie,
    HomeHistoires,
    HomeCouvertures,
    MainContact,
  },
  mounted() {
    new WOW().init();
  },
};
</script>

<style lang="scss">
@import "./assets/sass/main.scss";
</style>
