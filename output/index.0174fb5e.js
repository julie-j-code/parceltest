function $parcel$export(e,t,r,l){Object.defineProperty(e,t,{get:r,set:l,enumerable:!0,configurable:!0})}var $parcel$global="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},$parcel$modules={},$parcel$inits={},parcelRequire=$parcel$global.parcelRequire2894;null==parcelRequire&&(parcelRequire=function(e){if(e in $parcel$modules)return $parcel$modules[e].exports;if(e in $parcel$inits){var t=$parcel$inits[e];delete $parcel$inits[e];var r={id:e,exports:{}};return $parcel$modules[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l},parcelRequire.register=function(e,t){$parcel$inits[e]=t},$parcel$global.parcelRequire2894=parcelRequire),parcelRequire.register("cNT1F",(function(module,exports){$parcel$export(module.exports,"default",(()=>$9524bea046020db5$export$2e2bcd8739ae039));const removeZero=()=>{let e=document.getElementById("output").innerHTML;"0"==e&&(e=" ",document.getElementById("output").innerHTML=e)},display=e=>{removeZero(),document.getElementById("output").innerHTML+=e},forclear=()=>{document.getElementById("output").innerHTML="0"},perc=()=>{var e=document.getElementById("output").innerHTML;e/=100,document.getElementById("output").innerHTML=e},solve=()=>{removeZero();var equation=document.getElementById("output").innerHTML,solved=eval(equation);document.getElementById("output").innerHTML=solved},isNumber=e=>!isNaN(e),calculator={display:display,isNumber:isNumber,removeZero:removeZero,solve:solve,forclear:forclear,perc:perc};var $9524bea046020db5$export$2e2bcd8739ae039=calculator}));var $cNT1F=parcelRequire("cNT1F");class $eddb9b2132c3b7ec$export$aea6ca6cbb36c264{add(e,t){return e+t}sub(e,t){return e-t}mult(e,t){return e*t}div(e,t){return e/t}}const $e73bf42412feb220$var$calculs=new $eddb9b2132c3b7ec$export$aea6ca6cbb36c264;btnAdd.addEventListener("click",(()=>{let e=$e73bf42412feb220$var$calculs.add(Number(textA.value),Number(textB.value));result.innerHTML=e})),btnSub.addEventListener("click",(()=>{let e=$e73bf42412feb220$var$calculs.sub(Number(textA.value),Number(textB.value));result.innerHTML=e})),btnMult.addEventListener("click",(()=>{let e=$e73bf42412feb220$var$calculs.mult(Number(textA.value),Number(textB.value));result.innerHTML=e})),btnDiv.addEventListener("click",(()=>{let e=$e73bf42412feb220$var$calculs.div(Number(textA.value),Number(textB.value));result.innerHTML=e}));const $e73bf42412feb220$var$btnSolve=document.querySelector("#r5-3"),$e73bf42412feb220$var$btnClear=document.querySelector("#r1-1"),$e73bf42412feb220$var$btnPerc=document.querySelector("#r1-3");$e73bf42412feb220$var$btnClear.addEventListener("click",(()=>{$cNT1F.default.forclear()})),$e73bf42412feb220$var$btnSolve.addEventListener("click",(()=>{$cNT1F.default.solve()})),$e73bf42412feb220$var$btnPerc.addEventListener("click",(()=>{$cNT1F.default.perc()}));const $e73bf42412feb220$var$buttons=document.querySelectorAll(".calculator button");$e73bf42412feb220$var$buttons.forEach((e=>{"="!=e.textContent&&"C"!=e.textContent&&"%"!=e.textContent&&e.addEventListener("click",(()=>$cNT1F.default.display(e.textContent)))}));
//# sourceMappingURL=index.0174fb5e.js.map