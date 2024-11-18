<template>
  
  <!-- info -->

  <div class="info">
      <div class="pagination">
          <a href=""><router-link to="/">Главная /</router-link></a>
      </div>
  </div>
  <div class="wrapper">

      <div class="cat">
          <h1><span>Каталог</span></h1>
          <p>Следует отметить, что разбавленное изрядной долей эмпатии,
              рациональное мышление требует определения и уточнения
              прогресса профессионального сообщества. Но глубокий уровень
              погружения влечет за собой процесс внедрения и модернизации
              глубокомысленных рассуждений.</p>
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
      <ProductCard
        v-for="(product, index) in displayedProducts"
        :key="index"
        :product="product"
        :category="selectedCategory"
        :productId="index + 1"
        @click="viewProduct(index)"
      />
    </div>
 </div>
</template>
  
<script>
import Category from "@/components/CategoryPage.vue";
import ProductCard from "@/components/ProductCard.vue";
import productsData from "@/assets/data/products.js";

export default {
  name: "CatalogPage",
  components: {
    Category,
    ProductCard,
  },
  data() {
    return {
      categories: {
        mugs: { name: "Кружки", image: require("@/assets/img/catalog/icon_krysh.svg") },
        thermoses: { name: "Термосы", image: require("@/assets/img/catalog/icon_termos.svg") },
        accessories: { name: "Аксессуары", image: require("@/assets/img/catalog/icon_aksesyar.svg") },
        chancellery: { name: "Канцелярия", image: require("@/assets/img/catalog/icon_kanc.svg") },
      },
      displayedProducts: [],
      selectedCategory: "mugs", // Категория по умолчанию
      productsData,
      scrollPosition: 0, // Для сохранения уровня прокрутки
    };
  },
  methods: {
    loadProducts(category) {
      this.selectedCategory = category;
      this.displayedProducts = this.productsData[category] || [];
    },
    viewProduct(index) {
      // Сохраняем текущее состояние перед переходом
      this.saveState();
      const category = this.selectedCategory;
      this.$router.push({
        name: "ProductPage",
        params: { category, id: index + 1 },
      });
    },
    saveState() {
      // Сохраняем текущую категорию и позицию прокрутки
      sessionStorage.setItem(
        "catalogState",
        JSON.stringify({
          selectedCategory: this.selectedCategory,
          scrollPosition: window.scrollY,
        })
      );
    },
    restoreState() {
      // Восстанавливаем состояние из sessionStorage
      const savedState = JSON.parse(sessionStorage.getItem("catalogState"));
      if (savedState) {
        this.selectedCategory = savedState.selectedCategory || "mugs";
        this.scrollPosition = savedState.scrollPosition || 0;
      }
      this.loadProducts(this.selectedCategory); // Загружаем продукты для сохраненной категории
      this.$nextTick(() => {
        // Прокручиваем страницу к сохраненной позиции
        window.scrollTo(0, this.scrollPosition);
      });
    },
    resetToDefault() {
      // Возвращаем категорию по умолчанию при обновлении
      this.selectedCategory = "mugs";
      this.scrollPosition = 0;
      this.loadProducts(this.selectedCategory);
      window.scrollTo(0, 0);
    },
  },
  created() {
    if (performance.navigation.type === 1) {
      // Если страница обновляется
      this.resetToDefault();
    } else {
      this.restoreState(); // Иначе восстанавливаем предыдущее состояние
    }
  },
  beforeRouteLeave(to, from, next) {
    this.saveState(); // Сохраняем состояние перед уходом
    next();
  },
};
</script>

<style scoped>
/* info */

.info{
    height: 768px;
    background-image: url('@/assets/img/catalog/info_back.svg');
}

/* categories */

.categories{
    margin-top: 25%;
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
  