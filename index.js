
class Pelicula {
  constructor(nombre,estrellas,duracion){
    this.nombre = nombre;
    this.estrellas = estrellas;
    this.duracion = duracion;
  }

  getNombre(){
    return "El nombre es: "+this.nombre;
  }

}


const peliculaHP = new Pelicula("Harry potter",10,2);
peliculaHP.estrellas = 11
console.log(peliculaHP);


const peliculaIronManJSON = {
  nombre: "Iron man 1",
  estrellas: 20,
  duraccion: 2,
  actores: ["TonyStark","Sckarlet"], 
  descripcion:{
    author:"JK",
    texto:"me parece muy cool"
  },
  getNombre(){
    return "El nombre es: "+this.nombre
  }
}

console.log(peliculaIronManJSON.descripcion.texto);