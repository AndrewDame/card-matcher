(function(t){function e(e){for(var a,c,l=e[0],r=e[1],o=e[2],d=0,m=[];d<l.length;d++)c=l[d],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&m.push(i[c][0]),i[c]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,o||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,l=1;l<s.length;l++){var r=s[l];0!==i[r]&&(a=!1)}a&&(n.splice(e--,1),t=c(c.s=s[0]))}return t}var a={},i={app:0},n=[];function c(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=t,c.c=a,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(s,a,function(e){return t[e]}.bind(null,a));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var u=r;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0eea":function(t,e,s){},1065:function(t,e,s){"use strict";s("7543")},2253:function(t,e,s){},2944:function(t,e,s){},"3b9c":function(t,e,s){},"560a":function(t,e,s){"use strict";s("8c3e")},"56d7":function(t,e,s){"use strict";s.r(e);s("4160"),s("a434"),s("07ac"),s("159b"),s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"#app"}},[s("router-view"),t.gameSetupStatus?s("GameSetup"):t._e()],1)},n=[],c=s("5530"),l=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"GameSetup"},[s("span",{staticClass:"GameSetup__text"},[t._v("Loading game")]),s("span",{staticClass:"GameSetup__period"},[t._v(".")]),s("span",{staticClass:"GameSetup__period"},[t._v(".")]),s("span",{staticClass:"GameSetup__period"},[t._v(".")])])}],o={name:"GameSetup"},u=o,d=(s("61dc"),s("2877")),m=Object(d["a"])(u,l,r,!1,null,null,null),p=m.exports,f=s("2f62"),_={name:"App",components:{GameSetup:p},computed:Object(c["a"])({},Object(f["d"])(["gameSetupStatus"]))},v=_,C=(s("5c0b"),Object(d["a"])(v,i,n,!1,null,null,null)),b=C.exports,g=s("2909"),h=["cat","crow","dragon","horse","hamburger","pizza-slice","carrot","candy-cane","cookie"],S=h.length,y=function(t){return Math.floor(Math.random()*t)},L=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=Object(g["a"])(t),a=[],i=null===e?s.length:e,n=0;n<i;++n){var c=y(s.length);a.push(s[c]),s.splice(c,1)}return a},B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,e=L(h,t);return e.push.apply(e,Object(g["a"])(e)),L(e)},O=B;a["a"].use(f["a"]);var j=new f["a"].Store({state:{cardList:[],flippedStatusList:[],visibilityList:[],checkInProgress:!1,lives:0,loosingLifeStatus:!1,gameCompleted:!1,chosenLives:7,gameInitialized:!1,numCards:6,gameSetupStatus:!1},mutations:{setFlippedStatusList:function(t,e){t.flippedStatusList=e},setCardList:function(t,e){t.cardList=e},setVisibilityList:function(t,e){t.visibilityList=e},setProgressStatus:function(t,e){t.checkInProgress=e},setLoosingLifeStatus:function(t,e){t.loosingLifeStatus=e},setGameInitializedStatus:function(t,e){t.gameInitialized=e},setGameSetupStatus:function(t,e){t.gameSetupStatus=e},setGameCompletedStatus:function(t,e){t.gameCompleted=e},setLives:function(t,e){t.chosenLives=e},setNumCards:function(t,e){t.numCards=e},initializeLives:function(t){t.lives=t.chosenLives},decreaseLives:function(t){t.lives=t.lives-1},toggleCard:function(t,e){t.flippedStatusList.splice(e,1,!t.flippedStatusList[e])},toggleVisibility:function(t,e){t.visibilityList.splice(e,1,!t.visibilityList[e])}},actions:{initializeGame:function(t){var e=t.state,s=t.commit;s("setGameSetupStatus",!0),s("setGameInitializedStatus",!0),setTimeout((function(){for(var t=[],a=[],i=0;i<e.numCards;++i)t.push(!1),a.push(!0);s("setFlippedStatusList",t),s("setVisibilityList",a),s("setCardList",O(e.numCards/2)),s("initializeLives"),s("setGameCompletedStatus",!1),s("setGameSetupStatus",!1)}),1500)},restoreDefault:function(t){var e=t.commit;e("setGameCompletedStatus",!1),e("setGameInitializedStatus",!1)}}}),k=s("8c4f"),W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Game",class:{"Game--success":t.isSuccess&&t.isGameCompleted}},[s("Message",{attrs:{status:t.isGameCompleted,isSuccess:t.isSuccess}}),s("StatusBar",{attrs:{status:t.isGameCompleted}}),s("Background",{attrs:{isSuccess:t.isSuccess}}),s("CardContainer")],1)},G=[],x=(s("4de4"),s("13d5"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"CardContainer"},t._l(t.cardList,(function(t,e){return s("Card",{key:e,attrs:{listIndex:e,className:t}})})),1)}),w=[],z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Card",class:{"Card--flipped":t.isFlipped,"Card--visible":t.isVisible,"Card--light":t.checkInProgress&&!t.isFlipped&&t.isVisible,"Card--completed":t.gameCompleted},on:{click:function(e){return t.toggleStatus()}}},[s("div",{staticClass:"Card__inner"},[s("div",{staticClass:"Card__front"},[s("font-awesome-icon",{staticStyle:{"font-size":"50px"},attrs:{icon:["fas","question"]}})],1),s("div",{staticClass:"Card__back"},[s("font-awesome-icon",{staticStyle:{"font-size":"50px"},attrs:{icon:t.computedClass}})],1)])])},$=[],P=(s("a9e3"),{name:"Card",props:{className:String,listIndex:Number},methods:Object(c["a"])(Object(c["a"])({},Object(f["c"])(["toggleCard"])),{},{toggleStatus:function(){this.checkInProgress||!this.isVisible||this.isFlipped||this.toggleCard(this.listIndex)}}),computed:Object(c["a"])({isFlipped:function(){return this.$store.state.flippedStatusList[this.listIndex]},isVisible:function(){return this.$store.state.visibilityList[this.listIndex]},computedClass:function(){return["fas",this.className]}},Object(f["d"])(["checkInProgress","gameCompleted"]))}),M=P,I=(s("e60d"),Object(d["a"])(M,z,$,!1,null,null,null)),E=I.exports,F={name:"CardContainer",components:{Card:E},computed:Object(c["a"])({},Object(f["d"])(["cardList","statusList"]))},V=F,N=(s("1065"),Object(d["a"])(V,x,w,!1,null,null,null)),T=N.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Background",class:{"Background--success":t.isSuccess}},[s("div",{staticClass:"Background__single-line"}),s("div",{staticClass:"Background__single-line"}),s("div",{staticClass:"Background__single-line"}),s("div",{staticClass:"Background__single-line"}),s("div",{staticClass:"Background__single-line"})])},D=[],H={name:"Background",props:{isSuccess:Boolean}},q=H,J=(s("5c06"),Object(d["a"])(q,A,D,!1,null,null,null)),R=J.exports,K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.status?s("div",{staticClass:"Message"},[t.isSuccess&&t.status?s("span",{staticClass:"Message__success"},[t._v(" Success! "),s("span",{staticClass:"Message__choices"},[s("span",{staticClass:"Message__choice",on:{click:function(e){return t.initializeGame()}}},[s("font-awesome-icon",{staticStyle:{"font-size":"20px"},attrs:{icon:["fas","sync-alt"]}}),t._v(" Play Again ")],1),s("span",{staticClass:"Message__choice",on:{click:function(e){return t.loadHome()}}},[s("font-awesome-icon",{staticStyle:{"font-size":"20px"},attrs:{icon:["fas","home"]}}),t._v(" Home ")],1)])]):t._e(),t.status&&!t.isSuccess?s("span",{staticClass:"Message__fail"},[t._v(" Game Over "),s("span",{staticClass:"Message__choices"},[s("span",{staticClass:"Message__choice",on:{click:function(e){return t.initializeGame()}}},[s("font-awesome-icon",{staticStyle:{"font-size":"20px"},attrs:{icon:["fas","sync-alt"]}}),t._v(" Try Again ")],1),s("span",{staticClass:"Message__choice",on:{click:function(e){return t.loadHome()}}},[s("font-awesome-icon",{staticStyle:{"font-size":"20px"},attrs:{icon:["fas","home"]}}),t._v(" Home ")],1)])]):t._e()]):t._e()},Q=[],U={name:"Message",props:{status:Boolean,isSuccess:Boolean},methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(f["c"])(["setGameInitializedStatus"])),Object(f["b"])(["initializeGame","restoreDefault"])),{},{loadHome:function(){this.restoreDefault(),this.$router.push({name:"Welcome"})}})},X=U,Y=(s("560a"),Object(d["a"])(X,K,Q,!1,null,null,null)),Z=Y.exports,tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"StatusBar",class:{"StatusBar--flashing":t.loosingLifeStatus,"StatusBar--completed":t.status}},[s("div",{staticClass:"StatusBar__panel"},[s("font-awesome-icon",{staticStyle:{"font-size":"20px"},attrs:{icon:["fas","heart"]}}),t._v(" "),s("span",[t._v(" "+t._s(t.lives)+" ")])],1)])},et=[],st={name:"StatusBar",props:{status:Boolean},computed:Object(f["d"])(["loosingLifeStatus","lives"])},at=st,it=(s("7862"),Object(d["a"])(at,tt,et,!1,null,null,null)),nt=it.exports,ct={name:"Game",components:{CardContainer:T,Background:R,Message:Z,StatusBar:nt},methods:Object(c["a"])(Object(c["a"])({},Object(f["c"])(["setCardList","setFlippedStatusList","toggleCard","toggleVisibility","setVisibilityList","setProgressStatus","setLoosingLifeStatus","decreaseLives","setGameCompletedStatus"])),Object(f["b"])(["initializeGame"])),computed:Object(c["a"])({},Object(f["d"])({numFlippedCards:function(t){var e=function(t,e){return!0===e?t+1:t};return t.flippedStatusList.reduce(e,0)},flippedCardList:function(t){var e=[];return t.flippedStatusList.forEach((function(t,s){t&&e.push(s)})),e},isSuccess:function(t){var e=function(t,e){return!1===t?t:!e};return t.visibilityList.reduce(e,!0)&&!t.checkInProgress},checkInProgress:function(t){return t.checkInProgress},isGameCompleted:function(t){return t.gameCompleted},lives:function(t){return t.lives}})),mounted:function(){this.$store.state.gameInitialized||this.$router.push({name:"Welcome"})},watch:{numFlippedCards:function(){var t=this;if(2===this.numFlippedCards){this.setProgressStatus(!0);var e=Object(g["a"])(this.flippedCardList);if(this.$store.state.cardList[e[0]]===this.$store.state.cardList[e[1]]){var s=Math.max.apply(Math,Object(g["a"])(e));e=e.filter((function(t){return t!=s})),setTimeout((function(e,s){t.toggleVisibility(e),t.toggleVisibility(s),setTimeout((function(e,s){t.toggleCard(e),t.toggleCard(s),t.setProgressStatus(!1),t.isSuccess&&t.setGameCompletedStatus(!0)}),1e3,e,s)}),1200,s,e[0])}else setTimeout((function(){t.setLoosingLifeStatus(!0),t.decreaseLives(),t.toggleCard(e[0]),t.toggleCard(e[1]),setTimeout((function(){t.setLoosingLifeStatus(!1),0===t.lives&&t.setGameCompletedStatus(!0),t.setProgressStatus(!1)}),1500)}),1200)}}}},lt=ct,rt=(s("bb9a"),Object(d["a"])(lt,W,G,!1,null,null,null)),ot=rt.exports,ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Welcome"},[s("h1",{staticClass:"Welcome__title"},[s("div",{staticClass:"Welcome__title-section"},[s("span",{staticClass:"Welcome__letter Welcome__letter--letter1"},[t._v("C")]),s("span",{staticClass:"Welcome__letter Welcome__letter--letter2"},[s("div",{staticClass:"Welcome__card"},[s("div",{staticClass:"Welcome__card-inner"},[s("div",{staticClass:"Welcome__card-front"},[s("font-awesome-icon",{staticStyle:{"font-size":"24px"},attrs:{icon:["fas","question"]}})],1),s("div",{staticClass:"Welcome__card-back"},[t._v(" A ")])])])]),s("span",{staticClass:"Welcome__letter Welcome__letter--letter3"},[t._v("R")]),s("span",{staticClass:"Welcome__letter Welcome__letter--letter4"},[t._v("D")])]),s("div",{staticClass:"Welcome__title-section"},[s("span",{staticClass:"Welcome__letter Welcome__letter--letter5"},[t._v("M")]),s("span",{staticClass:"Welcome__letter Welcome__letter--letter6"},[s("div",{staticClass:"Welcome__card"},[s("div",{staticClass:"Welcome__card-inner"},[s("div",{staticClass:"Welcome__card-front"},[s("font-awesome-icon",{staticStyle:{"font-size":"24px"},attrs:{icon:["fas","question"]}})],1),s("div",{staticClass:"Welcome__card-back"},[t._v(" A ")])])])]),s("span",{staticClass:"Welcome__letter Welcome__letter--letter7"},[t._v("T")]),s("span",{staticClass:"Welcome__letter Welcome__letter--letter8"},[t._v("C")]),s("span",{staticClass:"Welcome__letter Welcome__letter--letter9"},[t._v("H")]),s("span",{staticClass:"Welcome__letter Welcome__letter--letter10"},[t._v("E")]),s("span",{staticClass:"Welcome__letter Welcome__letter--letter11"},[t._v("R")])])]),s("BubbleBackground"),s("div",{staticClass:"Welcome__options"},[s("label",{attrs:{for:"cards"}},[t._v("Cards: "),s("b",{staticStyle:{color:"#0375FF"}},[t._v(t._s(t.numCards))])]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.numCards,expression:"numCards"}],attrs:{type:"range",name:"cards",min:"4",max:t.maxCardLength,step:"2"},domProps:{value:t.numCards},on:{__r:function(e){t.numCards=e.target.value}}}),s("br"),s("label",{attrs:{for:"lives"}},[t._v("Lives: "),s("b",{staticStyle:{color:"#0375FF"}},[t._v(t._s(t.lives))])]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.lives,expression:"lives"}],attrs:{type:"range",name:"lives",min:"1",max:"20",step:"2"},domProps:{value:t.lives},on:{__r:function(e){t.lives=e.target.value}}}),s("br"),s("a",{staticClass:"Welcome__start-button-wrapper",on:{click:function(e){return t.startGame()}}},[s("font-awesome-icon",{staticClass:"Welcome__start-button",attrs:{icon:["fas","play"]}})],1)]),s("CreatedBy",{staticClass:"Welcome__created-by"})],1)},dt=[],mt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},pt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"CreatedBy"},[t._v(" Created by "),s("a",{staticClass:"CreatedBy__link",attrs:{href:"https://github.com/AndrewDame"}},[t._v(" Andrew Dame ")])])}],ft={name:"CreatedBy"},_t=ft,vt=(s("8003"),Object(d["a"])(_t,mt,pt,!1,null,null,null)),Ct=vt.exports,bt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},gt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"BubbleBackground"},[s("li",{staticClass:"BubbleBackground__shape"}),s("li",{staticClass:"BubbleBackground__shape"}),s("li",{staticClass:"BubbleBackground__shape"}),s("li",{staticClass:"BubbleBackground__shape"}),s("li",{staticClass:"BubbleBackground__shape"}),s("li",{staticClass:"BubbleBackground__shape"}),s("li",{staticClass:"BubbleBackground__shape"}),s("li",{staticClass:"BubbleBackground__shape"}),s("li",{staticClass:"BubbleBackground__shape"}),s("li",{staticClass:"BubbleBackground__shape"})])}],ht={name:"BubbleBackground"},St=ht,yt=(s("5bf5"),Object(d["a"])(St,bt,gt,!1,null,null,null)),Lt=yt.exports,Bt={name:"Welcome",methods:Object(c["a"])(Object(c["a"])({},Object(f["b"])(["initializeGame"])),{},{startGame:function(){this.initializeGame(),this.$router.push({name:"Game"})}}),components:{CreatedBy:Ct,BubbleBackground:Lt},computed:{lives:{get:function(){return this.$store.state.chosenLives},set:function(t){this.$store.commit("setLives",Number(t))}},numCards:{get:function(){return this.$store.state.numCards},set:function(t){this.$store.commit("setNumCards",Number(t))}},maxCardLength:function(){return 2*S}}},Ot=Bt,jt=(s("96f0"),Object(d["a"])(Ot,ut,dt,!1,null,null,null)),kt=jt.exports;a["a"].use(k["a"]);var Wt=new k["a"]({routes:[{path:"/game",name:"Game",component:ot},{path:"/",name:"Welcome",component:kt}]}),Gt=s("ecee"),xt=s("ad3d"),wt=s("c074"),zt=Object.values(wt);zt.splice(0,1),zt.splice(0,1),zt.forEach((function(t){Gt["c"].add(t)})),a["a"].component("font-awesome-icon",xt["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(b)},store:j,router:Wt}).$mount("#app")},"5bf5":function(t,e,s){"use strict";s("ed86")},"5c06":function(t,e,s){"use strict";s("0eea")},"5c0b":function(t,e,s){"use strict";s("9c0c")},"61dc":function(t,e,s){"use strict";s("8701")},7543:function(t,e,s){},7862:function(t,e,s){"use strict";s("2944")},8003:function(t,e,s){"use strict";s("3b9c")},8701:function(t,e,s){},"8c3e":function(t,e,s){},"96f0":function(t,e,s){"use strict";s("2253")},"9c0c":function(t,e,s){},bb9a:function(t,e,s){"use strict";s("cbc5")},cbc5:function(t,e,s){},e60d:function(t,e,s){"use strict";s("e9ec")},e9ec:function(t,e,s){},ed86:function(t,e,s){}});
//# sourceMappingURL=app.f9f6e4e2.js.map