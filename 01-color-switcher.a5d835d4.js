!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(){t.disabled=!0,switcherId=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.classList.add("background-color"),document.body.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(function(){clearInterval(switcherId),t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.a5d835d4.js.map
