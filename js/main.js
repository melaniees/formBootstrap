let btnEnviar = document.getElementById("btnEnviar");
let btnEstilo1 = document.getElementById("btnEstilo1");
let btnEstiloAltoContraste = document.getElementById("btnEstiloAltoContraste");
let formTitle = document.getElementById("formTitle");
let form = document.getElementById("form");
let formBody = document.getElementById("formBody");
let formBtnEstilos = document.getElementById("formBtnEstilos");
let formBtnEnviar= document.getElementById("formBtnEnviar");
let formBodyItemBorder = document.getElementById("formBodyItemBorder");

btnEstilo1.addEventListener("click",() =>{
    formBody.classList.remove("formBodyContraste");
    formBody.classList.add("formBody");
    form.classList.remove("bgAltoContraste");
    form.classList.add("bgEstilo1");
    formBtnEstilos.classList.remove("formBtnEstilosAltoContraste");
    formBtnEnviar.classList.remove("formBtnEstilosAltoContraste");  

})
btnEstiloAltoContraste.addEventListener("click",() =>{
    formBody.classList.add("formBodyContraste");
    form.classList.add("bgAltoContraste");
    formBtnEstilos.classList.add("formBtnEstilosAltoContraste");
    formBtnEnviar.classList.add("formBtnEstilosAltoContraste");  
})