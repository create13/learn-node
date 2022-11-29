// const person = {
//   name: "summer",
//   age: 28,
// };
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log(`My name is ${this.name},And i am ${this.age}`);
  }
}
module.exports = Person;
console.log("__filename", __filename);
console.log("__dirname", __dirname);
