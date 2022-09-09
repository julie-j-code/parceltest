
// Il faut supprimer ce zéro avant le début de toute opération.
const removeZero=() =>{
    let value = document.getElementById("output").innerHTML; 
    if (value == "0") {
         value = " "
         document.getElementById("output").innerHTML = value;
    }
}
const display=value=>{
    removeZero()
    document.getElementById("output").innerHTML += value};

// entre en jeu lorsque le bouton «C» est déclenché.
const forclear=()=> {
    document.getElementById("output").innerHTML = "0";
}

// cas du %
const perc =()=> {
    var value = document.getElementById("output").innerHTML;
    value = value / 100;
    document.getElementById("output").innerHTML = value;
}

const solve=()=> {
    removeZero()
    var equation = document.getElementById("output").innerHTML;
    var solved = eval(equation);
    document.getElementById('output').innerHTML = solved;
}

// vérifie si la valeur saisie est un nombre. finalement inutile
const isNumber=element=>!isNaN(element);

const calculator={
    'display':display,
    'isNumber':isNumber,
    'removeZero' :removeZero,
    'solve': solve,
    'forclear' :forclear,
    'perc':perc
}

export default calculator;


