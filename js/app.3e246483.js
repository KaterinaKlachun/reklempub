(function(){"use strict";var e={38928:function(e,t,n){var r=n(45130),o=n(56768);const a={id:"app"};function i(e,t,n,r,i,c){const l=(0,o.g2)("Header"),u=(0,o.g2)("router-view"),s=(0,o.g2)("FAQ"),d=(0,o.g2)("ContactForm"),f=(0,o.g2)("Footer");return(0,o.uX)(),(0,o.CE)("div",a,[(0,o.bF)(l),(0,o.bF)(u),(0,o.bF)(s),(0,o.bF)(d),(0,o.bF)(f)])}var c=n(24232),l=n.p+"img/logo.c000aace.svg",u=n.p+"img/search.2ea0fa5d.svg",s=n.p+"img/user.c99dfc05.svg",d=n.p+"img/shop.13bd5674.svg";const f={class:"wrapper"},p={id:"head"},h={class:"logo"},v={class:"nav-links"},b={key:0,class:"search-container"},g={key:0,class:"search-results"},m={key:1,class:"no-results"};function k(e,t,n,a,i,k){const y=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("header",null,[(0,o.Lk)("div",f,[(0,o.Lk)("nav",p,[(0,o.Lk)("div",h,[(0,o.bF)(y,{to:"/"},{default:(0,o.k6)((()=>t[3]||(t[3]=[(0,o.Lk)("img",{src:l,alt:"Logo"},null,-1)]))),_:1})]),(0,o.Lk)("ul",v,[(0,o.Lk)("li",null,[(0,o.bF)(y,{to:"/about"},{default:(0,o.k6)((()=>t[4]||(t[4]=[(0,o.Lk)("p",null,"О компании",-1)]))),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(y,{to:"/catalog"},{default:(0,o.k6)((()=>t[5]||(t[5]=[(0,o.Lk)("p",null,"Каталог",-1)]))),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(y,{to:"/services"},{default:(0,o.k6)((()=>t[6]||(t[6]=[(0,o.Lk)("p",null,"Услуги",-1)]))),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(y,{to:"/contacts"},{default:(0,o.k6)((()=>t[7]||(t[7]=[(0,o.Lk)("p",null,"Контакты",-1)]))),_:1})]),(0,o.Lk)("li",null,[(0,o.Lk)("img",{src:u,alt:"Поиск",onClick:t[0]||(t[0]=(...e)=>k.toggleSearch&&k.toggleSearch(...e))})])]),t[8]||(t[8]=(0,o.Fv)('<div class="icons" data-v-1e2c936c><a href="#" data-v-1e2c936c><img src="'+s+'" alt="Личный кабинет" data-v-1e2c936c></a><a href="#" data-v-1e2c936c><img src="'+d+'" alt="Корзина" data-v-1e2c936c></a></div>',1))]),i.isSearchVisible?((0,o.uX)(),(0,o.CE)("div",b,[(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>i.searchQuery=e),placeholder:"Введите запрос",onInput:t[2]||(t[2]=(...e)=>k.performSearch&&k.performSearch(...e))},null,544),[[r.Jo,i.searchQuery]]),i.results.length?((0,o.uX)(),(0,o.CE)("div",g,[(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.results,(e=>((0,o.uX)(),(0,o.CE)("li",{key:e.page},[(0,o.bF)(y,{to:e.link},{default:(0,o.k6)((()=>[(0,o.eW)((0,c.v_)(e.page)+" — "+(0,c.v_)(e.query),1)])),_:2},1032,["to"])])))),128))])])):((0,o.uX)(),(0,o.CE)("p",m,"Совпадений не найдено"))])):(0,o.Q3)("",!0)])])}n(98992),n(54520);var y={name:"HeaderPage",data(){return{isSearchVisible:!1,searchQuery:"",results:[],pages:[{page:"О компании",link:"/about",content:"Информация о компании"},{page:"Каталог",link:"/catalog",content:"Список товаров"},{page:"Услуги",link:"/services",content:"Описание услуг"},{page:"Контакты",link:"/contacts",content:"Свяжитесь с нами"},{page:"Портфолио",link:"/portfolio",content:"Готовые работы"}]}},methods:{toggleSearch(){this.isSearchVisible=!this.isSearchVisible,this.searchQuery="",this.results=[]},performSearch(){const e=this.searchQuery.toLowerCase().trim();this.results=""!==e?this.pages.filter((t=>t.page.toLowerCase().includes(e)||t.content.toLowerCase().includes(e))):[]}}},L=n(71241);const C=(0,L.A)(y,[["render",k],["__scopeId","data-v-1e2c936c"]]);var F=C,w=n.p+"img/logo.80e5d795.svg",E=n.p+"img/copyright.f0eb7baf.svg";const S={class:"wrapper"},_={class:"footer-container"},A={class:"footer-links"},O={class:"footer-column"};function j(e,t,n,r,a,i){const c=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("footer",null,[(0,o.Lk)("div",S,[(0,o.Lk)("div",_,[t[5]||(t[5]=(0,o.Lk)("div",{class:"footer-logo"},[(0,o.Lk)("img",{src:w,alt:"Reklem",class:"logo-img"})],-1)),(0,o.Lk)("div",A,[(0,o.Lk)("div",O,[t[3]||(t[3]=(0,o.Lk)("h4",null,"Компания",-1)),(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,[(0,o.bF)(c,{to:"/contacts"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("Контакты")]))),_:1})]),t[1]||(t[1]=(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"#"},"Доставка и оплата")],-1)),t[2]||(t[2]=(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"#"},"Обмен и возврат")],-1))])]),t[4]||(t[4]=(0,o.Fv)('<div class="footer-column" data-v-47b05043><h4 data-v-47b05043>Клиентам</h4><ul data-v-47b05043><li data-v-47b05043><a href="#" data-v-47b05043>Личный кабинет</a></li><li data-v-47b05043><a href="#" data-v-47b05043>Партнерство</a></li><li data-v-47b05043><a href="#" data-v-47b05043>Гарантия</a></li></ul></div><div class="footer-column" data-v-47b05043><h4 data-v-47b05043>Политика</h4><ul data-v-47b05043><li data-v-47b05043><a href="#" data-v-47b05043>Обработка данных</a></li><li data-v-47b05043><img src="'+E+'" alt="" data-v-47b05043></li></ul></div>',2))])])])])}var P={name:"FooterPage"};const N=(0,L.A)(P,[["render",j],["__scopeId","data-v-47b05043"]]);var T=N,x={name:"App",components:{Header:F,Footer:T,FAQ:(0,o.$V)((()=>n.e(385).then(n.bind(n,1746)))),ContactForm:(0,o.$V)((()=>n.e(202).then(n.bind(n,3202))))}};const Q=(0,L.A)(x,[["render",i]]);var X=Q,V=n(81387);const B=()=>n.e(874).then(n.bind(n,92745)),I=()=>n.e(158).then(n.bind(n,29077)),H=()=>n.e(19).then(n.bind(n,61019)),q=()=>n.e(960).then(n.bind(n,15315)),M=()=>n.e(938).then(n.bind(n,95938)),D=()=>n.e(755).then(n.bind(n,43755)),K=()=>n.e(922).then(n.bind(n,25899)),U=[{path:"/",component:B},{path:"/about",component:I},{path:"/catalog",component:H},{path:"/contacts",component:q},{path:"/news",component:M},{path:"/portfolio",component:D},{path:"/services",component:K},{path:"/product/:category/:id",name:"ProductPage",component:()=>n.e(825).then(n.bind(n,31491)),props:!0}],W=(0,V.aE)({history:(0,V.Bt)(),routes:U,scrollBehavior(e,t,n){return n||{top:0}}});var $=W;(0,r.Ef)(X).use($).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],a=e[s][2];for(var c=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(c=!1,a<i&&(i=a));if(c){e.splice(s--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{19:"e559087c",158:"6c8a35f4",202:"2b7d525c",385:"018a155f",755:"e224e26c",825:"abfa987d",874:"f8594bd0",922:"297b6736",938:"d7e4e165",960:"b7f7e20c"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{19:"3300c20c",158:"2ceb3be2",202:"8d4bc7c9",385:"a5397247",755:"5ca1514a",825:"1a011ba7",874:"afe94813",922:"377fae4e",938:"6490ffa2",960:"848f22ef"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="reklamepub:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var c,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var d=u[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){c=d;break}}c||(l=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+a),c.src=r),e[r]=[o];var f=function(t,n){c.onerror=c.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),l&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/reklempub/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,o,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",n.nc&&(i.nonce=n.nc);var c=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var r=n&&n.type,c=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+c+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=c,i.parentNode&&i.parentNode.removeChild(i),a(l)}};return i.onerror=i.onload=c,i.href=t,r?r.parentNode.insertBefore(i,r.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),c=n.p+i;if(t(i,c))return o();e(r,c,null,o,a)}))},o={524:0};n.f.miniCss=function(e,t){var n={19:1,158:1,202:1,385:1,755:1,825:1,874:1,922:1,938:1,960:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),c=new Error,l=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],c=r[1],l=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(l)var s=l(n)}for(t&&t(r);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},r=self["webpackChunkreklamepub"]=self["webpackChunkreklamepub"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(38928)}));r=n.O(r)})();
//# sourceMappingURL=app.3e246483.js.map