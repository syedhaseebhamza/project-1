"use-strict";

// slice method of aray ..........

// in the slice method do not any effect on original arraay

// let arr = ['a', 'b', 'c', 'd', 'e', 'f']
// console.log(arr)
// console.log(arr.slice(3))
// console.log(arr.slice(-2))
// console.log(arr.slice(-1))
// console.log(arr.slice(0,-1))
// console.log(arr.slice())

// // splice methd..........
// // in the splice method remove the elements that we want its effect the original aray

// // console.log(arr.splice(2))
// // console.log(arr) // look the result that is remove the array elemts that splice(2) and the original array only 2 member
// // arr.splice(2)
// // console.log(arr)
// arr.splice(1,2)
// console.log(arr)

// reverse .........

// const arr2 = ['Q','W','E','R','T','Y']
// console.log(arr2.reverse()) // its is also mutate means that is affect the orignal array
// console.log(arr2)

// concat........

// const male = ['ali' ,'hamza', 'haseeb'];
// const female = ['sara', 'ayesha' , 'mahreen']
// console.log(male.concat(female))
// console.log(...male,...female)

// join......

// const animals = ['donkey','cat','dog','duck']
// console.log(animals.join(' -!- '))

//.....................................looping foreach on array ,,,,,,,,,,,,,,,,,,..//

// const movments = [123 , 345, 678, -91011 , 121314, -151617, -181920, 212223]
// for(const movment of movments){
//     if(movment > 0){
//         console.log(`you diposit ${movment}`)
//     } else {
//         console.log(`you widra ${movment}`)

//     }
// }
// console.log('--------FOR EACH--------')

// movments.forEach(function(movment , index){
//     if (movment > 0 ){
//         console.log(`postion ${index + 1}: you deposit ${movment} `)
//     } else {
//         console.log(`postion ${index + 1 }: you widrew ${movment}`)
//     }
// })
// in the for each loop we have a call back function that rescie the whole array as a paremter and if you want yo index then the second parameter is that wo ho ga order matter kerta ha phala order pay hum aray ki vales rakhy gay senod pay hum index rakhy gay third pay whole array rakhy gay

// ...........................FOR EACH MEHTOD ON MAPS AND SETS ..........................///////////////

// is k andr b ya hi same cheez ho gi key ki jo value ha phaly dalo parameter main os k bad jo key rakhi ha wo daloo
// console.log('............................MAP........................')

// const currenices = new Map([
//     ['USA', 'DOLLER'],
//     ['PAK' , 'RUPY'],
//     ['SUDA', 'RIYAL']
// ]);

// currenices.forEach(function(value ,key , map){
// console.log(`${key} ::${value}`)
// })

// console.log('........,,,,,,,,.....................SET..................')

// // in the set they have not key and indexes as wel thats wHY CONCOLE  not show ke

// const currenciesunique = new Set(['DOLLER','PKR', 'RIYAL', 'DHRAM'])

// currenciesunique.forEach(function(v , i , set){
// console.log(` postion is ${i + 1}: ${v}`)
// })

//..............................................................................//////

// constuctor function and normal function are the same only different is that construtor function have (new)keyword
// 1 new empty obejct created {}
// 2 fucntion called this {}
// 3 {} linked to prototype
// 4 func automatically return {}

// const Person = function (firstName, birthAge) {
//   this.firstName = firstName;
//   this.birthAge = birthAge;
//   // this.calAge =function(){
//   // console.log(2037 - this.birthAge)  // never creat a function inside a constractor function becase every obeact carry this funcallity and we don't it
//   // }
// };
// const haseeb = new Person('haseeb', 1999);
// console.log({haseeb});

// // we can use this constructor function to creat as many differents objects as we want
// const jonas = new Person('jonas', 1991);
// const micthal = new Person('micthal', 1992);
// console.log(jonas, micthal);
// // new objects we creat programtically using a function construction

// // haseeb,jonas, micthal are the instance of person
// console.log(haseeb instanceof Person);
// const p = 'p';
// console.log(p instanceof Person);

// // constrctor function inheritance ..............

// const School = function(name , teacher , room ){
//     this.name = name
//     this.teacher = teacher
//     this.room = room
// }

// School.prototype.mix = function(){
//     console.log((`${this.name} have ${this.teacher} teacher and ${this.room} room`))
// }

// const school1 = new School('Allied' , 30 , 200)
// school1.mix()

// const Collyuege = function(name , teacher , room , hall){
//     School.call(this , name , teacher , room)
//     this.hall = hall

// }

// College.prototype = Object.create(School.prototype)

// College.prototype.mixer = function(){
//     console.log((`${this.name} is great because it have ${this.teacher} teacher and ${this.room} room,, specially it have ${this.hall} Hall`))
// }

// const clg = new College('ILM' , 10 , 23 , 1)
// clg.mix()
// clg.mixer()

// // prototypes ......................

// //  Each and every function in JS automatically has a property called a prototype inculde a constractor function
// // hum kuch extra add krna cha rahy hain obecjts main wo to simply hum necy jo object aya ha os main kr dety hain han agr wo hi cheez hum ko full constractor function main chiya jo hr objects k andr ho to hum constructor function main likhny ki bajay function ka name + prototypes + jo add krna ch rahy hain or os ki value likh hain day to wo full obejcst sab objects main a jye ga

// function Students(fName , lName , cls) {
//  this.fisrName = fName
//  this.lastName = lName
//  this.class = cls
// }
// Students.prototype.nationallity = 'pak'    // this is prototype here we add nationallity both objects
// const student1 = new Students('riya' ,'khalid' , 6 )
// const student2 = new Students('perveez' , 'kthak' , 9)
// // student1.nationality = 'pak'      // here we add in only student1
// console.log(student1,student2)
// // these are the inherited properties not its own properties ,,, own properties is we decales first in constractor function

// //  jab hum constractor function banaty hain jesa k Student jesa  jvascript 1 prototype container bana kr rakh deta ha  jesy hi him koi object banay gay jesa k student1  wo  connect ho jaye ga jo Student k prototpe k sath  fr jum hum koi functionallty lagay gay jesy k ownhisproperty wo sab sy phaly student1 obejct main wo propertty dondy ga nhi mily pay Student waly protoyype k conyeiner main ja kr dondy ga nhi mily gi then wo jaye ga bulit in obecjts k prototype main wahan milay may run kery ga
// // that is called prototye chaining
// // jab b object banaty hain wo auto pay connect hota ha prototype k sath

// //...............................

// const Car = function(make , speed){
//     this.make = make,
//     this.speed = speed
// }

// Car.prototype.accelrate = function(){
//     this.speed += 10
//     console.log(`${this.make} speed is ${this.speed}`)
// }
// Car.prototype.brake = function(){
//     this.speed -= 5
//     console.log(`${this.make} apply brake and its speed is now${this.speed}`)
// }
// const bmw = new Car('bmw' ,120)
// const mercedes = new Car('mercedes' , 90)
// bmw.accelrate()
// bmw.accelrate()
// bmw.accelrate()
// bmw.brake()
// bmw.accelrate()
// ``

// ......................................10,10,23,...........................................

// console.log("what is this");
// const head = document.querySelector(".heading");

// head.addEventListener("click", function () {
//   alert("what is this ");
// });

// // const btnn = document.querySelector(".btn");
// // console.log(btnn);

// // btnn.addEventListener("click", function () {
// //   console.log("heloo");
// // });

// const link = document.getElementById("link");
// link.addEventListener("click", function (e) {
//   alert("hello");
//   e.preventDefault();
// });

// const chk = document.querySelector(".check");
// chk.addEventListener("click", function (e) {
//   e.preventDefault();
// });

// ...............................................ROAD MAP  ........................//
//................/////////////////////////////////////
//////////////////////////////////////////////
////////////////////////////////................/////////////////////////////////////
////////////////////////////////................/////////////////////////////////////
////////////////////////////////................////////////////////////////////////
//////////////////////////////////////..................//////
////////////////////////////////////////////////////////...//////
///////////////////////////////////////....................................../////////////.//////////

// variables

// var x = 10;
// var x = 9;
// console.log(x);

// let y = 67;
// y = 76;
// console.log(y);

// const h = 786;
// const c = 9988;

// {
//   let why = 8;
// }
// // why =  yahan nhi access ho ga ye

// const myfunction1 = function () {
//   var haja = 23;
// };
// const myfunction2 = function () {
//   let haja = 23;
// };
// const myfunction3 = function () {
//   const haja = 23;
// };

// let haasd = "where"; // this is the golbel scope

// const myfunction4 = function () {
//   console.log(haasd);
// };
// myfunction4();

// // hosting
// defalt bevior ha variablw is used befour its decalr

// var x = 10;

// v = 20;
// var v;
// console.log(v);

// let z = 20;

// x = "hjkl";
// var x; // follow the hosting

// //  k = "12"
// //  const k  // no follow the hosting

// // data types

// // Numbers:
// let length = 16;
// let weight = 7.5;

// // Strings:
// let color = "Yellow";
// let lastName = "Johnson";

// // Booleans
// let q = true;
// let d = false;

// // Object:
// const person = { firstName: "John", lastName: "Doe" };

// // Array object:
// const cars = ["Saab", "Volvo", "BMW"];

// // Date object:
// const date = new Date("2022-03-25");

// //undefind
// // const uundefind

// //null
// const nul = "";

// // type of

// console.log(typeof 37);
// console.log(typeof "helo");
// console.log(typeof [1, 2, 3, 4]);

// pass by rrafrace pass by value
// this is pass by value it work independant

// const a = 10;
// const b = a + 5;
// console.log(a);
// console.log(b);

// const c = [1, 23, 4];
// const d = c;
// d.push(78);
// console.log(c);
// console.log(d);

// const h = {
//   names: "haseeb",
//   pwd: 123,
// };
// const u = h;
// u.pwd = 890;
// console.log(h);
// console.log(u);
// console.log(u);

// // type coversion

// let str = "123";
// console.log(typeof str);
// let rts = Number(str);
// console.log(typeof rts);

// const num = 456;
// console.log(typeof num);
// const mun = String(num);
// console.log(typeof mun);

// type coversion
// console.log("i am " + 12 + " old");
// console.log(12 + " 12");
// plus opertoter prefer that number converting into stings
// console.log("20" - "10" - 3);
// and the minus operoter perform working for the number

// // bulit in objects in js

// const random = Math.trunc(Math.random() * 20) + 1;
// console.log(random);

// const somenum = 3.9;
// console.log(somenum);
// console.log(Math.floor(somenum));

// const somestr = "haseeb";
// console.log(somestr);
// const otherstr = new String(somestr);
// console.log(otherstr);

// // equality operator

// console.log(12 == "12");
// console.log(12 === "12");
// console.log("hasb" == "has");

// const user1 = "hhh";
// const user2 = "www";

// if (user1 !== user2) {
//   setTimeout(() => {
//     // alert("2000000000000000yes");
//   }, 2000);
// } else {
//   alert("sometgin wrong");
// }

// setInterval(() => {
//   const headings = document.getElementsByTagName("h1");
//   for (let i = 0; i < headings.length; i++) {
//     headings[i].classList.add("colorClass");
//   }
// }, 1500);

// arrow function
// const plus1 = 10;
// const plus2 = 20;
// const myfunction = function () {
//   return plus1 + plus2;
// };
// console.log(myfunction());

// const sum1 = 30;
// const sum2 = 40;
// const myfunction2 = () => sum1 * sum2;
// console.log(myfunction2());

// forEach mathod
// forEach mathod loops over the array

// const movs = [1, 2, 3, 4, 5, 6, 7, 8, 9, -4, -3, -2, -6, -7, -8, -1];

// movs.forEach((m, i, a) => {
//   if (m > 0) {
//     console.log(`depost ${m}`);
//   } else {
//     console.log(`withdraw${m}`);
//   }
// });
// console.log(movs);

// const movs2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, -4, -3, -2, -6, -7, -8, -1];
// movs2.forEach((m) => {
//   const mm = m * 2;
//   console.log(mm);
// });
// console.log(movs2);
// const movs7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, -4, -3, -2, -6, -7, -8, -1];
// const m7 = movs7.forEach((ee) => const h = ee * 2);
// console.log(m7);
// map mathod
// it give a brand new array

// const movs3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, -4, -3, -2, -6, -7, -8, -1];
// const movvee = movs3.map((ele) => ele * 2);
// console.log(movs3);
// console.log(movvee);
// filter mathod
// const movs4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, -4, -3, -2, -6, -7, -8, -1];

// const mooov = movs4.filter(M =>
//   M > 0
// );
// console.log(movs4);
// console.log(mooov);

/////......................................... array mathod in js  ...........................................////
// arry in js

// 1. at()Returns an indexed element of an array
// const somearry = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let c = 718264871254651278549126491728473012749812564781257481548n;
// let b = BigInt(2389748932647862387457382647862738647852385487236846873);
// let d = c + b;
// console.log(d);

// const x = 12;
// // const y = String(x);
// console.log(x);

// const str = "i am " + 23 + " year old";

// console.log(str);

// const num = "23" + "10" + 3;
// console.log(num);

// const some = "23";
// console.log(some);
// const ome = Number(some);
// console.log(ome);

// const helo = {
//   user: "haseeb",
//   pwd: 123,
// };
// console.log(helo);

// const req = fetch("https://restcountries.com/v3.1/name/portugal");
// console.log(req);

// const getCounteryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (resp) {
//     // console.log(resp);
//     return resp.json().then(function (data) {
//       console.log(data);
//       // getCounteryData;
//     });
//   });
// };
// getCounteryData("pakistan");

const otherData = fetch("someData.json").then(function (resp) {
  return resp.json().then(function (data) {
    console.log(data);
  });
});
console.log(otherData);

let x = 10

