const yargs = require('yargs');

const {
  listar,
  inscribir,
} = require('./app');

// eslint-disable-next-line no-unused-expressions
yargs
  .command(['listar', 'l', '$0'], 'Listar todos los cursos disponibles', {}, listar)
  .command(['inscribir', 'registrar', 'i', 'r'], 'Inscribir persona en un curso', {
    idCurso: {
      describe: 'Identificación del curso en el que desea inscribir a la persona',
      alias: 'i',
      demand: true,
    },
    nombre: {
      describe: 'Nombre de la persona que se va a inscribir en el curso',
      alias: 'n',
      demand: true,
    },
    cedula: {
      describe: 'Cédula de la persona que se va a inscribir en el curso',
      alias: 'c',
      demand: true,
    },
  }, inscribir)
  .argv;
