"use strict";(self["webpackChunkreklamepub"]=self["webpackChunkreklamepub"]||[]).push([[19],{61019:function(t,e,i){i.r(e),i.d(e,{default:function(){return K}});var c=i(56768);const r={class:"info"},o={class:"pagination"},s={href:""},g={class:"wrapper"},n={class:"categories"},p={class:"category"},a={id:"catalog-container",class:"catalog_container"};function l(t,e,i,l,m,u){const d=(0,c.g2)("router-link"),f=(0,c.g2)("Category"),v=(0,c.g2)("ProductCard");return(0,c.uX)(),(0,c.CE)(c.FK,null,[(0,c.Lk)("div",r,[(0,c.Lk)("div",o,[(0,c.Lk)("a",s,[(0,c.bF)(d,{to:"/"},{default:(0,c.k6)((()=>e[0]||(e[0]=[(0,c.eW)("Главная /")]))),_:1})])])]),e[2]||(e[2]=(0,c.Lk)("div",{class:"wrapper"},[(0,c.Lk)("div",{class:"cat"},[(0,c.Lk)("h1",null,[(0,c.Lk)("span",null,"Каталог")]),(0,c.Lk)("p",null," Следует отметить, что разбавленное изрядной долей эмпатии, рациональное мышление требует определения и уточнения прогресса профессионального сообщества. Но глубокий уровень погружения влечет за собой процесс внедрения и модернизации глубокомысленных рассуждений. ")])],-1)),(0,c.Lk)("div",g,[(0,c.Lk)("div",n,[e[1]||(e[1]=(0,c.Lk)("p",null,"Категории",-1)),(0,c.Lk)("div",p,[((0,c.uX)(!0),(0,c.CE)(c.FK,null,(0,c.pI)(m.categories,((t,e)=>((0,c.uX)(),(0,c.Wv)(f,{key:e,name:t.name,image:t.image,categoryKey:e,onCategorySelected:u.loadProducts},null,8,["name","image","categoryKey","onCategorySelected"])))),128))])]),(0,c.Lk)("div",a,[((0,c.uX)(!0),(0,c.CE)(c.FK,null,(0,c.pI)(m.displayedProducts,((t,e)=>((0,c.uX)(),(0,c.Wv)(v,{key:e,product:t,category:m.selectedCategory,productId:e+1,onClick:t=>u.viewProduct(e)},null,8,["product","category","productId","onClick"])))),128))])])],64)}i(44114);var m=i(45130),u=i(24232);const d=["data-category"],f=["src","alt"];function v(t,e,i,r,o,s){return(0,c.uX)(),(0,c.CE)("div",{class:"category_1",onClick:e[0]||(e[0]=(0,m.D$)(((...t)=>s.selectCategory&&s.selectCategory(...t)),["prevent"])),"data-category":i.categoryKey},[(0,c.Lk)("img",{src:i.image,alt:i.name},null,8,f),(0,c.Lk)("p",null,(0,u.v_)(i.name),1)],8,d)}var S={name:"CategoryPage",props:{name:String,image:String,categoryKey:String},methods:{selectCategory(){this.$emit("categorySelected",this.categoryKey)}}},x=i(71241);const y=(0,x.A)(S,[["render",v],["__scopeId","data-v-1c0854c9"]]);var h=y;const b={class:"product-card"},k=["src","alt"],C={class:"product-title"},P={class:"product-price"};function L(t,e,i,r,o,s){return(0,c.uX)(),(0,c.CE)("div",b,[(0,c.Lk)("img",{src:i.product.imgSrc,alt:i.product.title,class:"product-image"},null,8,k),(0,c.Lk)("h3",C,(0,u.v_)(i.product.title),1),(0,c.Lk)("button",{onClick:e[0]||(e[0]=(...t)=>s.viewProduct&&s.viewProduct(...t)),class:"product-button"},"Выбрать вид"),(0,c.Lk)("p",P,(0,u.v_)(i.product.price),1)])}var w={props:{product:Object,category:String,productId:Number},methods:{viewProduct(){this.$router.push({name:"ProductPage",params:{category:this.category,id:this.productId}})}}};const _=(0,x.A)(w,[["render",L],["__scopeId","data-v-678025a2"]]);var I=_,T={mugs:[{title:"Бокал для айриш кофе",price:"214 ₽",imgSrc:i(67081)},{title:"Кружка «Sublime Color XL»",price:"324 ₽",imgSrc:i(68346)},{title:"Бокал для шампанского «Brut»",price:"664 ₽",imgSrc:i(71051)},{title:"Кружка «Cone»",price:"211 ₽",imgSrc:i(8900)},{title:"Кофейная пара классической формы",price:"392 ₽",imgSrc:i(63621)},{title:"Кофейная пара прямой формы",price:"392 ₽",imgSrc:i(64486)},{title:"Кружка «Nancy Line»",price:"294 ₽",imgSrc:i(52023)},{title:"Кружка «Countryside S» ",price:"269 ₽",imgSrc:i(92896)},{title:"Кружка «Grain» из натуральных волокон",price:"478 ₽",imgSrc:i(39345)},{title:"Кружка «Good Day»",price:"235 ₽",imgSrc:i(90043)},{title:"Кружка «Марго»",price:"145 ₽",imgSrc:i(55850)},{title:"Кружка «Oreo»",price:"319 ₽",imgSrc:i(16601)},{title:"Кружка «Мерсер»",price:"340 ₽",imgSrc:i(8680)},{title:"Кружка «Марко»",price:"274 ₽",imgSrc:i(28487)},{title:"Кружка «Denpasar» с крышкой",price:"590 ₽",imgSrc:i(25014)},{title:"Керамическая кружка «Pascal»",price:"1121 ₽",imgSrc:i(82613)}],thermoses:[{title:"Вакуумная герметичная термокружка «Inter»",price:"600 ₽",imgSrc:i(25921)},{title:"Вакуумная термокружка «Sense»",price:"700 ₽",imgSrc:i(60530)},{title:"Вакуумная термокружка «Valhalla»",price:"700 ₽",imgSrc:i(93571)},{title:"Вакуумная термокружка c кнопкой «Guard»",price:"700 ₽",imgSrc:i(65916)},{title:"Термокружка с медной изоляцией «Bravo»",price:"700 ₽",imgSrc:i(94461)},{title:"Вакуумная термокружка с кнопкой «Streamline»",price:"700 ₽",imgSrc:i(82366)},{title:"Вакуумная термокружка с кнопкой «Upgrade»",price:"700 ₽",imgSrc:i(44943)},{title:"Кружка с термоизоляцией «Silence»",price:"700 ₽",imgSrc:i(86792)},{title:"Кружка с термоизоляцией треугольная «Perenei»",price:"700 ₽",imgSrc:i(52185)},{title:"Кружка с термоизоляцией «Cover»",price:"700 ₽",imgSrc:i(19203)},{title:"Кружка с термоизоляцией волнистая «Waves»",price:"700 ₽",imgSrc:i(81266)},{title:"Кружка стальная «Alaska» с крышкой слайдером",price:"700 ₽",imgSrc:i(69953)},{title:"Пластиковый стакан «Take away»",price:"700 ₽",imgSrc:i(57712)},{title:"Стакан-тамблер «Moment» с кофейной крышкой",price:"700 ₽",imgSrc:i(23599)},{title:"Термокружка «Jar»",price:"700 ₽",imgSrc:i(61022)},{title:"Термокружка «Klein» ",price:"700 ₽",imgSrc:i(15197)}],accessories:[{title:"Брелок «Alen» круглый",price:"81 ₽",imgSrc:i(28520)},{title:"Брелок прямоугольный «Alen 2.0»",price:"166 ₽",imgSrc:i(60411)},{title:"Брелок «Mondo»",price:"187 ₽",imgSrc:i(91594)},{title:"Брелок-открывалка «Dao»",price:"86 ₽",imgSrc:i(20693)},{title:"Антистресс «Кубик»",price:"176 ₽",imgSrc:i(82708)},{title:"Антистресс «Каска»",price:"69 ₽",imgSrc:i(47271)},{title:"Антистресс «Куб»",price:"49 ₽",imgSrc:i(84054)},{title:"Зеркало складное",price:"450 ₽",imgSrc:i(41473)},{title:"Брелок «Triangle»",price:"90 ₽",imgSrc:i(50352)},{title:"Брелок-рулетка «Домик»",price:"90 ₽",imgSrc:i(82472)},{title:"Брелок-рулетка «Block»",price:"60 ₽",imgSrc:i(47865)},{title:"Сумка с клапаном",price:"500 ₽",imgSrc:i(56490)},{title:"Брелок металл «жетон»",price:"65 ₽",imgSrc:i(33211)},{title:"Брелок из нержавеющей стали «круг»",price:"30 ₽",imgSrc:i(7092)},{title:"Брелок акрил прямоугольник",price:"50 ₽",imgSrc:i(79701)},{title:"Зажигалка  бензиновая",price:"250 ₽",imgSrc:i(91478)}],chancellery:[{title:"Алюминиевая шариковая ручка «Joyce»",price:"107 ₽",imgSrc:i(88851)},{title:"Шариковая ручка «PET PEN PRO»",price:"177 ₽",imgSrc:i(44192)},{title:"Ручка картонная шариковая «Эко»",price:"30 ₽",imgSrc:i(58577)},{title:"Ручка soft-touch шариковая «Plane»",price:"40 ₽",imgSrc:i(47022)},{title:"Ручка soft-touch шариковая «Taper»",price:"50 ₽",imgSrc:i(61663)},{title:"Ручка soft-touch шариковая «Zorro»",price:"50 ₽",imgSrc:i(82636)},{title:"Ручка  шариковая «Prodir»",price:"146 ₽",imgSrc:i(29997)},{title:"Конференц сумка «Session»",price:"686 ₽",imgSrc:i(15642)},{title:"Конференц сумка для документов «Congress»",price:"667 ₽",imgSrc:i(9515)},{title:"Конференц сумка для документов «Event»",price:"511 ₽",imgSrc:i(60009)},{title:"Блокнот «Pocket»",price:"685 ₽",imgSrc:i(34648)},{title:"Бизнес-блокнот А5 с клапаном «Fabrizio»",price:"1506 ₽",imgSrc:i(92715)},{title:"Блокнот A6 «Stitch»",price:"112 ₽",imgSrc:i(98842)},{title:"Блокнот A7 «Rainbow S»",price:"175 ₽",imgSrc:i(22373)},{title:"Набор стикеров «Expose» с ручкой и блокнотом А7",price:"170 ₽",imgSrc:i(25124)},{title:"Блокнот «Priestly» с ручкой",price:"417 ₽",imgSrc:i(79575)}]},D={name:"CatalogPage",components:{Category:h,ProductCard:I},data(){return{categories:{mugs:{name:"Кружки",image:i(99289)},thermoses:{name:"Термосы",image:i(76100)},accessories:{name:"Аксессуары",image:i(24965)},chancellery:{name:"Канцелярия",image:i(60449)}},displayedProducts:[],selectedCategory:"mugs",productsData:T,scrollPosition:0}},methods:{loadProducts(t){this.selectedCategory=t,this.displayedProducts=this.productsData[t]||[]},viewProduct(t){this.saveState();const e=this.selectedCategory;this.$router.push({name:"ProductPage",params:{category:e,id:t+1}})},saveState(){sessionStorage.setItem("catalogState",JSON.stringify({selectedCategory:this.selectedCategory,scrollPosition:window.scrollY}))},restoreState(){const t=JSON.parse(sessionStorage.getItem("catalogState"));t?(this.selectedCategory=t.selectedCategory||"mugs",this.scrollPosition=t.scrollPosition||0):this.resetToDefault(),this.loadProducts(this.selectedCategory),this.$nextTick((()=>{window.scrollTo(0,this.scrollPosition)}))},resetToDefault(){this.selectedCategory="mugs",this.scrollPosition=0,this.loadProducts(this.selectedCategory),window.scrollTo(0,0)}},created(){1===performance.navigation.type?this.resetToDefault():this.restoreState()},beforeRouteLeave(t,e,i){this.saveState(),i()}};const E=(0,x.A)(D,[["render",l],["__scopeId","data-v-d9e7d27e"]]);var K=E},25921:function(t,e,i){t.exports=i.p+"img/1.eabd9421.svg"},19203:function(t,e,i){t.exports=i.p+"img/10.30840d14.svg"},81266:function(t,e,i){t.exports=i.p+"img/11.bcc742a5.svg"},69953:function(t,e,i){t.exports=i.p+"img/12.27f4a867.svg"},57712:function(t,e,i){t.exports=i.p+"img/13.84db6441.svg"},23599:function(t,e,i){t.exports=i.p+"img/14.e844a3c0.svg"},61022:function(t,e,i){t.exports=i.p+"img/15.8830ee47.svg"},15197:function(t,e,i){t.exports=i.p+"img/16.646b7c58.svg"},60530:function(t,e,i){t.exports=i.p+"img/2.79f181da.svg"},93571:function(t,e,i){t.exports=i.p+"img/3.4d8d8bd1.svg"},65916:function(t,e,i){t.exports=i.p+"img/4.69ff9343.svg"},94461:function(t,e,i){t.exports=i.p+"img/5.deada540.svg"},82366:function(t,e,i){t.exports=i.p+"img/6.c7575cfe.svg"},44943:function(t,e,i){t.exports=i.p+"img/7.3c1e4f84.svg"},86792:function(t,e,i){t.exports=i.p+"img/8.86fd54bb.svg"},52185:function(t,e,i){t.exports=i.p+"img/9.dce7cefc.svg"},28520:function(t,e,i){t.exports=i.p+"img/1.60b906e7.svg"},82472:function(t,e,i){t.exports=i.p+"img/10.a784e84e.svg"},47865:function(t,e,i){t.exports=i.p+"img/11.b6f28249.svg"},56490:function(t,e,i){t.exports=i.p+"img/12.beda51ab.svg"},33211:function(t,e,i){t.exports=i.p+"img/13.30f61278.svg"},7092:function(t,e,i){t.exports=i.p+"img/14.8f2e3d22.svg"},79701:function(t,e,i){t.exports=i.p+"img/15.cd507422.svg"},91478:function(t,e,i){t.exports=i.p+"img/16.361ca42b.svg"},60411:function(t,e,i){t.exports=i.p+"img/2.da6741bb.svg"},91594:function(t,e,i){t.exports=i.p+"img/3.dba3b80d.svg"},20693:function(t,e,i){t.exports=i.p+"img/4.d3c66cc8.svg"},82708:function(t,e,i){t.exports=i.p+"img/5.5aa9d6d2.svg"},47271:function(t,e,i){t.exports=i.p+"img/6.f5a788d7.svg"},84054:function(t,e,i){t.exports=i.p+"img/7.23a50007.svg"},41473:function(t,e,i){t.exports=i.p+"img/8.205ca767.svg"},50352:function(t,e,i){t.exports=i.p+"img/9.9a0d7386.svg"},88851:function(t,e,i){t.exports=i.p+"img/1.84c154ab.svg"},60009:function(t,e,i){t.exports=i.p+"img/10.ee61203b.svg"},34648:function(t,e,i){t.exports=i.p+"img/11.4da25c4f.svg"},92715:function(t,e,i){t.exports=i.p+"img/12.4b7a1542.svg"},98842:function(t,e,i){t.exports=i.p+"img/13.031ad9df.svg"},22373:function(t,e,i){t.exports=i.p+"img/14.3b58f7f8.svg"},25124:function(t,e,i){t.exports=i.p+"img/15.c4a1983a.svg"},79575:function(t,e,i){t.exports=i.p+"img/16.1ffd5932.svg"},44192:function(t,e,i){t.exports=i.p+"img/2.e44798d3.svg"},58577:function(t,e,i){t.exports=i.p+"img/3.44f153a3.svg"},47022:function(t,e,i){t.exports=i.p+"img/4.33aeb87d.svg"},61663:function(t,e,i){t.exports=i.p+"img/5.834e54df.svg"},82636:function(t,e,i){t.exports=i.p+"img/6.5fc1ec9e.svg"},29997:function(t,e,i){t.exports=i.p+"img/7.42ac4fda.svg"},15642:function(t,e,i){t.exports=i.p+"img/8.65b658de.svg"},9515:function(t,e,i){t.exports=i.p+"img/9.862e51da.svg"},67081:function(t,e,i){t.exports=i.p+"img/1.f76caceb.svg"},90043:function(t,e,i){t.exports=i.p+"img/10.2aca11df.svg"},55850:function(t,e,i){t.exports=i.p+"img/11.7ae06923.svg"},16601:function(t,e,i){t.exports=i.p+"img/12.0ecf708a.svg"},8680:function(t,e,i){t.exports=i.p+"img/13.10b7d5f7.svg"},28487:function(t,e,i){t.exports=i.p+"img/14.587081ef.svg"},25014:function(t,e,i){t.exports=i.p+"img/15.9cb8dde1.svg"},82613:function(t,e,i){t.exports=i.p+"img/16.09b15c87.svg"},68346:function(t,e,i){t.exports=i.p+"img/2.6046bee1.svg"},71051:function(t,e,i){t.exports=i.p+"img/3.7a395568.svg"},8900:function(t,e,i){t.exports=i.p+"img/4.4cf1835f.svg"},63621:function(t,e,i){t.exports=i.p+"img/5.0374d593.svg"},64486:function(t,e,i){t.exports=i.p+"img/6.7528dd9e.svg"},52023:function(t,e,i){t.exports=i.p+"img/7.a9a7d447.svg"},92896:function(t,e,i){t.exports=i.p+"img/8.9197fe8c.svg"},39345:function(t,e,i){t.exports=i.p+"img/9.304408d3.svg"},24965:function(t,e,i){t.exports=i.p+"img/icon_aksesyar.b2b1e1d0.svg"},60449:function(t,e,i){t.exports=i.p+"img/icon_kanc.a226ec19.svg"},99289:function(t,e,i){t.exports=i.p+"img/icon_krysh.2f5d9576.svg"},76100:function(t,e,i){t.exports=i.p+"img/icon_termos.e90f3924.svg"}}]);
//# sourceMappingURL=19.e559087c.js.map