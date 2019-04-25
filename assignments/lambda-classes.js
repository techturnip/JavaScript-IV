// CODE here for your Lambda Classes
class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(props) {
    super(props);
    this.specialty = props.specialty;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
  }

  demo(subj) {
    return `Today we are learning about ${subj}!`;
  }

  grade(student, subj) {
    return `${student.name} receives a perfect score on ${subj}!`;
  }
}

class Student extends Person {
  constructor(props) {
    super(props);
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;
  }

  listsSubjects() {
    return this.favSubjects.forEach(subj => console.log(subj));
  }

  PRAssignment(subj) {
    return `${this.name} has submitted a PR for ${subj}!`;
  }

  sprintChallenge(subj) {
    return `${this.name} has begun sprint challenge on ${subj}!`;
  }
}

class ProjectManager extends Instructor {
  constructor(props) {
    super(props);
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }

  debugsCode(student, subj) {
    return `${this.name} debugs ${student.name}'s code on ${subj}!`;
  }
}

// Instructors
const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});
const tina = new Instructor({
  name: 'Tina',
  location: 'Charleston',
  age: 32,
  gender: 'female',
  favLanguage: 'Python',
  specialty: 'Machine Learning',
  catchPhrase: `Skynet for the win!`
});
const tim = new Instructor({
  name: 'Tim',
  location: 'Colorado Springs',
  age: 28,
  gender: 'male',
  favLanguage: 'Nashville',
  specialty: 'Back-end',
  catchPhrase: `No api left behind`
});

// Students
const tyler = new Student({
  name: 'Tyler',
  location: 'Avon',
  age: 29,
  gender: 'male',
  previousBackground: 'Construction Materials Testing',
  className: 'WEBPT6',
  favSubjects: ['Responsive Design', 'React', 'JavaScript']
});
const jimmy = new Student({
  name: 'Jimmy',
  location: 'Brownsburg',
  age: 27,
  gender: 'male',
  previousBackground: 'Burger Flipper',
  className: 'WEBPT7',
  favSubjects: ['Responsive Design', 'HTML', 'OOP']
});
const coraline = new Student({
  name: 'Coraline',
  location: 'Fishers',
  age: 30,
  gender: 'female',
  previousBackground: 'Dog Groomer',
  className: 'WEBPT6',
  favSubjects: ['UI/UX', 'Node', 'Python']
});

// Project Managers
const sara = new ProjectManager({
  name: 'Sara',
  location: 'Indianapolis',
  age: 26,
  gender: 'female',
  favLanguage: 'CSS',
  specialty: 'Front-end',
  catchPhrase: 'Nothing is that !important',
  gradClassName: 'CS238',
  favInstructor: 'Fred'
});
const connor = new ProjectManager({
  name: 'Connor',
  location: 'Louisville',
  age: 23,
  gender: 'male',
  favLanguage: 'Less',
  specialty: 'Front-end',
  catchPhrase: 'Mix it up with Mixins!',
  gradClassName: 'CS5',
  favInstructor: 'Tina'
});
const jeremy = new ProjectManager({
  name: 'Jeremy',
  location: 'Los Angeles',
  age: 23,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Back-end',
  catchPhrase: 'Know your node!',
  gradClassName: 'CS28',
  favInstructor: 'Tim'
});

// Instructor
console.log(fred);
console.log(tina);
console.log(tim);
console.log(fred.demo('React'));
console.log(tina.grade(tyler, 'JS Classes'));
console.log(tim.speak());

// Student
console.log(tyler);
console.log(coraline);
console.log(jimmy);
console.log(tyler.listsSubjects());
console.log(coraline.PRAssignment('React'));
console.log(jimmy.sprintChallenge('Flexbox'));
console.log(tyler.speak());

// Project Manager
console.log(sara);
console.log(connor);
console.log(jeremy);
console.log(sara.standUp('webpt6_sara'));
console.log(connor.debugsCode(tyler, 'Flexbox'));
console.log(jeremy.speak());
