import { FiHeart, FiExternalLink } from "react-icons/fi";

import Container from "./Container";


const Footer = () => {
  return (
    <div className="border-t border-t-amber-100 bg-amber-50/50 mt-10">

      <Container className="py-8 flex flex-col items-center gap-y-2 text-center">

        <p className="text-sm text-gray-600 flex items-center gap-x-1.5">
          Made with{" "}
          <FiHeart className="w-4 h-4 text-amber-600 fill-amber-600" /> by
          Somenath Choudhury © {new Date().getFullYear()}
        </p>

        <p className="text-xs text-gray-500 flex items-center gap-x-1">
          Design inspired by{" "}
          <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-700 duration-200 inline-flex items-center gap-x-1">
            JSONPlaceholder API
            <FiExternalLink className="w-3 h-3" />
          </a>
        </p>

      </Container>
      
    </div>
  );
};

export default Footer;