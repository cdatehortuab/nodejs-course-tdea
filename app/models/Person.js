class Person {
  constructor(idCardNumber, name) {
    this.idCardNumber = idCardNumber;
    this.name = name;
  }

  toString() {
    const { idCardNumber, name } = this;

    return `${name}\n`
     + ` - Cédula:  ${idCardNumber}\n`;
  }
}

module.exports = Person;
