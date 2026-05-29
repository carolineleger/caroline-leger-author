<template>
  <section class="histoires" id="histoires">
    <div class="main-content">
      <div class="subtitle text-center">Mes histoires</div>

      <v-carousel
        show-arrows="hover"
        hide-delimiter-background
        :interval="8000"
        height="auto"
        cycle
      >
        <v-carousel-item v-for="histoire in histoires" :key="histoire.id">
          <div class="third">
            <div class="col">
              <img
                :src="getImageUrl(histoire.image)"
                :alt="histoire.imageAlt"
                :class="histoire.imageClass"
                :width="histoire.imageWidth || undefined"
              />
            </div>
            <div class="col">
              <h2>{{ histoire.title }}</h2>
              <p>
                <template v-if="histoire.stats">
                  <span v-for="stat in histoire.stats" :key="stat.html">
                    <img :src="getImageUrl(stat.icon + '.png')" :alt="stat.icon" width="23" />
                    <span v-html="stat.html"></span><br />
                  </span>
                  <br />
                </template>
                {{ histoire.description }}
                <template v-if="histoire.linkLabel">
                  <br />
                  <button @click="openLink(histoire.linkUrl)">{{ histoire.linkLabel }}</button>
                </template>
              </p>
            </div>
            <div class="col">
              <b>Résumé :</b>
              <p v-for="(para, i) in histoire.summary" :key="i">{{ para }}</p>
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  </section>
</template>

<script setup>
import histoires from '../../data/histoires.json'

function getImageUrl(filename) {
  return require(`../../assets/images/${filename}`)
}

function openLink(url) {
  window.open(url, '_blank')
}
</script>
