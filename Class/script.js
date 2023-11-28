class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
  }
  fullName() {
    return `T_T ${this.firstName} ${this.lastName}`;
  }
}

let firstStuent = new Student("Copa", "Samsu");
let secondStudent = new Student("Test", "icle");

firstStuent.fullName();
