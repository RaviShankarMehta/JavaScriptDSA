// JavaScript Concepts

// 1. Scope of variables (const, let and var)

// In JavaScript, scope determines where a variable can be accessed. The scope behavior differs for var, let, and const.
// ****************************************************************************************************************
// 1️⃣ var – Function Scope
// Scoped to the function, not the block
// Can be redeclared and reassigned
// Hoisted and initialized as undefined ❌ (can cause bugs)

function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // ✅ 10 (accessible outside the block)
}
testVar();

// ⚠️ Problem:

var a = 5;
var a = 10; // Allowed
console.log(a); // 10

// *************************************************************************************************************
// 2️⃣ let – Block Scope
// Scoped to the block {}
// Can be reassigned
// ❌ Cannot be redeclared in the same scope
// Hoisted but not initialized (Temporal Dead Zone)

function testLet() {
  if (true) {
    let y = 20;
  }
  console.log(y); // ❌ ReferenceError
}
testLet();
let b = 5;
b = 8; // ✅ Allowed
// let b = 10; ❌ Error
// ************************************************************************************************************
// 3️⃣ const – Block Scope (Constant)
// Scoped to the block {}
// ❌ Cannot be reassigned or redeclared
// Must be initialized at declaration
// Hoisted but in Temporal Dead Zone

const c = 100;
// c = 200; ❌ Error
// ✔️ Objects & Arrays can be modified:
const user = { name: "Ravi" };
user.name = "Mehta"; // ✅ Allowed

// ❌ But reassignment is not allowed:
user = {}; // ❌ Error
// **********************************************************************************************************
// 🔍 Scope Comparison Table
// Feature	var	let	const
// Scope	Function	Block	Block
// Redeclare	✅ Yes	❌ No	❌ No
// Reassign	✅ Yes	✅ Yes	❌ No
// Hoisting	Yes (undefined)	Yes (TDZ)	Yes (TDZ)
// Block Safe	❌ No	✅ Yes	✅ Yes

// =============================================================================================================
// 2. Function & Variable hoisting

// 🔼 Hoisting in JavaScript
// Hoisting is JavaScript’s behavior of moving declarations to the top of their scope during the memory creation phase (before code execution).
// ⚠️ Only declarations are hoisted, not initializations.
// 1️⃣ Variable Hoisting
// ✅ var Hoisting
console.log(a);
var a = 10;

// Output: undefined
// Why?
var a; // hoisted
console.log(a);
a = 10;

// ✔️ var is hoisted and initialized with undefined.

// ❌ let & const Hoisting (TDZ)
console.log(b);
let b = 20;
// ❌ Error:
// ReferenceError: Cannot access 'b' before initialization

// 👉 let and const are hoisted but kept in Temporal Dead Zone (TDZ) until initialized.
{
  // TDZ starts
  let x = 5; // TDZ ends
}

// 🧠 Key Rule
// Keyword	Hoisted	Initialized	Accessible before declaration
// var	✅ Yes	undefined	✅ Yes (undefined)
// let	✅ Yes	❌ No	❌ No (TDZ)
// const	✅ Yes	❌ No	❌ No (TDZ)
// **************************************************************************************************************
// 2️⃣ Function Hoisting
// ✅ Function Declaration (Fully Hoisted)
sayHello();

function sayHello() {
  console.log("Hello!");
}
// ✔️ Works perfectly.

// 👉 Function name + body are hoisted.

// ❌ Function Expression (Not Hoisted)
sayHi();
var sayHi = function () {
  console.log("Hi!");
};

// ❌ Error:TypeError: sayHi is not a function
// Why?
var sayHi; // hoisted as undefined
sayHi(); // undefined()

// ❌ Arrow Function Hoisting
greet();

const greet = () => {
  console.log("Hey!");
};
// ❌ Error:ReferenceError: Cannot access 'greet' before initialization
// 👉 Arrow functions follow variable hoisting rules.
// 3️⃣ Tricky Interview Example 🔥
var x = 10;

function test() {
  console.log(x);
  var x = 20;
}
test();
// Output:undefined
// Why?
function test() {
  var x; // hoisted
  console.log(x); // undefined
  x = 20;
}
// 4️⃣ Hoisting with Block Scope
if (true) {
  console.log(a);
  let a = 5;
}
// ❌ ReferenceError (TDZ)
// 5️⃣ Hoisting in React / Modern JS 🧠
// ❌ Bad Practice
handleClick();
const handleClick = () => {
  console.log("Clicked");
};

// ✅ Good Practice
const handleClick = () => {
  console.log("Clicked");
};
handleClick();
// OR
function handleClick() {
  console.log("Clicked");
}
// 6️⃣ Execution Context (Interview Gold ⭐)
// JavaScript runs in two phases:
// 1️⃣ Memory Creation Phase
// Variables → allocated memory
// var → undefined
// let/const → uninitialized (TDZ)
// Functions → stored completely
// 2️⃣ Execution Phase
// Code runs line by line
// Values assigned
// Functions executed
// 7️⃣ One-Line Interview Answers 💡
// var is hoisted and initialized with undefined
// let & const are hoisted but in TDZ
// Function declarations are fully hoisted
// Function expressions & arrow functions are not hoisted
// Hoisting happens during memory creation phase

// 3. Closures

// 4. Callback Hell

// 5. Asynchronous vs Synchronous (How to implement both in JS)

// 6. 'this' variable in Javascript

// 7. Promises

// 8. Function.prototype & Inheritance in JavaScript

// 9. Call, Apply, Bind methods in JavaScript

// 10. Polyfill for bind()

// 11. Currying in JavaScript

// 12. localStorage vs sessionStorage

// 13. CORS

// 14. Event Loop

// 15. ES6 - Arrow function + why do we need them?

// 16. Cookies & how do they work?

// 17. Debouncing in JavaScript

// 18. Throttling in JavaScript

// 19. Debouncing vs Throttling

// 20. ES6 modules

// 21. web workers (& shared workers) and service workers

// 22. Async/Await

// 23. How do you add a poly-fill

// 24. Event bubbling/capturing

// 25. Event Delegation

// 26. functional programming with javascript

// 27. use strict in JavaScript

// 28. object.freeze in JavaScript

// 29. LESS

// 30. SCSS

// 31. SCSS vs SASS

// 32. super keyword in JavaScript

// 33. Lodash library ar

// 34. webpack

// 35. Modern ES6 features (spread operator, destructuring, etc.)

// 36. GraphQL

// 37. Testing in JavaScript with JEST

// 38. different methods of Array object in Javascript

// 39. Redux in React

// 40. Context API in React

// 41. Hooks in React (useState)

// 42. Component Lifecycle Hooks

// 43. Creating object clone in JS (Object.assign

// 44. Shallow copy vs. Deep copy

// 45. JWT

// 46. Reference vs Value in JavaScript

// 47. Async vs Defer
// AR Don Duch Chift and Inchift Array Mathode in lauscarist
// Shallow copy vs. Deep copy

// 48. Pop, Push, Shift and Unshift Array Methods in JavaScript

// 49. String.slice() vs String.substring() vs String.substr()

// 50. Array slice vs splice in JavaScript
