(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"713b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("q-layout",{attrs:{view:"hHh lpR fFf"}},[e("q-header",{attrs:{elevated:""}},[e("q-toolbar",{staticClass:"bg-purple"},[e("q-toolbar-title",[t._v("\n        Peticov AR\n      ")]),e("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"info"},on:{click:function(e){t.dialog=!0}}}),e("toggle-language",{staticClass:"q-ml-sm"})],1)],1),e("q-dialog",{model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("q-layout",{staticClass:"bg-grey-3",attrs:{view:"hHh lpR fFf",container:""}},[e("q-header",{staticClass:"glossy bg-purple-8 text-white",attrs:{bordered:""}},[e("q-toolbar",[e("q-toolbar-title",[t._v("\n            Instruction\n          ")]),e("q-space"),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1)],1),e("q-page-container",[e("q-page",{staticClass:"q-pa-sm"},[e("q-markdown",{attrs:{src:t.readme}})],1)],1),e("q-footer",{staticClass:"bg-white text-black",attrs:{bordered:""}},[e("q-toolbar",[e("q-toolbar-title",[e("div",{staticClass:"text-center"},[e("small",[t._v("\n               © "+t._s((new Date).getFullYear())+" — VR & AR + Web technologies = ❤\n             ")])]),t._l(t.essentialLinks,(function(a){return e("EssentialLink",t._b({key:a.title},"EssentialLink",a,!1))}))],2)],1)],1)],1)],1),e("q-page-container",[e("router-view")],1)],1)},r=[],o=function(){var t=this,e=t._self._c;return e("q-item",{staticClass:"vertical-middle",attrs:{clickable:"",tag:"a",target:"_blank",href:t.link}},[t.icon?e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:t.icon}})],1):t._e(),e("q-item-section",[e("q-item-label",[t._v(t._s(t.title))]),e("q-item-label",{attrs:{caption:""}},[t._v("\n      "+t._s(t.caption)+"\n    ")])],1)],1)},i=[],s={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},l=s,c=a("2877"),p=a("66e5"),u=a("4074"),h=a("0016"),m=a("0170"),g=a("eebe"),d=a.n(g),b=Object(c["a"])(l,o,i,!1,null,null,null),k=b.exports;d()(b,"components",{QItem:p["a"],QItemSection:u["a"],QIcon:h["a"],QItemLabel:m["a"]});var f=function(){var t=this,e=t._self._c;return e("q-select",{staticStyle:{"min-width":"150px"},attrs:{options:t.langOptions,label:t.$t("language"),dense:"",borderless:"","emit-value":"","map-options":"","options-dense":"",color:"purple","label-color":"white"},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"translate",color:"white"}})]},proxy:!0}]),model:{value:t.lang,callback:function(e){t.lang=e},expression:"lang"}})},v=[],w={data(){return{lang:this.$i18n.locale,langOptions:[{value:"en-us",label:"English"},{value:"pt-br",label:"Português"}]}},watch:{lang(t){this.$i18n.locale=t}}},q=w,y=a("ddd8"),_=Object(c["a"])(q,f,v,!1,null,null,null),Q=_.exports;d()(_,"components",{QSelect:y["a"],QIcon:h["a"]});var C="# Peticov's Art in AR (peticov-ar)\n### Try it on Mobile\n\nTo try it on your phone, it is only 2 easy steps, check it out!\n1. Open one of the custom markers. There're five custom markers:\n- [marker logo of CITE](https://raw.githubusercontent.com/thauska/peticov-ar/purehtml/marker/marker-cite.png)\n- [marker Pythagoras Tree](https://raw.githubusercontent.com/thauska/peticov-ar/purehtml/marker/marker-frac1.png)\n- [marker Fractal Pentagonal](https://raw.githubusercontent.com/thauska/peticov-ar/purehtml/marker/marker-frac2.png)\n- [marker Sierpinski Triangle](https://raw.githubusercontent.com/thauska/peticov-ar/purehtml/marker/marker-frac3.png)\n- [marker Sierpinski Carpet](https://raw.githubusercontent.com/thauska/peticov-ar/purehtml/marker/marker-frac4.png)\n\n- Or, download, print all and cut each one, [clicking here](https://github.com/thauska/peticov-ar/files/7375473/marcadores-para-impressao.pdf).\n<br />\n2. Open this [augmented reality webapps](https://thauska.github.io/peticov-ar/) in your phone browser, and point it at one of the markers.\n\n**You are done!** It will open a webpage which read the phone camera, localize the custom marker and add the art of [Antonio Peticov](https://pt.wikipedia.org/wiki/Antonio_Peticov). Each custom marker will have an different object appearing, just as the examples you can see below.\n\n![webappPeticovAR](https://user-images.githubusercontent.com/8525721/107549098-2db12e00-6bae-11eb-8ae6-644260c851a1.jpeg)\n![theladder](https://user-images.githubusercontent.com/8525721/107549041-1d00b800-6bae-11eb-9ec4-781866859248.jpeg)\n### Acknowledgment\n\n**Made with [AFrame](https://aframe.io/) & [AR.js](https://github.com/jeromeetienne/AR.js) and integrated with [Quasar Framework](https://quasar.dev/)**\n\nSpecial thanks for:\n- Romulo Gabriel [@yemolai](https://github.com/Yemolai) by encouraging study\n- [Patrick Monteiro](https://github.com/patrickmonteiro) for helping me with integration with Quasar Framework!\n- [Victor Almeida](https://twitter.com/CondeNerd) for helping me with design! <3\n- [Diego Souza](https://github.com/Fayhen) for teaching me about gitflow actions.\n";const S=[{title:"Github",caption:"https://github.com/thauska/peticov-ar",icon:"fab fa-github",link:"https://github.com/thauska/peticov-ar"}];var A={name:"MainLayout",components:{EssentialLink:k,ToggleLanguage:Q},data(){return{readme:C,dialog:!1,essentialLinks:S}}},P=A,x=a("4d5a"),j=a("e359"),L=a("65c6"),R=a("6ac5"),T=a("9c40"),F=a("24e8"),I=a("2c91"),O=a("09e3"),E=a("9989"),M=a("7ff0"),D=a("7f67"),H=Object(c["a"])(P,n,r,!1,null,null,null);e["default"]=H.exports;d()(H,"components",{QLayout:x["a"],QHeader:j["a"],QToolbar:L["a"],QToolbarTitle:R["a"],QBtn:T["a"],QDialog:F["a"],QSpace:I["a"],QPageContainer:O["a"],QPage:E["a"],QFooter:M["a"]}),d()(H,"directives",{ClosePopup:D["a"]})}}]);