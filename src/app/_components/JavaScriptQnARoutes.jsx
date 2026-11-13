import ApiRoutesList from "./ApiRoutesList";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const javascriptRoutes = [
  {
    href: `${baseURL}/api/javascriptqna`,
    hrefTitle: "/api/javascriptqna",
    method: "GET",
    example: `fetch("${baseURL}/api/javascriptqna")
  .then((response) => response.json())
  .then((json) => console.log(json));`,
  },

  {
    href: `${baseURL}/api/javascriptqna/1`,
    hrefTitle: "/api/javascriptqna/1",
    method: "GET",
    example: `fetch("${baseURL}/api/javascriptqna/1")
  .then((response) => response.json())
  .then((json) => console.log(json));`,
  },

  {
    href: `${baseURL}/api/javascriptqna?difficultyLevel=easy`,
    hrefTitle: "/api/javascriptqna?difficultyLevel=easy",
    method: "GET",
    example: `// Query Parameter:
// difficultyLevel = easy | moderate | tough

fetch("${baseURL}/api/javascriptqna?difficultyLevel=easy")
  .then((response) => response.json())
  .then((json) => console.log(json));`,
  },

  {
    href: `${baseURL}/api/javascriptqna`,
    hrefTitle: "/api/javascriptqna",
    method: "POST",
    example: `fetch("${baseURL}/api/javascriptqna", {
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
    href: `${baseURL}/api/javascriptqna/1`,
    hrefTitle: "/api/javascriptqna/1",
    method: "PUT",
    example: `fetch("${baseURL}/api/javascriptqna/1", {
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
    href: `${baseURL}/api/javascriptqna/1`,
    hrefTitle: "/api/javascriptqna/1",
    method: "PATCH",
    example: `fetch("${baseURL}/api/javascriptqna/1", {
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
    href: `${baseURL}/api/javascriptqna/1`,
    hrefTitle: "/api/javascriptqna/1",
    method: "DELETE",
    example: `fetch("${baseURL}/api/javascriptqna/1", {
  method: "DELETE",
})
.then((response) => response.json())
.then((json) => console.log(json));`,
  },
];


const JavaScriptQnARoutes = () => {
  return <ApiRoutesList title="JavaScript Routes" routes={javascriptRoutes} />;
};

export default JavaScriptQnARoutes;
