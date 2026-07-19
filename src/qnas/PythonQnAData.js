export const pythonQuestionAnswers = [
  {
    id: 1,
    question: "How do you define a variable in Python?",
    answer: "A variable is created by assigning a value using the = operator.",
    difficulty: "easy",
  },
  {
    id: 2,
    question: "What is the difference between a list and a tuple in Python?",
    answer:
      "A list is mutable, meaning its elements can be modified after creation. A tuple is immutable, meaning its elements cannot be changed once created. Lists use square brackets [], while tuples use parentheses ().",
    difficulty: "easy",
  },
  {
    id: 3,
    question: "What is the difference between == and is in Python?",
    answer:
      "The == operator compares whether two objects have the same value, while the is operator checks whether two variables refer to the same object in memory.",
    difficulty: "easy",
  },
  {
    id: 4,
    question: "What is a dictionary in Python?",
    answer:
      "A dictionary is a mutable collection of key-value pairs. Each key must be unique, and values can be accessed efficiently using their corresponding keys.",
    difficulty: "easy",
  },
  {
    id: 5,
    question: "What is a list comprehension in Python?",
    answer:
      "A list comprehension is a concise way to create a new list by combining iteration and optional conditions into a single expression. It is often more readable than using a traditional for loop.",
    difficulty: "moderate",
  },
  {
    id: 6,
    question: "What are *args and **kwargs in Python?",
    answer:
      "*args allows a function to accept any number of positional arguments as a tuple, while **kwargs allows it to accept any number of keyword arguments as a dictionary.",
    difficulty: "moderate",
  },
  {
    id: 7,
    question: "How does exception handling work in Python?",
    answer:
      "Python handles runtime errors using try, except, else, and finally blocks. This allows a program to recover from errors instead of terminating unexpectedly.",
    difficulty: "moderate",
  },
  {
    id: 8,
    question: "What is a decorator in Python?",
    answer:
      "A decorator is a function that extends or modifies the behavior of another function without changing its original source code. Decorators are commonly applied using the @ syntax.",
    difficulty: "tough",
  },
  {
    id: 9,
    question: "What is a generator in Python?",
    answer:
      "A generator is a special type of iterator that produces values one at a time using the yield keyword instead of returning all values at once. This makes generators memory efficient for working with large datasets.",
    difficulty: "tough",
  },
  {
    id: 10,
    question: "What is the Global Interpreter Lock (GIL) in Python?",
    answer:
      "The Global Interpreter Lock (GIL) is a mechanism in CPython that allows only one thread to execute Python bytecode at a time. It simplifies memory management but limits true parallel execution for CPU-bound multithreaded programs.",
    difficulty: "tough",
  },
];
