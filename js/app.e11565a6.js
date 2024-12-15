(function(){"use strict";var e={9512:function(e,t,n){var r=n(5130),a=n(6768);const o={id:"app"};function i(e,t,n,r,i,c){const l=(0,a.g2)("Header"),u=(0,a.g2)("router-view"),s=(0,a.g2)("FAQ"),d=(0,a.g2)("ContactForm"),f=(0,a.g2)("Footer");return(0,a.uX)(),(0,a.CE)("div",o,[(0,a.bF)(l),(0,a.bF)(u),(0,a.bF)(s),(0,a.bF)(d),(0,a.bF)(f)])}var c=n(4232),l=n.p+"img/logo.c000aace.svg",u=n.p+"img/search.2ea0fa5d.svg",s=n.p+"img/user.c99dfc05.svg",d=n.p+"img/shop.13bd5674.svg";const f={class:"wrapper"},p={id:"head"},h={class:"logo"},v={class:"nav-links"},b={key:0,class:"search-container"},g={key:0,class:"search-results"},m={key:1,class:"no-results"};function k(e,t,n,o,i,k){const y=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("header",null,[(0,a.Lk)("section",f,[(0,a.Lk)("nav",p,[(0,a.Lk)("div",h,[(0,a.bF)(y,{to:"/"},{default:(0,a.k6)((()=>t[3]||(t[3]=[(0,a.Lk)("img",{src:l,alt:"Logo"},null,-1)]))),_:1})]),(0,a.Lk)("ul",v,[(0,a.Lk)("li",null,[(0,a.bF)(y,{to:"/about"},{default:(0,a.k6)((()=>t[4]||(t[4]=[(0,a.Lk)("p",null,"О компании",-1)]))),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(y,{to:"/catalog"},{default:(0,a.k6)((()=>t[5]||(t[5]=[(0,a.Lk)("p",null,"Каталог",-1)]))),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(y,{to:"/contacts"},{default:(0,a.k6)((()=>t[6]||(t[6]=[(0,a.Lk)("p",null,"Контакты",-1)]))),_:1})]),(0,a.Lk)("li",null,[(0,a.Lk)("img",{src:u,alt:"Поиск",onClick:t[0]||(t[0]=(...e)=>k.toggleSearch&&k.toggleSearch(...e))})])]),t[7]||(t[7]=(0,a.Fv)('<div class="icons" data-v-04dc1158><a href="#" data-v-04dc1158><img src="'+s+'" alt="Личный кабинет" data-v-04dc1158></a><a href="#" data-v-04dc1158><img src="'+d+'" alt="Корзина" data-v-04dc1158></a></div>',1))]),i.isSearchVisible?((0,a.uX)(),(0,a.CE)("div",b,[(0,a.bo)((0,a.Lk)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>i.searchQuery=e),placeholder:"Введите запрос",onInput:t[2]||(t[2]=(...e)=>k.performSearch&&k.performSearch(...e))},null,544),[[r.Jo,i.searchQuery]]),i.results.length?((0,a.uX)(),(0,a.CE)("div",g,[(0,a.Lk)("ul",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.results,(e=>((0,a.uX)(),(0,a.CE)("li",{key:e.page},[(0,a.bF)(y,{to:e.link},{default:(0,a.k6)((()=>[(0,a.eW)((0,c.v_)(e.page)+" — "+(0,c.v_)(e.query),1)])),_:2},1032,["to"])])))),128))])])):((0,a.uX)(),(0,a.CE)("p",m,"Совпадений не найдено"))])):(0,a.Q3)("",!0)])])}n(8992),n(4520);var y={name:"HeaderPage",data(){return{isSearchVisible:!1,searchQuery:"",results:[],pages:[{page:"О компании",link:"/about",content:"Информация о компании"},{page:"Каталог",link:"/catalog",content:"Список товаров"},{page:"Услуги",link:"/services",content:"Описание услуг"},{page:"Контакты",link:"/contacts",content:"Свяжитесь с нами"},{page:"Портфолио",link:"/portfolio",content:"Готовые работы"}]}},methods:{toggleSearch(){this.isSearchVisible=!this.isSearchVisible,this.searchQuery="",this.results=[]},performSearch(){const e=this.searchQuery.toLowerCase().trim();this.results=""!==e?this.pages.filter((t=>t.page.toLowerCase().includes(e)||t.content.toLowerCase().includes(e))):[]}}},L=n(1241);const C=(0,L.A)(y,[["render",k],["__scopeId","data-v-04dc1158"]]);var F=C,_=n.p+"img/logo.80e5d795.svg",w=n.p+"img/copyright.f0eb7baf.svg";const E={class:"wrapper"},O={class:"footer-container"},S={class:"footer-links"},j={class:"footer-column"};function P(e,t,n,r,o,i){const c=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("footer",null,[(0,a.Lk)("section",E,[(0,a.Lk)("div",O,[t[5]||(t[5]=(0,a.Lk)("div",{class:"footer-logo"},[(0,a.Lk)("img",{src:_,alt:"Reklem",class:"logo-img"})],-1)),(0,a.Lk)("div",S,[(0,a.Lk)("div",j,[t[3]||(t[3]=(0,a.Lk)("h4",null,"Компания",-1)),(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,[(0,a.bF)(c,{to:"/contacts"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Контакты")]))),_:1})]),t[1]||(t[1]=(0,a.Lk)("li",null,[(0,a.Lk)("a",{href:"#"},"Доставка и оплата")],-1)),t[2]||(t[2]=(0,a.Lk)("li",null,[(0,a.Lk)("a",{href:"#"},"Обмен и возврат")],-1))])]),t[4]||(t[4]=(0,a.Fv)('<div class="footer-column" data-v-d4abecea><h4 data-v-d4abecea>Клиентам</h4><ul data-v-d4abecea><li data-v-d4abecea><a href="#" data-v-d4abecea>Личный кабинет</a></li><li data-v-d4abecea><a href="#" data-v-d4abecea>Партнерство</a></li><li data-v-d4abecea><a href="#" data-v-d4abecea>Гарантия</a></li></ul></div><div class="footer-column" data-v-d4abecea><h4 data-v-d4abecea>Политика</h4><ul data-v-d4abecea><li data-v-d4abecea><a href="#" data-v-d4abecea>Обработка данных</a></li><li data-v-d4abecea><img src="'+w+'" alt="Copyright" data-v-d4abecea></li></ul></div>',2))])])])])}var A={name:"FooterPage"};const N=(0,L.A)(A,[["render",P],["__scopeId","data-v-d4abecea"]]);var x=N,T={name:"App",components:{Header:F,Footer:x,FAQ:(0,a.$V)((()=>n.e(508).then(n.bind(n,4769)))),ContactForm:(0,a.$V)((()=>n.e(976).then(n.bind(n,2976))))}};const Q=(0,L.A)(T,[["render",i]]);var X=Q,V=n(1387);const B=()=>Promise.all([n.e(211),n.e(94)]).then(n.bind(n,6045)),I=()=>n.e(87).then(n.bind(n,1448)),H=()=>Promise.all([n.e(211),n.e(96)]).then(n.bind(n,5096)),M=()=>n.e(4).then(n.bind(n,5908)),q=()=>n.e(654).then(n.bind(n,9654)),D=()=>n.e(390).then(n.bind(n,5390)),K=()=>Promise.all([n.e(211),n.e(553)]).then(n.bind(n,7531)),U=()=>n.e(759).then(n.bind(n,4759)),W=()=>Promise.all([n.e(211),n.e(125)]).then(n.bind(n,3226)),$=[{path:"/",component:B},{path:"/about",component:I},{path:"/catalog",component:H},{path:"/contacts",component:M},{path:"/news",component:q},{path:"/portfolio",component:D},{path:"/product/:category/:id",name:"ProductPage",component:K,props:!0},{path:"/service/:id",name:"service",component:U,props:!0},{path:"/review",component:W}],J=(0,V.aE)({history:(0,V.Bt)(),routes:$,scrollBehavior(e,t,n){return n||{top:0}}});var R=J;(0,r.Ef)(X).use(R).mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,o){if(!r){var i=1/0;for(s=0;s<e.length;s++){r=e[s][0],a=e[s][1],o=e[s][2];for(var c=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(c=!1,o<i&&(i=o));if(c){e.splice(s--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var c=2&a&&r;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((function(e){i[e]=function(){return r[e]}}));return i["default"]=function(){return r},n.d(o,i),o}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{4:"38cec7f9",87:"13a9d486",94:"c71a3a8e",96:"de324062",125:"eef30a0c",211:"c2438d5e",390:"b8d83b76",508:"1eb67afe",553:"2cf7ac56",634:"4bcd38f0",654:"95465f48",759:"82dc87cb",976:"ce1540e8"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{4:"e377096d",87:"39ae7164",94:"8ccfd579",96:"c27a8ea8",125:"d90eb2aa",390:"7b8966aa",508:"71f5b62b",553:"aea9a526",654:"ee7061d6",759:"7ae7c657",976:"0f2dea39"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="reklamepub:";n.l=function(r,a,o,i){if(e[r])e[r].push(a);else{var c,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var d=u[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){c=d;break}}c||(l=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+o),c.src=r),e[r]=[a];var f=function(t,n){c.onerror=c.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),a&&a.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),l&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/reklempub/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,a,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",n.nc&&(i.nonce=n.nc);var c=function(n){if(i.onerror=i.onload=null,"load"===n.type)a();else{var r=n&&n.type,c=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+c+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=c,i.parentNode&&i.parentNode.removeChild(i),o(l)}};return i.onerror=i.onload=c,i.href=t,r?r.parentNode.insertBefore(i,r.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){a=i[r],o=a.getAttribute("data-href");if(o===e||o===t)return a}},r=function(r){return new Promise((function(a,o){var i=n.miniCssF(r),c=n.p+i;if(t(i,c))return a();e(r,c,null,a,o)}))},a={524:0};n.f.miniCss=function(e,t){var n={4:1,87:1,94:1,96:1,125:1,390:1,508:1,553:1,654:1,759:1,976:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=r(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(n,r){a=e[t]=[n,r]}));r.push(a[2]=o);var i=n.p+n.u(t),c=new Error,l=function(r){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,a[1](c)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,i=r[0],c=r[1],l=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(a in c)n.o(c,a)&&(n.m[a]=c[a]);if(l)var s=l(n)}for(t&&t(r);u<i.length;u++)o=i[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(s)},r=self["webpackChunkreklamepub"]=self["webpackChunkreklamepub"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(9512)}));r=n.O(r)})();
//# sourceMappingURL=app.e11565a6.js.map