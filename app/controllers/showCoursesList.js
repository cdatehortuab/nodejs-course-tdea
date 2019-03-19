const { courses } = require('../data');

const TIMEOUT = 2000;

function displayCourseAndScheduleNext(courseIndex) {
  if (courseIndex >= 0 && courseIndex < courses.length) {
    const course = courses[courseIndex];
    console.log(course.toString());
    if (courseIndex + 1 < courses.length) {
      setTimeout(() => {
        displayCourseAndScheduleNext(courseIndex + 1);
      }, TIMEOUT);
    }
  }
}

function showCoursesList() {
  console.log('\n\n================== LISTA DE CURSOS DISPONIBLES ==================\n');

  displayCourseAndScheduleNext(0);
}

module.exports = showCoursesList;
