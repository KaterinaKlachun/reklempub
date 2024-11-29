<template>
  <!-- Блок подвала -->
  <footer>
    <div class="wrapper">
      <!-- Контейнер для содержимого подвала -->
      <div class="footer-container">

        <!-- Логотип -->
        <div class="footer-logo">
          <img src="@/assets/img/footer/logo.svg" alt="Reklem" class="logo-img">
        </div>

        <!-- Ссылки подвала -->
        <div class="footer-links">
          
          <!-- Колонка "Компания" -->
          <div class="footer-column">
            <h4>Компания</h4>
            <ul>
              <li><router-link to="/contacts">Контакты</router-link></li>
              <li><a href="#">Доставка и оплата</a></li>
              <li><a href="#">Обмен и возврат</a></li>
            </ul>
          </div>

          <!-- Колонка "Клиентам" -->
          <div class="footer-column">
            <h4>Клиентам</h4>
            <ul>
              <li><a href="#">Личный кабинет</a></li>
              <li><a href="#">Партнерство</a></li>
              <li><a href="#">Гарантия</a></li>
            </ul>
          </div>

          <!-- Колонка "Политика" -->
          <div class="footer-column">
            <h4>Политика</h4>
            <ul>
              <li><a href="#">Обработка данных</a></li>
              <li>
                <img src="@/assets/img/footer/copyright.svg" alt="Copyright">
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  // Название компонента
  name: "FooterPage",
};
</script>

<style scoped>
/* Стили подвала */

/* Основной блок подвала */
footer {
  background-color: #F2F2F2;
  padding: 20px 0;
  font-family: Arial, sans-serif;
  margin-top: 10%;
}

/* Контейнер для содержимого подвала */
.footer-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Блок логотипа */
.footer-logo {
  flex: 1;
}

.logo-img {
  max-width: 100px;
}

/* Ссылки подвала */
.footer-links {
  display: flex;
  flex: 3;
  justify-content: space-between;
}

/* Стили для заголовков колонок */
.footer-column h4 {
  font-size: 14px;
  margin-bottom: 10px;
  color: black;
  font-family: medium;
}

/* Стили для списка ссылок */
.footer-column ul {
  list-style-type: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 5px;
}

.footer-column ul li a {
  text-decoration: none;
  color: black;
  font-family: regular;
  font-size: 14px;
  transition: color 0.3s;
}

.footer-column ul li a:hover {
  color: #00b894;
}

/* Контактная информация */
.footer-contact {
  flex: 1;
  text-align: center;
}

/* Иконки социальных сетей */
.social-icons a {
  margin: 0 5px;
  display: inline-block;
}

/* Контактные данные */
.contact-info p {
  margin: 5px 0;
  font-size: 14px;
}
</style>
