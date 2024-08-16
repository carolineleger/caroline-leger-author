import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import PortfolioCovers from "./components/PortfolioCovers.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/portfolio", component: PortfolioCovers },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
