import calculator from "./calculator";
import { Calculs } from "./calculs";

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