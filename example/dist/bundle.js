!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=1)}([function(e,r){var t="vio-sw.js";function n(){var e;e={pageUrl:location.href},new Promise(function(r,t){var n=new MessageChannel;n.port1.onmessage=function(e){e.data.error?t(e.data.error):r(e.data)},navigator.serviceWorker.controller.postMessage(e,[n.port2])})}Object.defineProperty(r,"__esModule",{value:!0});var o={register:function(e){var r=e.onUpdate;navigator.serviceWorker&&(navigator.serviceWorker.addEventListener("message",function(e){var t=e.data;t.requestPageUrl?n():t.onUpdate&&r&&r.call(null)}),navigator.serviceWorker.register(t).then(function(e){return e.active&&n(),e}))}};r.default=o},function(e,r,t){"use strict";t.r(r);var n=t(0),o=t.n(n);console.log("hello world"),o.a.register({onUpdate:()=>{console.log("onUpdate")}})}]);