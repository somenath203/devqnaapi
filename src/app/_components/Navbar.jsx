import Link from "next/link";
import { FiGithub, FiList } from "react-icons/fi";

import Container from "./Container";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <div className="border-b border-b-amber-100 sticky top-0 z-50 bg-amber-50/50 backdrop-blur-md">

      <Container className="flex flex-col lg:flex-row items-start lg:items-center justify-between py-3">

        <Link href="/" className="mb-2 lg:mb-0">
          <h1 className="text-base font-bold text-gray-900">
            <span className="text-amber-500">{`{`}</span>
            DevQnA
            <span className="text-amber-500">{`}`}</span>
            <span className="text-amber-600"> API</span>
          </h1>
        </Link>

        <div className="flex items-center gap-x-2 md:gap-x-5">

          <DropdownMenu>

            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="gap-x-2 border-amber-200 hover:bg-amber-100 hover:cursor-pointer"
              >
                <FiList className="w-4 h-4" />
                Sections
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-56">

              <DropdownMenuItem asChild>
                <a href="#banner" className="w-full cursor-pointer">
                  Banner
                </a>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <a href="#try-it" className="w-full cursor-pointer">
                  Try It
                </a>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <a href="#when-to-use" className="w-full cursor-pointer">
                  When to Use
                </a>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <a href="#python-routes" className="w-full cursor-pointer">
                  Python Routes
                </a>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <a href="#java-routes" className="w-full cursor-pointer">
                  Java Routes
                </a>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <a href="#javascript-routes" className="w-full cursor-pointer">
                  JavaScript Routes
                </a>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <a href="#cpp-routes" className="w-full cursor-pointer">
                  C++ Routes
                </a>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <a href="#golang-routes" className="w-full cursor-pointer">
                  Golang Routes
                </a>
              </DropdownMenuItem>

            </DropdownMenuContent>

          </DropdownMenu>

          <Button
            asChild
            size="sm"
            className="gap-x-1.5 p-3 bg-amber-600 text-white hover:bg-amber-700 duration-200"
          >
            <a
              href="https://github.com/somenath203/devqnaapi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub className="w-4 h-4" />
              GitHub Repo
            </a>
          </Button>

        </div>

      </Container>

    </div>
  );
};

export default Navbar;