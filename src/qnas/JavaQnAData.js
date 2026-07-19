export const javaQuestionAnswers = [
  {
    id: 1,
    question: "What is the difference between JDK, JRE, and JVM?",
    answer:
      "JDK (Java Development Kit) provides tools to develop Java applications, including the compiler. JRE (Java Runtime Environment) provides the libraries and JVM required to run Java applications. JVM (Java Virtual Machine) executes Java bytecode and enables platform independence.",
    difficulty: "easy",
  },
  {
    id: 2,
    question:
      "What are the four pillars of Object-Oriented Programming (OOP) in Java?",
    answer:
      "The four pillars of OOP are Encapsulation, Inheritance, Polymorphism, and Abstraction. These concepts help organize code into reusable, maintainable, and modular components.",
    difficulty: "easy",
  },
  {
    id: 3,
    question: "What is the difference between == and .equals() in Java?",
    answer:
      "The == operator compares whether two references point to the same object in memory, while the .equals() method compares the contents or values of objects. For String comparisons, .equals() should generally be used.",
    difficulty: "easy",
  },
  {
    id: 4,
    question: "What is the difference between ArrayList and LinkedList?",
    answer:
      "ArrayList stores elements in a dynamic array, making random access fast but insertions and deletions in the middle slower. LinkedList stores elements as linked nodes, making insertions and deletions efficient but random access slower.",
    difficulty: "easy",
  },
  {
    id: 5,
    question: "What is the difference between HashMap and HashSet?",
    answer:
      "HashMap stores key-value pairs where each key is unique, while HashSet stores only unique values. Internally, HashSet is implemented using a HashMap.",
    difficulty: "moderate",
  },
  {
    id: 6,
    question: "What is exception handling in Java?",
    answer:
      "Exception handling is a mechanism for handling runtime errors without terminating the program. Java uses try, catch, finally, throw, and throws to detect and manage exceptions gracefully.",
    difficulty: "moderate",
  },
  {
    id: 7,
    question:
      "What is the difference between checked and unchecked exceptions?",
    answer:
      "Checked exceptions are verified by the compiler and must be handled or declared using throws. Unchecked exceptions are subclasses of RuntimeException and are not checked at compile time.",
    difficulty: "moderate",
  },
  {
    id: 8,
    question: "What is multithreading in Java?",
    answer:
      "Multithreading allows multiple threads to execute concurrently within a single program. It helps improve responsiveness and makes better use of system resources when tasks can run independently.",
    difficulty: "tough",
  },
  {
    id: 9,
    question: "How does garbage collection work in Java?",
    answer:
      "Garbage collection is the automatic process of identifying and removing objects that are no longer reachable by the program. This helps free memory and reduces the risk of memory leaks without requiring manual deallocation.",
    difficulty: "tough",
  },
  {
    id: 10,
    question: "What is the Java String Pool?",
    answer:
      "The String Pool is a special memory area where Java stores string literals. When identical string literals are created, Java reuses the existing object from the pool instead of creating a new one, improving memory efficiency.",
    difficulty: "tough",
  },
];
