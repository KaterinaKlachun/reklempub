import { createRouter, createWebHistory } from 'vue-router';

// Ленивый импорт для страниц с добавлением компонентов для загрузки и ошибок
const HomePage = () => import('../views/HomePage.vue');
const AboutPage = () => import('../views/AboutPage.vue');
const CatalogPage = () => import('../views/CatalogPage.vue');
const ContactsPage = () => import('../views/ContactsPage.vue');
const NewsPage = () => import('../views/NewsPage.vue');
const PortfolioPage = () => import('../views/PortfolioPage.vue');
const ServicesPage = () => import('../views/ServicesPage.vue');

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/catalog', component: CatalogPage },
  { path: '/contacts', component: ContactsPage },
  { path: '/news', component: NewsPage },
  { path: '/portfolio', component: PortfolioPage },
  { path: '/services', component: ServicesPage },
  // Применение ленивой загрузки для ProductPage
  {
    path: '/product/:category/:id',
    name: 'ProductPage',
    component: () => import('../views/ProductPage.vue'), // Ленивый импорт
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 }; // Перемещаемся в верхнюю часть страницы
    }
  }
});

export default router;
