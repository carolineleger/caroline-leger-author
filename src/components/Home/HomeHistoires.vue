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
        <!-- slide 1 -->
        <v-carousel-item>
          <div class="third">
            <div class="col">
              <img
                src="../../assets/images/echo.png"
                alt="echo des reves"
                class="echo wow flipInY"
              />
            </div>
            <div class="col">
              <h2>L'écho des rêves</h2>
              <p>
                <img src="../../assets/images/book.png" alt="" width="23" /> +
                <b>50 000</b> lectures<br />
                <img src="../../assets/images/star.png" alt="" width="23" /> +
                <b>5000</b> likes <br />
                <img src="../../assets/images/medal.png" alt="" width="23" />
                Gagnant du concours Chantilly Awards 2019<br />
                <img src="../../assets/images/medal.png" alt="" width="23" />
                Gagnant du concours Murmures Littéraires 2021<br />
                <br />
                Saga en 4 tomes en cours de publication aux éditions
                l'Alchimiste ! <br />

                <button v-on:click="goAlchimiste()">Commande ici !</button>
              </p>
            </div>
            <div class="col">
              <b>Résumé:</b>
              <p>
                Rayane fait partie des Rêveurs, un clan dont les membres ont le
                pouvoir d’épier les songes d’autrui.
              </p>

              <p>
                Alors que son statut et son éducation la destinaient à une
                carrière prestigieuse, mais soumise à de nombreuses contraintes,
                elle décide de renier son héritage pour rejoindre une compagnie
                de cirque itinérante dont elle devient l’une des acrobates.
              </p>

              <p>
                Huit ans plus tard, elle reçoit la visite inattendue de sa sœur
                Ester qui lui intime de rentrer au domaine familial pour les
                besoins d’une enquête. Un membre éminent des Mnésiques, un autre
                clan proche du pouvoir, et membre de l’élite du pays, est mort
                dans des conditions mystérieuses. Et tout semble indiquer
                l’implication d’un Rêveur...
              </p>
            </div>
          </div>
        </v-carousel-item>

        <!-- slide 2 -->
        <v-carousel-item>
          <div class="third">
            <div class="col">
              <img
                src="../../assets/images/oneiroi.png"
                alt="oneiroi"
                class="oneroi wow flipInY"
              />
            </div>
            <div class="col">
              <h2>
                Exploration et frontières culturelles – Anthologie steampunk
                vol. 3
              </h2>
              <p>
                1 nouvelle steampunk. Anthologie parue aux editions Oneiroi
                <br />

                <button v-on:click="goOneiroi()">Achetez ici !</button>
              </p>
            </div>
            <div class="col">
              <b>Résumé:</b>
              <p>
                Le steampunk vous invite à explorer les origines de notre
                société en déambulant dans des passés alternatifs. Avec cette
                anthologie, vous voyagerez aux quatre coins du monde : les
                barrières entre les êtres ne sont pas toujours là où on les
                attend. Traditions, religions, langage, mœurs… Les frontières
                qui séparent les humains sont multiples et trompeuses. Et si la
                plus grande de toutes n’était autre que le temps ?
              </p>
              <p>
                Pour le meilleur ou pour le pire, ou juste différemment. Prenez
                place dans notre machine à remonter le temps !
              </p>
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  </section>
</template>

<script setup>
function goOneiroi() {
  window.open(
    "https://editionsoneiroi.fr/produit/exploration-et-frontieres-culturelles/",
    "_blank"
  );
}
function goAlchimiste() {
  window.open(
    "https://editionslalchimiste.com/produit/lecho-des-reves-tome-1-la-traque-des-reveurs/",
    "_blank"
  );
}
</script>
