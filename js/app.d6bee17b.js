(function(e){function t(t){for(var a,r,s=t[0],l=t[1],u=t[2],c=0,d=[];c<s.length;c++)r=s[c],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={1:0},o={1:0},i=[];function s(e){return l.p+"js/"+({}[e]||e)+"."+{2:"bc370637",3:"572f6b06",4:"5f7f10ff",5:"a9846a07",6:"fb288597"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={2:1,3:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{2:"1382822a",3:"8be3566a",4:"31d6cfe0",5:"31d6cfe0",6:"31d6cfe0"}[e]+".css",o=l.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===a||c===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],c=u.getAttribute("data-href");if(c===a||c===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=s(e);var d=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=c;i.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);n("5319"),n("573e"),n("7d6e"),n("e54f"),n("0ca9"),n("5b0d"),n("a1e8");var a=n("2b0e"),r=n("f476"),o=n("42d2"),i=n("b05d"),s=n("436b");a["a"].use(i["a"],{config:{},lang:r["a"],iconSet:o["a"],plugins:{Dialog:s["a"]}});var l=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},u=[],c={name:"App"},d=c,f=n("2877"),p=Object(f["a"])(d,l,u,!1,null,null,null),g=p.exports,h=n("8c4f");const m=[{path:"/",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"8b24"))},{path:"ar",name:"aframe-ar",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"d881"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"e51e"))}];var v=m;a["a"].use(h["a"]);var b=function(){const e=new h["a"]({scrollBehavior:()=>({x:0,y:0}),routes:v,mode:"hash",base:""});return e},y=async function(){const e="function"===typeof b?await b({Vue:a["a"]}):b,t={router:e,render:e=>e(g),el:"#q-app"};return{app:t,router:e}},w=n("9483"),P=n("2a19");Object(w["a"])("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.")},registered(e){console.log("Service worker has been registered.")},cached(e){console.log("Content has been cached for offline use.")},updatefound(e){console.log("New content is downloading.")},updated(){console.log("Update is available"),P["a"].create({message:"New content is available; please refresh.",icon:"mdi-cellphone-arrow-down",closeBtn:"Refresh",timeout:1e4,type:"positive",classes:"glossy text-white",onDismiss(){location.reload(!0)}})},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var A=n("a925"),O={failed:"Action failed",success:"Action was successful",language:"language",startAugmentedReality:"start augmented reality",usageInfoPartOne:"For usage instructions, click on the button",usageInfoPartTwo:"from the navigation bar.",name:"Antonio Peticov's",art:"art",in:"in",augumented:"Augmented",reality:"Reality",subtitleInfo:"Antonio Peticov (born July 2, 1946) is a Brazilian painter, designer, sculptor, and engraver."},j={failed:"Action failed",success:"Action was successful",language:"idioma",startAugmentedReality:"Iniciar realidade aumentada",usageInfoPartOne:"Para instruções de uso, clique no botão",usageInfoPartTwo:"da barra de navegação.",mainTitle:"A arte de Antônio Peticov em Realidade Aumentada",name:"Antonio Peticov",art:"arte",in:"de",augumented:"Aumentada",reality:"Realidade",subtitleInfo:"Antonio Peticov (nascido em 2 de julho de 1946) é um pintor, desenhista, escultor e gravador brasileiro."},k={"en-us":O,"pt-br":j};a["a"].use(A["a"]);const x=new A["a"]({locale:"en-us",fallbackLocale:"en-us",messages:k});var S=({app:e})=>{e.i18n=x},E=n("bc3a"),_=n.n(E);a["a"].prototype.$axios=_.a;var T=()=>{a["a"].config.ignoredElements=["a-scene","a-sky","a-light","a-nft","a-assets","a-asset-item","a-marker","a-entity","a-text","a-plane","a-box","a-box","a-image","a-video","a-camera","a-cursor","a-entity"]},C=n("4b46");/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&n.e(0).then(n.t.bind(null,"a0db",7));const I="";async function N(){const{app:e,router:t}=await y();let n=!1;const r=e=>{n=!0;const a=Object(e)===e?t.resolve(e).route.fullPath:e;window.location.href=a},o=window.location.href.replace(window.location.origin,""),i=[S,void 0,T,C["default"]];for(let l=0;!1===n&&l<i.length;l++)if("function"===typeof i[l])try{await i[l]({app:e,router:t,Vue:a["a"],ssrContext:null,redirect:r,urlPath:o,publicPath:I})}catch(s){return s&&s.url?void(window.location.href=s.url):void console.error("[Quasar] boot error:",s)}!0!==n&&new a["a"](e)}N()},"5b0d":function(e,t,n){}});