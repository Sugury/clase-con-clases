// crear las clases Edificio, Piso y Departamento aquí
class Departamento {
  name:string;
  constructor(name:string) {
    this.name = name;

  }
  getName() {
    return this.name;
  }
};
class Piso {
  
  nombre: string;
  departamentos:Departamento[];
  constructor(nombre:string) {
    // this.nombre = nombre le asigna un nombre al objeto piso
    this.nombre = nombre;
    // this. departamentos = [] se asigna una array vacio a la pripiedad departamentos de Piso
    this.departamentos = [];

  }
  // pushDepartamento() = acepta objetos con las mismas propiedades que los de clase Departamento
  //> Cera usada en class Edificio.
  pushDepartamento(departamento:Departamento){
    // this.departamentos.push(departamento) = añade el objeto de tipo Departamento al array de departamentos.
    this.departamentos.push(departamento);


  }
  // getDepartamentos() = retorna todos los departamentos del piso seleccionado 
  //> Cera usada en class Edificio.

  getDepartamentos() {
    
   return this.departamentos
  };

};
class Edificio {
  // pisos: guarda en el array objetos de tipo piso.
  pisos: Piso[];
  constructor(pisos:Piso[]) {
    // this.pisos = le asigna objetos de tipo piso a al array pisos
    this.pisos = pisos;

  }
  // addDepartamentosToPiso() asigna departamentos para el piso seleccionado(si este existe)

  addDepartamentoToPiso(nombreDePiso:string,departamento:Departamento) {
    // pisoEncontrado = busca en los nombres de cada objeto tipo piso el nombre ingresado por el usuario.
    const pisoEncontrado = this.pisos.find(piso=> piso.nombre === nombreDePiso);
    // if si existe el piso, agrega el edificio al array del mismo (utilizando el metodo pushDepartamentos()) 
    if (pisoEncontrado) {
      pisoEncontrado.pushDepartamento(departamento);
    }
    else {
      return (`Error, el ${nombreDePiso}, no existe`);
    }
  }
  // getDepartamentosByPiso retorna todos los departamentos del piso seleccionado (usando el metodo getDepartamentos)
  getDepartamentosByPiso(nombreDePiso:string) {
    let pisoEncontrado = this.pisos.find(piso => piso.nombre == nombreDePiso);
     return pisoEncontrado ? pisoEncontrado.getDepartamentos(): []
  }
  
}

// no modificar este test
function testClaseEdificio() {
  const unPiso = new Piso("planta baja");
  const otroPiso = new Piso("primer piso");
  const unEdificio = new Edificio([unPiso, otroPiso]);
  const deptoUno = new Departamento("depto uno");
  const deptoDos = new Departamento("depto dos");
  const deptoTres = new Departamento("depto tres");
  unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
  unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
  unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

  const deptos = unEdificio.getDepartamentosByPiso("planta baja");
  const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");

  if (
    Array.isArray(deptosEmpty) &&
    deptosEmpty.length == 0 &&
    deptos.length == 3 &&
    deptos[2].getName() == "depto tres"
  ) {
    console.log("testClaseBandaApartment passed");
  } else {
    throw "testClaseBandaApartment not passed";
  }
}


function main() {
  testClaseEdificio();
}
main();