export const cppQuestionAnswers = [
  {
    id: 1,
    question: "What is the difference between C and C++?",
    answer:
      "C is a procedural programming language, while C++ is a multi-paradigm language that supports procedural, object-oriented, and generic programming. C++ introduces features such as classes, inheritance, polymorphism, and templates.",
    difficulty: "easy",
  },
  {
    id: 2,
    question:
      "What is the difference between a pointer and a reference in C++?",
    answer:
      "A pointer stores the memory address of an object and can be null or reassigned. A reference is an alias for an existing object, must be initialized when declared, cannot be null, and cannot be changed to refer to another object.",
    difficulty: "easy",
  },
  {
    id: 3,
    question: "What is a constructor in C++?",
    answer:
      "A constructor is a special member function that is automatically called when an object is created. It is used to initialize the object's data members.",
    difficulty: "easy",
  },
  {
    id: 4,
    question: "What is the difference between stack memory and heap memory?",
    answer:
      "Stack memory is automatically managed by the compiler and stores local variables. Heap memory is dynamically allocated during runtime using new and must be manually released using delete to avoid memory leaks.",
    difficulty: "easy",
  },
  {
    id: 5,
    question: "What is function overloading in C++?",
    answer:
      "Function overloading allows multiple functions to have the same name as long as they have different parameter lists. The compiler determines which function to call based on the arguments passed.",
    difficulty: "moderate",
  },
  {
    id: 6,
    question: "What is the Standard Template Library (STL) in C++?",
    answer:
      "The Standard Template Library (STL) is a collection of reusable template classes and functions that provide commonly used data structures and algorithms, such as vector, map, set, queue, stack, and sort.",
    difficulty: "moderate",
  },
  {
    id: 7,
    question:
      "What is the difference between virtual functions and pure virtual functions?",
    answer:
      "A virtual function provides a default implementation that derived classes may override. A pure virtual function has no implementation and makes the class abstract, requiring derived classes to provide their own implementation.",
    difficulty: "moderate",
  },
  {
    id: 8,
    question: "What is polymorphism in C++?",
    answer:
      "Polymorphism allows the same interface to represent different underlying implementations. C++ supports compile-time polymorphism through function overloading and operator overloading, and runtime polymorphism through virtual functions.",
    difficulty: "tough",
  },
  {
    id: 9,
    question: "What is a virtual destructor, and why is it important?",
    answer:
      "A virtual destructor ensures that when an object is deleted through a base class pointer, both the derived class destructor and the base class destructor are called. This prevents resource leaks and ensures proper cleanup.",
    difficulty: "tough",
  },
  {
    id: 10,
    question: "What are smart pointers in C++?",
    answer:
      "Smart pointers are objects that automatically manage dynamically allocated memory. Common smart pointers include unique_ptr, shared_ptr, and weak_ptr. They help prevent memory leaks and simplify resource management.",
    difficulty: "tough",
  },
];
