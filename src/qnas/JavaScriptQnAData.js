export const javascriptQuestionAnswers = [
  {
    id: 1,
    question:
      "What is the difference between var, let, and const in JavaScript?",
    answer:
      "var is function-scoped and can be redeclared. let is block-scoped and can be reassigned but not redeclared in the same scope. const is block-scoped and cannot be reassigned after initialization.",
    difficulty: "easy",
  },
  {
    id: 2,
    question: "What is the difference between == and === in JavaScript?",
    answer:
      "The == operator compares values after performing type coercion, while the === operator compares both value and type without type conversion. Using === is generally recommended.",
    difficulty: "easy",
  },
  {
    id: 3,
    question: "What are the primitive data types in JavaScript?",
    answer:
      "JavaScript has seven primitive data types: String, Number, Boolean, Undefined, Null, Symbol, and BigInt. Everything else, including arrays and functions, is an object.",
    difficulty: "easy",
  },
  {
    id: 4,
    question: "What is hoisting in JavaScript?",
    answer:
      "Hoisting is JavaScript's behavior of moving declarations to the top of their scope before execution. Function declarations are fully hoisted, while variables declared with var are hoisted but initialized as undefined. let and const are hoisted but remain inaccessible until their declaration due to the Temporal Dead Zone.",
    difficulty: "easy",
  },
  {
    id: 5,
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a function that remembers and can access variables from its outer lexical scope even after the outer function has finished executing.",
    difficulty: "moderate",
  },
  {
    id: 6,
    question: "What is the difference between null and undefined?",
    answer:
      "undefined means a variable has been declared but not assigned a value. null is an intentional assignment that represents the absence of any value.",
    difficulty: "moderate",
  },
  {
    id: 7,
    question:
      "What is the difference between synchronous and asynchronous JavaScript?",
    answer:
      "Synchronous code executes one statement at a time in order. Asynchronous code allows long-running operations, such as API requests or timers, to run without blocking the execution of other code.",
    difficulty: "moderate",
  },
  {
    id: 8,
    question: "What is the Event Loop in JavaScript?",
    answer:
      "The Event Loop is a mechanism that continuously checks the call stack and the callback queue. When the call stack becomes empty, it moves pending callbacks into the stack for execution, enabling asynchronous behavior in JavaScript.",
    difficulty: "tough",
  },
  {
    id: 9,
    question: "What are Promises in JavaScript?",
    answer:
      "A Promise is an object that represents the eventual completion or failure of an asynchronous operation. A Promise can be in one of three states: pending, fulfilled, or rejected.",
    difficulty: "tough",
  },
  {
    id: 10,
    question: "What is the difference between async/await and Promises?",
    answer:
      "async/await is syntax built on top of Promises that allows asynchronous code to be written in a synchronous-looking style. It improves readability while still using Promises under the hood.",
    difficulty: "tough",
  },
];
