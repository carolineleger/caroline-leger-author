<template>
  <header>
    <div class="main-content">
      <div class="left w-50">
        <div class="cover">
          <img
            src="../../assets/images/echo.png"
            alt="exploration et frontieres culturelles"
            class="wow slideInUp"
          />
        </div>
      </div>

      <div class="right w-50">
        <p class="subtitle">À la une</p>
        <h1>L'Écho des rêves - Quadrilogie de fantasy</h1>
        <p>Publiée aux Éditions l'Alchimiste</p>
        <button v-on:click="goAlchimiste()">Commande ici !</button>
      </div>
    </div>

    <div class="floor"></div>
  </header>
</template>

<script setup>
function goAlchimiste() {
  window.open(
    "https://editionslalchimiste.com/produit/lecho-des-reves-tome-1-la-traque-des-reveurs/",
    "_blank"
  );
}
</script>
