import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="head" tabIndex="1">
    Hello world from JSX
  </h1>
);
const Heading = () => {
  return (
    <div>
      <h1>Namaste React Functional Cmponent</h1>
      <Title />
      <h2>Hello Jiiiiii...</h2>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
