<template>
  <!-- info -->
  <div class="info"></div>

  <div class="wrapper">
    <div class="cat">
      <h1><span>Услуги</span></h1>
      <p>
        Следует отметить, что разбавленное
        изрядной долей эмпатии, рациональное
        мышление требует определения и уточнения
        прогресса профессионального сообщества.
        Но глубокий уровень погружения влечет
        за собой процесс внедрения и модернизации
        глубокомысленных рассуждений.
      </p>
    </div>
  </div>

  <!-- service -->
  <div class="wrapper">
    <div class="service">
      <img src="@/assets/img/services/service.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesPage",
};
</script>

<style scoped>
/* info */
.info {
  background-image: url('@/assets/img/services/back.svg');
  display: flex;
  background-size: cover;
  background-position: center center;
  padding-top: calc(100% * (534 / 1920)); /* height и width пропорции картинки */
  position: absolute;
}

.cat {
  margin-top: 15%;
}

.cat p {
  margin-top: 5%;
}

@media screen and (min-width: 1921px) {
  .cat {
    margin-top: 22%;
  }
}

/* service */
.service {
  width: 100%;
  margin-top: 25%;
}

@media screen and (min-width: 1921px) {
  .service {
    margin-top: 30%;
  }
}
</style>
