<template>
 <header>
   <div class="main-content">
    <div class="left w-50">
      <div class="cover">
        <img src="../../assets/images/oneiroi.png" alt="exploration et frontieres culturelles" class="wow slideInUp"/>
      </div>
    </div>

    <div class="right w-50">
      <p class="subtitle">À la une</p>
      <h1>Anthologie Steampunk - Exploration et frontières culturelles</h1>
      <p>Publiée aux éditions Oneiroi</p>
      <button v-on:click="goOneiroi()">Disponible ici !</button>
    </div>
   </div>

   <div class="floor"></div>
 </header>
</template>

<script>
export default {
  name: 'Header',
    methods: {
    goOneiroi() {
      window.open("https://editionsoneiroi.fr/vapeur-mecanique/exploration-frontieres-culturelles/", '_blank')
    }
  }
}
</script>