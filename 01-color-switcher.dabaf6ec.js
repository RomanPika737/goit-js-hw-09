const t={startButton:document.querySelector("[data-start]"),stopButton:document.querySelector("[data-stop"),bodyElem:document.querySelector("body")};let o=null;t.stopButton.disabled=!0,t.startButton.addEventListener("click",(function(){t.startButton.disabled=!0,t.stopButton.disabled=!1,o=setInterval((()=>{const o=`#${Math.floor(16777215*Math.random()).toString(16)}`;t.bodyElem.style.backgroundColor=o}),1e3)})),t.stopButton.addEventListener("click",(function(){t.startButton.disabled=!1,t.stopButton.disabled=!0,clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.dabaf6ec.js.map
