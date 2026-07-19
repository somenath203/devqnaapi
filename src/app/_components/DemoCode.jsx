"use client";

import { useState } from "react";
import { FiPlay, FiCheckCircle } from "react-icons/fi";
import { HiOutlineTerminal } from "react-icons/hi";

import Container from "./Container";
import Title from "./Title";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";


const DemoCode = () => {

  const [shouldShowResultOfTestCode, setShouldShowResultOfTestCode] = useState(false);

  return (
    <Container>

      <Title title="Try it" />

      <p className="text-sm text-gray-600 my-5">
        Run this code in your console or from here directly:
      </p>

      <div className="bg-[#263E52] rounded-lg overflow-hidden shadow-sm">

        <div className="flex items-center gap-x-2 px-4 py-2.5 bg-black/20 border-b border-white/10">

          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/70"></span>
          <span className="ml-2 text-xs text-gray-300 flex items-center gap-x-1.5">
            <HiOutlineTerminal className="w-3.5 h-3.5" />
            request.js
          </span>

        </div>

        <div className="p-10">

          <p className="text-yellow-100 tracking-wider mb-0.5 flex flex-wrap">
            <span className="text-sky-300">fetch</span> &#x27;
            {`(${process.env.NEXT_PUBLIC_BASE_URL}/api/pythonqna/1)`}&#x27;
          </p>

          <p className="text-gray-100 tracking-wider ml-10 mb-0.5">
            <span className="text-sky-300">.then</span>
            {`((response => response.`}
            <span className="text-sky-300">json</span>
            {`()))`}
          </p>

          <p className="text-gray-100 tracking-wider ml-10">
            <span className="text-sky-300">.then</span>
            {`((json => console.`}
            <span className="text-sky-300">log</span>
            {`(json))`}
          </p>

        </div>

      </div>

      <Button
        onClick={() => setShouldShowResultOfTestCode(true)}
        className="my-5 bg-amber-500 text-white font-semibold hover:bg-amber-600  hover:cursor-pointer"
      >

        <FiPlay className="w-4 h-4" />
        Run script

      </Button>

      <div className="bg-[#263E52] rounded-lg overflow-hidden shadow-sm">

        <div className="flex items-center gap-x-2 px-4 py-2.5 bg-black/20 border-b border-white/10">

          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/70"></span>
          <span className="ml-2 text-xs text-gray-300 flex items-center gap-x-1.5">
            <HiOutlineTerminal className="w-3.5 h-3.5" />
            response.json
          </span>

        </div>

        <div className="p-10 overflow-hidden">

          {shouldShowResultOfTestCode ? (
            <pre className="font-mono text-base leading-8 text-gray-200 whitespace-pre-wrap wrap-break-word">
  {`{`}
  {"\n"}{" "} <span className="text-red-400">{'"success"'}</span>:{" "}
  <span className="text-violet-300">true</span>,
  {"\n"}{" "} <span className="text-red-400">{'"message"'}</span>:{" "}
  <span className="text-yellow-200">{'"Connection to Python route successful."'}</span>,
  {"\n"}{" "} <span className="text-red-400">{'"qnadata"'}</span>: {`{`}
  {"\n"}{" "}{" "} <span className="text-red-400">{'"id"'}</span>:{" "}
  <span className="text-green-300">1</span>,
  {"\n"}{" "}{" "} <span className="text-red-400">{'"question"'}</span>:{" "}
  <span className="text-yellow-200">
    {'"How do you define a variable in Python?"'}
  </span>,
  {"\n"}{" "}{" "} <span className="text-red-400">{'"answer"'}</span>:{" "}
  <span className="text-yellow-200">
    {
      '"A variable stores a value that can be used later in the program."'
    }
  </span>,
  {"\n"}{" "}{" "} <span className="text-red-400">{'"difficulty"'}</span>:{" "}
  <span className="text-yellow-200">{'"easy"'}</span>
  {"\n"}
  {`}`}
</pre>
          ) : (
            <pre className="font-mono text-base text-gray-500 whitespace-pre-wrap wrap-break-word">{`{}`}</pre>
          )}
        </div>
      </div>

      {shouldShowResultOfTestCode && (
        <div className="mt-5 flex flex-col gap-y-2">

          <Badge variant="secondary" className="w-fit bg-green-100 text-green-700 hover:bg-green-100 gap-x-1.5 font-mono font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            200 OK
          </Badge>

          <Alert className="border-green-200 bg-green-50 text-green-800">

            <FiCheckCircle className="w-4 h-4 text-green-600" />

            <AlertTitle className="text-green-800">Request successful</AlertTitle>

            <AlertDescription className="text-green-700">
              Congrats! You&apos;ve made your first call to DevQnAAPI 🥳🎉
            </AlertDescription>
            
          </Alert>

        </div>
      )}

    </Container>
  );
};


export default DemoCode;