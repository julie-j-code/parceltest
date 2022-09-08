// fonctionne en local + déploiement ok 
export const onFocus = () => {
  document.querySelector(".underground").style.visibility = "visible"
}

export const mediaQueries =()=> {
  window.matchMedia("(max-width: 700px)").matches ? text = "The screen is less or equal to, 700 pixels wide." : text = "The screen is at least 700 pixels wide.";
  const para = document.createElement("p");
  para.innerHTML = text;
  document.getElementById("premier").appendChild(para);
}


