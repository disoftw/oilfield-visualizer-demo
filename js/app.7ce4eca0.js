(function(e){function t(t){for(var i,o,r=t[0],l=t[1],c=t[2],u=0,m=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);d&&d(t);while(m.length)m.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],i=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(i=!1)}i&&(s.splice(t--,1),e=r(r.s=a[0]))}return e}var i={},n={app:0},s=[];function o(e){return r.p+"js/"+({"client-form~forms":"client-form~forms","client-form":"client-form",forms:"forms",estabilidad:"estabilidad","geopresiones-finales":"geopresiones-finales","log-curves":"log-curves","parametros-mecanicos":"parametros-mecanicos",profile:"profile","propiedades-mecanicas":"propiedades-mecanicas",tables:"tables"}[e]||e)+"."+{"client-form~forms":"29e3e871","client-form":"82f8981e",forms:"2e12fa0a",estabilidad:"1b6ce234","geopresiones-finales":"e314b631","log-curves":"0ab94805","parametros-mecanicos":"6813bc68",profile:"2258d05d","propiedades-mecanicas":"c0728809",tables:"fe898591"}[e]+".js"}function r(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,i){a=n[e]=[t,i]}));t.push(a[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=o(e);var c=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(u);var a=n[e];if(0!==a){if(a){var i=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+s+")",c.name="ChunkLoadError",c.type=i,c.request=s,a[1](c)}n[e]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},r.m=e,r.c=i,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(a,i,function(t){return e[t]}.bind(null,i));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/oilfield-visualizer-demo/",r.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"1e1d":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"section is-title-bar"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("ul",e._l(e.titleStack,(function(t,i){return a("li",{key:i},[e._v(" "+e._s(t)+" ")])})),0)])]),a("div",{staticClass:"level-right"},[a("div",{staticClass:"level-item"},[a("div",{staticClass:"buttons is-right"},[a("a",{staticClass:"button is-primary",attrs:{href:"https://admin-one.justboil.me/",target:"_blank"}},[a("b-icon",{attrs:{icon:"credit-card","custom-size":"default"}}),a("span",[e._v("Premium Demo")])],1)])])])])])},n=[],s={name:"TitleBar",props:{titleStack:{type:Array,default:function(){return[]}}}},o=s,r=a("2877"),l=Object(r["a"])(o,i,n,!1,null,null,null);t["a"]=l.exports},"43f2":function(e,t,a){e.exports=a.p+"img/logo.eb5a226b.jpeg"},"503b":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"hero is-hero-bar"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("h1",{staticClass:"title"},[e._t("default")],2)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.hasRightVisible,expression:"hasRightVisible"}],staticClass:"level-right"},[a("div",{staticClass:"level-item"},[e._t("right")],2)])])])])},n=[],s={name:"HeroBar",props:{hasRightVisible:{type:Boolean,default:!0}}},o=s,r=a("2877"),l=Object(r["a"])(o,i,n,!1,null,null,null);t["a"]=l.exports},"55ab":function(e,t,a){e.exports=a.p+"img/cropped-CENIIP_LOGO-1-220x93.d38e8ed1.jpg"},"56d7":function(e,t,a){"use strict";a.r(t);a("99af"),a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("b107");var i=a("2b0e"),n=a("289d"),s=(a("d3b7"),a("8c4f")),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._e(),a("hero-bar",{attrs:{"has-right-visible":!1}},[e._v(" Welcome to Stress and Log Analysis Dashboard ")]),a("section",{staticClass:"section is-main-section"},[e._e(),e._m(0),e._e()],1)],1)},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"columns is-desktop"},[i("div",{staticClass:"card has-text-centered"},[i("p",{staticClass:"title is-size-5 mx-4 my-4"},[e._v("Desarrollado para PEMEX, 2021")]),i("p",{staticClass:"card-content mx-4"},[e._v(" Este software está destinado a ayudar en el análisis de registros de pozos con el fin de generar curvas de propiedades mecánicas de la roca y permeabilidad para la optimización de los diseños de terminación. El resultado es un conjunto de datos completo de valores de propiedades de la roca listo para la importación directa a programas (MFRAC) de diseño de fracturamiento hidráulico. El análisis de registros geofísicos tiene el propósito de identificar las propiedades petrofísicas generales que caracterizan la zona o yacimiento de interés y no pretende reemplazar el análisis petrofísico como parte de un enfoque de equipo integrado. Como siempre, los valores numéricos calculados no deben ignorar la experiencia, y las condiciones locales. ")]),i("p",{staticClass:"title is-size-5 mx-4 my-4"},[e._v("Objetivo General")]),i("p",{staticClass:"card-content mx-4"},[e._v(" Actualización de los Modelos Geomecánicos (Sector Oriental, Central-Occidental) de Pozo, que permitan optimizar el diseño de fracturamiento hidráulico de los yacimientos, así como su actualización en un desarrollo tecnológico que tendrá una interfaz amigable “Software para los cálculos de propiedades mecánicas de la roca”. ")]),i("p",{staticClass:"title is-size-5 mx-4 my-4"},[e._v("Objetivos Específicos")]),i("div",{staticClass:"card-content mx-4 has-text-left"},[i("ul",[i("li",[e._v(" • Validar modelos petrofísicos del yacimiento que nos permitan obtener un modelo confiable de capacidad de flujo y almacenamiento (permeabilidad y porosidad). ")]),i("li",[e._v(" • Selección de pozos claves para actualización de los modelos geomecánicos (Plan de desarrollo vs. NP Vs Reservas). ")]),i("li",[e._v(" • Integrar y seleccionar base de datos de núcleos de la zona norte (2000 núcleos), para fortalecer la certidumbre de los modelos de permeabilidad y porosidad. ")]),i("li",[e._v(" • Identificar los eventos que sirven para calibración del modelo de geomecánica del subsuelo. ")]),i("li",[e._v(" • Resumen de las propiedades petrofísicas (porosidad, permeabilidad) y propiedades mecánicas de rocas (módulos de Young, relación de Poisson, presión de fractura, esfuerzo mínimo horizontal). ")]),i("li",[e._v(" • Generación de interfaz de visualización de los registros geofísicos y curvas de propiedades mecánicas. ")]),i("li",[e._v(" • Construir un mapa de propiedades mecánicas que permitan el diseño óptimo de fracturas hidráulicas. ")])])]),i("div",{staticClass:"card-body has-text-centered mb-4"},[i("img",{staticClass:"mr-4",attrs:{src:a("55ab"),alt:""}}),i("img",{staticClass:"ml-4",attrs:{width:"200",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Logo_Petr%C3%B3leos_Mexicanos.svg/1200px-Logo_Petr%C3%B3leos_Mexicanos.svg.png",alt:""}})])])])}],l=a("f755"),c=a("1e1d"),u=a("503b"),d=a("9e7c"),m=a("7f57"),p=a("6df7"),f=a("7080"),h={name:"Home",components:{ClientsTableSample:f["a"],CardComponent:p["a"],CardWidget:m["a"],Tiles:d["a"],HeroBar:u["a"],TitleBar:c["a"]},data:function(){return{defaultChart:{chartData:null,extraOptions:l["a"]}}},computed:{titleStack:function(){return["Admin","Dashboard"]}},mounted:function(){this.fillChartData()},methods:{randomChartData:function(e){for(var t=[],a=0;a<e;a++)t.push(Math.round(200*Math.random()));return t},fillChartData:function(){}}},v=h,b=a("2877"),g=Object(b["a"])(v,o,r,!1,null,null,null),y=g.exports;i["a"].use(s["a"]);var C=[{meta:{title:"Dashboard"},path:"/",name:"home",component:y},{meta:{title:"Alcance"},path:"/production",name:"production",component:function(){return a.e("tables").then(a.bind(null,"7850"))}},{meta:{title:"Alcance"},path:"/mecanics/:id",name:"mecanic",component:function(){return a.e("tables").then(a.bind(null,"1bd1"))}},{meta:{title:"Charts"},path:"/charts",name:"charts",component:function(){return a.e("tables").then(a.bind(null,"6923"))}},{meta:{title:"Charts"},path:"/charts/3",name:"charts",component:function(){return a.e("tables").then(a.bind(null,"f35c"))}},{meta:{title:"Charts detail"},path:"/charts/1",name:"charts.edit",component:function(){return a.e("tables").then(a.bind(null,"c041"))}},{meta:{title:"Charts detail"},path:"/charts/2",name:"charts.edit",component:function(){return a.e("tables").then(a.bind(null,"496d"))}},{meta:{title:"Log Curves"},path:"/log-curves",name:"log-curves",component:function(){return a.e("log-curves").then(a.bind(null,"8840"))}},{meta:{title:"Nuevo pozo"},path:"/forms",name:"forms",component:function(){return Promise.all([a.e("client-form~forms"),a.e("forms")]).then(a.bind(null,"0894"))}},{meta:{title:"Mi Cuenta"},path:"/profile",name:"profile",component:function(){return a.e("profile").then(a.bind(null,"c66d"))}},{meta:{title:"New Client"},path:"/client/new",name:"client.new",component:function(){return Promise.all([a.e("client-form~forms"),a.e("client-form")]).then(a.bind(null,"e96b"))}},{meta:{title:"Edit Client"},path:"/client/:id",name:"client.edit",component:function(){return Promise.all([a.e("client-form~forms"),a.e("client-form")]).then(a.bind(null,"e96b"))},props:!0},{meta:{title:"Parámetros Geomecánicos"},path:"/parametros-mecanicos",name:"/parametros-mecanicos",component:function(){return a.e("parametros-mecanicos").then(a.bind(null,"faa9"))},props:!0},{meta:{title:"Propiedades Mécanicas"},path:"/propiedades-mecanicas",name:"/propiedades-mecanicas",component:function(){return a.e("propiedades-mecanicas").then(a.bind(null,"5cfd"))}},{meta:{title:"Análisis de Estabilidad"},path:"/estabilidad",name:"/estabilidad",component:function(){return a.e("estabilidad").then(a.bind(null,"39ed"))}},{meta:{title:"Geopresiones Finales"},path:"/geopresiones-finales",name:"/geopresiones-finales",component:function(){return a.e("geopresiones-finales").then(a.bind(null,"4473"))}}],_=new s["a"]({base:"/oilfield-visualizer-demo/",routes:C,scrollBehavior:function(e,t,a){return a||{x:0,y:0}}}),w=_,A=(a("b0c0"),a("2f62")),x=a("c641"),k=a.n(x);i["a"].use(A["a"]);var S=new A["a"].Store({state:{userName:null,userEmail:null,userAvatar:null,isNavBarVisible:!0,isFooterBarVisible:!0,isAsideVisible:!0,isAsideExpanded:!1,isAsideMobileExpanded:!1,asideActiveForcedKey:null,isAsideRightVisible:!1,hasUpdates:!1,isOverlayVisible:!1,isDarkModeActive:!1},mutations:{basic:function(e,t){e[t.key]=t.value},user:function(e,t){t.name&&(e.userName=t.name),t.email&&(e.userEmail=t.email),t.avatar&&(e.userAvatar=t.avatar)},fullPage:function(e,t){e.isNavBarVisible=!t,e.isAsideVisible=!t,e.isFooterBarVisible=!t,k()(["has-aside-left","has-navbar-fixed-top"],(function(e){t?document.documentElement.classList.remove(e):document.documentElement.classList.add(e)}))},asideStateToggle:function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i="has-aside-expanded";t=null!==a?a:!e.isAsideExpanded,t?document.documentElement.classList.add(i):document.documentElement.classList.remove(i),e.isAsideExpanded=t},asideMobileStateToggle:function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i="has-aside-mobile-expanded";t=null!==a?a:!e.isAsideMobileExpanded,t?document.documentElement.classList.add(i):document.documentElement.classList.remove(i),e.isAsideMobileExpanded=t},asideActiveForcedKeyToggle:function(e,t){e.asideActiveForcedKey=t&&t.menuSecondaryKey?t.menuSecondaryKey:null},asideRightToggle:function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i="has-aside-right";t=null!==a?a:!e.isAsideRightVisible,t?document.documentElement.classList.add(i):document.documentElement.classList.remove(i),e.isAsideRightVisible=t,e.hasUpdates=!1},overlayToggle:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;null===t&&(t=!e.isOverlayVisible),e.isOverlayVisible=!!t},darkModeToggle:function(e){var t="is-dark-mode-active";e.isDarkModeActive=!e.isDarkModeActive,e.isDarkModeActive?document.documentElement.classList.add(t):document.documentElement.classList.remove(t)}},actions:{}}),j=a("9483");Object(j["a"])("".concat("/oilfield-visualizer-demo/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("nav-bar"),a("aside-menu",{attrs:{menu:e.menu}}),a("router-view"),a("footer-bar")],1)},O=[],E=a("5530"),B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{directives:[{name:"show",rawName:"v-show",value:e.isNavBarVisible,expression:"isNavBarVisible"}],staticClass:"navbar is-fixed-top",attrs:{id:"navbar-main"}},[a("div",{staticClass:"navbar-brand"},[a("a",{staticClass:"navbar-item is-hidden-desktop",on:{click:function(t){return t.preventDefault(),e.menuToggleMobile(t)}}},[a("b-icon",{attrs:{icon:e.menuToggleMobileIcon}})],1),e._m(0)]),a("div",{staticClass:"navbar-brand is-right"},[a("a",{staticClass:"navbar-item navbar-item-menu-toggle is-hidden-desktop",on:{click:function(t){return t.preventDefault(),e.menuNavBarToggle(t)}}},[a("b-icon",{attrs:{icon:e.menuNavBarToggleIcon,"custom-size":"default"}})],1)]),a("div",{staticClass:"navbar-menu fadeIn animated faster",class:{"is-active":e.isMenuNavBarActive}},[a("div",{staticClass:"navbar-end"},[a("nav-bar-menu",{staticClass:"has-divider"},[a("b-icon",{attrs:{icon:"account-circle","custom-size":"default"}}),a("span",[e._v("Hola, Admin")]),a("div",{staticClass:"navbar-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/profile","exact-active-class":"is-active"}},[a("b-icon",{attrs:{icon:"account","custom-size":"default"}}),a("span",[e._v("Cuenta")])],1),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"settings","custom-size":"default"}}),a("span",[e._v("Configuración")])],1),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"email","custom-size":"default"}}),a("span",[e._v("Mensajes")])],1),a("hr",{staticClass:"navbar-divider"}),a("a",{staticClass:"navbar-item has-text-danger"},[a("b-icon",{attrs:{icon:"logout","custom-size":"default"}}),a("span",[e._v("Salir")])],1)],1)],1),e._e(),a("a",{staticClass:"navbar-item is-desktop-icon-only has-text-danger",attrs:{title:"Salir"},on:{click:e.logout}},[a("b-icon",{attrs:{icon:"logout","custom-size":"default"}}),a("span",[e._v("Salir")])],1)],1)])])},N=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"navbar-item has-control no-left-space-touch"},[a("div",{staticClass:"control"},[a("input",{staticClass:"input",attrs:{placeholder:"Buscar..."}})])])}],$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"navbar-item has-dropdown has-dropdown-with-icons",class:{"is-hoverable":e.isHoverable,"is-active":e.isDropdownActive},on:{click:e.toggle}},[a("a",{staticClass:"navbar-link is-arrowless"},[e._t("default"),a("b-icon",{attrs:{icon:e.toggleDropdownIcon,"custom-size":"default"}})],2),e._t("dropdown")],2)},z=[],T={name:"NavBarMenu",props:{isHoverable:{type:Boolean,default:!1}},data:function(){return{isDropdownActive:!1}},computed:{toggleDropdownIcon:function(){return this.isDropdownActive?"chevron-up":"chevron-down"}},mounted:function(){window.addEventListener("click",this.forceClose)},beforeDestroy:function(){window.removeEventListener("click",this.forceClose)},methods:{toggle:function(){this.isHoverable||(this.isDropdownActive=!this.isDropdownActive)},forceClose:function(e){this.$el.contains(e.target)||(this.isDropdownActive=!1)}}},L=T,D=Object(b["a"])(L,$,z,!1,null,null,null),P=D.exports,V=a("808f"),I={name:"NavBar",components:{UserAvatar:V["a"],NavBarMenu:P},data:function(){return{isMenuNavBarActive:!1}},computed:Object(E["a"])({menuNavBarToggleIcon:function(){return this.isMenuNavBarActive?"close":"dots-vertical"},menuToggleMobileIcon:function(){return this.isAsideMobileExpanded?"backburger":"forwardburger"}},Object(A["b"])(["isNavBarVisible","isAsideMobileExpanded","userName"])),mounted:function(){var e=this;this.$router.afterEach((function(){e.isMenuNavBarActive=!1}))},methods:{menuToggleMobile:function(){this.$store.commit("asideMobileStateToggle")},menuNavBarToggle:function(){this.isMenuNavBarActive=!this.isMenuNavBarActive},logout:function(){this.$buefy.snackbar.open({message:"Log out clicked",queue:!1})}}},F=I,R=Object(b["a"])(F,B,N,!1,null,null,null),q=R.exports,H=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("aside",{directives:[{name:"show",rawName:"v-show",value:e.isAsideVisible,expression:"isAsideVisible"}],staticClass:"aside is-placed-left is-expanded"},[i("aside-tools",{attrs:{"is-main-menu":!0}},[i("span",[i("img",{attrs:{src:a("43f2"),width:"150",alt:""}})])]),i("div",{ref:"menuContainer",staticClass:"menu-container",on:{mouseenter:e.psUpdate}},[i("div",{staticClass:"menu is-menu-main"},[e._l(e.menu,(function(t,a){return["string"===typeof t?i("p",{key:a,staticClass:"menu-label"},[e._v(e._s(t))]):i("aside-menu-list",{key:a,attrs:{"is-secondary":e.isSecondary,menu:t},on:{"menu-click":e.menuClick}})]}))],2)]),i("div",{staticClass:"menu is-menu-bottom"},[i("aside-menu-list",{attrs:{menu:e.menuBottom},on:{"menu-click":e.menuClick}})],1)],1)},K=[],G=a("b7f5"),U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"aside-tools",class:{"has-icon":!!e.icon}},[a("div",{staticClass:"aside-tools-label"},[e.icon?a("b-icon",{attrs:{icon:e.icon,"custom-size":"default"}}):e._e(),e._t("default")],2),e.hasClose?a("a",{staticClass:"aside-close",on:{click:e.close}},[a("b-icon",{attrs:{icon:"close","custom-size":"default"}})],1):e._e()])},J=[],W={name:"AsideTools",props:{icon:{type:String,default:null},label:{type:String,default:null},hasClose:{type:Boolean,default:!1}},methods:{close:function(){this.$emit("close")}}},X=W,Y=Object(b["a"])(X,U,J,!1,null,null,null),Q=Y.exports,Z=a("9a7b"),ee={name:"AsideMenu",components:{AsideMenuList:Z["default"],AsideTools:Q},props:{menu:{type:Array,default:function(){return[]}},menuBottom:{type:Array,default:function(){return[]}},isSecondary:{type:Boolean,default:!1},label:{type:String,default:null},icon:{type:String,default:null}},computed:Object(E["a"])({},Object(A["b"])(["isAsideVisible","isAsideExpanded","isAsideMobileExpanded"])),mounted:function(){this.ps=new G["a"](this.$refs.menuContainer)},methods:{menuClick:function(e){this.$emit("menu-click",e)},psUpdate:function(){this.ps&&this.ps.update()},close:function(){this.$emit("close")}}},te=ee,ae=Object(b["a"])(te,H,K,!1,null,null,null),ie=ae.exports,ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{directives:[{name:"show",rawName:"v-show",value:e.isFooterBarVisible,expression:"isFooterBarVisible"}],staticClass:"footer"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("div",{staticClass:"footer-copyright"},[a("b",[e._v("© "+e._s(e.year)+", oilfield.tech")]),e._v(" — Oilfield Visualizer Demo "),a("span",{staticClass:"tag"},[e._v("v1.0.0")])])])]),e._m(0)])])])},se=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"level-right"},[i("div",{staticClass:"level-item"},[i("div",{staticClass:"logo"},[i("a",{attrs:{href:"https://oilfield.tech"}},[i("img",{attrs:{src:a("43f2"),alt:"oilfield.tech"}})])])])])}],oe=a("5a0c"),re=a.n(oe),le={name:"FooterBar",computed:Object(E["a"])({year:function(){return re()().year()}},Object(A["b"])(["isFooterBarVisible"]))},ce=le,ue=Object(b["a"])(ce,ne,se,!1,null,null,null),de=ue.exports,me={name:"Home",components:{FooterBar:de,AsideMenu:ie,NavBar:q},computed:Object(E["a"])({menu:function(){return["General",[{to:"/",icon:"home",label:"Inicio"},{to:"/production",label:"Módulo de producción",icon:"cogs"},{to:"/forms",label:"Datos de entrada",icon:"square-edit-outline"},{to:"/log-curves",icon:"trending-up",label:"Base de datos"}],"Gráficas",[{to:"/charts",label:"3D interactivos",icon:"rotate-3d"},{to:"/charts/1",label:"CILD vs PhiN",icon:"chart-scatter-plot"},{to:"/charts/2",label:"RHOB vs Neutron",icon:"chart-scatter-plot"}],"Modelos geomecánicos",[{to:"/charts",label:"Modelos 3D interactivos",icon:"rotate-3d"},{to:"/parametros-mecanicos",label:"Parámetros",icon:"chart-areaspline"},{to:"/mecanics/6",label:"Modelo estructural",icon:"chart-areaspline"},{to:"/mecanics/7",label:"Mecánica estratigráfica",icon:"chart-areaspline"},{to:"/mecanics/8",label:"Presión de poro",icon:"chart-areaspline"},{to:"/propiedades-mecanicas",label:"Propiedades mecánicas",icon:"chart-timeline"},{to:"/estabilidad",label:"Análisis de estabilidad",icon:"chart-scatter-plot-hexbin"},{to:"/geopresiones-finales",label:"Geopresiones finales",icon:"chart-line-stacked"}]]},menuBottom:function(){return[{action:"logout",icon:"logout",label:"Log out",state:"info"}]}},Object(A["b"])(["isOverlayVisible"])),created:function(){this.$store.commit("user",{name:"John Doe",email:"john@example.com",avatar:"https://avatars.dicebear.com/api/human/jjjjjjjjjjjj.svg"})},methods:{menuClick:function(e){e.menuSecondary?(this.menuSecondary=e.menuSecondary,this.menuSecondaryLabel=e.menuSecondaryLabel?e.menuSecondaryLabel:null,this.menuSecondaryIcon=e.menuSecondaryIcon?e.menuSecondaryIcon:null,this.$store.commit("asideActiveForcedKeyToggle",e),this.$store.commit("overlayToggle",!0)):e.action&&("logout"===e.action?this.$buefy.toast.open({message:"Log out clicked",type:"is-danger",queue:!1}):"dark-mode-toggle"===e.action&&this.$store.commit("darkModeToggle"))},menuSecondaryCloseClick:function(){this.$store.commit("overlayToggle",!1)},menuSecondaryClose:function(){this.menuSecondary=this.menuSecondaryLabel=this.menuSecondaryIcon=null,this.$store.commit("asideActiveForcedKeyToggle",null)}},watch:{isOverlayVisible:function(e){e||this.menuSecondaryClose()}}},pe=me,fe=Object(b["a"])(pe,M,O,!1,null,null,null),he=fe.exports,ve=a("04d1"),be="Oilfield visualizer";w.afterEach((function(e){S.commit("asideMobileStateToggle",!1),e.meta&&e.meta.title?document.title="".concat(e.meta.title," — ").concat(be):document.title=be})),i["a"].config.productionTip=!1,i["a"].component("Plotly",ve["Plotly"]),i["a"].use(n["a"]),new i["a"]({router:w,store:S,render:function(e){return e(he)}}).$mount("#app")},"6df7":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card",class:{"has-height-medium":e.isScrollable,"has-card-header-background":e.hasCardHeaderBackground}},[e.title||e.hasTitleSlot?a("header",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title"},[e.icon?a("b-icon",{attrs:{icon:e.icon,"custom-size":"default"}}):e._e(),e.hasTitleSlot?e._t("title"):e.title?a("span",[e._v(e._s(e.title))]):e._e()],2),e.hasButtonSlot?e._t("button"):e.headerIcon?a("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"},on:{click:function(t){return t.preventDefault(),e.headerIconClick(t)}}},[a("b-icon",{attrs:{icon:e.headerIcon,"custom-size":"default"}})],1):e._e()],2):e._e(),e._t("toolbar"),a("div",{ref:"cardContent",staticClass:"card-content"},[e._t("default")],2),e.hasFooterSlot?a("footer",{staticClass:"card-footer"},[e._t("footer")],2):e._e()],2)},n=[],s={name:"CardComponent",props:{title:{type:String,default:null},icon:{type:String,default:null},headerIcon:{type:String,default:null},hasTitleSlot:{type:Boolean,default:!1},hasButtonSlot:{type:Boolean,default:!1},hasFooterSlot:{type:Boolean,default:!1},hasCardHeaderBackground:{type:Boolean,default:!1},isScrollable:{type:Boolean,default:!1}},methods:{headerIconClick:function(){this.$emit("header-icon-click")}},mounted:function(){this.isScrollable&&this.$emit("ps-ready",this.ps)}},o=s,r=a("2877"),l=Object(r["a"])(o,i,n,!1,null,null,null);t["a"]=l.exports},7080:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("modal-box",{attrs:{"is-active":e.isModalActive,"trash-object-name":e.trashObjectName},on:{confirm:e.trashConfirm,cancel:e.trashCancel}}),a("b-table",{attrs:{checkable:!1,loading:e.isLoading,paginated:e.paginated,"per-page":e.perPage,striped:!0,narrowed:"",bordered:!0,hoverable:!0,columns:e.columns,data:e.clients}},[a("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[a("div",{staticClass:"content has-text-grey has-text-centered"},[e.isLoading?[a("p",[a("b-icon",{attrs:{icon:"dots-horizontal",size:"is-large"}})],1),a("p",[e._v("Fetching data...")])]:[a("p",[a("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),a("p",[e._v("Nothing's here…")])]],2)])])],1)},n=[],s=(a("d81d"),a("b0c0"),a("b64b"),a("bc3a")),o=a.n(s),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-modal",{attrs:{active:e.isModalActive,"has-modal-card":""},on:{"update:active":function(t){e.isModalActive=t}}},[a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[e._v("Confirm action")])]),a("section",{staticClass:"modal-card-body"},[a("p",[e._v(" This will permanently delete "),a("b",[e._v(e._s(e.trashObjectName))])]),a("p",[e._v("Action can not be undone.")])]),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:e.cancel}},[e._v("Cancel")]),a("button",{staticClass:"button is-danger",on:{click:e.confirm}},[e._v("Delete")])])])])},l=[],c={name:"ModalBox",props:{isActive:{type:Boolean,default:!1},trashObjectName:{type:String,default:null}},data:function(){return{isModalActive:!1}},watch:{isActive:function(e){this.isModalActive=e},isModalActive:function(e){e||this.cancel()}},methods:{cancel:function(){this.$emit("cancel")},confirm:function(){this.$emit("confirm")}}},u=c,d=a("2877"),m=Object(d["a"])(u,r,l,!1,null,null,null),p=m.exports,f={name:"ClientsTableSample",components:{ModalBox:p},props:{dataUrl:{type:String,default:null},checkable:{type:Boolean,default:!1}},data:function(){return{isModalActive:!1,trashObject:null,columns:[],clients:[],isLoading:!1,paginated:!1,perPage:10,checkedRows:[]}},computed:{trashObjectName:function(){return this.trashObject?this.trashObject.name:null}},mounted:function(){var e=this;this.dataUrl&&(this.isLoading=!0,o.a.get(this.dataUrl).then((function(t){e.isLoading=!1,t.data&&t.data&&(t.data.length>e.perPage&&(e.paginated=!0),e.clients=t.data,e.columns=Object.keys(t.data[0]).map((function(e){return{field:e,label:e.toUpperCase()}})))})).catch((function(t){e.isLoading=!1,e.$buefy.toast.open({message:"Error: ".concat(t.message),type:"is-danger"})})))},methods:{trashModal:function(e){this.trashObject=e,this.isModalActive=!0},trashConfirm:function(){this.isModalActive=!1,this.$buefy.snackbar.open({message:"Confirmed",queue:!1})},trashCancel:function(){this.isModalActive=!1}}},h=f,v=Object(d["a"])(h,i,n,!1,null,null,null);t["a"]=v.exports},"7f57":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("card-component",{staticClass:"is-card-widget",attrs:{icon:e.trendingIcon,"has-button-slot":!0,"has-title-slot":!0}},[a("span",{attrs:{slot:"title"},slot:"title"},[a("b",[e._v(e._s(e.previousValue))]),e._v(" in "),a("b",[e._v(e._s(e.previousPeriod))])]),a("button",{staticClass:"button is-small",attrs:{slot:"button",type:"button"},on:{click:e.buttonClick},slot:"button"},[a("b-icon",{attrs:{icon:"settings","custom-size":"default"}})],1),a("div",{staticClass:"level is-mobile"},[a("div",{staticClass:"level-item"},[a("div",{staticClass:"is-widget-label"},[a("h3",{staticClass:"subtitle is-spaced"},[e._v(" "+e._s(e.label)+" ")]),a("h1",{staticClass:"title"},[a("growing-number",{attrs:{value:e.number,prefix:e.prefix,suffix:e.suffix}})],1)])]),e.icon?a("div",{staticClass:"level-item has-widget-icon"},[a("div",{staticClass:"is-widget-icon"},[a("b-icon",{attrs:{icon:e.icon,size:"is-large",type:e.type}})],1)]):e._e()])])},n=[],s=(a("a9e3"),a("6612")),o=a.n(s),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v(e._s(e.prefix)+e._s(e.newValueFormatted)+e._s(e.suffix))])},l=[],c={name:"GrowingNumber",props:{prefix:{type:String,default:null},suffix:{type:String,default:null},value:{type:Number,default:0},duration:{type:Number,default:500}},data:function(){return{newValue:0,step:0}},computed:{newValueFormatted:function(){return this.newValue<1e3?this.newValue:o()(this.newValue).format("0,0")}},watch:{value:function(){this.growInit()}},mounted:function(){this.growInit()},methods:{growInit:function(){var e=this.value/(this.duration/25);this.grow(e)},grow:function(e){var t=this,a=Math.ceil(this.newValue+e);if(a>this.value)return this.newValue=this.value,!1;this.newValue=a,setTimeout((function(){t.grow(e)}),25)}}},u=c,d=a("2877"),m=Object(d["a"])(u,r,l,!1,null,null,null),p=m.exports,f={name:"CardWidget",components:{GrowingNumber:p},props:{icon:{type:String,default:null},number:{type:Number,default:0},prefix:{type:String,default:null},suffix:{type:String,default:null},label:{type:String,default:null},type:{type:String,default:null},previousNumber:{type:Number,default:0},previousPeriod:{type:String,default:null}},computed:{trendingIcon:function(){return this.previousNumber<this.number?"arrow-up-bold":"arrow-down-bold"},previousValue:function(){var e=this.previousNumber<1e3?this.previousNumber:o()(this.previousNumber).format("0,0");return this.prefix&&(e=this.prefix+e),this.suffix&&(e+=this.suffix),e}},methods:{buttonClick:function(){this.$buefy.snackbar.open({message:"Got click",queue:!1})}}},h=f,v=Object(d["a"])(h,i,n,!1,null,null,null);t["a"]=v.exports},"808f":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"is-user-avatar"},[a("img",{attrs:{src:e.newUserAvatar,alt:e.userName}})])},n=[],s=(a("ac1f"),a("5319"),a("5530")),o=a("2f62"),r={name:"UserAvatar",props:{avatar:{type:String,default:null}},computed:Object(s["a"])({newUserAvatar:function(){if(this.avatar)return this.avatar;if(this.userAvatar)return this.userAvatar;var e="somename";return this.userName&&(e=this.userName.replace(/[^a-z0-9]+/i,"")),"https://avatars.dicebear.com/v2/human/".concat(e,".svg?options[mood][]=happy")}},Object(o["b"])(["userAvatar","userName"]))},l=r,c=a("2877"),u=Object(c["a"])(l,i,n,!1,null,null,null);t["a"]=u.exports},"9a7b":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{class:{"menu-list":!e.isSubmenuList}},e._l(e.menu,(function(t,i){return a("aside-menu-item",{key:i,attrs:{"is-secondary":e.isSecondary,item:t},on:{"menu-click":e.menuClick}})})),1)},n=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{class:{"is-active":e.isDropdownActive}},[a(e.componentIs,{tag:"component",class:e.componentClass,attrs:{to:e.itemTo,href:e.itemHref,title:e.componentTitle,"exact-active-class":e.componentActiveClass},on:{click:e.menuClick}},[e.item.icon?a("b-icon",{class:{"has-update-mark":e.item.updateMark},attrs:{icon:e.item.icon,"custom-size":"default"}}):e._e(),e.item.label?a("span",{class:{"menu-item-label":!!e.item.icon}},[a("small",[e._v(e._s(e.item.label))])]):e._e()],1),e.hasDropdown?a("aside-menu-list",{attrs:{menu:e.item.menu,isSubmenuList:!0}}):e._e()],1)},o=[],r=(a("d3b7"),a("5530")),l=a("2f62"),c={name:"AsideMenuItem",components:{AsideMenuList:function(){return Promise.resolve().then(a.bind(null,"9a7b"))}},props:{item:{type:Object,default:null},isSecondary:{type:Boolean,default:!1}},data:function(){return{isDropdownActive:!1}},methods:{menuClick:function(){this.$emit("menu-click",this.item),this.hasDropdown&&(this.isDropdownActive=!this.isDropdownActive,this.isSecondary||this.isAsideMobileExpanded||this.$store.commit("asideStateToggle",!0))}},computed:Object(r["a"])({componentIs:function(){return this.item.to?"router-link":"a"},hasSubmenuIcon:function(){return this.hasDropdown||this.item.menuSecondary},hasDropdown:function(){return!!this.item.menu},submenuIcon:function(){return this.item.menuSecondary?"chevron-right":this.isDropdownActive?"minus":"plus"},itemTo:function(){return this.item.to?this.item.to:null},itemHref:function(){return this.item.href?this.item.href:null},componentTitle:function(){return!this.isAsideExpanded&&this.item.label?this.item.label:null},componentClass:function(){var e={"has-icon":!!this.item.icon,"has-submenu-icon":this.hasSubmenuIcon};return this.item.state&&(e["is-state-"+this.item.state]=!0,e["is-hoverable"]=!0),this.asideActiveForcedKey&&this.item.menuSecondaryKey&&this.asideActiveForcedKey===this.item.menuSecondaryKey&&(e["is-active"]=!0),e},componentActiveClass:function(){return this.asideActiveForcedKey?null:"is-active"}},Object(l["b"])(["asideActiveForcedKey","isAsideExpanded"])),watch:{isAsideExpanded:function(e){e||(this.isDropdownActive=!1)}}},u=c,d=a("2877"),m=Object(d["a"])(u,s,o,!1,null,null,null),p=m.exports,f={name:"AsideMenuList",components:{AsideMenuItem:p},props:{isSubmenuList:{type:Boolean,default:!1},isSecondary:{type:Boolean,default:!1},menu:{type:Array,default:function(){return[]}}},methods:{menuClick:function(e){this.$emit("menu-click",e)}}},h=f,v=Object(d["a"])(h,i,n,!1,null,null,null);t["default"]=v.exports},"9e7c":function(e,t,a){"use strict";a("d81d"),a("a9e3");var i,n,s=a("91c8"),o=a.n(s),r={name:"Tiles",props:{maxPerRow:{type:Number,default:5}},methods:{renderAncestor:function(e,t){return e("div",{attrs:{class:"tile is-ancestor"}},t.map((function(t){return e("div",{attrs:{class:"tile is-parent"}},[t])})))}},render:function(e){var t=this;return this.$slots.default.length<=this.maxPerRow?this.renderAncestor(e,this.$slots.default):e("div",{attrs:{class:"is-tiles-wrapper"}},o()(this.$slots.default,this.maxPerRow).map((function(a){return t.renderAncestor(e,a)})))}},l=r,c=a("2877"),u=Object(c["a"])(l,i,n,!1,null,null,null);t["a"]=u.exports},b107:function(e,t,a){},f755:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var i=a("5530"),n={maintainAspectRatio:!1,legend:{display:!1},responsive:!0},s=Object(i["a"])(Object(i["a"])({},n),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}]}})}});
//# sourceMappingURL=app.7ce4eca0.js.map