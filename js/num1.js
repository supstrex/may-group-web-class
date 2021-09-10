class Users {
  constructor(name, age, sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  toString() {
    return `I'm ${this.name}. I'm ${this.age} years old.`
  }
}

let a = new Users("Arthur", 32 , "male");
console.log(a.toString());