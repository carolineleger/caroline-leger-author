<template>
  <section class="histoires" id="histoires">
    <div class="main-content">
      <div class="subtitle text-center">Mes histoires</div>
      <div class="third">
        <div class="col">
          <img src="../../assets/images/echo.png" alt="echo des reves" class="echo wow flipInY"/>
        </div>
        <div class="col">
          <h2>L'écho des rêves</h2>
          <p>
            <img src="../../assets/images/book.png" alt="" width="23"/> + <b>45 000</b> lectures<br/>
            <img src="../../assets/images/star.png" alt="" width="23"/> + <b>5000</b> likes <br/>
            <img src="../../assets/images/medal.png" alt="" width="23"/> Gagnant du concours Chantilly Awards 2019<br/> 
            <img src="../../assets/images/medal.png" alt="" width="23"/> Gagnant du concours Murmures Littéraires 2021<br/> <br/>
            Sous contrat d'édition, parution prévue pour fin 2022/début 2023 chez les éditions Onyx ! <br/>

            <button v-on:click="goToWattpad()">Lire les premiers chapitres</button>
          </p>
        </div>
        <div class="col">
          <b>Résumé:</b>
          <p>Raiane fait partie des Rêveurs, un clan dont les membres ont le pouvoir d'épier les songes d'autrui.<br/><br/>

  Alors que son statut et son éducation la destinaient à une carrière prestigieuse mais soumise à de nombreuses contraintes, elle décide de renier son héritage pour rejoindre une compagnie de cirque itinérante dont elle devient l'une des acrobates.<br/><br/>

  Huit ans plus tard, elle reçoit la visite inattendue de sa sœur Ester qui lui intime de rentrer au domaine familial pour les besoins d'une enquête.<br/><br/>

  Un membre éminent des Mnésiques, un autre clan proche du pouvoir, est mort dans des conditions mystérieuses. Et tout semble indiquer l'implication d'un Rêveur...</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Histoires',
  methods: {
    goToWattpad() {
      window.open("https://www.wattpad.com/story/92312892-l'%C3%A9cho-des-r%C3%AAves", '_blank')
    }
  }
}
</script>