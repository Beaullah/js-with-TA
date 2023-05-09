// // document.write("Hello world"); // displays in the webpage
// // alert("hello people"); //pop up bpx
// // console.log("Hello world"); // display's in the console

// // variables
// // let name;
// // console.log(name)  // give null because u haven't definsd it
// // let statement = 'jdjdj';
// // console.log(statement) // console the answer

// // let address , zip , state; // can assign multiplle varia
// // let  name = 'aams'
// // address = '101 street'
// // zip = '3333'
// // state = 'jdjd'
// // name ='xkks'
// // console.log(address, zip, state)
// // console.log(name) // names chances to xkks

// // variable can contan digits, letters, underscore , $
// // must start with letter . $ or _
// // no keyword
// // cnnot start with numbers
// // case sensitive  cat != Cat
// // camelCase or underscore( can start withit)

// // LET VS CONST VS VAR

// // using var
// // var value = 'some value'
// // value = 'some other vakue' // changes

// // // let

// // let name = 'john'
// // name = 'happy' //changes to happy

// // // using const - can't re-sign
// // const lastName = 'jordan'
// // console.log(value)
// // console.log(name)
// // console.log(lastName)

// // "" or ''

// // const name = "John 's is good";
// // // can use a single quotation inside a double one

// // let h = 'John\'s good '// or use the escape / to show single quotation
// // console.log(h)

// // string concatenation - combine strings values

// // `` - backticks (template strings ) easier option

// //const name = 'john'
// // const lastName = 'shakeshape'
// // let fullName = name + '' + lastName
// // console.log('Hello there your full name is : ' + fullName)

// // const website = "googe";
// // const url = 'https://wwww.' + website + '.com'
// // console.log(url)

// // maths operations
// // let number = 10;
// // const add = number + number;
// // const sub = number + number;
// // const dive = number + number;
// // const nim = number + number;
// // console.log(add)
// // console.log(sub)
// // console.log(dive)
// // console.log(nim)

// // operations
// // +=, /=, *= . ++ . -- %(gives a remainder )
// // const slices = 10;
// // const children = 3;
// // const amt = 10 % 3
// // console.log(amt) // ans is 1

// // Implicit Type Conversion
// let h = 8;
// let u = "9";
// // console.log(h + u);

// //Data Types - 7 total
// // Primitives - String, Number,Boolen, Null , underfines , symbol
// // Object - Arrays , Functins  Objectsb

// // typeof - oprators (typeof variable)

// // let text = 'hhdj';
// // let num = 2;
// // let value = true;
// // let result = null
// // let name;
// // console.log(typeof text)
// // console.log(typeof num)
// // console.log(typeof value)
// // console.log(typeof null)
// // console.log(typeof name)

// // // Arrays Functions and objects

// // // Arrays - [], 0 index based

// // const friend1 = 'ama'
// // const friend2 = 'ama'
// // const friend3 = 'ama'
// // const friend4 = 'ama'

// // const friends = ['john','duduu', 8 ,'duu', null]
// // let bestFriend = friends[2]
// // friends[4] = 'anna'
// // console.log(friends[3])
// // console.log(friends)
// // console.log(bestFriend)

// // functions
// // function hello (){

// //     console.log('hi anna')
// // }
// // hello()
// // hello()
// // hello()

// // function great (name){
// //     console.log('Hello there ' + name)

// // }
// // great(9)
// // great("Jon")

// // //return
// // const wall = 60;
// // function cal (value) {
// //     const newValue = value * 2.4
// //   console.log('The value in cm is:' + value * 2.54 + 'cm')
// //   return newValue
// // }
// // const width = cal(100);
// // const height =cal(wall);
// // const dimens = [width , height];

// function gradeChecker(grade) {
//   if (grade === 80) {
//     return "A";
//   } else if (grade === 75) {
//     return "B";
//   } else if (grade === 60) {
//     return "C";
//   } else if (grade === 50) {
//     return "D";
//   } else if (grade < 50) {
//     return "F";
//   } else {
//     return "Invalid";
//   }
// }
// console.log(gradeChecker(55));

// const num = (a, b) => {
//   console.log(a * b);
// };
// num(3, 3);

// // Objects - key/value pairs methods

// const person = {
//   name: "Ama",
//   lastName: "Bentil",
//   number: 3,
//   education: false,
//   married: true,
//   sil: ["anaa", "susan", 2],
//   greeting: function () {
//     console.log("Hello");
//   },
// };
// const age = person.number; // assigning a viara
// console.log(age);
// console.log(person.greeting);
// console.log(person.sil[2]);

// // Conditional Statements
// // condition is () codes in {}
// const num1 = 4;
// const num2 = 6;
// const value = 2 > 1;
// console.log(typeof value);
// if (value) {
//   console.log("hello");
// } else {
//   console.log("hello world");
// }
// if (num1 > num2) {
//   console.log("first num is bigger");
// } else {
//   console.log("second num id bigger than first");
// }
// /// we learnt about the else if condition

// //// == or ===

// // the switch statements

/// while loops
// const amount = 10;
// while (amount > 0) {
//   console.log("I have an amount of" + amount);
// }

// const value = true;
// if (value) {
//   console.log("value is true");
// }
// let age = 24;
// let nAme = "ama";

// //Logical operaters
// // (|| ), (&&)
// if (nAme === "bob" || age === 24) {
//   console.log("yh");
// } else if (nAme === "ama " && age == 4) {
//   console.log("food");
// } else {
//   console.log("fish");
// }

// let  amount = 10;
// while (amount > 0) {
//   console.log("I have " + amount + "dolar and I'm going to the mall");
//   amount--;
// }

// let number = 4;
// do {
//   console.log("hello " + number);
//   number++;
// } while (number < 9);

// for loop

// let i;
// for (i = 0; i < 10; i++) {
//   console.log("is number" + i);
// }

for (let number = 6; number <= 10; number++) {
  console.log("yh" + number);
}
