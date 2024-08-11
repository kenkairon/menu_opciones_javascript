//FUNCIONES

  function menuOpciones(opcion) {
    // Validar que la opción ingresada sea un número
    if (isNaN(opcion)) {
      return "Por favor, ingresa un número válido.";
    }
  
    // Usar switch-case para manejar las diferentes opciones
    switch (opcion) {
      case 1:
        return subMenuBoletasPagos();
      case 2:
        return subMenuSenalLlamadas();
      case 3:
        return eleccionOfertaComercial();
      case 4:
        return OtrasConsultas();
      default:
        alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios");
    }
  }
  
  function subMenuBoletasPagos() {
    // Solicitar al usuario que elija una subopción dentro de "Boletas y Pagos"
    let subOpcion = prompt("Has elegido 'Boletas y Pagos'.\nElige una opción:\n1 - Ver Boleta\n2 - Pagar Cuenta");
  
    // Convertir la entrada del usuario a un número entero
    subOpcion = parseInt(subOpcion);
  
    // Validar la subopción ingresada
    if (isNaN(subOpcion)) {
      return "Por favor, ingresa un número válido.";
    }
  
    // Usar switch-case para manejar las diferentes subopciones
    switch (subOpcion) {
      case 1:
        alert("Haga clic aquí para descargar su boleta");
        break;
      case 2:
        alert("Usted está siendo transferido. Espere por favor");
        break;
      default:
        alert("La opción no es la correcta, vuelve al menu de Pagos");
        subMenuBoletasPagos()
    }
  }

  function subMenuSenalLlamadas() {
    // Solicitar al usuario que elija una subopción dentro de "Boletas y Pagos"
    let subOpcion = prompt("Has elegido 'Señal y llamadas'.\nElige una opción:\n1 - Problemas con la señal\n2 - Problemas con las llamadas");
  
    // Convertir la entrada del usuario a un número entero
    subOpcion = parseInt(subOpcion);
  
    // Validar la subopción ingresada
    if (isNaN(subOpcion)) {
      return "Por favor, ingresa un número válido.";
    }
  
    // Usar switch-case para manejar las diferentes subopciones
    switch (subOpcion) {
      case 1:
      case 2:
        let mensaje =prompt("A continuacion escriba su solicitud")
        alert("Estimado usuario, su solicitud " + mensaje + " Ha sido ingresado con éxito Pronto sera contactado por nuestros ejecutivos")
        break
      default:
        alert("La opción no es la correcta, vuelve al menu de Señal y LLamadas");
        subMenuSenalLlamadas()        
    }
  }
  // Funcion con elecciones de alertas de mensajes
  function eleccionOfertaComercial(){

    let mensajesComercial = prompt("¡Mentel tiene un oferta comercial acorde a tus necesidades!  Para conocer más información y ser asesorado personalmente por un  ejecutivo escribe 'Si' y un ejecutivo te llamará. De lo contrario ingrese 'NO'") 
    
    if(mensajesComercial.toLocaleUpperCase() == 'SI'){
      alert("Un ejecutivo se contactará con usted")
    }
    else if(mensajesComercial.toLocaleUpperCase() == 'NO')
      alert("Gracias por preferir nuestros Servicios")
    else{
      alert("La opción no es la correcta vuelves al menu principal")
      eleccionOfertaComercial()
    }
  }
  // Funcion para otras consultas y un alert de mensaje final para la consulta
  function OtrasConsultas(){

    let mensajesComercial = prompt("A continuación escriba su consulta") 
    alert("Estimado usuario, su consulta: '" + mensajesComercial + "' Ha sido ingresada con éxito. Pronto será contactado por nuestros ejecutivos.")
  
  }
  // Solicitar al usuario que ingrese una opción principal
  var opcion = prompt("¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. Estoy aquí para ayudarte en lo que necesides.\nEscribe el número de la opción que buscas: \n1.- Boletas y Pagos \n2.- Señal y llamadas \n3.- Oferta comercial  \n4.- Otras consultas")

  
  // Convertir la entrada del usuario a un número entero
  opcionUsuario = parseInt(opcion);
  
  // Llamar a la función principal y mostrar el resultado
  let resultado = menuOpciones(opcionUsuario);
 
  
  