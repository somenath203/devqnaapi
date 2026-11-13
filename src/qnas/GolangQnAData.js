export const golangQuestionAnswers = [
  {
    id: 1,
    question: "What is Go (Golang), and what are its main features?",
    answer:
      "Go is an open-source programming language developed by Google. It is designed for simplicity, fast compilation, built-in concurrency support, efficient memory management, and high performance.",
    difficulty: "easy",
  },
  {
    id: 2,
    question: "What is the difference between an array and a slice in Go?",
    answer:
      "An array has a fixed size that cannot be changed after declaration. A slice is a dynamic view over an array and can grow or shrink as needed, making it much more commonly used in Go programs.",
    difficulty: "easy",
  },
  {
    id: 3,
    question: "What is a struct in Go?",
    answer:
      "A struct is a user-defined data type that groups related fields together. It is commonly used to represent real-world entities and is Go's primary way of creating custom data types.",
    difficulty: "easy",
  },
  {
    id: 4,
    question: "What is the difference between a pointer and a value in Go?",
    answer:
      "A value stores the actual data, while a pointer stores the memory address of a value. Using pointers allows functions to modify the original data without creating a copy.",
    difficulty: "easy",
  },
  {
    id: 5,
    question: "What is an interface in Go?",
    answer:
      "An interface defines a set of method signatures. Any type that implements those methods automatically satisfies the interface without requiring an explicit declaration.",
    difficulty: "moderate",
  },
  {
    id: 6,
    question: "What is a goroutine?",
    answer:
      "A goroutine is a lightweight thread managed by the Go runtime. Goroutines allow multiple functions to execute concurrently with very little overhead.",
    difficulty: "moderate",
  },
  {
    id: 7,
    question: "What are channels in Go?",
    answer:
      "Channels are communication mechanisms that allow goroutines to safely send and receive data. They help synchronize concurrent operations without requiring explicit locks in many situations.",
    difficulty: "moderate",
  },
  {
    id: 8,
    question:
      "What is the difference between concurrency and parallelism in Go?",
    answer:
      "Concurrency means multiple tasks can make progress independently, while parallelism means multiple tasks execute simultaneously on different CPU cores. Go supports concurrency through goroutines and can achieve parallelism when multiple processor cores are available.",
    difficulty: "tough",
  },
  {
    id: 9,
    question: "What is the purpose of the defer keyword in Go?",
    answer:
      "The defer keyword postpones the execution of a function until the surrounding function returns. It is commonly used to close files, release resources, or unlock mutexes, ensuring cleanup always occurs.",
    difficulty: "tough",
  },
  {
    id: 10,
    question: "How does garbage collection work in Go?",
    answer:
      "Go automatically manages memory using a garbage collector that identifies and frees objects that are no longer reachable by the program. This reduces memory leaks and removes the need for manual memory management.",
    difficulty: "tough",
  },
];
