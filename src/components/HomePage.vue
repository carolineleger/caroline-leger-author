<template>
  <div class="home">
    <HomeHeader />
    <HomeBiographie />
    <HomeHistoires />
    <HomeCouvertures />
  </div>
</template>

<script>
import HomeHeader from "./Home/HomeHeader.vue";
import HomeBiographie from "./Home/HomeBiographie.vue";
import HomeHistoires from "./Home/HomeHistoires.vue";
import HomeCouvertures from "./Home/HomeCouvertures.vue";

export default {
  components: {
    HomeHeader,
    HomeBiographie,
    HomeHistoires,
    HomeCouvertures,
  },
};
</script>
