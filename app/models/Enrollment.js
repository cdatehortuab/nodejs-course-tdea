const fs = require('fs');
const path = require('path');

const indent = require('../utils/indent');

const ENROLLMENT_FILES_PATH = `${process.cwd()}/enrollment-files`;

class Enrollment {
  constructor(person, course) {
    this.person = person;
    this.course = course;
    this.date = new Date();
  }

  toString() {
    const { person, course, date } = this;

    return `La persona:\n${indent(person.toString())}\n`
      + `tiene una inscripción en el curso:\n${indent(course.toString())}\n`
      + `realizada en la fecha ${date.toLocaleString()}\n`;
  }

  saveToFile() {
    const filename = `${ENROLLMENT_FILES_PATH}/person-${this.person.idCardNumber}/course-${this.course.id}/${this.date.toISOString().replace(/:/g, ';')}.txt`;
    const content = this.toString();

    fs.mkdirSync(path.dirname(filename), { recursive: true });
    fs.writeFile(filename, content, (err) => {
      if (err) throw (err);
      else {
        console.log(`Te has matriculado exitosamente\nRuta del comprobante: ${filename}`);
      }
    });
  }
}

module.exports = Enrollment;
