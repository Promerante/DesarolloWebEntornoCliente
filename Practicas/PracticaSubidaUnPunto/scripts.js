class jugador {
  //Creamos Usuario vacío,iremos añadiendo propiedades según avance el desarollo.
  //Inicialización del constructo y donde añadiremos las propiedades(seguramente iniciales y luego las siguientes):
  
  constructor(nombre, contraseña, tiempoJugado, monedas) {
    this.nombre = nombre;
    this.contraseña = contraseña;
    this.tiempoJugado = tiempoJugado;
    this.monedas = monedas;
  }
  /**
   * 
   */
  temporizador() {
    console.log(tiempoJugado);
    this.tiempoJugado++;
    console.log(tiempoJugado);
  }
}

//Comienzo de juego:
function Alquimia() {
  const usuario = new jugador("", "", 0, 0); //nuevo usuario
  console.log(usuario);
  setInterval(usuario.temporizador,1000);
  
}
