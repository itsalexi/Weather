(()=>{"use strict";var e,t,r,a,o={616:(e,t,r)=>{r.d(t,{Z:()=>a});const a={updateData:function(e,t){const r=e[0],a=e[1];let o="";o="metric"==t?"C":"F",function(e,t){var r;document.querySelector(".cloud-type").textContent=e.weather[0].description.toProperCase(),document.querySelector(".city-name").textContent=e.name,document.querySelector(".today-date").textContent=(r=e.dt,new Date(1e3*r).toDateString()),document.querySelector(".current-time").textContent=function(e){return new Date(1e3*e).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}(e.dt),document.querySelector(".current-temperature").textContent=`${e.main.temp} °${t}`,document.querySelector(".currentCloud").src=`http://openweathermap.org/img/w/${e.weather[0].icon}.png`}(r,o),function(e,t){const r=document.querySelector(".forecast-container");for(let o=0;o<e.length-1;o++){const n=e[o],c=document.createElement("div");c.classList.add("forecast-card");const d=document.createElement("p");d.classList.add("forecast-day"),d.textContent=(a=n.dt,["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][new Date(1e3*a).getDay()]);const i=document.createElement("div");i.classList.add("forecast-temperatures");const s=document.createElement("p");s.classList.add("forecast-low-temperature"),s.textContent=`${n.temp.min} °${t}`;const p=document.createElement("p");p.classList.add("forecast-high-temperature"),p.textContent=`${n.temp.max} °${t}`;const u=document.createElement("img");u.src=`http://openweathermap.org/img/w/${n.weather[0].icon}.png`,c.appendChild(d),c.appendChild(i),c.appendChild(u),i.appendChild(p),i.appendChild(s),r.append(c)}var a}(a.daily,o),console.log(a.daily)}}},138:(e,t,r)=>{r.a(e,(async(e,t)=>{try{var a=r(891),o=r(616);const e=new a.Z("a722fdf37dc5dcbe9f831dd8326dd09a"),n=await e.getWeather("Marikina","metric");String.prototype.toProperCase=function(){return this.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))},o.Z.updateData(n,"metric"),t()}catch(e){t(e)}}),1)},891:(e,t,r)=>{r.d(t,{Z:()=>a});const a=class{constructor(e){this.apikey=e}buildURL(e,t){return`https://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=${this.apikey}&units=${t}`}async getWeather(e,t){const r=await fetch(this.buildURL(e,t)),a=await r.json();return[a,await this.getForecast(this.getCoord(a),t)]}getCoord(e){return e.coord}async getForecast(e,t){const{lat:r,lon:a}=e,o=await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${r}&lon=${a}&exclude=minutely,hourly,alerts&units=${t}&appid=${this.apikey}`);return await o.json()}}}},n={};function c(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return o[e](r,r.exports,c),r.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",a=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},c.a=(o,n,c)=>{var d;c&&((d=[]).d=1);var i,s,p,u=new Set,l=o.exports,m=new Promise(((e,t)=>{p=t,s=e}));m[t]=l,m[e]=e=>(d&&e(d),u.forEach(e),m.catch((e=>{}))),o.exports=m,n((o=>{var n;i=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var n=[];n.d=0,o.then((e=>{c[t]=e,a(n)}),(e=>{c[r]=e,a(n)}));var c={};return c[e]=e=>e(n),c}}var d={};return d[e]=e=>{},d[t]=o,d})))(o);var c=()=>i.map((e=>{if(e[r])throw e[r];return e[t]})),s=new Promise((t=>{(n=()=>t(c)).r=0;var r=e=>e!==d&&!u.has(e)&&(u.add(e),e&&!e.d&&(n.r++,e.push(n)));i.map((t=>t[e](r)))}));return n.r?s:c()}),(e=>(e?p(m[r]=e):s(l),a(d)))),d&&(d.d=0)},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c(138)})();