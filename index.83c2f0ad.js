function $parcel$export(e,t,r,a){Object.defineProperty(e,t,{get:r,set:a,enumerable:!0,configurable:!0})}var $parcel$global="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},$parcel$modules={},$parcel$inits={},parcelRequire=$parcel$global.parcelRequire2894;null==parcelRequire&&(parcelRequire=function(e){if(e in $parcel$modules)return $parcel$modules[e].exports;if(e in $parcel$inits){var t=$parcel$inits[e];delete $parcel$inits[e];var r={id:e,exports:{}};return $parcel$modules[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a},parcelRequire.register=function(e,t){$parcel$inits[e]=t},$parcel$global.parcelRequire2894=parcelRequire),parcelRequire.register("8bIml",(function(module,exports){$parcel$export(module.exports,"default",(()=>$5f61c2aeea7b56e4$export$2e2bcd8739ae039));const removeZero=()=>{let e=document.getElementById("output").innerHTML;"0"==e&&(e=" ",document.getElementById("output").innerHTML=e)},display=e=>{removeZero(),document.getElementById("output").innerHTML+=e},forclear=()=>{document.getElementById("output").innerHTML="0"},perc=()=>{var e=document.getElementById("output").innerHTML;e/=100,document.getElementById("output").innerHTML=e},solve=()=>{removeZero();var equation=document.getElementById("output").innerHTML,solved=eval(equation);document.getElementById("output").innerHTML=solved},isNumber=e=>!isNaN(e),calculator={display:display,isNumber:isNumber,removeZero:removeZero,solve:solve,forclear:forclear,perc:perc};var $5f61c2aeea7b56e4$export$2e2bcd8739ae039=calculator}));var $8bIml=parcelRequire("8bIml");class $9837a70bff106481$export$aea6ca6cbb36c264{add(e,t){return e+t}sub(e,t){return e-t}mult(e,t){return e*t}div(e,t){return e/t}}const $efb1e5897635f904$var$searchInput=document.querySelector("#searchInput"),$efb1e5897635f904$var$searchResult=document.querySelector("#users_container");let $efb1e5897635f904$var$dataArray;async function $efb1e5897635f904$var$getUsers(){const e=await fetch("https://randomuser.me/api/?nat=fr&results=50"),{results:t}=await e.json();console.log(t),$efb1e5897635f904$var$dataArray=$efb1e5897635f904$var$orderList(t),$efb1e5897635f904$var$createUserList($efb1e5897635f904$var$dataArray)}function $efb1e5897635f904$var$orderList(e){return e.sort(((e,t)=>e.name.last.toLowerCase()<t.name.last.toLowerCase()?-1:e.name.last.toLowerCase()>t.name.last.toLowerCase()?1:0))}function $efb1e5897635f904$var$createUserList(e){e.forEach((e=>{const t=document.createElement("div");t.setAttribute("class","row"),t.innerHTML=`<div class="col">${e.name.last}</div><div class="col">${e.name.first}</div><div class="col">${e.email}</div><div class="col">${e.phone}</div>`,console.log($efb1e5897635f904$var$searchResult),$efb1e5897635f904$var$searchResult.appendChild(t)}))}function $efb1e5897635f904$var$filterData(e){$efb1e5897635f904$var$searchResult.innerHTML="";const t=e.target.value.toLowerCase().replace(/\s/g,"");$efb1e5897635f904$var$createUserList($efb1e5897635f904$var$dataArray.filter((e=>e.name.first.toLowerCase().includes(t)||e.name.last.toLowerCase().includes(t)||`${e.name.last+e.name.first}`.toLowerCase().replace(/\s/g,"").includes(t)||`${e.name.first+e.name.last}`.toLowerCase().replace(/\s/g,"").includes(t))))}$efb1e5897635f904$var$searchInput.addEventListener("input",$efb1e5897635f904$var$filterData);const $efb1e5897635f904$var$searchUsers={getUsers:$efb1e5897635f904$var$getUsers,dataArray:$efb1e5897635f904$var$dataArray,orderList:$efb1e5897635f904$var$orderList,createUserList:$efb1e5897635f904$var$createUserList};var $efb1e5897635f904$export$2e2bcd8739ae039=$efb1e5897635f904$var$searchUsers;const $da7b48bedcf639e9$export$ecf9bf35ad97eb74=()=>{document.querySelector(".underground").style.visibility="visible"},$da7b48bedcf639e9$export$f68cee56cc062164=()=>{window.matchMedia("(max-width: 700px)").matches?text="The screen is less or equal to, 700 pixels wide.":text="The screen is at least 700 pixels wide.";const e=document.createElement("p");e.innerHTML=text,document.getElementById("premier").appendChild(e)},$e73bf42412feb220$var$calculs=new $9837a70bff106481$export$aea6ca6cbb36c264;btnAdd.addEventListener("click",(()=>{let e=$e73bf42412feb220$var$calculs.add(Number(textA.value),Number(textB.value));result.innerHTML=e})),btnSub.addEventListener("click",(()=>{let e=$e73bf42412feb220$var$calculs.sub(Number(textA.value),Number(textB.value));result.innerHTML=e})),btnMult.addEventListener("click",(()=>{let e=$e73bf42412feb220$var$calculs.mult(Number(textA.value),Number(textB.value));result.innerHTML=e})),btnDiv.addEventListener("click",(()=>{let e=$e73bf42412feb220$var$calculs.div(Number(textA.value),Number(textB.value));result.innerHTML=e}));const $e73bf42412feb220$var$btnSolve=document.querySelector("#r5-3"),$e73bf42412feb220$var$btnClear=document.querySelector("#r1-1"),$e73bf42412feb220$var$btnPerc=document.querySelector("#r1-3"),$e73bf42412feb220$var$btnTest=document.createElement("button"),$e73bf42412feb220$var$textContent=document.createTextNode("visible");$e73bf42412feb220$var$btnTest.appendChild($e73bf42412feb220$var$textContent),$e73bf42412feb220$var$btnTest.style.display="block",document.querySelector("#second").appendChild($e73bf42412feb220$var$btnTest),$e73bf42412feb220$var$btnTest.addEventListener("click",(()=>$da7b48bedcf639e9$export$ecf9bf35ad97eb74())),console.log("btn test",$e73bf42412feb220$var$btnTest),$e73bf42412feb220$var$btnClear.addEventListener("click",(()=>{$8bIml.default.forclear()})),$e73bf42412feb220$var$btnSolve.addEventListener("click",(()=>{$8bIml.default.solve()})),$e73bf42412feb220$var$btnPerc.addEventListener("click",(()=>{$8bIml.default.perc()}));const $e73bf42412feb220$var$buttons=document.querySelectorAll(".calculator button");$e73bf42412feb220$var$buttons.forEach((e=>{"="!=e.textContent&&"C"!=e.textContent&&"%"!=e.textContent&&e.addEventListener("click",(()=>$8bIml.default.display(e.textContent)))})),$efb1e5897635f904$export$2e2bcd8739ae039.getUsers();
//# sourceMappingURL=index.83c2f0ad.js.map