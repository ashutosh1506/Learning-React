import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    // console.log("Parent Ctor");

    super(props);
  }
  componentDidMount() {
    // console.log("Parent componentDidMount");
  }
  render() {
    // console.log("Parent render");

    return (
      <div>
        <h1>About</h1>
        <h2>Namaste about us page</h2>

        <UserClass name={"Child1"} location={"Delhi"} />
      </div>
    );
  }
}

export default About;
