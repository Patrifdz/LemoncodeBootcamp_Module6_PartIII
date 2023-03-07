// Constantes
var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
  ];

  // Datos
var myTeam = [
    {
      name: "María",
      availability: new Array(8).fill(true)
    },
    {
      name: "Pedro",
      availability: new Array(8).fill(true)
    },
    {
      name: "Esther",
      availability: new Array(8).fill(true)
    },
    {
      name: "Marcos",
      availability: new Array(8).fill(true)
    },
  ];
//1º PASO -> crear función para generar aleatoriamente disponibilidad para cada profesor, asignando valor "true" o "false";
var getRandomAvailability = (a,b) => (Math.random() <0.50 ? a : b);

//2º PASO: recorrer cada profesor del array "myTeam": 
for (profesor of myTeam) {

//3º PASO: con otro bucle recorrer cada una de sus 8 horas de jornada laboral para modificar el valor de cada una de las horas con el valor generado aleatoriamente llamándo a la función creada para ello:
    for (hour in profesor.availability) {
        profesor.availability[hour] = getRandomAvailability(true,false);
    }

// Compruebo mostrando por consola que se ha creado disponibilidad aleatoria para cada profesor:
console.log(profesor.availability);
// Muestro por consola el mensaje para cada profesor de su disponibilidad:
console.log(`La disponibiliada de ${profesor.name} es:`);
// Con otro bucle que recorre el array de las franjas horarias de trabajo, muestro por consola solamente aquéllas franjas horarias que sean "true":
    for (hour in WORK_HOURS) {
        if (profesor.availability[hour]) {
            console.log(`${WORK_HOURS[hour]}`);
        }
    }
}

//**BUSCAR HUECO DISPONIBLE **//
for (hour in WORK_HOURS) {
  var disponibilidad = [];
  for (profesor of myTeam) {
    disponibilidad.push(profesor.availability[hour]);
  }
  for (i=0;i<4;i++) {
    if(disponibilidad.indexOf(false) == -1) {
    console.log(`Hueco encontrado en el horario de ${WORK_HOURS[hour]}`)
    } else console.log(`Lo siento, no hay hueco disponible de ${WORK_HOURS[hour]}`)
}}