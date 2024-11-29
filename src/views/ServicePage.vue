<template>
  <!-- Info -->
  <div class="info"></div>

  <div class="wrapper">
    <div class="cat">
      <h1>
        <span>Качественное и надежное решение</span> для ваших индивидуальных задач
      </h1>
      <p>
        Наши профессиональные услуги по гравировке, шелкографии,
        тиснению и тампопечати предоставляют возможность создавать
        уникальные, долговечные и высококачественные изделия с любым
        дизайном. Мы предлагаем индивидуальные решения для каждого
        клиента, обеспечивая идеальное качество и точность выполнения
        работ. Каждая из этих технологий позволяет наносить
        изображения, текст или узоры на различные материалы,
        включая металл, пластик, ткань и бумагу.
      </p>
    </div>
  </div>

  <!-- Service -->
  <div class="wrapper">
    <div class="service-page">
      <header class="service-header">
        <div class="service-header-content">
          <h1>{{ service.title }}</h1>
          <p class="service-short-description">{{ service.shortDescription }}</p>
        </div>
        <img :src="service.image" :alt="service.title" class="service-image" />
      </header>

      <section class="service-details">
        <h1>Подробнее о {{ service.title }}</h1>
        <p class="service-description">{{ service.description }}</p>
        <ul>
          <li
            class="service-advantage"
            v-for="(advantage, index) in service.advantages"
            :key="index"
          >
            <strong>{{ advantage.title }}:</strong> {{ advantage.text }}
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import { services } from "@/assets/data/servicesData";

export default {
  props: ["id"],
  computed: {
    service() {
      return services.find((service) => service.id === this.id);
    },
  },
};
</script>

<style scoped>
.info {
  background-image: url('@/assets/img/service/back.svg');
  display: flex;
  background-size: cover;
  background-position: center center;
  padding-top: calc(100% * (615 / 1920)); /* height и width пропорции картинки */
  position: absolute;
}

.cat {
  margin-top: 10%;
}

.cat p {
  margin-top: 5%;
}

@media screen and (min-width: 1921px) {
  .cat {
    margin-top: 20%;
  }
}

.service-page {
  margin-top: 10%;
}

.service-header-content p {
  font-family: regular;
  font-size: 1rem;
  margin-top: 5%;
  line-height: 20px;
}

.service-header {
  display: flex;
  flex-direction: column; /* Вертикальное расположение */
  align-items: center; /* Центрирование по горизонтали */
  justify-content: center; /* Центрирование по вертикали (если нужно) */
}

.service-header img {
  max-width: 100%;
  padding-top: 5%;
  padding-bottom: 5%;
}

.service-header-content h1,
.service-details h1 {
  font-family: bold;
  font-size: 36px;
  line-height: 44px;
}

.service-details p {
  margin-top: 5%;
  margin-bottom: 5%;
}

ul {
  list-style-type: none;
  padding: 0; /* Убирает отступы */
  margin: 0; /* Убирает внешние отступы */
}

li {
  font-family: regular;
  font-size: 1rem;
  margin-top: 5%;
  line-height: 20px;
}
</style>
