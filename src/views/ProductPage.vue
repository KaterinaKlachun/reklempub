<template>
  <!-- Информация о странице -->
  <div class="info">
    <div class="pagination">
      <router-link to="/">Главная / </router-link>
      <router-link to="/catalog">Каталог /</router-link>
    </div>
  </div>

  <!-- Информация о продукте -->
  <div v-if="product" class="wrapper">
    <div class="product">
      <div class="product_left">
        <img :src="selectedColorImage" :alt="product.name" class="product-image" />
      </div>
      <div class="product_right">
        <p>{{ product.name }}</p>
        <div class="stock_info">
          <p id="art">Арт. {{ product.article }}</p>
          <p>На складе {{ product.stock }} шт.</p>
        </div>
        <div class="custom-select">
          <div class="options">
            <p>Цвет</p>
            <select @change="updateColorImage($event.target.value)">
              <option v-for="color in product.product_colors" :key="color.color" :value="color.color">
                {{ color.color }}
              </option>
            </select>
          </div>
        </div>
        <p id="product-price" class="product-price">{{ product.price }} ₽</p>
        <div class="add-to-cart-container">
          <button class="add-to-cart-button" @click="addToCart">В корзину</button>
          <div class="quantity-counter">
            <button @click="selectedQuantity = Math.max(1, selectedQuantity - 1)" class="decrement-button">
              <img src="@/assets/img/product/minus.svg" alt="Уменьшить количество" />
            </button>
            <span>{{ selectedQuantity }}</span>
            <button @click="selectedQuantity++" class="increment-button">
              <img src="@/assets/img/product/plus.svg" alt="Увеличить количество" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="product_info">
      <h1>Описание</h1>
      <p>{{ product.description }}</p>
    </div>
  </div>
  <div v-else>
    <p>Загрузка данных о продукте...</p>
  </div>
</template>

<script>
import supabase from "@/supabase"; // Подключение к Supabase

export default {
  name: "ProductPage",
  props: ["category", "id"], // Категория и ID продукта передаются через роутер
  data() {
    return {
      product: null, // Данные о продукте
      selectedColorImage: null, // Изображение выбранного цвета
      selectedQuantity: 1, // Количество товара
    };
  },
  methods: {
    // Загрузка данных о конкретном продукте
    async loadProduct() {
      try {
        const { data, error } = await supabase
          .from("products")
          .select("*, product_colors(color, image_url)") // Получаем цвета и их изображения
          .eq("id", this.id)  // Фильтруем по ID продукта
          .single();  // Ожидаем один продукт

        if (error) {
          console.error("Ошибка загрузки продукта:", error);
          return;
        }

        this.product = data;

        // Если product_colors существует и не пусто, устанавливаем первое изображение
        if (this.product.product_colors && this.product.product_colors.length > 0) {
          this.selectedColorImage = this.product.product_colors[0].image_url;
        } else {
          this.selectedColorImage = null;  // Если цветов нет, не показываем изображение
        }
      } catch (err) {
        console.error("Ошибка при загрузке продукта:", err);
      }
    },

    // Обновление изображения при смене цвета
    updateColorImage(selectedColor) {
      // Убедитесь, что product_colors существует и что выбранный цвет есть в этом списке
      const selectedColorData = this.product.product_colors?.find(color => color.color === selectedColor);

      if (selectedColorData) {
        this.selectedColorImage = selectedColorData.image_url; // Устанавливаем изображение выбранного цвета
      } else {
        this.selectedColorImage = null; // Если цвет не найден, устанавливаем пустое изображение
      }
    },

    // Добавление товара в корзину
    addToCart() {
      console.log(
        `Добавлено в корзину: ${this.selectedQuantity} шт. товара "${this.product.name}"`
      );
    },
  },
  created() {
    this.loadProduct(); // Загрузка продукта при создании компонента
  },
  watch: {
    "$route.params.id": "loadProduct", // Обновление данных, если изменится ID в маршруте
  },
};
</script>

<style scoped>
  .product {
    display: flex;
    margin-top: 10%;
    justify-content: space-between;
  }

  .product_left img {
    width: 450px;
  }

  .product_right {
    width: 50%;
  }

  .product_right p {
    font-family: medium;
    font-size: 1.5rem;
  }

  .stock_info {
    display: flex;
    justify-content: space-between;
    margin-top: 5%;
  }

  .stock_info p {
    font-family: medium;
    font-size: 0.75rem;
    color: #FFA630;
  }

  #art {
    color: #10BB87;
  }

  .options {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    margin-top: 5%;
  }

  .options p {
    font-family: medium;
    font-size: 0.85rem;
  }

  .options select {
    background-color: #FAFAFA;
    border: 1px solid #F2F2F2;
    border-radius: 4px;
    width: 70%;
    height: 40px;
  }

  .product-price {
    margin-top: 5%;
    width: 275px;
    height: 70px;
    background-image: url("@/assets/img/product/back.svg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center; /* горизонтальное выравнивание */
    align-items: center; /* вертикальное выравнивание */
    text-align: center;
    color: white;
    font-family: medium;
  }

  .add-to-cart-container {
    display: flex;
    margin-top: 10%;
    justify-content: space-between;
  }

  .add-to-cart-button {
    width: 300px;
    background-color: white;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }

  .quantity-counter {
    display: flex;
    align-items: center;
    width: 30%;
  }

  .decrement-button,
  .increment-button {
    background-color: white;
    border: none;
    padding: 5px;
  }

  .quantity-counter span {
    margin: 0 10px;
    font-size: 16px;
    color: #00A860;
  }

  .product_info {
    margin-top: 10%;
  }

  .product_info h1 {
    color: #10BB87;
    font-family: medium;
    font-size: 1.5rem;
    margin-bottom: 5%;
  }

  .product_info p {
    font-family: regular;
    font-size: 0.875rem;
  }
</style>
