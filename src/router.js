import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import PortfolioCovers from "./components/PortfolioCovers.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
    meta: {
      title: "Caroline Léger - Autrice de l'imaginaire",
      description:
        "Caroline Léger, autrice de romans de l'imaginaire. Découvrez sa saga fantasy L'Écho des rêves, publiée chez l'Alchimiste et Oneiroi.",
    },
  },
  {
    path: "/portfolio",
    component: PortfolioCovers,
    meta: {
      title: "Portfolio - Couvertures de livres | Caroline Léger",
      description:
        "Découvrez les créations de couvertures de livres de Caroline Léger. Cover design watercolor sur mesure.",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  if (to.meta.description) {
    const tag = document.querySelector('meta[name="description"]');
    if (tag) tag.setAttribute("content", to.meta.description);
  }
});

export default router;
