import { createRouter, createWebHashHistory } from 'vue-router';

// Синхронный импорт всех компонентов
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import CatalogPage from '../views/CatalogPage.vue';
import ContactsPage from '../views/ContactsPage.vue';
import NewsPage from '../views/NewsPage.vue';
import PortfolioPage from '../views/PortfolioPage.vue';
import ServicesPage from '../views/ServicesPage.vue';
import ProductPage from '../views/ProductPage.vue';
import ServicePage from '@/views/ServicePage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/catalog', component: CatalogPage },
  { path: '/contacts', component: ContactsPage },
  { path: '/news', component: NewsPage },
  { path: '/portfolio', component: PortfolioPage },
  { path: '/services', component: ServicesPage },
  {
    path: '/product/:category/:id',
    name: 'ProductPage',
    component: ProductPage,
    props: true,
  },
  {
    path: '/service/:id',
    name: 'service',
    component: ServicePage,
    props: true, // Позволяет передавать параметры маршрута как пропсы
  },
];

const router = createRouter({
  history: createWebHashHistory(), // Используем hash-режим для маршрутизации
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 }; // Перемещаемся в верхнюю часть страницы
    }
  },
});

export default router;
