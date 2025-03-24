import { createRouter, createWebHashHistory } from 'vue-router';

// Ленивый импорт всех компонентов
const HomePage = () => import('../views/HomePage.vue');
const AboutPage = () => import('../views/AboutPage.vue');
const CatalogPage = () => import('../views/CatalogPage.vue');
const ContactsPage = () => import('../views/ContactsPage.vue');
const NewsPage = () => import('../views/NewsPage.vue');
const PortfolioPage = () => import('../views/PortfolioPage.vue');
const ProductPage = () => import('../views/ProductPage.vue');
const ServicePage = () => import('@/views/ServicePage.vue');
const ReviewPage = () => import('@/views/ReviewPage.vue');

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/catalog', component: CatalogPage },
  { path: '/contacts', component: ContactsPage },
  { path: '/news', component: NewsPage },
  { path: '/portfolio', component: PortfolioPage },
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
  { path: '/review', component: ReviewPage },
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
