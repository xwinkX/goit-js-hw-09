const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");function o(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(function(){t.disabled=!0,switcherId=setInterval((()=>{const t=o();document.body.classList.add("background-color"),document.body.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(function(){clearInterval(switcherId),t.disabled=!1})),console.log(o());
//# sourceMappingURL=01-color-switcher.eb53bc34.js.map
