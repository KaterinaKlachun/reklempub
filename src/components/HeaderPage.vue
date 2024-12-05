<template>
  <!-- Шапка сайта -->
  <header>
    <div class="wrapper">
      <nav id="head">
        <!-- Логотип -->
        <div class="logo">
          <router-link to="/"><img src="@/assets/img/header/logo.svg" alt="Logo" /></router-link>
        </div>

        <!-- Ссылки навигации -->
        <ul class="nav-links">
          <li><router-link to="/about"><p>О компании</p></router-link></li>
          <li><router-link to="/catalog"><p>Каталог</p></router-link></li>
          <li><router-link to="/contacts"><p>Контакты</p></router-link></li>
          <li>
            <img
              src="@/assets/img/header/search.svg"
              alt="Поиск"
              @click="toggleSearch"
            />
          </li>
        </ul>

        <!-- Иконки пользователя и корзины -->
        <div class="icons">
          <a href="#"><img src="@/assets/img/header/user.svg" alt="Личный кабинет" /></a>
          <a href="#"><img src="@/assets/img/header/shop.svg" alt="Корзина" /></a>
        </div>
      </nav>

      <!-- Поисковая панель -->
      <div v-if="isSearchVisible" class="search-container">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Введите запрос"
          @input="performSearch"
        />
        <div v-if="results.length" class="search-results">
          <ul>
            <li v-for="result in results" :key="result.page">
              <router-link :to="result.link">
                {{ result.page }} — {{ result.query }}
              </router-link>
            </li>
          </ul>
        </div>
        <p v-else class="no-results">Совпадений не найдено</p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderPage",
  data() {
    return {
      isSearchVisible: false, // Видимость поисковой панели
      searchQuery: "", // Запрос пользователя
      results: [], // Результаты поиска
      pages: [
        { page: "О компании", link: "/about", content: "Информация о компании" },
        { page: "Каталог", link: "/catalog", content: "Список товаров" },
        { page: "Услуги", link: "/services", content: "Описание услуг" },
        { page: "Контакты", link: "/contacts", content: "Свяжитесь с нами" },
        { page: "Портфолио", link: "/portfolio", content: "Готовые работы" },
      ],
    };
  },
  methods: {
    // Переключение видимости поиска
    toggleSearch() {
      this.isSearchVisible = !this.isSearchVisible;
      this.searchQuery = "";
      this.results = [];
    },
    // Поиск по введенному запросу
    performSearch() {
      const query = this.searchQuery.toLowerCase().trim();
      if (query === "") {
        this.results = [];
        return;
      }
      this.results = this.pages.filter((page) =>
        page.page.toLowerCase().includes(query) ||
        page.content.toLowerCase().includes(query)
      );
    },
  },
};
</script>

<style scoped>
/* Стили для шапки сайта */
header {
  background-color: #f2f2f2;
  border-bottom: solid #e5e5e5 2px;
}

/* Ссылки */
header a {
  font-family: medium;
}

/* Контейнер */
.wrapper {
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
}

/* Навигация */
#head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
}

/* Логотип */
.logo img {
  width: 100%;
}

/* Ссылки навигации */
.nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-links li {
  display: flex;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
}

.nav-links p {
  font-family: medium;
  font-size: 1rem;
  color: black;
}

/* Иконки */
.icons {
  display: flex;
  gap: 10px;
}

.icons img {
  width: 50px;
}

/* Стили поиска */
.search-container {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}

.search-container input {
  width: 100%;
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-results {
  margin-top: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.search-results ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.search-results li {
  padding: 8px 12px;
  border-bottom: 1px solid #eee;
}

.search-results li:last-child {
  border-bottom: none;
}

.search-results a {
  text-decoration: none;
  color: #333;
}

.search-results a:hover {
  text-decoration: underline;
}

.no-results {
  margin-top: 10px;
  color: #999;
}
</style>
