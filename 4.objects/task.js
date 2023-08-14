let student1 = new Student("Дарья", "женский", 25);
let student2 = new Student("Сергей", "мужской", 42);
let student3 = new Student("Михаил", "мужской", 34);

function Student(name, gender, age) {

  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];

}

Student.prototype.setSubject = function (subjectName) {

  this.subject = subjectName;

}

Student.prototype.addMarks = function (...marks) {

  if (typeof this.marks === false || this.marks === undefined) {
    return 0;
  }
  this.marks = [...this.marks, ...marks];

}

Student.prototype.getAverage = function () {
  
  if (typeof this.marks === false || this.marks === undefined) {
    return 0;
  }
  let result = this.marks.reduce((acc, item, index, arr) => {
    acc += item;
    if (index === arr.length - 1) {
      return acc / arr.length;
    }
    return acc;
  }, 0);
  return result;

}

Student.prototype.exclude = function (reason) {

  delete this.subject;
  delete this.marks;

  this.excluded = reason;

}