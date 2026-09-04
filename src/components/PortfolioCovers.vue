<template>
  <div class="main-content">
    <h1 class="mb-6">Below are some examples of covers I've designed</h1>
    <p>
      Known as Elyon, I'm also a book cover designer! You can buy some premade
      or <a href="mailto:linoal4e@hotmail.com">contact me</a> for custom ones.
    </p>
    <MasonryGrid class="portfolio" :gap="gap" :align="align">
      <div v-for="(item, index) in portfolioItems" :key="index" class="item">
        <img :src="item" alt="Portfolio Item" loading="lazy" />
      </div>
    </MasonryGrid>
    <div class="text-center">
      <button v-on:click="goToBookDesigner()">View premade covers</button>&nbsp;
      <button @click="redirectToContact">Contact me</button>
    </div>
  </div>
</template>

<script>
import MasonryGrid from "@/components/MasonryGrid.vue";

const covers = require.context(
  "@/assets/images/portfolio",
  false,
  /^\.\/book \(\d+\)\.jpg$/
);

const coverNumber = (key) => Number(key.match(/\((\d+)\)/)[1]);

const portfolioItems = covers
  .keys()
  .sort((a, b) => coverNumber(a) - coverNumber(b))
  .map((key) => covers(key));

export default {
  data() {
    return {
      gap: 5,
      align: "justify",
      portfolioItems,
    };
  },
  components: {
    MasonryGrid,
  },
  methods: {
    redirectToContact() {
      // Redirect to contact page or open email client
      window.open("mailto:linoal4e@hotmail.com", "_blank");
    },
    goToBookDesigner() {
      window.open(
        "https://thebookcoverdesigner.com/designers/elyon/",
        "_blank"
      );
    },
  },
};
</script>

<style scoped>
/* The grid absolutely positions the items and sets the container height
   inline, so the height must not be constrained here. .main-content is a
   flex container, so claim the full row width explicitly - otherwise this
   shrink-to-fits to 0 once the items leave the normal flow. */
.portfolio {
  position: relative;
  width: 100%;
}

.item {
  width: calc(33.333% - 10px); /* Adjust width as needed */
  margin: 0 5px;
}

/* Responsive styles */
@media (max-width: 768px) {
  .item {
    width: calc(50% - 10px); /* Adjust width as needed */
  }
}

@media (max-width: 480px) {
  .item {
    width: calc(100% - 10px); /* Adjust width as needed */
  }
}
</style>
