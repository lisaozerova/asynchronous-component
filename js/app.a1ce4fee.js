(function(e){function n(n){for(var r,c,u=n[0],i=n[1],f=n[2],s=0,d=[];s<u.length;s++)c=u[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(n);while(d.length)d.shift()();return a.push.apply(a,f||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,c=1;c<t.length;c++){var i=t[c];0!==o[i]&&(r=!1)}r&&(a.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={app:0},a=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0a427a":"a48dab26"}[e]+".js"}function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=c(e);var f=new Error;a=function(n){i.onerror=i.onload=null,clearTimeout(s);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,t[1](f)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/asynchronous-component/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=n,i=i.slice();for(var s=0;s<i.length;s++)n(i[s]);var l=f;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},3021:function(e,n,t){"use strict";t("dae3")},"3d59":function(e,n,t){"use strict";t("f42f")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),o=Object(r["d"])("h1",null,"Options usage async component",-1),a={class:"app"};function c(e,n,t,c,u,i){var f=Object(r["g"])("AsyncComponent");return Object(r["f"])(),Object(r["c"])(r["a"],null,[o,Object(r["d"])("div",a,[Object(r["d"])(f)])],64)}t("d3b7"),t("3ca3"),t("ddb0"),t("ac1f"),t("466d");var u={class:"error"};function i(e,n,t,o,a,c){return Object(r["f"])(),Object(r["c"])("p",u,"Error")}var f={name:"Error"};t("3021");f.render=i;var s=f,l=t("fa5e"),d=t.n(l),p=Object(r["d"])("p",null,"Loading...",-1),b=Object(r["d"])("img",{src:d.a,alt:"Loading",width:"200"},null,-1);function m(e,n,t,o,a,c){return Object(r["f"])(),Object(r["c"])(r["a"],null,[p,b],64)}var v={name:"Loader"};v.render=m;var h=v,g={name:"App",components:{AsyncComponent:Object(r["e"])({loader:function(){return new Promise((function(e){return setTimeout((function(){return e(t.e("chunk-2d0a427a").then(t.bind(null,"04dd")))}),2e3)}))},loadingComponent:h,errorComponent:s,delay:200,timeout:3e3,suspensible:!1,onError:function(e,n,t,r){e.message.match(/fetch/)&&r<=3?n():t()}})}};t("3d59");g.render=c;var y=g;Object(r["b"])(y).mount("#app")},dae3:function(e,n,t){},f42f:function(e,n,t){},fa5e:function(e,n,t){e.exports=t.p+"img/loader.b3ac837b.gif"}});
//# sourceMappingURL=app.a1ce4fee.js.map