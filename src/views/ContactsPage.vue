<template>
    <!-- SEO Meta -->
    <meta name="description" content="Контактная информация компании Reklem." />
  
    <!-- Info Section -->
    <div class="info"></div>
  
    <div class="wrapper">
      <div class="cat">
        <h1><span>Контакты</span></h1>
        <p>
          Следует отметить, что разбавленное изрядной долей эмпатии, рациональное мышление требует определения
          и уточнения прогресса профессионального сообщества. Но глубокий уровень погружения влечет за собой процесс
          внедрения и модернизации глубокомысленных рассуждений.
        </p>
      </div>
    </div>
  
    <!-- Contact Section -->
    <div class="wrapper">
      <div class="contact">
        <div class="adress">
          <h3>Адрес:</h3>
          <div class="below">
            <p>Москва, м.Октябрьское поле, ул. Народного ополчения, д.34, стр.3, офис 8</p>
          </div>
        </div>
  
        <div class="telephon">
          <h3>Телефон:</h3>
          <div class="below">
            <p>+7 (495) 226-26-61</p>
            <p>+7 (495) 133-16-28</p>
          </div>
        </div>
  
        <div class="post">
          <h3>Почта:</h3>
          <div class="below">
            <p>info@reklem.ru</p>
          </div>
        </div>
      </div>
    </div>
  
    <!-- Intelligence Section -->
    <div class="wrapper">
      <div class="intelligence">
        <div class="left">
          <img src="@/assets/img/contacts/photo.svg" alt="photo" />
          <div class="left_txt">
            <h3>Попович Андрей Александрович</h3>
            <p>Менеджер по работе с клиентами г. Москва</p>
            <div class="down_left">
              <img src="@/assets/img/contacts/telegram.svg" id="networks" alt="telegram" />
              <img src="@/assets/img/contacts/whatsapp.svg" id="networks" alt="whatsapp" />
              <p>+7 (925) 272-87-48</p>
              <p>man7@reklem.ru</p>
            </div>
          </div>
        </div>
  
        <div class="right">
          <div class="up_right">
            <p>Пн-Пт:</p>
            <p id="time">09:30 - 18:00</p>
          </div>
          <div class="down_right">
            <p>Сб-Вс:</p>
            <p id="time">Выходной</p>
          </div>
          <img src="@/assets/img/contacts/instargam.svg" alt="instagram" />
          <img src="@/assets/img/contacts/facebook.svg" alt="facebook" />
          <img src="@/assets/img/contacts/youtube.svg" alt="youtube" />
        </div>
      </div>
    </div>
  
    <!-- Map Section -->
    <div class="wrapper">
      <div class="map">
        <img src="@/assets/img/contacts/map.svg" alt="Карта" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ContactsPage",
  };
  </script>
  
  <style scoped>
  /* Info Section */
  .info {
    background-image: url('@/assets/img/contacts/back.svg');
    display: flex;
    background-size: cover;
    background-position: center center;
    padding-top: calc(100% * (535 / 1920)); /* Соотношение сторон */
    position: absolute;
  }
  
  .cat {
    margin-top: 10%;
  }
  .cat p {
    margin-top: 10%;
  }
  
  @media screen and (min-width: 1921px) {
    .cat {
      margin-top: 15%;
    }
  }
  
  /* Contact Section */
  .contact {
    display: flex;
    justify-content: space-between;
    margin-top: 20%;
  }
  
  .contact div {
    height: 190px;
  }
  
  .contact h3 {
    color: #FFA630;
    font-family: bold;
    font-size: 1rem;
  }
  
  .contact .below {
    margin-top: 20px;
    height: 60px;
  }
  
  .contact p {
    font-family: regular;
    font-size: 0.8rem;
  }
  
  .telephon p {
    margin-bottom: 20%;
  }
  
  @media screen and (min-width: 1921px) {
    .contact {
      margin-top: 35%;
    }
  }
  
  /* Intelligence Section */
  .intelligence {
    display: flex;
    justify-content: space-between;
  }
  
  .left {
    display: flex;
    width: 720px;
  }
  
  .left img {
    height: 100%;
  }
  
  .left_txt {
    margin-left: 15%;
  }
  
  .left_txt h3 {
    font-family: bold;
    font-size: 1.5rem;
    margin-bottom: 5%;
  }
  
  .left_txt p {
    font-family: medium;
    font-size: 1rem;
    color: #00b894;
  }
  
  .down_left {
    display: flex;
    justify-content: space-between;
    margin-top: 10%;
  }
  
  img#networks {
    width: 35px;
  }
  
  .right img {
    margin-top: 20%;
  }
  
  .up_right,
  .down_right {
    display: flex;
  }
  
  .up_right p,
  .down_right p {
    font-family: regular;
    font-size: 1rem;
    margin-left: 5%;
  }
  
  p#time {
    font-family: bold;
    color: #00b894;
    margin-left: 20%;
  }
  
  /* Map Section */
  .map {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
  
  @media screen and (min-width: 1921px) {
    .map {
      margin-top: 5%;
      height: 50vh;
    }
  }
  </style>
  