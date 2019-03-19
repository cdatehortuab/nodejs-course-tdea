class Course {
  constructor(id, name, duration, value) {
    this.id = id || -1;
    this.name = name || '';
    this.duration = duration || 0;
    this.value = value || 0;
  }

  toString() {
    const {
      id, name, duration, value,
    } = this;

    return `${name}\n`
      + ` -  Identificación: ${id}\n`
      + ` -  Duración:       ${duration} horas\n`
      + ` -  Valor:          COP $ ${value}\n`;
  }
}

module.exports = Course;
