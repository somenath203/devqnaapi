import Link from "next/link";
import { FiGithub } from "react-icons/fi";

import Container from "./Container";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="border-b border-b-amber-100 sticky top-0 z-50 bg-amber-50/50 backdrop-blur-md">
      
      <Container className='flex flex-col md:flex-row items-start md:items-center justify-between py-3'>

        <Link href='/'>
          <h1 className='text-base font-bold text-gray-900'>
            <span className="text-amber-500">{`{`}</span>
            DevQnA
            <span className="text-amber-500">{`}`}</span>
            <span className="text-amber-600"> API</span>
          </h1>
        </Link>

        <div className="flex items-center gap-x-2 md:gap-x-5">

          <Button
            asChild
            size="sm"
            className="gap-x-1.5 p-3 bg-amber-600 text-white hover:bg-amber-700 duration-200"
          >
            <a href="https://github.com/somenath203" target="_blank" rel="noopener noreferrer">
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