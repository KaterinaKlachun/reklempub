<template>
  <!-- info -->
  <div class="info">
    <!-- info content here -->
  </div>

  <div class="wrapper">
    <div class="cat">
      <h1><span>Каталог</span></h1>
      <p>
        Следует отметить, что разбавленное изрядной долей эмпатии, рациональное мышление требует определения
        и уточнения прогресса профессионального сообщества. Но глубокий уровень погружения влечет за собой
        процесс внедрения и модернизации глубокомысленных рассуждений.
      </p>
    </div>
  </div>

  <!-- categories -->
  <div class="wrapper">
    <div class="categories">
      <p>Категории</p>
      <div class="category">
        <Category
          v-for="(category, key) in categories"
          :key="key"
          :name="category.name"
          :image="category.image"
          :categoryKey="key"
          @categorySelected="loadProducts"
        />
      </div>
    </div>

    <div id="catalog-container" class="catalog_container">
      <!-- Здесь отображаются товары -->
      <ProductCard
        v-for="product in displayedProducts"
        :key="product.id"
        :product="product"
        :category="selectedCategory"
        :productId="product.id"
        @click="viewProduct(product.id)"
      />
    </div>

    <!-- Отображаем ошибку, если она возникла -->
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import Category from "@/components/CategoryPage.vue";
import supabase from "@/supabase"; // Подключение к Supabase

export default {
  name: "CatalogPage",
  components: {
    ProductCard,
    Category,
  },
  data() {
    return {
      categories: {
        mugs: { name: "Кружки", image: require("@/assets/img/catalog/icon_krysh.svg") },
        thermoses: { name: "Термосы", image: require("@/assets/img/catalog/icon_termos.svg") },
        accessories: { name: "Аксессуары", image: require("@/assets/img/catalog/icon_aksesyar.svg") },
        chancellery: { name: "Канцелярия", image: require("@/assets/img/catalog/icon_kanc.svg") },
      },
      displayedProducts: [], // Список товаров для отображения
      selectedCategory: "mugs", // Категория по умолчанию
      error: null, // Ошибка загрузки данных
    };
  },
  methods: {
    async loadProducts(category) {
      this.selectedCategory = category; // Обновляем выбранную категорию
      this.error = null; // Сбрасываем ошибку при новой загрузке
      try {
        const { data: products, error } = await supabase
          .from("catalog_products")
          .select("*")
          .eq("category", category);

        if (error) {
          throw error; // Если ошибка, выбрасываем исключение
        }

        this.displayedProducts = products; // Обновляем список товаров
      } catch (err) {
        this.error = "Ошибка при загрузке товаров: " + err.message; // Обрабатываем ошибку
        console.error(this.error);
      }
    },
    viewProduct(productId) {
      const category = this.selectedCategory;
      this.$router.push({
        name: "ProductPage",
        params: { category, id: productId }, // Используем productId вместо index
      });
    },
  },
  created() {
    // Загружаем товары для категории по умолчанию
    this.loadProducts(this.selectedCategory);
  },
};
</script>

<style scoped>
/* info */
.info {
  background-image: url('@/assets/img/catalog/info_back.svg');
  display: flex;
  background-size: cover;
  background-position: center center;
  padding-top: calc(100% * (554 / 1920)); /* height и width пропорции картинки */
  position: absolute;
}

.cat {
  margin-top: 15%;
}

@media screen and (min-width: 1921px) {
  .cat {
    margin-top: 25%;
  }
}

/* categories */
.categories {
  margin-top: 20%;
}

.categories p {
  font-family: medium;
  font-size: 24px;
}

.category {
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
  border-bottom: solid 2px #f2f2f2;
}

.category_1 {
  text-align: center;
  margin-bottom: 5%;
}

.category_1 a {
  text-decoration: none;
}

.category_1 p {
  font-family: bold;
  font-size: 1rem;
  color: black;
}

/* catalog container */
.catalog_container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 колонки одинаковой ширины */
  gap: 20px;
  max-width: 1200px;
  padding: 20px;
  margin: 0 auto;
}

/* Стиль для отображения ошибки */
.error {
  color: red;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 20px;
}
</style>
