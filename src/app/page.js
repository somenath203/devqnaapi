import Banner from "./_components/Banner";
import WhenToUse from "./_components/WhenToUse";
import CppQnARoutes from "./_components/CppQnARoutes";
import DemoCode from "./_components/DemoCode";
import JavaQnARoutes from "./_components/JavaQnARoutes";
import JavaScriptQnARoutes from "./_components/JavaScriptQnARoutes";
import PythonQnARoutes from "./_components/PythonQnARoutes";
import GolangQnARoutes from "./_components/GolangQnARoutes";

const Page = () => {
  return (
    <main>
      
      <Banner />

      <DemoCode />

      <WhenToUse />

      <PythonQnARoutes />

      <JavaQnARoutes />

      <JavaScriptQnARoutes />

      <CppQnARoutes />

      <GolangQnARoutes />

    </main>
  )
}

export default Page;
