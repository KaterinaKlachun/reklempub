"use strict";(self["webpackChunkreklamepub"]=self["webpackChunkreklamepub"]||[]).push([[125],{3226:function(e,s,i){i.r(s),i.d(s,{default:function(){return M}});var a=i(6768),c=i(4232),l=i.p+"img/head_1.b9f6d657.svg",t=i.p+"img/head_2.f449cbcb.svg",r=i.p+"img/head_3.9d3584ea.svg",n=i.p+"img/arrow_1.3b75636f.svg",d=i.p+"img/arrow_2.e9500cc3.svg",v=i.p+"img/arrow_3.c5c867c0.svg",o=i.p+"img/girl.7f21247e.svg";const p={class:"more_reviews"},h={class:"wrapper"},g={class:"more"},u={key:0,class:"modal"},m={class:"modal-content"},k={class:"reviews"},w={class:"pagination"},P=["disabled"],b=["disabled"];function _(e,s,i,_,L,f){return(0,a.uX)(),(0,a.CE)(a.FK,null,[s[7]||(s[7]=(0,a.Fv)('<section class="main-banner"><div class="wrapper"><h1>Отзывы о брендинге</h1><div class="cards"><div class="card"><img src="'+l+'" alt=""><h1>Прекрасный брендинг!</h1><p>Профессиональный подход, отличные идеи и креативное исполнение. Рекомендую!</p></div><div class="card"><img src="'+t+'" alt=""><h1>Работа вне конкуренции!</h1><p>Работа с командой принесла огромное удовольствие, они действительно создали бренд моей мечты!</p></div><div class="card"><img src="'+r+'" alt=""><h1>Супер результат!</h1><p>Результат превзошел все мои ожидания! Профессионализм и внимание к деталям на высшем уровне.</p></div></div></div></section><section class="wrapper"><div class="exp"><h1>Поделитесь своим опытом</h1><div class="experiences"><div class="experience"><img src="'+n+'" alt=""><h1>Напишите отзыв</h1><p>Оставьте свой отзыв о нашем брендинге и помогите другим сделать выбор.</p></div><div class="experience"><img src="'+d+'" alt=""><h1>Выберите рейтинг</h1><p>Оцените наше сотрудничество по 5-балльной шкале.</p></div><div class="experience"><img src="'+v+'" alt=""><h1>Добавьте фото</h1><p>Прикрепите фото, чтобы проиллюстрировать ваш отзыв.</p></div></div></div></section><section class="wrapper"><div class="read"><div class="clients_l"><img src="'+o+'" alt=""></div><div class="clients_r"><h1>Читайте отзывы наших клиентов</h1><div class="client"><div class="client_t"><div class="client_1"><h1>Иван Иванович</h1><p>Отличный брендинг! Я очень доволен результатом работы команды. Новый логотип выглядит стильно и запоминается. Спасибо!</p></div><div class="client_1"><h1>Мария Петрова</h1><p>Я очень довольна работой агентства! Они помогли мне создать уникальный брендинг, который отражает мой стиль и ценности.</p></div></div><div class="client_b"><div class="client_2"><h1>Александр Сидоров</h1><p>Хотел бы выразить огромную благодарность за качественный брендинг. Я получил именно то, что хотел, и даже больше!</p></div></div></div></div></div></section>',3)),(0,a.Lk)("section",p,[(0,a.Lk)("div",h,[(0,a.Lk)("div",g,[s[4]||(s[4]=(0,a.Lk)("h1",null,"Читайте отзывы наших клиентов",-1)),s[5]||(s[5]=(0,a.Lk)("p",null,"Хотите увидеть больше отзывов от наших клиентов? Нажмите кнопку «Показать больше отзывов».",-1)),(0,a.Lk)("button",{class:"review_b",onClick:s[0]||(s[0]=(...e)=>f.openModal&&f.openModal(...e))},"Показать больше отзывов")])])]),L.isModalOpen?((0,a.uX)(),(0,a.CE)("section",u,[(0,a.Lk)("div",m,[(0,a.Lk)("button",{class:"close-button",onClick:s[1]||(s[1]=(...e)=>f.closeModal&&f.closeModal(...e))},"×"),(0,a.Lk)("div",k,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(f.paginatedReviews,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"review"},[(0,a.Lk)("h3",null,(0,c.v_)(e.name),1),(0,a.Lk)("p",null,(0,c.v_)(e.feedback),1),(0,a.Lk)("p",null,[s[6]||(s[6]=(0,a.Lk)("strong",null,"Оценка: ",-1)),(0,a.eW)((0,c.v_)(e.estimation),1)])])))),128))]),(0,a.Lk)("div",w,[(0,a.Lk)("button",{onClick:s[2]||(s[2]=(...e)=>f.prevPage&&f.prevPage(...e)),disabled:0===L.currentPage},"Назад",8,P),(0,a.Lk)("button",{onClick:s[3]||(s[3]=(...e)=>f.nextPage&&f.nextPage(...e)),disabled:!f.hasNextPage},"Вперед",8,b)])])])):(0,a.Q3)("",!0)],64)}var L=i(4592),f={data(){return{isModalOpen:!1,reviews:[],currentPage:0,itemsPerPage:2}},computed:{paginatedReviews(){const e=this.currentPage*this.itemsPerPage,s=e+this.itemsPerPage;return this.reviews.slice(e,s)},hasNextPage(){return(this.currentPage+1)*this.itemsPerPage<this.reviews.length}},methods:{async openModal(){this.reviews.length||await this.fetchReviews(),this.isModalOpen=!0},closeModal(){this.isModalOpen=!1},nextPage(){this.hasNextPage&&this.currentPage++},prevPage(){this.currentPage>0&&this.currentPage--},async fetchReviews(){try{const{data:e,error:s}=await L.A.from("reviews").select("*").order("id",{ascending:!0});console.log("Данные из базы:",e),s?console.error("Ошибка при загрузке отзывов:",s):e&&e.length>0?this.reviews=e:console.log("Таблица пустая. Проверьте данные в базе.")}catch(e){console.error("Ошибка подключения к Supabase:",e)}}}},x=i(1241);const C=(0,x.A)(f,[["render",_]]);var M=C}}]);
//# sourceMappingURL=125.eef30a0c.js.map