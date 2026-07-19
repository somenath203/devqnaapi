import ApiRoutesList from "./ApiRoutesList";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const pythonRoutes = [
  {
    href: `${baseURL}/api/pythonqna`,
    hrefTitle: "/api/pythonqna",
    method: "GET",
    example: `fetch("${baseURL}/api/pythonqna")
  .then((response) => response.json())
  .then((json) => console.log(json));`,
  },

  {
    href: `${baseURL}/api/pythonqna/1`,
    hrefTitle: "/api/pythonqna/1",
    method: "GET",
    example: `fetch("${baseURL}/api/pythonqna/1")
  .then((response) => response.json())
  .then((json) => console.log(json));`,
  },

  {
    href: `${baseURL}/api/pythonqna?difficultyLevel=easy`,
    hrefTitle: "/api/pythonqna?difficultyLevel=easy",
    method: "GET",
    example: `fetch("${baseURL}/api/pythonqna?difficultyLevel=easy")
  .then((response) => response.json())
  .then((json) => console.log(json));`,
  },

  {
    href: `${baseURL}/api/pythonqna`,
    hrefTitle: "/api/pythonqna",
    method: "POST",
    example: `fetch("${baseURL}/api/pythonqna", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    question: "New Question",
    answer: "New Answer",
    difficulty: "easy",
  }),
})
.then((response) => response.json())
.then((json) => console.log(json));`,
  },

  {
    href: `${baseURL}/api/pythonqna/1`,
    hrefTitle: "/api/pythonqna/1",
    method: "PUT",
    example: `fetch("${baseURL}/api/pythonqna/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    question: "Updated Question",
    answer: "Updated Answer",
    difficulty: "moderate",
  }),
})
.then((response) => response.json())
.then((json) => console.log(json));`,
  },

  {
    href: `${baseURL}/api/pythonqna/1`,
    hrefTitle: "/api/pythonqna/1",
    method: "PATCH",
    example: `fetch("${baseURL}/api/pythonqna/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    difficulty: "tough",
  }),
})
.then((response) => response.json())
.then((json) => console.log(json));`,
  },

  {
    href: `${baseURL}/api/pythonqna/1`,
    hrefTitle: "/api/pythonqna/1",
    method: "DELETE",
    example: `fetch("${baseURL}/api/pythonqna/1", {
  method: "DELETE",
})
.then((response) => response.json())
.then((json) => console.log(json));`,
  },
];


const PythonQnARoutes = () => {
  return <ApiRoutesList title="Python Routes" routes={pythonRoutes} />;
};

export default PythonQnARoutes;
