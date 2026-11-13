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

      <section id="banner">
        <Banner />
      </section>

      <section id="try-it">
        <DemoCode />
      </section>

      <section id="when-to-use">
        <WhenToUse />
      </section>

      <section id="python-routes">
        <PythonQnARoutes />
      </section>

      <section id="java-routes">
        <JavaQnARoutes />
      </section>

      <section id="javascript-routes">
        <JavaScriptQnARoutes />
      </section>

      <section id="cpp-routes">
        <CppQnARoutes />
      </section>

      <section id="golang-routes">
        <GolangQnARoutes />
      </section>
      
    </main>
  );
};

export default Page;
