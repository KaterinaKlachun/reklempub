<template>
  <!-- info -->
  <div class="info">
    <!-- info content here -->
  </div>

  <div class="wrapper">
    <div class="cat">
      <h1><span>Каталог</span></h1>
      <p>
        Следует отметить, что разбавленное изрядной долей эмпатии, рациональное мышление требует определения и
        уточнения прогресса профессионального сообщества. Но глубокий уровень погружения влечет за собой процесс
        внедрения и модернизации глубокомысленных рассуждений.
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
    };
  },
  methods: {
    async loadProducts(category) {
      // Загружаем товары для выбранной категории из Supabase
      const { data: products, error } = await supabase
        .from("catalog_products")
        .select("*")
        .eq("category", category); // Фильтруем по категории

      if (error) {
        console.error("Ошибка загрузки продуктов:", error);
        return;
      }

      this.displayedProducts = products; // Обновляем список товаров
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

.info{
  background-image: url('@/assets/img/catalog/info_back.svg');
  display: flex;
  background-size: cover;
  background-position: center center;
  padding-top: calc(100% * (554 / 1920)); /* height и width пропорции картинки */
  position: absolute;
}

.cat{
  margin-top: 15%;
}

@media screen and (min-width: 1921px) {

  .cat{
    margin-top: 25%;
  }
  
}

/* categories */

.categories{
    margin-top: 20%;
}

.categories p{
    font-family: medium;
    font-size: 24px;
}

.category{
    display: flex;
    justify-content: space-between;
    margin-top: 5%;
    border-bottom:solid 2px #F2F2F2 ;
}

.category_1{
    text-align: center;
    margin-bottom: 5%;
}

.category_1 a{
    text-decoration: none;
}

.category_1 p{
    font-family: bold;
    font-size: 1rem;
    text-decoration: none;
    color: black;
}

.catalog_container {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 колонки одинаковой ширины */
    grid-template-rows: repeat(1fr);   /* строки с автоматической высотой */
    gap: 20px;
    max-width: 1200px;
    padding: 20px;
    margin: 0 auto;
}


  </style>
  