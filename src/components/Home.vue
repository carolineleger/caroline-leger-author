<template>
  <div class="home">
    <Header />
    <Biographie />
    <Histoires />
    <Contact />
  </div>
</template>

<script>
import Header from './Home/Header.vue'
import Biographie from './Home/Biographie.vue'
import Histoires from './Home/Histoires.vue'
import Contact from './Contact.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Biographie,
    Histoires,
    Contact
  }
}
</script>

