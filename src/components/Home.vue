<template>
  <div class="home">
    <Header />
    <Biographie />
    <Histoires />
    <Couvertures />
    <Contact />
  </div>
</template>

<script>
import Header from './Home/Header.vue'
import Biographie from './Home/Biographie.vue'
import Histoires from './Home/Histoires.vue'
import Couvertures from './Home/Couvertures.vue'
import Contact from './Contact.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Biographie,
    Histoires,
    Couvertures,
    Contact
  }
}
</script>

