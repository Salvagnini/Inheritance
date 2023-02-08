"use strict";
// ***********1************
// let car = {
//   type: 'electric',
//   wheels: 4
// }
// let sportCar = {
//   doors: 2,
// }
// Object.setPrototypeOf(sportCar, car);



// let passengerCar = {
//   doors: 4,
// }
// Object.setPrototypeOf(passengerCar, car);


// let toyCar = {
//   type: 'toy'
// }
// Object.setPrototypeOf(sportCar, car)

// console.log(sportCar);
// console.log(sportCar.type);
// console.log(passengerCar);
// console.log(passengerCar.type);
// console.log(toyCar);
// console.log(toyCar.type);

// ************2***************
// let employees = {
//   wallet: {},
//   pay(munth, sum) {
//     this.wallet[munth] = sum;
//   }
// }
// let frontendDeveloper = {
//   name: 'Mike',
//   wallet: {},
// }
// Object.setPrototypeOf(frontendDeveloper, employees);
// let backendDeveloped = {
//   name: 'Bob',
//   wallet: {},
// }
// Object.setPrototypeOf(backendDeveloped, employees);

// backendDeveloped.pay('june', 1500);
// frontendDeveloper.pay('june', 11500);

// console.log(backendDeveloped.wallet.june);
// console.log(frontendDeveloper.wallet.june);


// ************3***************

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }
// let user_1 = new User('Mike', 18);
// let user_2 = Object.create(user_1);
// user_2.name = 'Bob';
// user_2.age = '25';
// console.log(user_2);
// console.log(user_1);



// *******************4******************
function userType(name) {
  for (let i = 0; i < name.length; ++i){
    this[i] = name[i];
    if (i + 1 == name.length) {
      Object.defineProperty(this, 'length', {
        enumerable: true,
        writable: false,
        configurable: true,
        value: i + 1
      });
    }
  }
  this.join = Array.prototype.join;
}
let admins = new userType(['Mike', 'Bob', 'Nikola']);
console.log(admins.join ('; '))