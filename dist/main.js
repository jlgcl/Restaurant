!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),function(){let e=document.createElement("tab");document.getElementsByTagName("BODY")[0].appendChild(e);let t=document.createElement("button");t.class="tablinks",t.onclick="openPage(event, 'home')",t.innerHTML="Home",e.appendChild(t);let n=document.createElement("button");n.class="tablinks",n.onclick="openPage(event, 'squad')",n.innerHTML="Squad",e.appendChild(n);let o=document.createElement("button");o.class="tablinks",o.onclick="openPage(event, 'home')",o.innerHTML="Contact",e.appendChild(o),function(){let e=document.getElementById("content"),t=document.createElement("div");t.className="tabcontent",t.id="home",e.appendChild(t);let n=document.createElement("h1");n.textContent="Liverpool FC Site";let o=document.createElement("h2");o.textContent="Official Site of the Reds";let l=document.createElement("img");l.src="liverpool-logo-vector.png",t.appendChild(n),t.appendChild(o),t.appendChild(l)}(),function(){let e=document.getElementById("content"),t=document.createElement("div");t.className="tabcontent",t.id="squad",e.appendChild(t);let n=document.createElement("h1");n.textContent="Liverpool Squad";let o=document.createElement("h2");o.textContent="YNWA. You Never Walk Alone.";let l=document.createElement("img");l.src="liverpool-logo-vector.png",t.appendChild(n),t.appendChild(o),t.appendChild(l)}(),function(e,t){var n,o,l;for(o=document.getElementsByClassName("tabcontent"),n=0;n<o.length;n++)o[n].style.display="none";for(l=document.getElementsByClassName("tablinks"),n=0;n<l.length;n++)l[n].className=l[n].className.replace(" active","");document.getElementById(t).style.display="block",e.currentTarget.className+=" active"}()}()}]);