<template>
  <!-- Карточка продукта -->
  <section class="product-card">
    <!-- Изображение продукта с ленивой загрузкой -->
    <img 
      :src="product.image_url" 
      :alt="product.title" 
      class="product-image" 
      loading="lazy" 
    />

    <!-- Название продукта -->
    <h3 class="product-title">{{ product.title }}</h3>

    <!-- Кнопка выбора -->
    <button @click="viewProduct" class="product-button">Выбрать вид</button>

    <!-- Цена продукта -->
    <p class="product-price">{{ product.price }} ₽</p>
  </section>
</template>

<script>
export default {
  props: {
    product: Object, // Пропс для передачи данных о продукте
  },
  methods: {
    viewProduct() {
      // Метод для обработки клика на кнопку (реализуйте логику выбора продукта)
      console.log(`Просмотр продукта: ${this.product.title}`);
    },
  },
};
</script>

<style scoped>
/* Карточка продукта */
.product-card {
  display: flex;
  flex-direction: column; /* Располагаем элементы в столбик */
  align-items: center;    /* Выравниваем элементы по горизонтали */
  justify-content: center; /* Центрируем элементы внутри */
  text-align: center;     /* Центрируем текст */
  height: 380px;
  border: 1px solid #e0e0e0; /* Легкая рамка */
  border-radius: 10px;      /* Скругленные углы */
  padding: 15px;           /* Отступы внутри карточки */
  background-color: #ffffff; /* Белый фон */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Легкая тень */
  transition: transform 0.3s, box-shadow 0.3s; /* Анимация */
}

/* Эффект при наведении */
.product-card:hover {
  transform: translateY(-5px); /* Поднимаем карточку */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Увеличиваем тень */
}

/* Заголовок продукта */
.product-title {
  min-height: 40px; /* Минимальная высота для выравнивания текста */
  margin-bottom: 8px; /* Отступ снизу */
  font-size: 1rem;    /* Размер шрифта */
  font-family: bold;  /* Жирный шрифт */
}

/* Кнопка выбора */
.product-button {
  margin-top: auto; /* Выравнивание кнопки по нижнему краю */
  padding: 10px 20px; /* Отступы внутри кнопки */
  background-color: white; /* Белый фон */
  color: black; /* Черный текст */
  border: solid 1px #00b894; /* Зелёная рамка */
  border-radius: 10px; /* Скругленные углы */
  cursor: pointer; /* Указатель мыши */
  font-family: regular; /* Стандартный шрифт */
  font-size: 0.8rem; /* Размер шрифта */
  transition: background-color 0.3s, color 0.3s; /* Анимация */
}

/* Стили кнопки при наведении */
.product-button:hover {
  background-color: #00b894; /* Зелёный фон */
  border: none; /* Убираем рамку */
  color: white; /* Белый текст */
}

/* Изображение продукта */
.product-image {
  height: auto; /* Автоматическая высота */
  max-height: 200px; /* Максимальная высота */
  margin-bottom: 10px; /* Отступ снизу */
  object-fit: contain; /* Сохраняем пропорции изображения */
}

/* Цена продукта */
.product-price {
  color: #0FAE7D; /* Зелёный цвет */
  margin-top: 8px; /* Отступ сверху */
  font-family: bold; /* Жирный шрифт */
  font-size: 14px; /* Размер шрифта */
}
</style>