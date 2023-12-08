let intervalID;
let datos =[];
function validarFormulario() {
    // Obtener valores de usuario y contraseña
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Lógica de validación
    if (username === 'alexis' && password === '051003') {
        window.location.href = './MenuOpciones.html';
        alert('Acceso concedido'); 
        
    } else {
        alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        
    }
}

function encenderValvula(id) {
    btnEncenApag = document.getElementById('btnValvula'+id); // Asegúrate de seleccionar el botón aquí

    if(btnEncenApag.classList.contains('off')){
        btnEncenApag.classList.remove('off');
        btnEncenApag.classList.add('on');
        btnEncenApag.textContent='Encendido';
        simularFlujoDeAgua(id);

    }else if(btnEncenApag.classList.contains('on')){
        btnEncenApag.classList.remove('on');
        btnEncenApag.classList.add('off');
        btnEncenApag.textContent='Apagado';
        detenerSimulacion(id);
    }
    
}


    function agregarTuberia() {
        // Obtener valores de usuario y contraseña
        var id = document.getElementById('id').value;
        var diametro = document.getElementById('diametro').value;
        var grosor = document.getElementById('grosor').value;
        var material = document.getElementById('material').value;
        var densidad = document.getElementById('densidad').value;
        var profundidad = document.getElementById('profundidad').value;
        var ubicacion = document.getElementById('ubicacion').value;
        // Lógica de validación
// Expresiones regulares
var regexNumero = /^[0-9]+$/;
var regexFlotante = /^[0-9]+(\.[0-9]+)?$/;
var regexLetras = /^[a-zA-Z]+$/;

// Validaciones
if (!regexNumero.test(id)) {
  alert('ID debe ser un número');
  return false;
}

if (!regexFlotante.test(diametro)) {
  alert('Diametro debe ser un número flotante');
  return false;
}

if (!regexFlotante.test(grosor)) {
  alert('Grosor debe ser un número flotante');
  return false;
}

if (!regexLetras.test(material)) {
  alert('Material debe contener solo letras');
  return false;
}

if (!regexFlotante.test(densidad)) {
  alert('Densidad debe ser un número flotante');
  return false;
}

if (!regexFlotante.test(profundidad)) {
  alert('Profundidad debe ser un número flotante');
  return false;
}

if (!regexLetras.test(ubicacion)) {
    alert('Ubicación debe contener solo letras');
    return false;
  }
// Si todas las validaciones pasan, se puede acceder a la siguiente página
window.location.href = 'PuntosMonitoreo.html'; 
return false;

    } 





  function simularFlujoDeAgua(id) {
     
      localStorage.clear();
      // Función para simular el paso del tiempo y el flujo de agua
      function simularPasoDelTiempo() {
      const flujoActual = (Math.random() * 10).toFixed(2);
      const horaActual = new Date().toLocaleTimeString();

      const registro = {
          hora: horaActual,
          valvulaId: id,
          flujo: flujoActual
      };

      datos.push(registro);

      // Guardar los datos actualizados en el LocalStorage
      localStorage.setItem('datos', JSON.stringify(datos));

      console.log(`[${horaActual}] - Valvula: ${id}, Flujo: ${registro.flujo} litros por segundo`);
      }
  
      // Iniciar la simulación y guardar el ID del intervalo
      intervalID = setInterval(simularPasoDelTiempo, 10000);
  }

  function detenerSimulacion() {
    clearInterval(intervalID); // Detener el intervalo utilizando el ID almacenado
  }


function mostrarDatos(id) {

  window.location.href = 'FugasD.html'; 
  
}


function mostrarDatosEnTabla() {
  
  const tabla = document.getElementById('tablaDatos').getElementsByTagName('tbody')[0];
  const datosLocalStorage = JSON.parse(localStorage.getItem('datos'));
  if (datosLocalStorage) {
    datos = datosLocalStorage; // Actualizar la variable 'datos'
    
    // Limpiar la tabla antes de mostrar datos
    tabla.innerHTML = '';

    datos.forEach(registro => {
        const row = tabla.insertRow();
        const cellHora = row.insertCell(0);
        const cellValvulaId = row.insertCell(1);
        const cellFlujo = row.insertCell(2);

        cellHora.innerText = registro.hora;
        cellValvulaId.innerText = registro.valvulaId;
        cellFlujo.innerText = registro.flujo;
    });
}
}