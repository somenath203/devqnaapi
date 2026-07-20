"use client";

import Link from "next/link";
import { useState } from "react";
import { FiCopy, FiCheck, FiExternalLink } from "react-icons/fi";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Container from "./Container";
import Title from "./Title";
import { Button } from "@/components/ui/button";


const methodStyles = {
  GET: "bg-blue-100 text-blue-700 border-blue-200",
  POST: "bg-green-100 text-green-700 border-green-200",
  PUT: "bg-amber-100 text-amber-700 border-amber-200",
  PATCH: "bg-purple-100 text-purple-700 border-purple-200",
  DELETE: "bg-red-100 text-red-700 border-red-200",
};


const CLICKABLE_METHODS = ["GET"];


const RouteRow = ({ route }) => {


  const [copied, setCopied] = useState(false);

  const [exampleCopied, setExampleCopied] = useState(false);

  const isClickable = CLICKABLE_METHODS.includes(route.method);


  const handleCopyRoute = async () => {

    try {

      await navigator.clipboard.writeText(route.href);

      setCopied(true);

      setTimeout(() => setCopied(false), 1500);

    } catch (err) {

      console.error("Failed to copy route", err);

    }

  };


  const handleCopyExample = async () => {

    try {

      await navigator.clipboard.writeText(route.example);

      setExampleCopied(true);

      setTimeout(() => setExampleCopied(false), 1500);

    } catch (err) {

      console.error("Failed to copy example", err);

    }

  };


  return (
    <div className="flex items-center justify-between gap-x-3 px-4 py-3 border-b last:border-b-0 border-amber-100">
      
      <div className="flex items-center gap-x-3 min-w-0">
        
        <Badge
          variant="outline"
          className={`w-16 justify-center font-mono text-xs font-semibold shrink-0 ${methodStyles[route.method]}`}
        >
          {route.method}
        </Badge>

        {isClickable ? ( 
          <Link
            href={route.href}
            className="text-sm font-mono text-gray-700 hover:text-amber-700 hover:underline truncate flex items-center gap-x-1"
          >
            {route.hrefTitle}
            <FiExternalLink className="w-3 h-3 shrink-0" />
          </Link>
        ) : (
          <p className="text-sm font-mono text-gray-500 truncate">
            {route.hrefTitle}
          </p>
        )}
      </div>

      <div className="flex items-center gap-x-3 shrink-0">
        
        <AlertDialog>
          
          <AlertDialogTrigger asChild>
            <Button variant='outline' className="text-xs font-medium bg-transparent text-amber-700 hover:text-amber-800 hover:underline hover:cursor-pointer">
              View Details
            </Button>
          </AlertDialogTrigger>

          <AlertDialogContent className="data-[size=default]:max-w-4xl data-[size=default]:sm:max-w-4xl rounded-xl border-amber-100 p-0 overflow-hidden max-h-[85vh] flex flex-col">
            
            <AlertDialogHeader className="border-b border-amber-100 bg-amber-50 px-8 py-6 shrink-0">
              
              <AlertDialogTitle className="flex items-center gap-x-3">
                
                <Badge
                  variant="outline"
                  className={`w-16 justify-center font-mono text-xs font-semibold ${methodStyles[route.method]}`}
                >
                  {route.method}
                </Badge>

                <span className="font-mono text-base text-gray-700">
                  {route.hrefTitle}
                </span>

              </AlertDialogTitle>

              <AlertDialogDescription className="text-sm text-gray-500 mt-2">
                Use the following example to make a request to this endpoint.
              </AlertDialogDescription>

            </AlertDialogHeader>

            <div className="px-8 overflow-y-auto min-h-0">
              
              <div className="bg-[#263E52] rounded-lg overflow-hidden">
                
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 bg-[#22384B]">
                  
                  <p className="text-xs uppercase tracking-widest text-gray-300 font-semibold">
                    Example Request
                  </p>

                  <button
                    onClick={handleCopyExample}
                    className="text-gray-400 hover:text-amber-300 duration-200 hover:cursor-pointer"
                    aria-label="Copy example code"
                  >
                    {exampleCopied ? (
                      <FiCheck className="w-4 h-4 text-green-400" />
                    ) : (
                      <FiCopy className="w-4 h-4" />
                    )}
                  </button>

                </div>

                <pre className="p-6 overflow-x-auto whitespace-pre-wrap wrap-break-words font-mono text-[15px] leading-8 text-gray-100">
                  {route.example}
                </pre>

              </div>

            </div>

            <AlertDialogFooter className="mx-0 mb-0 border-t border-amber-100 bg-amber-50/50 px-8 py-5 shrink-0">

              <AlertDialogCancel asChild>

                <Button variant="outline" className="px-8 py-5 bg-amber-600 hover:bg-amber-700 text-white hover:text-white duration-200 hover:cursor-pointer">
                  Got It
                </Button>

              </AlertDialogCancel>

          </AlertDialogFooter>

          </AlertDialogContent>

        </AlertDialog>

        <Button
          onClick={handleCopyRoute}
          variant="outline"
          className="text-gray-400 hover:text-amber-600 bg-transparent duration-200 hover:cursor-pointer"
          aria-label="Copy route"
        >
          {copied ? (
            <FiCheck className="w-4 h-4 text-green-600" />
          ) : (
            <FiCopy className="w-4 h-4" />
          )}
        </Button>

      </div>

    </div>
  );
};

const ApiRoutesList = ({ title, routes }) => {
  return (
    <Container>
      
      <Title title={title} />

      <p className="my-5 text-sm text-gray-600">
        All HTTP methods are supported. GET routes are clickable and open
        directly in your browser — POST, PUT, PATCH, and DELETE require a
        request body, so use a tool like Postman, Insomnia, or curl to test
        them.
      </p>

      <Card className="border-amber-100 bg-amber-50/40 p-0 gap-0 overflow-x-auto">
        <div className="min-w-160">
          {routes.map((route, index) => (
            <RouteRow
              key={`${route.method}-${route.href}-${index}`}
              route={route}
            />
          ))}
        </div>
      </Card>

    </Container>
  );
};

export default ApiRoutesList;
