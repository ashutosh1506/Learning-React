import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name + " Ctor");
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    // console.log(this.props.name + " componentDidMount");

    const data = await fetch("https://api.github.com/users/ashutosh1506");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    // console.log(this.props.name + " Render");

    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-class">
        <img src={avatar_url} alt="image" />
        <h1>Name: {name}</h1>
        <h1>Location: {location}</h1>
        <h1>Admin: @ashutosh15</h1>
      </div>
    );
  }
}

export default UserClass;
