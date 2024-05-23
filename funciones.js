const constantes = [9,5,6]
let variable = {
  "nombre":"HP",
  "estrellas": 10
}

const constanteFuncionSaludar = function(nombre) {
  console.log("Hola! "+nombre);
}

const arrowFunction = nombre => {
  return "Hola en arrow! "+nombre;
}

const arrowFunctionUnaLinea = nombre => "Hola en arrow una linea! "+nombre;

function darleColor(funcionSaludo,nombre){
  const color = "rojo";
  console.log("Estoy dando color!");
  const nuevoNombre = nombre+":D"
  console.log(funcionSaludo(nuevoNombre+":"+color));
}

// darleColor(arrowFunction,"Paola")

const bomba = () => {
  return "Boom estoy estallando! x.X"
}

const bombaPeligrosa = () => {
  return "Boom estoy estallando muere! x.X"
}

const lanzarBomba = (bombaParam, persona) => {
  return "La está lanzando: "+persona+"_______"+bombaParam()
}

console.log(lanzarBomba(() => "Boom estoy estallando! x.X","Paola"));

