function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var i=o("7Y9D8");const u=document.querySelector(".form");function l(e,t){return new Promise(((n,r)=>{const o=Math.random()>.3;setTimeout((()=>{o?n(`✅ Fulfilled promise ${e} in ${t}ms`):r(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}const s=t=>{e(i).Notify.success(t,{timeout:5e3})},a=t=>{e(i).Notify.failure(t,{timeout:5e3})};u.addEventListener("submit",(function(e){e.preventDefault();const t=Number(e.target.elements.delay.value),n=Number(e.target.elements.step.value),r=Number(e.target.elements.amount.value);let o=t;for(let e=1;e<=r;e+=1)l(e,o).then(s).catch(a),o+=n}));
//# sourceMappingURL=03-promises.1681d8f0.js.map