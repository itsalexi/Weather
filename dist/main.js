(()=>{"use strict";var t,e,r,a,o={171:(t,e,r)=>{r.d(e,{Z:()=>a});const a={updateData:function(t){const e=t[0];t[1],function(t){document.querySelector(".cloud-type").textContent=t.weather[0].description.toProperCase(),document.querySelector(".city-name").textContent=t.name}(e),console.log(e)}}},138:(t,e,r)=>{r.a(t,(async(t,e)=>{try{var a=r(891),o=r(171);const t=new a.Z("a722fdf37dc5dcbe9f831dd8326dd09a"),n=await t.getWeather("Marikina","metric");String.prototype.toProperCase=function(){return this.replace(/\w\S*/g,(function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()}))},o.Z.updateData(n),e()}catch(t){e(t)}}),1)},891:(t,e,r)=>{r.d(e,{Z:()=>a});const a=class{constructor(t){this.apikey=t}buildURL(t,e){return`https://api.openweathermap.org/data/2.5/weather?q=${t}&APPID=${this.apikey}&units=${e}`}async getWeather(t,e){const r=await fetch(this.buildURL(t,e)),a=await r.json();return[a,await this.getForecast(this.getCoord(a))]}getCoord(t){return t.coord}async getForecast(t,e){const{lat:r,lon:a}=t,o=await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${r}&lon=${a}&exclude=minutely,hourly,alerts&units=${e}&appid=${this.apikey}`);return await o.json()}}}},n={};function c(t){var e=n[t];if(void 0!==e)return e.exports;var r=n[t]={exports:{}};return o[t](r,r.exports,c),r.exports}t="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",a=t=>{t&&!t.d&&(t.d=1,t.forEach((t=>t.r--)),t.forEach((t=>t.r--?t.r++:t())))},c.a=(o,n,c)=>{var s;c&&((s=[]).d=1);var i,p,u,d=new Set,h=o.exports,l=new Promise(((t,e)=>{u=e,p=t}));l[e]=h,l[t]=t=>(s&&t(s),d.forEach(t),l.catch((t=>{}))),o.exports=l,n((o=>{var n;i=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[t])return o;if(o.then){var n=[];n.d=0,o.then((t=>{c[e]=t,a(n)}),(t=>{c[r]=t,a(n)}));var c={};return c[t]=t=>t(n),c}}var s={};return s[t]=t=>{},s[e]=o,s})))(o);var c=()=>i.map((t=>{if(t[r])throw t[r];return t[e]})),p=new Promise((e=>{(n=()=>e(c)).r=0;var r=t=>t!==s&&!d.has(t)&&(d.add(t),t&&!t.d&&(n.r++,t.push(n)));i.map((e=>e[t](r)))}));return n.r?p:c()}),(t=>(t?u(l[r]=t):p(h),a(s)))),s&&(s.d=0)},c.d=(t,e)=>{for(var r in e)c.o(e,r)&&!c.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},c.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),c(138)})();