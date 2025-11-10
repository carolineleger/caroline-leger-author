<template>
  <div class="main-content">
    <h1 class="mb-6">Below are some examples of covers I've designed</h1>
    <p>
      Known as Elyon, I'm also a book cover designer! You can buy some premade
      or <a href="mailto:linoal4e@hotmail.com">contact me</a> for custom ones.
    </p>
    <MasonryGrid class="portfolio" :gap="gap" :align="align">
      <div v-for="(item, index) in portfolioItems" :key="index" class="item">
        <img
          :src="require(`@/assets/images/portfolio/book (${index + 1}).jpg`)"
          alt="Portfolio Item"
          loading="lazy"
        />
      </div>
    </MasonryGrid>
    <div class="text-center">
      <button v-on:click="goToBookDesigner()">View premade covers</button>&nbsp;
      <button @click="redirectToContact">Contact me</button>
    </div>
  </div>
</template>

<script>
import { MasonryGrid } from "@egjs/vue-grid";

export default {
  data() {
    return {
      gap: 5,
      align: "justify",
      portfolioItems: [],
    };
  },
  components: {
    MasonryGrid,
  },
  mounted() {
    this.portfolioItems = Array.from(
      { length: 60 },
      (_, i) => `@/assets/images/portfolio/book (${i + 1}).jpg`
    );
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
.portfolio {
  display: flex;
  flex-wrap: wrap;
  height: 100% !important;
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
