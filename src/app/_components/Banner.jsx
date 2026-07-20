import { HiOutlineCode } from "react-icons/hi";
import { SiNextdotjs, SiTailwindcss, SiShadcnui } from "react-icons/si";
import { FiCheckCircle } from "react-icons/fi";

import Container from "./Container";
import { Badge } from "@/components/ui/badge";


const Banner = () => {
  return (
    <Container className="py-20 flex flex-col gap-y-5">

      <Badge variant="secondary" className="w-fit bg-amber-100 text-amber-800 hover:bg-amber-100 gap-x-1.5 px-3 py-1 text-sm font-medium">
        
        <HiOutlineCode className="w-4 h-4" />
        Built for developers, by a developer

      </Badge>


      <h1 className="text-6xl mb-6 font-bold text-gray-900">

        <span className="text-amber-500">{`{`}</span>
        DevQnA
        <span className="text-amber-500">{`}`}</span>
        <span className="text-amber-600"> API</span>

      </h1>

      <p className="text-xl text-gray-700">
        A free fake REST API packed with coding interview questions and answers — across Python, JavaScript, Java, and Golang.
      </p>

      <p className="text-xl flex flex-wrap items-center gap-x-2 text-gray-700">

        Powered by
        <Badge variant="outline" className="gap-x-1.5 text-sm font-medium">
          <SiNextdotjs className="w-4 h-4" /> Next.js
        </Badge>
        +
        <Badge variant="outline" className="gap-x-1.5 text-sm font-medium">
          <SiTailwindcss className="w-4 h-4" /> Tailwind CSS
        </Badge>
        +
        <Badge variant="outline" className="gap-x-1.5 text-sm font-medium">
          <SiShadcnui className="w-4 h-4" /> shadcn/ui
        </Badge>

      </p>

      <p className="mt-5 text-base font-bold flex items-center gap-x-2">

        <FiCheckCircle className="w-5 h-5 text-amber-600" />

        A JSONPlaceholder-style API, but for coding interview questions.

      </p>


    </Container>
  );
};

export default Banner;