import Banner from "./_components/Banner";
import DemoCode from "./_components/DemoCode";
import JavaQnARoutes from "./_components/JavaQnARoutes";
import PythonQnARoutes from "./_components/PythonQnARoutes";
import WhenToUse from "./_components/WhenToUse";

const Page = () => {
  return (
    <main>
      
      <Banner />

      <DemoCode />

      <WhenToUse />

      <PythonQnARoutes />

      <JavaQnARoutes />

    </main>
  )
}

export default Page;
