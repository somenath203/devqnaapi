import ApiRoutesList from "./ApiRoutesList";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const golangRoutes = [
  {
    href: `${baseURL}/api/golangqna`,
    hrefTitle: "/api/golangqna",
    method: "GET",
    example: `fetch("${baseURL}/api/golangqna")
  .then((response) => response.json())
  .then((json) => console.log(json));`,
  },

  {
    href: `${baseURL}/api/golangqna/1`,
    hrefTitle: "/api/golangqna/1",
    method: "GET",
    example: `fetch("${baseURL}/api/golangqna/1")
  .then((response) => response.json())
  .then((json) => console.log(json));`,
  },

  {
    href: `${baseURL}/api/golangqna?difficultyLevel=easy`,
    hrefTitle: "/api/golangqna?difficultyLevel=easy",
    method: "GET",
    example: `// Query Parameter:
// difficultyLevel = easy | moderate | tough

fetch("${baseURL}/api/golangqna?difficultyLevel=easy")
  .then((response) => response.json())
  .then((json) => console.log(json));`,
  },

  {
    href: `${baseURL}/api/golangqna`,
    hrefTitle: "/api/golangqna",
    method: "POST",
    example: `fetch("${baseURL}/api/golangqna", {
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
    href: `${baseURL}/api/golangqna/1`,
    hrefTitle: "/api/golangqna/1",
    method: "PUT",
    example: `fetch("${baseURL}/api/golangqna/1", {
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
    href: `${baseURL}/api/golangqna/1`,
    hrefTitle: "/api/golangqna/1",
    method: "PATCH",
    example: `fetch("${baseURL}/api/golangqna/1", {
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
    href: `${baseURL}/api/golangqna/1`,
    hrefTitle: "/api/golangqna/1",
    method: "DELETE",
    example: `fetch("${baseURL}/api/golangqna/1", {
  method: "DELETE",
})
.then((response) => response.json())
.then((json) => console.log(json));`,
  },
];


const GolangQnARoutes = () => {
  return <ApiRoutesList title="Golang Routes" routes={golangRoutes} />;
};

export default GolangQnARoutes;
