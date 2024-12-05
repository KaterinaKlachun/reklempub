<template>
  <div>
    <!-- Main Banner -->
    <section class="main-banner">
      <div class="txt">
        <h1>Планируете сделать <span>принт?</span><br>Вы пришли по адресу</h1>
        <p class="txt_banner">
          Reklem - только оптовая работа высокого качества с <br>индивидуальным подходом. Работаем с 2008 года.
        </p>
        <button class="catalog" @click="goToCatalog">Перейти в каталог</button>
      </div>
    </section>

    <!-- About Us -->
    <div class="wrapper">
      <section class="about">
        <div class="left">
          <h1><span>Пара слов</span> о нас,<br> производстве<br> и брендинге</h1>
          <p>В своём стремлении улучшить пользовательский<br> опыт мы упускаем, что ключевые особенности<br> структуры проекта опыт мы упускаем, что<br> ключевые особенности структуры проекта.</p>
          <button class="company_button" @click="goToAbout">О компании</button>
        </div>
        <div class="right">
          <img src="@/assets/img/main/key_cup.svg" alt="Клавиатура и кружка">
        </div>
      </section>
    </div>

    <!-- About Us 2 -->
    <div class="wrapper">
      <section class="about_2">
        <div class="card_about">
          <img src="@/assets/img/main/timer.svg" alt="Икона таймера">
          <p>Принт за 24 часа</p>
          <p id="opis">Некоторые заказы можем<br> произвести быстрее<br> суток</p>
        </div>
        <div class="card_about">
          <img src="@/assets/img/main/flash.svg" alt="Иконка молнии">
          <p>Быстрая доставка</p>
          <p id="opis">Сотрудничаем с<br> быстрыми и надежными<br> службами</p>
        </div>
        <div class="card_about">
          <img src="@/assets/img/main/box.svg" alt="Иконка опта">
          <p>Только ОПТ</p>
          <p id="opis">Работаем на большие<br> объемы брендинга</p>
        </div>
      </section>
    </div>

    <!-- Popular Products -->
    <div class="wrapper">
      <div class="popular">
        <div class="txt_popular">
          <h1>Популярные и новые<br><span>товары</span></h1>
        </div>
        <div class="cards">
          <div class="card" v-for="(product, index) in randomProducts" :key="index">
            <img :src="product.image_url" alt="Картинка продукта" />
            <p class="product-name">{{ product.title }}</p>
            <div class="card_footer_catalog">
              <button @click="goToProduct(product)">Выбрать вид</button>
              <p class="price">{{ product.price }} ₽</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Services -->
    <div class="wrapper">
      <section class="services">
        <h2>Популярные услуги</h2>
        <div class="service_cards">
          <div class="service_card">
            <img src="@/assets/img/main/gravir.svg" alt="Иконка гравировки" />
            <p id="service_card_heading">Гравировка</p>
            <p>Нанесем на изделия логотип, рисунок или надпись</p>
            <div class="card_footer_service">
              <button @click="goToService('engraving')">Подробнее <img src="@/assets/img/arrow_right.svg" alt="" /></button>
            </div>
          </div>
          <div class="service_card">
            <img src="@/assets/img/main/shlefov.svg" alt="Иконка шелкографии" />
            <p id="service_card_heading">Шелкография</p>
            <p>Изображения высокого качества на любых материалах</p>
            <div class="card_footer_service">
              <button @click="goToService('silk-screen')">Подробнее <img src="@/assets/img/arrow_right.svg" alt="" /></button>
            </div>
          </div>
          <div class="service_card">
            <img src="@/assets/img/main/tisnen.svg" alt="Иконка теснения" />
            <p id="service_card_heading">Тиснение</p>
            <p>Нанесение рельефного рисунка</p>
            <div class="card_footer_service">
              <button @click="goToService('embossing')">Подробнее <img src="@/assets/img/arrow_right.svg" alt="" /></button>
            </div>
          </div>
          <div class="service_card">
            <img src="@/assets/img/main/tampo.svg" alt="Иконка тампопечати" />
            <p id="service_card_heading">Тампопечать</p>
            <p>Перенос изображения с помощью силиконового валика</p>
            <div class="card_footer_service">
              <button @click="goToService('tampon-printing')">Подробнее <img src="@/assets/img/arrow_right.svg" alt="" /></button>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Categories -->

    <!-- Reviews -->
    <div class="company">
      <!-- Первая кнопка "Больше отзывов" -->
      <button class="button_reviews" @click="goToReview">Больше отзывов <img src="@/assets/img/main/review.svg" alt="Иконка отзывов"></button>
      <!-- Вторая кнопка "Подробнее" -->
      <button class="button_details" @click="goToPortfolio">Подробнее</button>
    </div>

    <!-- Events -->
    <div class="wrapper">
      <div class="events">
        <h1>Оставайтесь <span>в курсе</span><br><span>событий</span></h1>
        <div class="event">
          <div class="event1">
            <h1>Маски теперь в продаже</h1>
            <p>Принимая во внимание показатели успешности, синтетическое тестирование способствует повышению качества анализа существующих паттернов поведения. Противоположная точка зрения подразумевает.</p>
          </div>
          <div class="event2">
            <h1>Обновление сайта и новое позиционирование</h1>
            <p>Мы вынуждены отталкиваться от того, что начало повседневной работы по формированию позиции требует от нас анализа направлений по формированию анализа прогрессивного развития.</p>
          </div>
        </div>
        <div class="button_container">
          <button @click="goToNews">Все новости<img src="@/assets/img/main/new.svg" alt="Иконка нововстей"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import supabase from '@/supabase';

export default {
  name: "MainPage",
  data() {
    return {
      products: [],
      randomProducts: [] // Массив для 3 случайных товаров
    };
  },
  async created() {
    await this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      const { data, error } = await supabase
        .from('catalog_products')  // Имя таблицы
        .select('*');
      if (error) {
        console.error('Ошибка при получении товаров:', error);
        return;
      }
      this.products = data;
      this.shuffleProducts(); // Перемешиваем товары
    },
    goToCatalog() {
      this.$router.push("/catalog");
    },
    goToAbout() {
      this.$router.push("/about");
    },
    goToPortfolio() {
      this.$router.push("/portfolio");
    },
    goToNews() {
      this.$router.push("/news");
    },
    changeImage(color) {
      if (color === 'white') {
        this.arrowSrc = require('@/assets/img/arrow_right_white.svg'); // При наведении
      } else {
        this.arrowSrc = require('@/assets/img/arrow_right_green.svg'); // При выходе
      }
    },
    shuffleProducts() {
      // Перемешиваем товары случайным образом и берём 3 случайных
      this.randomProducts = [...this.products]
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
    },
    goToProduct(product) {
      // Проверяем, есть ли `category` и `id`
      if (product && product.category && product.id) {
        this.$router.push(`/product/${product.category}/${product.id}`); // Формируем маршрут
      } else {
        console.error("Товар не имеет категории или идентификатора:", product);
      }
    },
    goToService(serviceId) {
      this.$router.push({ name: 'service', params: { id: serviceId } });
    },
    goToReview() {
      this.$router.push("/review");
    },
  },
};
</script>

<style scoped>
/* Main Banner */
.main-banner {
    background-image: url('@/assets/img/main/background.svg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    /* Адаптация по пропорциям картинки */
    position: relative;
    padding-top: calc(100% * (768 / 1920)); /* height и width пропорции картинки */
}

.txt {
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.main-banner h1 {
    font-family: bold;
    font-size: 36px;
    line-height: 44px;
}

.txt_banner {
    font-family: regular;
    font-size: 14px;
    margin-top: 10%;
    line-height: 20px;
}

.txt h1 span {
    text-decoration: underline 5px;
    text-decoration-color: #FFA630; /* Цвет подчеркивания */
}

.catalog {
    width: 250px;
    height: 50px;
    background-color: #10BB87;
    border: none;
    border-radius: 10px;
    margin-top: 10%;
    color: white;
    font-family: bold;
    font-size: 12px;
}

/* Медиа-запросы на больших экранах для текста */
@media screen and (min-width: 1920px) {
    .txt {
        top: 40%;
    }
}

/* About Us */
.about {
    margin-top: 10%;
    display: flex;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 5%;
    border-bottom: solid #F2F2F2 2px;
}

.about h1 {
    font-size: 36px;
    font-family: bold;
    line-height: 44px;
    margin-bottom: 15px;
}

.about h1 span {
    text-decoration: underline 5px;
    text-decoration-color: #FFA630; /* Цвет подчеркивания */
}

.about p {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 15px;
}

.company_button {
    width: 131px;
    height: 40px;
    background-color: #10BB87;
    border: none;
    border-radius: 10px;
    margin-top: 5%;
    color: white;
    font-family: bold;
    font-size: 12px;
    margin-top: 8%;
}

/* About Us 2 */
.about_2 {
    margin-top: 10%;
    display: flex;
    justify-content: space-between;
}

.about_2 p {
    font-family: bold;
    font-size: 14px;
}

#opis {
    font-family: regular;
    font-size: 14px;
    color: #B3B3B3;
}

/* Popular Products */
.popular {
    padding-bottom: 7%;
    border-bottom: solid 2px #F2F2F2;
}

.txt_popular {
    margin-top: 10%;
}

.txt_popular h1 {
    font-size: 36px;
    font-family: bold;
    line-height: 44px;
    margin-bottom: 15px;
}

.txt_popular h1 span {
    text-decoration: underline 5px;
    text-decoration-color: #FFA630; /* Цвет подчеркивания */
}

.cards {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 5%;
}

.card {
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.product-name {
    font-family: bold;
    font-size: 14px;
    text-align: center;
    margin: 10px 0;
}

.card_footer_catalog {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: auto; /* Выталкивает footer вниз */
}

.card_footer_catalog button {
    background-color: white;
    color: black;
    border: solid 1px #00b894;
    border-radius: 10px;
    width: 100%;
    height: 29px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.card_footer_catalog button:hover {
    background-color: #00b894;
    border: none;
    color: white;
}

.price {
    margin-top: 5%;
    font-size: 16px;
    color: #00b894;
    font-weight: bold;
}

/* Services */
.services {
    margin-top: 10%;
}

.services h2 {
    font-family: medium;
    font-size: 24px;
    color: #333;
    margin-bottom: 40px;
}

.service_cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Адаптивная сетка */
    gap: 20px;
    justify-content: center;
    align-items: stretch;
}

.service_card {
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    text-align: center;
}

.service_card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

#service_card_heading {
    font-family: bold;
    font-size: 14px;
    color: black;
}

.service_card p {
    font-size: 14px;
    color: #B3B3B3;
    height: 40px;
}

.card_footer_service {
    margin-top: auto; /* Отправляет footer вниз карточки */
    width: 100%;
    display: flex;
    justify-content: center;
}

.card_footer_service button {
    justify-content: center; /* Центрирует содержимое по горизонтали */
    background-color: white;
    color: black;
    width: 100%;
    height: 40px;
    margin-top: 35%;
    font-size: 14px;
    border: none;
    border-radius: 25px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.card_footer_service button:hover {
    background-color: #00b894;
    transform: scale(1.05);
    color: white;
}

.card_footer_service button img {
    margin-left: 8px; /* Отступ между текстом и иконкой */
}

/* reviews */
.company {
    margin-top: 10%;
    background-image: url('@/assets/img/main/company.svg'); /* Путь к вашему изображению */
    background-size: cover;
    background-position: center;
    padding-top: calc(100% * (577 / 1920));
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.button_reviews {
    position: absolute;
    top: 30%; /* Настройте отступ сверху */
    right: 25%; /* Настройте отступ справа */
    padding: 5px 40px;
    background-color: white;
    color: black;
    border: #0FAE7D solid 2px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
    font-family: regular;
    height: 40px;
    display: inline-flex;
    align-items: center; /* Центрирует содержимое по вертикали */
    justify-content: center;
}

.button_reviews img {
    margin-left: 15px; /* Отступ между текстом и иконкой */
}

.button_reviews:hover {
    background-color: #00997a;
    color: white;
}

.button_details {
    position: absolute;
    bottom: -5%; /* Настройте отступ снизу */
    left: 56%;
    transform: translateX(-50%);
    padding: 10px 20px;
    background-color: #00b894;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 12px;
    font-family: bold;
    width: 170px;
    height: 60px;
}

.button_details:hover {
    background-color: white;
    border: solid 2px #00997a;
    color: black;
}

/* events */
.events {
    margin-top: 15%;
}

.events h1 {
    font-family: bold;
    font-size: 36px;
}

.events h1 span {
    text-decoration: underline 5px;
    text-decoration-color: #FFA630; /* Цвет подчеркивания */
}

.event {
    margin-top: 5%;
    display: flex;
    justify-content: space-between;
}

.event1, .event2 {
    width: 400px;
}

.event1 h1, .event2 h1 {
    font-family: bold;
    font-size: 14px;
}

.event1 p, .event2 p {
    font-family: regular;
    font-size: 14px;
    color: #B3B3B3;
}

.button_container {
    text-align: right;
}

.button_container button {
    width: 200px;
    margin-top: 5%;
    border: 2px #00997a solid;
    background-color: white;
    border-radius: 10px;
    font-size: 12px;
    padding: 10px 20px;
    display: inline-flex;
    align-items: center; /* Центрирует содержимое по вертикали */
    justify-content: center;
    margin-left: auto;
}

.button_container img {
    margin-left: 15px; /* Отступ между текстом и иконкой */
}
</style>
