function toggleContraste(){
    let form = document.getElementById("form");
    let formBody = document.getElementById("formBody");
    let formBtnEstilos = document.getElementById("formBtnEstilos");
    let formBtnEnviar= document.getElementById("formBtnEnviar");

    formBody.classList.remove("formBodyContraste");
    formBody.classList.add("formBody");
    form.classList.remove("bgAltoContraste");
    form.classList.add("bgEstilo1");
    formBtnEstilos.classList.remove("formBtnEstilosAltoContraste");
    formBtnEnviar.classList.remove("formBtnEstilosAltoContraste"); 
    
}

function toggleAltoContraste() {
    let form = document.getElementById("form");
    let formBody = document.getElementById("formBody");
    let formBtnEstilos = document.getElementById("formBtnEstilos");
    let formBtnEnviar= document.getElementById("formBtnEnviar");

    formBody.classList.add("formBodyContraste");
    form.classList.add("bgAltoContraste");
    formBtnEstilos.classList.add("formBtnEstilosAltoContraste");
    formBtnEnviar.classList.add("formBtnEstilosAltoContraste"); 
}

document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById('btnEnviar');
    button.addEventListener('click', function(event) {
        
        if(validateForm()){
            alert('Formulario enviado con éxito!');
        }
    });
    function validateForm(){
        nombre = document.getElementById("nombre").value;
        apellido = document.getElementById("apellido").value;
        email = document.getElementById("email").value;
        dateA = document.getElementById("date");
        paisResidencia = document.getElementById("paisResidencia").value;
        let arroba = '@';
        paisResidencia = document.getElementById("paisResidencia").value;
        const nameError = document.getElementById("nameError");
        const apellidoError = document.getElementById("apellidoError");
        const emailError = document.getElementById("emailError");
        const dateError = document.getElementById("dateError");
        const paisResidenciaError = document.getElementById("paisResidenciaError");
      
        const msjError = "Debe completar el campo para poder continuar"
        
        const value = new Date(dateA.value);
        const minDate = new Date("1911-01-01");
        const maxDate = new Date();
      
        if (nombre.trim() === '') {
          //alert('[ERROR] Debe completar el campo NOMBRE para poder continuar');
          nameError.textContent = msjError; 
          return false;
          }
          else if (apellido.trim() === '') {
            apellidoError.textContent = msjError; 
            nameError.textContent = ""; 
            return false;
          }
          else if (email.trim() === '' || !(email.includes(arroba))) {
            emailError.textContent = msjError; 
            apellidoError.textContent = ""; 
            return false;
          }
          else if(dateA.value.trim()===''){
            emailError.textContent = ""; 
            dateError.textContent = msjError;
            //dateError.style.display = "block";
            return false;  
          }else if(paisResidencia.trim()===''){
            dateError.textContent = "";
            paisResidenciaError.textContent = msjError;
            return false;
          }
          paisResidenciaError.textContent = "";
          return true;
      }
});

