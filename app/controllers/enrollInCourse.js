const Person = require('../models/Person');
const Enrollment = require('../models/Enrollment');

const { courses } = require('../data');

const showCoursesList = require('./showCoursesList');

function enrollInCourse(courseId, personName, personIdCardNumber) {
  const selectedCourse = courses.find(course => course.id === courseId);

  if (!selectedCourse) {
    console.warn('\nEl curso seleccionado no existe');
    showCoursesList();
  } else {
    console.log('\nEl curso que has seleccionado es:');
    console.log(selectedCourse.toString());

    const person = new Person(personIdCardNumber, personName);
    const enrollment = new Enrollment(person, selectedCourse);
    enrollment.saveToFile();
  }
}

module.exports = enrollInCourse;
