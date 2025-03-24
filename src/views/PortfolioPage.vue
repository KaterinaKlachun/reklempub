<template>
  <!-- info -->
  <section class="info"></section>

  <section class="wrapper">
    <div class="portfolio">
      <h1><span>Портфолио</span></h1>
      <p>
        Следует отметить, что разбавленное изрядной долей эмпатии, рациональное
        мышление требует определения и уточнения прогресса профессионального сообщества.
        Но глубокий уровень погружения влечет за собой процесс внедрения и модернизации
        глубокомысленных рассуждений.
      </p>
    </div>
  </section>

  <section id="portfolio-container" class="portfolio_container">
    <!-- Перебираем список продуктов и отображаем карточки -->
    <div v-for="product in products" :key="product.title" class="product-card">
      <img :src="product.img" :alt="product.title" class="product-image" />
      <h3 class="product-title">{{ product.title }}</h3>
    </div>
  </section>
</template>

<script>
export default {
  name: "PortfolioPage",
  data() {
    return {
      products: [
        { title: "АО «Леруа Мерлен Восток»", img: require("@/assets/img/portfolio/icon1.svg") },
        { title: "ИП Варкутинов", img: require("@/assets/img/portfolio/icon2.svg") },
        { title: "АО «Лукоил Рус»", img: require("@/assets/img/portfolio/icon3.svg") },
        { title: "ИП Джарахов", img: require("@/assets/img/portfolio/icon4.svg") },
        { title: "ИП Иванова", img: require("@/assets/img/portfolio/icon5.svg") },
        { title: "АО «Леруа Мерлен Восток»", img: require("@/assets/img/portfolio/icon6.svg") },
        { title: "ИП Игнатьев", img: require("@/assets/img/portfolio/icon7.svg") },
        { title: "АО «Леруа Мерлен Восток»", img: require("@/assets/img/portfolio/icon8.svg") },
        { title: "АО «Леруа Мерлен Восток»", img: require("@/assets/img/portfolio/icon9.svg") },
        { title: "АО «Лукоил Рус»", img: require("@/assets/img/portfolio/icon10.svg") },
        { title: "АО «Лукоил Рус»", img: require("@/assets/img/portfolio/icon11.svg") },
        { title: "АО «Лукоил Рус»", img: require("@/assets/img/portfolio/icon12.svg") },
        { title: "АО «Лукоил Рус»", img: require("@/assets/img/portfolio/icon13.svg") },
        { title: "ИП Игнатьев", img: require("@/assets/img/portfolio/icon14.svg") },
        { title: "АО «Леруа Мерлен Восток»", img: require("@/assets/img/portfolio/icon15.svg") },
        { title: "ИП Варкутинов", img: require("@/assets/img/portfolio/icon16.svg") }
      ]
    };
  }
};
</script>

<style scoped>
/* info */
.info {
  display: flex;
  background-image: url('@/assets/img/portfolio/back.svg');
  background-size: cover;
  background-position: center center;
  padding-top: calc(100% * (490 / 1921)); /* height и width пропорции картинки */
  position: absolute;
}

/* pagination */
.pagination {
  margin-left: 20%;
  margin-top: 2%;
}

.pagination a {
  text-decoration: none;
  font-family: medium;
  font-size: 1rem;
  color: black;
}

.portfolio {
  position: relative;
  margin-top: 15%;
  width: 450px;
}

@media screen and (min-width: 1921px) {
  .portfolio {
    margin-top: 25%;
  }
}

.portfolio h1 span {
  text-decoration: underline 5px;
  text-decoration-color: #ffa630; /* Цвет подчеркивания */
}

.portfolio h1 {
  font-family: bold;
  font-size: 36px;
}

.portfolio p {
  margin-top: 20%;
  font-family: regular;
  font-size: 1rem;
}

/* Контейнер для динамического отображения продуктов */
.portfolio_container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 колонки одинаковой ширины */
  gap: 20px;
  max-width: 1200px;
  padding: 20px;
  margin: 0 auto;
}

.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  height: 350px;
}

.product-title {
  min-height: 40px; /* Задаем минимальную высоту для выравнивания */
  margin-top: 5%;
  font-size: 1rem;
  font-family: bold;
}
</style>
