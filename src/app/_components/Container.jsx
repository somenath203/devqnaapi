import clsx from "clsx";

const Container = ({ children, className }) => {
  return (
    <div className={clsx(`${className} max-w-5xl mx-auto py-10 px-4`)}>
      {children}
    </div>
  );
};

export default Container;
