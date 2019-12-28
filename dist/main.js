!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);let i=[];class a{constructor(e,t,n,i,a){this.city=e,this.location=t,this.param=n,this.value=i,this.cityInfo=a}}var o=async(e,t)=>{t.innerHTML="",e.forEach(async e=>{let n=document.createElement("li");n.classList.add("li"),n.classList.add("accordion");let o=(async e=>{const t=`https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${encodeURI(e)}`;return await fetch(t).then(e=>e.json()).then((function(e){return e.query.pages[Object.keys(e.query.pages)[0]].extract})).catch((function(e){console.log(e)}))})(e.city),r=await o.then(e=>e);n.innerHTML=`\n      <span>${e.city} (${e.location})</span><span>${e.value} µg/m³</span> <span>Parameter: ${e.param}</span><span class="sh-ico">+</span>\n      <span class="city-space-details panel">${r}</span>\n    `,i.push(new a(e.city,e.location,e.value,e.param,r)),await localStorage.setItem("localeCitiesArray",await JSON.stringify(i)),t.appendChild(n)}),await void document.addEventListener("click",()=>{let e=event.target;if(e.classList.contains("sh-ico")){let t=e.parentNode;t.classList.toggle("accordion"),t.style.maxHeight?(t.style.maxHeight=null,e.innerHTML="+"):(t.style.maxHeight=t.scrollHeight+"px",e.innerHTML="-")}})};const r=document.querySelector(".city-name");var c=(e,t)=>{let n=e.charAt(0).toUpperCase()+e.slice(1).toLowerCase();r.innerHTML=n};const s=document.querySelector(".city-space");const l=document.querySelector(".city-space");class u{constructor(e,t,n,i,a){this.city=e,this.location=t,this.param=n,this.value=i,this.cityInfo=a}}var d=async e=>{let t=[],n=[];fetch(`https://api.openaq.org/v1/latest?limit=9999&country=${e}&order_by=city`).then(e=>e.json()).then(e=>{e.results.forEach(e=>{for(let n=0;n<e.measurements.length;n++)if("pm10"==e.measurements[n].parameter){let i=e.city,a=e.location,o=e.measurements[n].parameter,r=e.measurements[n].value;t.push(new u(i,a,o,r))}}),t.sort((function(e,t){return t.value-e.value})),t=function(e){return e.reduce((e,t)=>{return e.find(e=>e.city===t.city)?e:e.concat([t])},[])}(t);for(let e=0;e<10;e++){let i=t[e].city,a=t[e].location,o=t[e].value,r=t[e].param;n.push(new u(i,a,r,o))}o(n,l)})};const p=document.querySelector("#country"),f=document.querySelector("#button"),m=[{fullname:"Poland",short:"PL"},{fullname:"Germany",short:"DE"},{fullname:"Spain",short:"ES"},{fullname:"France",short:"FR"}],h=document.querySelector("#countries");(()=>{if(localStorage.getItem("countryName")){let e=localStorage.getItem("countryName");c(e)}let e=JSON.parse(localStorage.getItem("localeCitiesArray"));localStorage.getItem("localeCitiesArray")&&o(e,s)})(),(()=>{let e;function t(t){let n;return e=p.value.toUpperCase(),t.map(e=>e.fullname.toUpperCase()).includes(e)&&("POLAND"===e?n="PL":"FRANCE"===e?n="FR":"GERMANY"===e?n="DE":"SPAIN"===e&&(n="ES")),p.value="",n}!function(e){e.forEach(e=>{let t=document.createElement("option");t.value=e.fullname,h.appendChild(t)})}(m),p.addEventListener("keyup",e=>{if(13===e.keyCode){const e=t(m);e?d(e):alert("Invalid country name")}}),f.addEventListener("click",()=>{const n=t(m);n?(localStorage.setItem("countryName",e),console.log(e),c(e),d(n)):alert("Invalid country name")})})()},function(e,t,n){var i=n(2),a=n(3);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},r=(i("!!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss",a,o),a.locals?a.locals:{});e.exports=r},function(e,t,n){"use strict";var i,a={},o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function c(e,t,n){e=n.base?e+n.base:e,a[e]||(a[e]=[]);for(var i=0;i<t.length;i++){var o=t[i],r={css:o[1],media:o[2],sourceMap:o[3]},c=a[e];c[i]?c[i].updater(r):c.push({updater:h(r,n)})}for(var s=t.length;s<a[e].length;s++)a[e][s].updater();a[e].length=t.length,0===a[e].length&&delete a[e]}function s(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var a=n.nc;a&&(i.nonce=a)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var o=r(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,i){var a=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=u(t,a);else{var o=document.createTextNode(a),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(o,r[t]):e.appendChild(o)}}function p(e,t,n){var i=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var f=null,m=0;function h(e,t){var n,i,a;if(t.singleton){var o=m++;n=f||(f=s(t)),i=d.bind(null,n,o,!1),a=d.bind(null,n,o,!0)}else n=s(t),i=p.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else a()}}e.exports=function(e,t,n){return(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o()),c(e,t,n),function(t){c(e,t||[],n)}}},function(e,t,n){(t=n(4)(!1)).push([e.i,"*{margin:0;padding:0}.main .inputs{background:#c78942;width:100%;height:10vh;display:flex;align-items:center;justify-content:center}.main .inputs .in-country{border:0;background:white;margin-left:1em}.main .inputs .btn{margin-left:1em;border:0;padding:0.25em 0.75em}.main .inputs .countries{display:none}.main .pull-cities{background:#775ad4}.main .pull-cities .city-name{font-style:2em;text-align:center;padding:1em 0}.main .pull-cities .ul .li{padding:1em 0;border-top:2px solid #000;text-align:center;width:60%;margin:auto;display:grid;grid-template-columns:1fr 1fr 1fr .1fr}.main .pull-cities .ul .li .sh-ico{cursor:pointer;pointer-events:auto;background:#f7f7f7;height:20px;width:20px;display:flex;align-items:center;justify-content:center;font-size:1.5em;font-weight:800;border-radius:50%}.main .pull-cities .ul .li span{pointer-events:none}.main .pull-cities .ul .li.accordion{transition:max-height 0.2s ease-out}.main .pull-cities .ul .li.accordion .panel{padding:0 1em;background-color:white;display:none;overflow:hidden;overflow:hidden;transition:max-height 0.2s ease-out}.main .pull-cities .ul .li .city-space-details{grid-column:1/5;margin-top:1em;transition:max-height 0.2s ease-out}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var a=(r=i,c=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),o=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot).concat(e," */")}));return[n].concat(o).concat([a]).join("\n")}var r,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i=0;i<e.length;i++){var a=[].concat(e[i]);n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a)}},t}}]);