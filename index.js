class Cat {
 name;
 sex;

 constructor(name, sex) {
    this.name = name;
    this.sex = sex;
 }

 speak() {
    return (`${this.name} says meow!`);
 }
 
}

///////////////////

class Dog {
name;
 sex;

 constructor(name, sex) {
    this.name = name;
    this.sex = sex;
    
 }

 speak = () => {
    return(`${this.name} says woof!`);
 };

}

///////////////////////

class Bird {
name;
 sex;

 constructor(name, sex) {
    this.name = name
    this.sex = sex
 }

 speak() {
    return (this.sex === "male".toLowerCase() ? `It's me! ${this.name}, the parrot!` : `${this.name} says squawk!`);
 }

}