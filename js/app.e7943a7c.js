(function(t){function e(e){for(var n,i,c=e[0],s=e[1],u=e[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,c=1;c<r.length;c++){var s=r[c];0!==o[s]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},"0686":function(t,e,r){t.exports=r.p+"img/dtLogo.12b08cfc.png"},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[t._m(0),r("div",{staticClass:"progressBox"},[r("span",[t._v("正在迁移区块数据")]),r("div",{staticClass:"progressBoxCenter"},[r("div",[r("div",{style:{width:t.width+"%"}},[r("div",[t._v(t._s(t.width)+"%")])])])]),r("span",[t._v("预计剩余时间"+t._s(t.hour)+"小时")])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"progressImg"},[n("img",{attrs:{src:r("da9c")}}),n("img",{attrs:{src:r("0686")}}),n("img",{staticClass:"data",attrs:{src:r("fc19")}})])}],i={name:"app",data:function(){return{width:0,hour:16}},mounted:function(){var t=this,e=1595844e3,r=1595901600,n=r-e,o=Math.floor((new Date).getTime()/1e3);setInterval((function(){t.width>100||(t.width=Math.floor(100*(1-(r-o)/n)),t.hour=Math.ceil((r-o)/3600))}),1e3)}},c=i,s=(r("034f"),r("2877")),u=Object(s["a"])(c,o,a,!1,null,null,null),l=u.exports;r("45dc");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,r){},da9c:function(t,e,r){t.exports=r.p+"img/ethLogo.facb20a8.png"},fc19:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAkCAYAAACaJFpUAAAB40lEQVRYR+WXP0/bUBTFz3ECCx06MFCpQ5EYGBj4ACDlRYrUqgNDiYiZUpytDAzsLZ8BsTmtOzSmCgNDKwSI2AMDI2OHDNnaoUOEkIiEyUWuyv86TmK7ouVt1r3v/t497/j5mXrNcAhm8BeGQFzO10oCSFPAwySZhEwCfPwLKIBrZ02VJFCvlRwCmQcInNs2JlKDfBVFXgI/Pylz7XqNQEkLewtFjdqHKECBNOxsebQrYP5rcSQ1mB6PBvRan3PWQVfAKKBOc++PS/M7xcmBgfRML51WlLkSlh+raSpZk30DdUcfFm9oIqzARZxoe3bu/X5Y/v3Zw7CV9hsP7PD/N03eyT9KYWi4F+nWldUIy3/AptF3F6ao0QiSSDS4tip/DJPwdrz/k4ZiVVT5dWzAMNO0gOamspqxAXst1G3+v+3SglN6Q5HlTt0SGBHySyzXxHmn9BaCdwL5AaB19SVhGsBT/1mIje+o67EC22dQ6znT9QEZJ5N+0h6zScxewFzleokAb8Ag+x6PXlRV9dhfSCLAwp6xqpGLcguWCJAaZkgs/QkWO9CHEJwKgsUO/O3Ob6cnnqq+tHzH3hmx7iGAjrDLDqP/kMozgq1OnV2+m3rN2CL4vNszMSCvfnriTQfJeH3OOShT1l9XV6UKAAAAAElFTkSuQmCC"}});
//# sourceMappingURL=app.e7943a7c.js.map