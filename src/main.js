import { createApp } from "vue";
import router from "./router"; // Import the router setup
import App from "./App.vue";
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App).use(router).use(vuetify); // Use router and vuetify plugins

app.mount("#app");
