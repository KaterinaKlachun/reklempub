<template>
    <!-- Info Section -->
    <section class="info"></section>
  
    <section>
      <div class="wrapper">
        <div class="cat">
          <h1><span>О компании</span></h1>
          <div class="cat_txt">
            <p>В своём стремлении улучшить пользовательский опыт
              мы упускаем, что ключевые особенности структуры
              проекта опыт мы упускаем, что ключевые особенности
              структуры проекта.</p>
            <p>Значимость этих проблем настолько очевидна, что
              реализация намеченных плановых заданий, а также
              свежий взгляд на привычные вещи - безусловно
              открывает новые горизонты для системы массового
              участия. Учитывая ключевые сценарии поведения,
              выбранный нами инновационный путь способствует
              повышению качества первоочередных требований.
              Имеется спорная точка зрения, гласящая примерно
              следующее.</p>
          </div>
        </div> 
      </div>
    </section>
  
    <!-- Partners Section -->
    <section>
      <div class="wrapper">
        <div class="partners">
          <img src="@/assets/img/about/brand.svg" alt="" />
          <img src="@/assets/img/about/brand2.svg" alt="" />
          <img src="@/assets/img/about/brand3.svg" alt="" />
          <img src="@/assets/img/about/brand4.svg" alt="" />
        </div>
      </div>
    </section>
  
    <!-- Production Section -->
    <section>
      <div class="wrapper">
        <div class="production">
          <h2><span>Производство</span></h2>
          <p>Значимость этих проблем настолько очевидна, что
            реализация намеченных плановых заданий, а также
            свежий взгляд на привычные вещи - безусловно
            открывает новые горизонты для системы массового
            участия. Учитывая ключевые сценарии поведения,
            выбранный нами инновационный путь способствует
            повышению качества первоочередных требований.
            Имеется спорная точка зрения, гласящая примерно
            следующее.</p>
          <img src="@/assets/img/about/production.svg" alt="" />
        </div>
      </div>
    </section>
  
    <!-- Company History Section -->
    <section>
      <div class="wrapper">
        <div class="history">
          <h2><span>История</span> компании</h2>
          <p>Значимость этих проблем настолько очевидна, что
            реализация намеченных плановых заданий, а также
            свежий взгляд на привычные вещи - безусловно
            открывает новые горизонты для системы массового
            участия. Учитывая ключевые сценарии поведения,
            выбранный нами инновационный путь способствует
            повышению качества первоочередных требований.
            Имеется спорная точка зрения, гласящая примерно
            следующее.</p>
        </div>
      </div> 
  
      <div class="chronology">
        <div class="wrapper">
          <p id="one">Коммуникабельность‚ аккуратность‚ внимательность,
            позитивный настрой‚ легкая обучаемость‚ самозадачность,
            стрессоустойчивость.</p>
          <p id="two">Независимые государства рассмотрены исключительно в
            разрезе маркетинговых и финансовых предпосылок.
            Внезапно, интерактивные прототипы и по сей день
            остаются уделом либералов, которые жаждут быть
            заблокированы в рамках своих собственных рациональных
            ограничений.</p>
          <p id="three">Значимость этих проблем настолько очевидна, что базовый
            вектор развития требует определения и уточнения новых
            принципов формирования материально-технической и кадровой
            базы. Господа, понимание сути ресурсосберегающих технологий
            говорит о возможностях приоритизации разума над эмоциями.</p>
          <p id="four">Идейные соображения высшего порядка, а также понимание сути
            ресурсосберегающих технологий предопределяет высокую
            востребованность направлений прогрессивного развития.
            Повседневная практика показывает, что разбавленное изрядной
            долей эмпатии, рациональное мышление в значительной степени
            обусловливает.</p>
          <p id="five">Как уже неоднократно упомянуто, представители современных
            социальных резервов ассоциативно распределены по отраслям.</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "AboutPage",
  };
  </script>
  
  <style scoped>
  /* Info Section */
  .info {
    display: flex;
    background-image: url('@/assets/img/about/back.svg');
    background-size: cover;
    background-position: center center;
    padding-top: calc(100% * (615 / 1920)); /* height и width пропорции картинки */
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
  
  /* Partners Section */
  .partners {
    display: flex;
    justify-content: space-between;
    margin-top: 10%;
    padding-bottom: 5%;
    border-bottom: solid 2px #F2F2F2;
  }
  
  /* Production Section */
  .production {
    margin-top: 10%;
  }
  
  .production h2 {
    font-size: 2.25rem;
    font-family: bold;
  }
  
  .production span {
    text-decoration: underline 5px;
    text-decoration-color: #FFA630;
  }
  
  .production p {
    margin-top: 5%;
    font-family: regular;
    font-size: 1rem;
  }
  
  .production img {
    margin-top: 5%;
    width: 100%;
  }
  
  /* Company History Section */
  .history {
    margin-top: 10%;
  }
  
  .history h2 {
    font-size: 2.25rem;
    font-family: bold;
  }
  
  .history span {
    text-decoration: underline 5px;
    text-decoration-color: #FFA630;
  }
  
  .history p {
    margin-top: 5%;
    font-family: regular;
    font-size: 1rem;
  }
  
  .chronology {
    margin-top: 5%;
    height: 864px;
    width: 100%;
    background-image: url('@/assets/img/about/chronology.svg');
    background-size: contain; /* Масштабирует изображение так, чтобы оно полностью помещалось */
    background-position: center center; /* Центрирует изображение */
    background-repeat: no-repeat; /* Предотвращает повтор */
  }
  
  .chronology p {
    font-family: medium;
    font-size: 0.75rem;
    color: #B3B3B3;
  }
  
  p#one,
  p#five {
    width: 195px;
  }
  
  p#two,
  p#three,
  p#four {
    width: 450px;
  }
  
  p#two,
  p#four {
    margin-top: 10%;
  }
  
  p#three {
    margin-left: 30%;
    margin-top: 5%;
  }
  
  p#five {
    margin-top: 8%;
  }
  </style>
  