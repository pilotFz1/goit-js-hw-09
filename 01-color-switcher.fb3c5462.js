let t=null;const e={startBtn:document.querySelector(".start"),stopBtn:document.querySelector(".stop")};function s(){let t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.setAttribute("style",`background-color: ${t}`)}e.startBtn.addEventListener("click",(()=>{s(),function(){if(e.startBtn.disabled)return;console.log("Клик обработан."),e.startBtn.disabled=!0,e.startBtn.classList.add("disabled"),e.stopBtn.removeAttribute("disabled"),e.stopBtn.classList.remove("disabled")}(),t=setInterval((()=>{s()}),1e3)})),e.stopBtn.addEventListener("click",(()=>{clearInterval(t),function(){if(e.stopBtn.disabled)return;console.log("Клик обработан."),e.stopBtn.disabled=!0,e.stopBtn.classList.add("disabled"),e.startBtn.removeAttribute("disabled"),e.startBtn.classList.remove("disabled")}()}));
//# sourceMappingURL=01-color-switcher.fb3c5462.js.map