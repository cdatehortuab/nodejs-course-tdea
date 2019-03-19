const Course = require('./models/Course');

const courses = [
  new Course(1, 'CCNA R&S 1: Introducción a las redes', 72, 750000),
  new Course(2, 'CCNA R&S 2: Fundamentos de conmutado y enrutamiento', 72, 750000),
  new Course(3, 'CCNA R&S 3: Escalamiento de redes', 72, 750000),
  new Course(4, 'CCNA R&S 4: Conexión de redes', 72, 750000),
];

module.exports = {
  courses,
};
