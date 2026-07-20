import ApiRoutesList from "./ApiRoutesList";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const cppRoutes = [
  {
    href: `${baseURL}/api/cplusplusqna`,
    hrefTitle: "/api/cplusplusqna",
    method: "GET",
    example: `fetch("${baseURL}/api/cplusplusqna")
  .then((response) => response.json())
  .then((json) => console.log(json));`,
  },

  {
    href: `${baseURL}/api/cplusplusqna/1`,
    hrefTitle: "/api/cplusplusqna/1",
    method: "GET",
    example: `fetch("${baseURL}/api/cplusplusqna/1")
  .then((response) => response.json())
  .then((json) => console.log(json));`,
  },

  {
    href: `${baseURL}/api/cplusplusqna?difficultyLevel=easy`,
    hrefTitle: "/api/cplusplusqna?difficultyLevel=easy",
    method: "GET",
    example: `// Query Parameter:
// difficultyLevel = easy | moderate | tough

fetch("${baseURL}/api/cplusplusqna?difficultyLevel=easy")
  .then((response) => response.json())
  .then((json) => console.log(json));`,
  },

  {
    href: `${baseURL}/api/cplusplusqna`,
    hrefTitle: "/api/cplusplusqna",
    method: "POST",
    example: `fetch("${baseURL}/api/cplusplusqna", {
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
    href: `${baseURL}/api/cplusplusqna/1`,
    hrefTitle: "/api/cplusplusqna/1",
    method: "PUT",
    example: `fetch("${baseURL}/api/cplusplusqna/1", {
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
    href: `${baseURL}/api/cplusplusqna/1`,
    hrefTitle: "/api/cplusplusqna/1",
    method: "PATCH",
    example: `fetch("${baseURL}/api/cplusplusqna/1", {
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
    href: `${baseURL}/api/cplusplusqna/1`,
    hrefTitle: "/api/cplusplusqna/1",
    method: "DELETE",
    example: `fetch("${baseURL}/api/cplusplusqna/1", {
  method: "DELETE",
})
.then((response) => response.json())
.then((json) => console.log(json));`,
  },
];


const CppQnARoutes = () => {
  return <ApiRoutesList title="C++ Routes" routes={cppRoutes} />;
};

export default CppQnARoutes;
