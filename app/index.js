const showCoursesList = require('./controllers/showCoursesList');
const enrollInCourse = require('./controllers/enrollInCourse');

module.exports = {
  listar: showCoursesList,
  inscribir: ({ idCurso, nombre, cedula }) => enrollInCourse(idCurso, nombre, cedula),
};
