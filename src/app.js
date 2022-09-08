import calculator from "./calculator";
import { Calculs } from "./calculs";

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