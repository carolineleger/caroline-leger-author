<template>
  <section class="couvertures" id="couvertures">
    <div class="main-content">
      <div class="left w-50">
        <div class="subtitle text-center">Mais aussi... Des couvertures</div>
        <p>
          Le saviez-tu ? Je crée aussi des couvertures !<br />
          Si vous cherchez une illustration pour votre roman et que vous aimez
          les styles mêlant effets d'aquarelle et jeux de silhouettes, vous
          apprécierez peut-être mon travail.
        </p>
        <p>
          Je crée des couvertures pré-faites que vous pouvez retrouver sur le
          site The Book Cover Designer. Si vous en voulez une personnalisée,
          n'hésitez pas à me contacter directement!
        </p>

        <button v-on:click="goToBookDesigner()">
          Voir les couvertures disponibles
        </button>
      </div>
      <div class="right w-50">
        <img
          src="../assets/images/covers.jpg"
          alt="couvertures"
          class="wow zoomIn"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
function goToBookDesigner() {
  window.open("https://thebookcoverdesigner.com/designers/elyon/", "_blank");
}
</script>
