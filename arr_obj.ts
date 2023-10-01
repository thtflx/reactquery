
// Методы массивов:

// 1. `arr.length()`


const arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5


// // 2. `arr.push()`


// const arr = [1, 2, 3];
// arr.push(4, 5);
// console.log(arr); // [1, 2, 3, 4, 5]


// // 3. `arr.pop()`


// const arr = [1, 2, 3];
// const lastElement = arr.pop();
// console.log(lastElement); // 3
// console.log(arr); // [1, 2]


// // 4. `arr.shift()`


// const arr = [1, 2, 3];
// const firstElement = arr.shift();
// console.log(firstElement); // 1
// console.log(arr); // [2, 3]


// // 5. `arr.unshift()`


// const arr = [3, 4, 5];
// arr.unshift(1, 2);
// console.log(arr); // [1, 2, 3, 4, 5]


// // 6. `arr.splice()`


// const arr = [1, 2, 3, 4, 5];
// arr.splice(2, 0, 6);
// console.log(arr); // [1, 2, 6, 3, 4, 5]
// arr.splice(3, 2);
// console.log(arr); // [1, 2, 6, 5]


// // 7. `arr.slice()`


// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.slice(2, 4);
// console.log(newArr); // [3, 4]


// // 8. `arr.concat()`


// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const newArr = arr1.concat(arr2);
// console.log(newArr); // [1, 2, 3, 4]


// // 9. `arr.forEach()`


// const arr = [1, 2, 3, 4, 5];
// arr.forEach(item => {
//   console.log(item);
// });
// // Output: 1 2 3 4 5


// // 10. `arr.indexOf()`


// const arr = [1, 2, 3, 4, 5];
// const index = arr.indexOf(3);
// console.log(index); // 2


// // 11. `arr.lastIndexOf()`


// const arr = [1, 2, 3, 4, 5, 3];
// const index = arr.lastIndexOf(3);
// console.log(index); // 5


// // 12. `arr.includes()`


// const arr = [1, 2, 3, 4, 5];
// const isIncludes = arr.includes(3);
// console.log(isIncludes); // true


// // 13. `arr.find()`


// interface IUser {
//   id: number;
//   name: string;
// }

// const users: IUser[] = [
//   {id: 1, name: 'John'},
//   {id: 2, name: 'Mike'},
//   {id: 3, name: 'Anna'}
// ];

// const user = users.find(u => u.id === 2);
// console.log(user); // {id: 2, name: 'Mike'}


// // 14. `arr.findIndex()`


// interface IUser {
//   id: number;
//   name: string;
// }

// const users: IUser[] = [
//   {id: 1, name: 'John'},
//   {id: 2, name: 'Mike'},
//   {id: 3, name: 'Anna'}
// ];

// const index = users.findIndex(u => u.id === 2);
// console.log(index); // 1


// // 15. `arr.findLastIndex()`


// interface IUser {
//   id: number;
//   name: string;
// }

// const users: IUser[] = [
//   {id: 1, name: 'John'},
//   {id: 2, name: 'Mike'},
//   {id: 3, name: 'Anna'},
//   {id: 2, name: 'Alex'}
// ];

// const lastIndex = users.findLastIndex(u => u.id === 2);
// console.log(lastIndex); // 3


// // 16. `arr.filter()`


// interface IUser {
//   id: number;
//   name: string;
// }

// const users: IUser[] = [
//   {id: 1, name: 'John'},
//   {id: 2, name: 'Mike'},
//   {id: 3, name: 'Anna'},
//   {id: 4, name: 'Alex'}
// ];

// const filteredUsers = users.filter(u => u.id % 2 === 0);
// console.log(filteredUsers); // [{id: 2, name: 'Mike'}, {id: 4, name: 'Alex'}]


// // 17. `arr.sort()`


// const arr = [3, 1, 2, 5, 4];
// arr.sort();
// console.log(arr); // [1, 2, 3, 4, 5]
// arr.sort((a, b) => b - a);
// console.log(arr); // [5, 4, 3, 2, 1]


// // 18. `arr.reverse()`


// const arr = [1, 2, 3];
// arr.reverse();
// console.log(arr); // [3, 2, 1]


// // 19. `arr.split()`


// const str = '1,2,3,4,5';
// const arr = str.split(',');
// console.log(arr); // ['1', '2', '3', '4', '5']


// // 20. `arr.join()`


// const arr = ['1', '2', '3', '4', '5'];
// const str = arr.join('-');
// console.log(str); // '1-2-3-4-5'


// // 21. `arr.reduce()`


// const arr = [1, 2, 3, 4, 5];
// const sum = arr.reduce((prev, curr) => prev + curr);
// console.log(sum); // 15


// // 22. `arr.toString()`


// const arr = [1, 2, 3];
// const str = arr.toString();
// console.log(str); // '1,2,3'


// `Array.isArray()`


// const arr = [1, 2, 3];
// const isArr = Array.isArray(arr);
// console.log(isArr); // true
















// // Функции:

// // 1. Конструктор


// class User {
//   name: string;
  
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// const user1 = new User('John');
// console.log(user1); // {name: 'John'}

// const user2 = new User('Anna');
// console.log(user2); // {name: 'Anna'}


// // 2. Свойства


// function sum(a: number, b: number) {
//   // используем переменную result
//   const result = a + b;
  
//   return result;
// }


// // 3. Методы


// class User {
//   name: string;
  
//   constructor(name: string) {
//     this.name = name;
//   }
  
//   sayHello() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }

// const user = new User('John');
// user.sayHello(); // Hello, my name is John

















// // Методы функций:

// // 1. `apply()`


// function sayHello(firstName: string, lastName: string) {
//   console.log(`Hello, ${firstName} ${lastName}`);
// }

// const user = {
//   firstName: 'John',
//   lastName: 'Doe'
// }

// sayHello.apply(null, [user.firstName, user.lastName]); // Hello, John Doe


// // 2. `call()`


// function sayHello(firstName: string, lastName: string) {
//   console.log(`Hello, ${firstName} ${lastName}`);
// }

// const user = {
//   firstName: 'John',
//   lastName: 'Doe'
// }

// sayHello.call(null, user.firstName, user.lastName); // Hello, John Doe


// // 3. `bind()`


// function sayHello(firstName: string, lastName: string) {
//   console.log(`Hello, ${firstName} ${lastName}`);
// }

// const user = {
//   firstName: 'John',
//   lastName: 'Doe'
// }

// const sayHelloToUser = sayHello.bind(null, user.firstName, user.lastName);
// sayHelloToUser(); // Hello, John Doe


// // 4. `toString()`


// function sum(a: number, b: number) {
//   const result = a + b;
//   return result;
// }

// console.log(sum.toString()); // 'function sum(a, b) { const result = a + b; return result; }'












// // Объекты:

// // 1. Свойства


// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30
// };

// console.log(user.firstName); // John
// console.log(user['age']); // 30


// // 2. Методы


// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
  
//   sayHello() {
//     console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
//   },
  
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// };

// user.sayHello(); // Hello, my name is John Doe
// console.log(user.getFullName()); // John Doe
