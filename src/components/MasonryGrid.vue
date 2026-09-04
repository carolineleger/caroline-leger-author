<template>
  <div ref="container">
    <slot />
  </div>
</template>

<script>
import { MasonryGrid as MasonryGridCore } from "@egjs/grid";

/**
 * Thin Vue 3 wrapper around the vanilla @egjs/grid masonry layout.
 *
 * The official @egjs/vue-grid adapter (1.18.0) builds its vnodes by hand
 * instead of calling Vue's h(), so the objects it returns are missing the
 * __v_isVNode flag. Since Vue 3.5, normalizeVNode() checks that flag and
 * falls back to String(child), which renders the grid as "[object Object]"
 * and leaves $refs.container undefined. Wrapping the vanilla grid ourselves
 * avoids the broken adapter entirely.
 */
export default {
  name: "MasonryGrid",
  props: {
    gap: { type: Number, default: 0 },
    align: { type: String, default: "start" },
  },
  mounted() {
    this.grid = new MasonryGridCore(this.$refs.container, {
      gap: this.gap,
      align: this.align,
      // Images are lazy-loaded and have no height until they arrive, so
      // re-run the layout whenever a child resizes.
      observeChildren: true,
      useResizeObserver: true,
    });
    this.grid.renderItems();
  },
  watch: {
    gap(value) {
      this.grid.gap = value;
      this.grid.renderItems();
    },
    align(value) {
      this.grid.align = value;
      this.grid.renderItems();
    },
  },
  beforeUnmount() {
    if (this.grid) {
      this.grid.destroy();
    }
  },
};
</script>
