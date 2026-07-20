import ApiRoutesList from "./ApiRoutesList";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const javaRoutes = [
  {
    href: `${baseURL}/api/javaqna`,
    hrefTitle: "/api/javaqna",
    method: "GET",
    example: `fetch("${baseURL}/api/javaqna")
  .then((response) => response.json())
  .then((json) => console.log(json));`,
  },

  {
    href: `${baseURL}/api/javaqna/1`,
    hrefTitle: "/api/javaqna/1",
    method: "GET",
    example: `fetch("${baseURL}/api/javaqna/1")
  .then((response) => response.json())
  .then((json) => console.log(json));`,
  },

  {
    href: `${baseURL}/api/javaqna?difficultyLevel=easy`,
    hrefTitle: "/api/javaqna?difficultyLevel=easy",
    method: "GET",
    example: `// Query Parameter:
// difficultyLevel = easy | moderate | tough

fetch("${baseURL}/api/javaqna?difficultyLevel=easy")
  .then((response) => response.json())
  .then((json) => console.log(json));`,
  },

  {
    href: `${baseURL}/api/javaqna`,
    hrefTitle: "/api/javaqna",
    method: "POST",
    example: `fetch("${baseURL}/api/javaqna", {
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
    href: `${baseURL}/api/javaqna/1`,
    hrefTitle: "/api/javaqna/1",
    method: "PUT",
    example: `fetch("${baseURL}/api/javaqna/1", {
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
    href: `${baseURL}/api/javaqna/1`,
    hrefTitle: "/api/javaqna/1",
    method: "PATCH",
    example: `fetch("${baseURL}/api/javaqna/1", {
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
    href: `${baseURL}/api/javaqna/1`,
    hrefTitle: "/api/javaqna/1",
    method: "DELETE",
    example: `fetch("${baseURL}/api/javaqna/1", {
  method: "DELETE",
})
.then((response) => response.json())
.then((json) => console.log(json));`,
  },
];


const JavaQnARoutes = () => {
  return <ApiRoutesList title="JAVA Routes" routes={javaRoutes} />;
};

export default JavaQnARoutes;
