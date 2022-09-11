import { promesse, data, Posts } from "./postsModule/searchPosts";
import calculator from "./calculatorModule/calculator";
import { Calculs } from "./calculatorModule/calculs";
import searchUsers from "./searchModule/searchUsers";


import { mediaQueries, onFocus } from "./warnings";


// première partie qui fonctionne enfin normalement après build et deploy sur gh-pages
const calculs = new Calculs();
btnAdd.addEventListener("click", () => {
    let res = calculs.add(Number(textA.value), Number(textB.value));
    result.innerHTML = res;
})
btnSub.addEventListener("click", () => {
    let res = calculs.sub(Number(textA.value), Number(textB.value));
    result.innerHTML = res;
})
btnMult.addEventListener("click", () => {
    let res = calculs.mult(Number(textA.value), Number(textB.value));
    result.innerHTML = res;
})
btnDiv.addEventListener("click", () => {
    let res = calculs.div(Number(textA.value), Number(textB.value));
    result.innerHTML = res;
})

// implementation deuxième partie : calculatrice ++ issue de mon calculator
// pour la seconde calculatrice plus élaborée
const btnSolve = document.querySelector("#r5-3");
const btnClear = document.querySelector("#r1-1");
const btnPerc = document.querySelector("#r1-3");

// implementation 3ème partie : warnings whatever... 
const btnTest = document.createElement('button');
const textContent = document.createTextNode("visible");

btnTest.appendChild(textContent);
btnTest.style.display="block"
document.querySelector("#second").appendChild(btnTest);
btnTest.addEventListener("click", () => onFocus());
console.log("btn test",btnTest);
// document.body.appendChild(btnTest)

btnClear.addEventListener("click", () => {
    calculator.forclear();
})
btnSolve.addEventListener("click", () => {
    calculator.solve();
})
btnPerc.addEventListener("click", () => {
    calculator.perc();
})

const buttons = document.querySelectorAll(".calculator button");
// console.log(buttons);

buttons.forEach(btn => {
    // console.log(btn.textContent);
    btn.textContent != '=' && btn.textContent != 'C' && btn.textContent != '%' ? btn.addEventListener("click", () => calculator.display(btn.textContent)) : ""
});

// Et c'est tout pour la deuxième. Impeccable


searchUsers.getUsers()


const req=new Posts()
req.promesse();




