import { FiBookOpen, FiCode, FiGithub, FiTerminal } from "react-icons/fi";

import Container from "./Container";
import Title from "./Title";
import { Card, CardContent } from "@/components/ui/card";


const useCases = [
  {
    icon: FiBookOpen,
    title: "Interview prep",
    description: "Practice real coding interview questions and answers, organized by language and difficulty.",
  },
  {
    icon: FiCode,
    title: "Project demos",
    description: "Wire up a working API in your own projects without setting up a database or backend first.",
  },
  {
    icon: FiGithub,
    title: "README examples",
    description: "Drop in a live fetch example in your GitHub README or documentation to show real API usage.",
  },
  {
    icon: FiTerminal,
    title: "Local testing",
    description: "Test CRUD requests and API integrations locally before pointing them at your own backend.",
  },
];


const WhenToUse = () => {
  return (
    <Container>

      <Title title="When to Use" />

      <p className="text-sm mt-5 leading-6 tracking-wide text-gray-700">
        DevQnAAPI is a free REST API built for developers preparing for
        coding interviews — but it&apos; also{" "}
        <span className="font-bold">handy anywhere you need a real, working API</span>{" "}
        to build or test against.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {useCases.map(({ icon: Icon, title, description }) => (
          <Card key={title} className="border-amber-100 bg-amber-50/50">

            <CardContent className="flex items-start gap-x-3">

              <div className="p-2 rounded-md bg-amber-100 text-amber-700 shrink-0">
                <Icon className="w-5 h-5" />
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900">{title}</p>
                <p className="text-sm text-gray-600 mt-1">{description}</p>
              </div>

            </CardContent>

          </Card>
        ))}
      </div>

    </Container>
  );
};

export default WhenToUse;