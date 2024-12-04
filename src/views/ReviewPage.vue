<template>

    <!--  -->

    <div class="main-banner">
        <div class="wrapper">
            <h1>Отзывы о брендинге</h1>
            <div class="cards">

                <div class="card">
                    <img src="@/assets/img/review/head_1.svg" alt="">
                    <h1>Прекрасный брендинг!</h1>
                    <p>Профессиональный подход, отличные
                        идеи и креативное исполнение. Рекомендую!</p>
                </div>

                <div class="card">
                    <img src="@/assets/img/review/head_2.svg" alt="">
                    <h1>Работа вне конкуренции!</h1>
                    <p>Работа с командой принесла огромное
                        удовольствие, они действительно создали
                        бренд моей мечты!</p>
                </div>

                <div class="card">
                    <img src="@/assets/img/review/head_3.svg" alt="">
                    <h1>Супер результат!</h1>
                    <p>Результат превзошел все мои ожидания!
                        Профессионализм и внимание к деталям
                        на высшем уровне.</p>
                </div>

            </div>
        </div>
    </div>

    <!--  -->

    <div class="wrapper">
        <div class="exp">
            <h1>Поделитесь своим опытом</h1>
            <div class="experiences">
                
                <div class="experience">
                    <img src="@/assets/img/review/arrow_1.svg" alt="">
                    <h1>Напишите отзыв</h1>
                    <p>Оставьте свой отзыв о нашем брендинге
                        и помогите другим сделать выбор.</p>
                </div>
                
                <div class="experience">
                    <img src="@/assets/img/review/arrow_2.svg" alt="">
                    <h1>Выберите рейтинг</h1>
                    <p>Оцените наше сотрудничество по 5-балльной шкале.</p>
                </div>

                <div class="experience">
                    <img src="@/assets/img/review/arrow_3.svg" alt="">
                    <h1>Добавьте фото</h1>
                    <p>Прикрепите фото, чтобы проиллюстрировать ваш отзыв.</p>
                </div>
                
            </div>
        </div>
    </div>

    <!--  -->

    <div class="wrapper">
        <div class="read">
            <div class="clients_l">
                <img src="@/assets/img/review/girl.svg" alt="">
            </div>
            <div class="clients_r">
                <h1>Читайте отзывы наших клиентов</h1>
            <div class="client">
                <div class="client_t">
                    <div class="client_1">
                        <h1>Иван Иванович</h1>
                        <p>Отличный брендинг! Я очень доволен результатом
                            работы команды. Новый логотип выглядит стильно
                            и запоминается. Спасибо!</p>
                    </div>
                    <div class="client_1">
                        <h1>Мария Петрова</h1>
                        <p>Я очень довольна работой агентства! Они
                            помогли мне создать уникальный брендинг,
                            который отражает мой стиль и ценности.</p>
                    </div>
                </div>
                <div class="client_b">
                    <div class="client_2">
                        <h1>Александр Сидоров</h1>
                        <p>Хотел бы выразить огромную благодарность за
                            качественный брендинг. Я получил именно то,
                            что хотел, и даже больше!</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>

    <!--  -->

    <div class="more_reviews">
        <div class="wrapper">
            <div class="more">
                <h1>Читайте отзывы наших клиентов</h1>
                <p>Хотите увидеть больше отзывов от наших клиентов? Нажмите кнопку «Показать больше отзывов».</p>
                <button class="review_b" @click="openModal">Показать больше отзывов</button>
            </div>
        </div>
    </div>

<!-- Модальное окно -->
<div v-if="isModalOpen" class="modal">
    <div class="modal-content">
      <button class="close-button" @click="closeModal">×</button>
      <div class="reviews">
        <div v-for="review in paginatedReviews" :key="review.id" class="review">
          <h3>{{ review.name }}</h3>
          <p>{{ review.feedback }}</p>
          <p><strong>Оценка: </strong>{{ review.estimation }}</p>
        </div>
      </div>
      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 0">Назад</button>
        <button @click="nextPage" :disabled="!hasNextPage">Вперед</button>
      </div>
    </div>
  </div>

</template>
  
<script>
import supabase from '@/supabase'; // Подключение клиента Supabase

export default {
  data() {
    return {
      isModalOpen: false,
      reviews: [], // Отзывы из базы данных
      currentPage: 0, // Текущая страница
      itemsPerPage: 2, // Количество отзывов на странице
    };
  },
  computed: {
    // Вычисление отзывов для текущей страницы
    paginatedReviews() {
      const start = this.currentPage * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.reviews.slice(start, end);
    },
    // Проверка, есть ли следующая страница
    hasNextPage() {
      return (this.currentPage + 1) * this.itemsPerPage < this.reviews.length;
    },
  },
  methods: {
    // Открытие модального окна
    async openModal() {
      if (!this.reviews.length) {
        await this.fetchReviews(); // Загрузка отзывов при первом открытии
      }
      this.isModalOpen = true;
    },
    // Закрытие модального окна
    closeModal() {
      this.isModalOpen = false;
    },
    // Переход к следующей странице
    nextPage() {
      if (this.hasNextPage) this.currentPage++;
    },
    // Возврат к предыдущей странице
    prevPage() {
      if (this.currentPage > 0) this.currentPage--;
    },
    // Загрузка отзывов из базы данных
    async fetchReviews() {
      try {
        const { data, error } = await supabase
          .from('reviews') // Название таблицы
          .select('*')
          .order('id', { ascending: true }); // Упорядочивание по ID

        // Логируем данные для проверки
        console.log('Данные из базы:', data);

        if (error) {
          console.error('Ошибка при загрузке отзывов:', error);
        } else {
          if (data && data.length > 0) {
            this.reviews = data; // Сохранение отзывов
          } else {
            console.log('Таблица пустая. Проверьте данные в базе.');
          }
        }
      } catch (err) {
        console.error('Ошибка подключения к Supabase:', err);
      }
    },
  },
};
</script>

<style>

.main-banner {
    background-image: url('@/assets/img/review/back.svg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    /* Адаптация по пропорциям картинки */
    position: relative;
    padding-top: 5%;
    padding-bottom: 5%;
}

.main-banner h1{
    font-family: bold;
    font-size: 36px;
    line-height: 44px;
}

.cards{
    display: flex;
    justify-content: space-between;
    margin-top: 5%;
}

.card{
    width: 320px;
}

.card h1{
    font-family: bold;
    font-size: 20px;
    line-height: 44px;
}

.card p{
    font-size: 16px;
    font-family: regular;
}

/*  */

.exp{
    margin-top: 5%;
}

.exp h1{
    font-family: bold;
    font-size: 36px;
    line-height: 44px;
}

.experiences{
    display: flex;
    justify-content: space-between;
    margin-top: 5%;
}

.experience h1{
    font-family: bold;
    font-size: 20px;
    line-height: 44px;
}

.experience p{
    font-size: 16px;
    font-family: regular;
}

/*  */

.read{
    margin-top: 5%;
    display: flex;
    justify-content: space-between;
}

.clients_r h1{
    font-family: bold;
    font-size: 36px;
    line-height: 44px;
}

.client{
    margin-top: 5%;
    height: 100%;
    justify-content: space-between;
}

.client h1{
    font-family: bold;
    font-size: 20px;
    line-height: 44px;
    color: white;
}

.client p{
    font-family: regular;
    font-size: 16px;
    color: white;
    margin-top: 4%;
}

.client_t{
    display: flex;
    justify-content: space-between;
    margin-top: 15%;
}

.client_b{
    margin-top: 10%;
}

.client_1, .client_2{
    border-radius: 20px;
    border: 2px solid black;
    padding: 2%;
    background-color: #00B894;
}

.client_1{
    width: 280px;
}

/*  */

.more_reviews{
    background-color: #333F70;
    height: 40vh;
    display: flex; /* Flexbox для выравнивания содержимого */
    align-items: center; /* Центрируем по вертикали */
    justify-content: center; /* Центрируем по горизонтали */
}

.more{
    background-color: white;
    border-radius: 20px;
    height: 25vh;
    display: flex; /* Flexbox для выравнивания содержимого */
    flex-direction: column; /* Располагаем содержимое вертикально */
    justify-content: center; /* Центрируем по вертикали */
    padding: 40px; /* Внутренние отступы */
}

.more h1{
    font-family: bold;
    font-size: 36px;
    line-height: 44px;
    margin-top: 3%;
}

.more p{
    font-family: regular;
    font-size: 1rem;
    margin-top: 3%;
}

.review_b {
    width: 350px;
    height: 50px;
    background-color: #10BB87;
    border: none;
    border-radius: 10px;
    color: white;
    font-family: bold;
    font-size: 12px;
    margin-top: 5%;
}

/* modal */

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  width: 80%;
  max-width: 600px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.close-button {
  background-color: transparent;
  border: none;
  color: #00B894;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  align-self: flex-end;
  transition: color 0.3s;
}

.close-button:hover {
  color: #2d6a67;
}

.reviews {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.review h3 {
  font-size: 18px;
  color: #2d6a67;
  margin: 0;
}

.review p {
  font-size: 14px;
  color: #666;
}

.pagination {
  display: flex;
  justify-content: space-between;
}

.pagination button {
  background-color: #00B894;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.pagination button:disabled {
  background-color: #b2dfdb;
  cursor: not-allowed;
}

.pagination button:hover:not(:disabled) {
  background-color: #2d6a67;
}
</style>